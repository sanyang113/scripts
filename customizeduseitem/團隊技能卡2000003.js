var skillid = 3121002;
var skillLevel = 10;

function start() {
    cm.useSkillTeam(skillid, skillLevel);
}

function check() {
    if(cm.getPlayer().getLevel() < 30) {
        cm.getPlayer().dropMessage("等級須達到30才可使用技能卡！");
        return false;
    }
    return true;
}