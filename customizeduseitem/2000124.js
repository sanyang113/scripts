//會心之眼
var skillid = 3121002;
var skillLevel = 30;

function start() {
    cm.useSkillTeam(skillid, skillLevel);
}

function check() {
    if(cm.getPlayer().getLevel() < 10) {
        cm.getPlayer().dropMessage("等級須達到10才可使用技能卡！");
        return false;
    }
    return true;
}