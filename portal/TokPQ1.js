function enter(pi) {
    var em = pi.getEventManager("CoreBlaze");
    if (!pi.haveMonster(9400288)) {
        pi.warpMap(802000802, 0);
        em.setProperty("state", "1");
    } else {
        pi.playerMessage(5, "請先擊敗皇家護衛");
    }
}