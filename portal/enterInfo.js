function enter(pi) {
    if (pi.getQuestStatus(21733) == 1) {
        pi.playPortalSE();
        pi.warp(910400000, 1);
    }else{
        pi.playPortalSE();
        pi.warp(104000004, 1);
    }
}