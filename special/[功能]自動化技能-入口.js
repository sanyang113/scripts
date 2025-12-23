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
            var msg = "歡迎使用自動化施放技能系統，請問您想要做什麼?\r\n\r\n";
            msg += "#L1##b我想要新增自動化技能\r\n";
            msg += "#L2##b我想要移除自動化技能\r\n";
            msg += "#L3##b我想要購買自動化技能\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            if(sel == 1) {
                if(cm.purchaseAutoSkillStatus()) {
                    cm.dispose();
                    cm.openNpc(cm.getNpc(), "[功能]自動化技能-新增");
                    return;
                } else {
                    cm.sendOk("很抱歉，您尚未購買自動化技能");
                    cm.dispose();
                    return;
                }
            } else if(sel == 2) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[功能]自動化技能-移除");
                return;
            } else if(sel == 3) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[功能]自動化技能-購買");
                return;
            }
        default:
            cm.dispose();
            return;
    }
}