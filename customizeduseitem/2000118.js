//楓葉祝福
var skillid = 1121000;
var skillLevel = 30;

function start() {
    cm.useSkillSelf(skillid, skillLevel);
}

function check() {
    if(cm.getPlayer().getLevel() < 10) {
        cm.getPlayer().dropMessage("等級須達到10才可使用技能卡！");
        return false;
    }
    return true;
}