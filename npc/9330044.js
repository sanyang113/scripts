var status = -1;
var questid = 8655;

function start() {
    action(1,0,0);
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
            var quest = cm.getPlayer().getQuestStatus(questid);

            if (quest == null || (quest != 1 && quest != 2)) {
                cm.sendOk("Hi~ 您好唷!");
                cm.dispose();
                return;
            }
            if(quest == 1) {
                cm.forceCompleteQuest(questid);
                cm.sendOk("那接下來就交給你囉！");
                cm.gainExp(1500);
                cm.dispose();
                return;
            }

            quest = cm.getPlayer().getQuestStatus(8662);
            if(quest == null || quest != 2) {
                cm.sendOk("Hi~ 您好唷!");
                cm.dispose();
                return;
            }
            var quest2 = cm.getPlayer().getQuestStatus(8663);
            if(quest == 2 && quest2 != 2) {
                if(!cm.canHold(1112004, 1)) {
                    cm.sendOk("很抱歉，您的背包空間不足唷！");
                    cm.dispose();
                    return;
                }
                cm.forceCompleteQuest(8663);
                cm.gainExp(1500);
                cm.gainItem(1112004, 1);
                cm.sendOk("Good Job!");
                return;
            }
        default:
            cm.dispose();
            return;
    }
}