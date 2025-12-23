function enter(pi) {    
    if(pi.getPlayer().getLevel() < 140) {
        pi.playerMessage(5, "您還太弱小，無法進入此區域!");
    } else {
        pi.warp(610030000, 0);
    }
}
