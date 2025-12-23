function init() {
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
	em.setProperty("state", "1");
	em.setProperty("leader", "true");
    var eim = em.newInstance("CoreBlaze" + leaderid);

    var map = eim.setInstanceMap(802000803);

    eim.setInstanceMap(802000801).resetFully();   //by chien
    eim.setInstanceMap(802000802).resetFully();   //by chien
    eim.setInstanceMap(802000803).resetFully();   //by chien

    var mob = em.getMonster(9400296);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1490, 331));
    eim.startEventTimer(1200000); // 20m
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(802000801);    //幫忙測試 by chien
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid < 802000801 || mapid > 802000803) {
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
    eim.disposeIfPlayerBelow(100, 802000800);
	em.setProperty("state", "0");
	   em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    eim.getMapInstance(0).spawnNpc(9120026, new java.awt.Point(1490, 331));
}

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}

function getSpecialItemDrop() {
    return "2450214, 2450414";
}

function getSpecialItemDropMob() {
    return "9400296";
}

function getRequireDamage() {
    return 16000000;
}
