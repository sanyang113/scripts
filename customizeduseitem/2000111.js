//神聖之火
var skillid = 1301007;
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