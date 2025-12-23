function enter(pi) {
    var em = pi.getEventManager("Romeo");
    if (em != null && (em.getProperty("stage6_1").equals("0") || em.getProperty("stage6_1_player") == pi.getPlayer().getId())) {
        em.setProperty("stage6_1_player",pi.getPlayer().getId());
	pi.warp(926100302,0);
	em.setProperty("stage6_1", "1");
    } else {
	pi.playerMessage(5, "Someone has already gone in this portal.");
    }
}