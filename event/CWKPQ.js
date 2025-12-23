var mapz = Array(600, 700, 800);
var a = Array("a", "b", "c", "d", "e", "f", "g", "h", "i");
/*
a1,3,6
b1-7
c1,3,6
d1-7
e1-7
f1,3,6
g1-7
h1,3,6
i1-7
*/

var pos_x = Array(944,401,28,-332,-855);
var pos_y = Array(-204,-384,-504,-384,-204);
var pos_y2 = Array(-144, -444, -744, -1044, -1344, -1644);

function init() {
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
	em.setProperty("state", "1");
	em.setProperty("leader", "true");
	em.setProperty("current_instance", "0");
	em.setProperty("glpq6", "0");
    var eim = em.newInstance("CWKPQ" + leaderid);
	for (var i = 0; i < mapz.length; i++) {
		var map = eim.setInstanceMap(610030000 + mapz[i]);
		if (map != null) {
			map.resetFully();
		}
	}
    eim.startEventTimer(14400000);
    return eim;
}

function playerEntry(eim, player) {
    eim.broadcastPlayerMsg(5, "[Expedition] " + player.getName() + " has entered the map.");
    var map = eim.getMapInstance(610030600);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid < 610030600 || mapid > 610030800) {
		playerExit(eim,player);
    }
	if(mapid == 610030800 && em.getProperty("current_instance").equals("0")) {
		eim.restartEventTimer(120000); //1 min
		em.setProperty("current_instance", "1");
	}
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.broadcastPlayerMsg(5, "[Expedition] " + player.getName() + " has left the map.");
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 610030010);
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