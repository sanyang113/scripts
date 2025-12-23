function enter(pi) {
    if (0==0){//pi.getMap().getCharactersSize() == 4 || pi.getMap(926100401).getCharactersSize() > 0) {
        var em = pi.getEventManager("Romeo");
        em.setProperty("bossbattle","1");
	    pi.warpParty(926100401,0);
    } else {
	    pi.playerMessage(5, "Not everyone is here.");
    }
}