//速度激發
var skillid = 4101004;
var skillLevel = 20;

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