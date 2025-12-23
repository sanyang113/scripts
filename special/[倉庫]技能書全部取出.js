var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            cm.sendYesNo("您確定要一鍵領取所有技能書嗎？");
            break;
        case 1:
            var msg = cm.getSkillBookStorage().RemoveAll(cm.getPlayer());
            cm.sendOk(msg);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}