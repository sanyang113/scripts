function init() {
em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    var eim = em.newInstance("FishKing");
    var map = eim.setInstanceMap(230040420);
    map.resetFully();
    em.setProperty("state", "1");
    eim.startEventTimer(20 * 60000);
    var mob1 = em.getMonster(8510000);
    var mob2 = em.getMonster(8520000);
    var map = eim.setInstanceMap(230040420);
    eim.registerMonster(mob1);
    eim.registerMonster(mob2);
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(568, 137));
    map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-459, 137));
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
    if (mapid != 230040420) {
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
    eim.disposeIfPlayerBelow(100, 230040410);
    em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty (eim, player) {
}
function disbandParty (eim) {
}
function playerDead(eim, player) {}
function cancelSchedule() {}

function getSpecialItemDrop() {
    return "2450201, 2450401";
}

function getSpecialItemDropMob() {
    return "8510000,8520000";
}

function getRequireDamage() {
    return 1200000;
}