//測試

function start() {
    cm.openNpc(9000030, "[GM活動]丟丟樂");
}

function check() {
    if(cm.getPlayer().getLevel() < 10) {
        cm.getPlayer().dropMessage("等級須達到10才可使用技能卡！");
        return false;
    }
    return true;
}

function checkUse() {
    return false;
}