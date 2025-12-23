var minPlayers = 3;

var trigger = [800, 1000, 0, 100];
var triggered = true;

function init() {
	em.setProperty("instanceId", "1");
}

function setup(eim, leaderid) {
    var eim = em.newInstance("Rex");
	em.setProperty("instanceId", parseInt(em.getProperty("instanceId")) + 1);
        eim.createInstanceMap(921120005).resetFully();
        eim.createInstanceMap(921120100).resetFully();
        eim.createInstanceMap(921120200).resetFully();
        eim.createInstanceMap(921120300).resetFully();
        eim.createInstanceMap(921120400).resetFully();
        // eim.createInstanceMap(921120500).resetFully();
        // eim.createInstanceMap(921120600).resetFully();
	eim.setProperty("HP", "50000");

    eim.schedule("talkMob", 5000);
    eim.startEventTimer(1800000); //30 mins
    return eim;
}

function talkMob(eim) {
	var map = eim.getMapInstance(0);
	var mob = em.getMonster(9300275);
	eim.registerMonster(mob);
	map.spawnMonsterWithEffectBelow(mob, new java.awt.Point(-451, 154), 12);
} 

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    eim.unregisterPlayer(player);
    eim.disposeIfPlayerBelow(0, 0);
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 921120001);
}

function changedMap(eim, player, mapid) {
    if (mapid < 921120005 || mapid > 921120600) {
        eim.unregisterPlayer(player);

        eim.disposeIfPlayerBelow(0, 0);
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

    eim.disposeIfPlayerBelow(0, 0);
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 921120001);
}

function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 921120001);
}

function allMonstersDead(eim) {
}

function leftParty (eim, player) {
    // If only 2 players are left, uncompletable:
    var party = eim.getPlayers();
    if (party.size() < minPlayers) {
	eim.disposeIfPlayerBelow(100, 921120001);
    }
    else
	playerExit(eim, player);
}
function disbandParty (eim) {
	eim.disposeIfPlayerBelow(100, 921120001);
}
function playerDead(eim, player) {}
function cancelSchedule() {}

function getMove(eim, player) {
    var pos = player.getPosition()
    // player.dropMessage(5,pos.x);
    if(pos.x > trigger[0] && pos.x < trigger[1] && pos.y > trigger[2] && pos.y < trigger[3] && triggered) {
        var map = eim.getMapInstance(0);
        var mob1 = em.getMonster(9300279);
        var mob2 = em.getMonster(9300279);
        var mob3 = em.getMonster(9300279);
        var mob4 = em.getMonster(9300279);
        var mob5 = em.getMonster(9300279);
        var mob6 = em.getMonster(9300279);
        var mob7 = em.getMonster(9300279);
        var mob8 = em.getMonster(9300279);
        var mob9 = em.getMonster(9300279);
        var mob10 = em.getMonster(9300279);
        var mob11 = em.getMonster(9300279);
        var mob12 = em.getMonster(9300279);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(1150, 94));
        map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(1140, 94));
        map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(1130, 94));
        map.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(1120, 94));
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(1110, 94));
        map.spawnMonsterOnGroundBelow(mob6, new java.awt.Point(1100, 94));
        map.spawnMonsterOnGroundBelow(mob7, new java.awt.Point(1090, 94));
        map.spawnMonsterOnGroundBelow(mob8, new java.awt.Point(1080, 94));
        map.spawnMonsterOnGroundBelow(mob9, new java.awt.Point(1070, 94));
        map.spawnMonsterOnGroundBelow(mob10, new java.awt.Point(1060, 94));
        map.spawnMonsterOnGroundBelow(mob11, new java.awt.Point(1050, 94));
        map.spawnMonsterOnGroundBelow(mob12, new java.awt.Point(1040, 94));
        triggered = false;

        dm.schedule(function() { testFunction(player); }, 5000);
    }
}

function testFunction(player) {
    player.dropMessage(5, "delayed!");
}