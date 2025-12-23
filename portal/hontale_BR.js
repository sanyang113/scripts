function enter(pi) {
    var em = pi.getEventManager("HorntailBattle");
    var prop = em.getProperty("preheadCheck");
    if (em != null) {
        var map = pi.getMapId();
		var d1 = pi.getMap(240060000);
		var d2 = pi.getMap(240060100);
        if (map == 240060000) {
            if (d1.getAllMonstersThreadsafe().size() <= 0 && em.getProperty("state") >= 2) {
                if(em.getProperty("state") >= 5) {
                    em.warpAllPlayer(240060000, 240060200);
                } else {
                    em.warpAllPlayer(240060000, 240060100);
                }
            } else if(prop != null && prop.equals("0")){
                em.setProperty("preheadCheck", "1");
            } else {
                pi.playerMessage("這個門還沒開起。");
            }
        } else if (map == 240060100) {
            if (d2.getAllMonstersThreadsafe().size() <= 0 && em.getProperty("state") >= 3) {
                em.warpAllPlayer(240060100, 240060200);
				em.setProperty("preheadCheck", "5");
            } else if(prop != null && prop.equals("2")){
                em.setProperty("preheadCheck", "3");
            } else {
                pi.playerMessage("這個門還沒開起。");
            }
        }
    }
}