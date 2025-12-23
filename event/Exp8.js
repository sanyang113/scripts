var targetMap = 750000007;
var bossId = 9390018;
var bossX = -442;
var bossY = 452;
var event = "Exp8";

function init() {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
    
    function setup(eim, leaderid) {
        em.setProperty("leader", "true");
        var eim = em.newInstance(event);
        var map = eim.setInstanceMap(targetMap);
        map.resetFully();
        var mob = em.getMonster(bossId);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(bossX, bossY));
        em.setProperty("state", "1");
    
        eim.startEventTimer(3600000); // 1 hrs
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
        if (mapid != targetMap) {
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
        eim.disposeIfPlayerBelow(100, 910000000);
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