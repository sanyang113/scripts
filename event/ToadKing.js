function init() {
em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    var eim = em.newInstance("ToadKing");
    var map = eim.setInstanceMap(800040410);
    map.resetFully();
    em.setProperty("state", "1");
    var mob = em.getMonster(9400408);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(396, 142));
    eim.startEventTimer(30 * 60000); // 30M
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
   end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 800040410) {
	    eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 800040401);
    em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}

function getSpecialItemDrop() {
    return "2450206, 2450406";
}

function getSpecialItemDropMob() {
    return "9400409";
}

function getRequireDamage() {
    return 34000000;
}