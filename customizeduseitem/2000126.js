//幸運術
var skillid = 4111001;
var skillLevel = 20;

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