var status = -1;
var sel = -1;

function start() {
    return action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        cm.dispose();
        return;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            var msg = "您可以移除以下的自動施放技能:\r\n";
            var skills = cm.getAutoSkills();
            if(skills.length == 0) {
                cm.sendOk("您目前沒有設定任何的自動施放技能");
                cm.dispose();
                return;
            }
            for(var i = 0; i < skills.length; i++) {
                msg += "#b#L" + skills[i] + "##s" + skills[i] + "##q" + skills[i] + "##k\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var msg = "您確定要移除#s" + sel + "##q" + sel + "##k嗎？";
            cm.sendYesNo(msg);
            break;
        case 2:
            cm.removeAutoSkill(sel);
            cm.sendOk("幫您移除自動施放技能囉");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}