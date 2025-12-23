var status = -1;
var useType = -1;

var oneMonth = 49;
var permanentDiscount = 200;
var permanent = 249;

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
            if(cm.purchaseAutoSkillStatus() == 2) {
                cm.sendOk("您已經購買了永久自動化技能施放囉！");
                cm.dispose();
                return;
            } else if(cm.purchaseAutoSkillStatus() == 1) {
                useType = 1;
                var expiredDate = cm.getPurchaseAutoSkillDate();
                var msg = "感謝您購買自動化技能施放，到期日為:" + expiredDate + "，若您在到期之前購買永久，可享有額外折扣\r\n\r\n";
                msg += "#L1##b我想花費 #r#e" + oneMonth + "#k#n 積分延長 30天自動化技能施放\r\n";
                msg += "#L2##b我想花費 #r#e" + permanentDiscount + "#k#n 積分購買 永久自動化技能施放\r\n";
                cm.sendYesNo(msg);
            } else if(cm.purchaseAutoSkillStatus() == 0) {
                useType = 2;
                var msg = "請選擇您想要的方案\r\n\r\n";
                msg += "#L1##b我想購買30天自動化技能施放，消耗" + oneMonth + "積分\r\n";
                msg += "#L2##b我想購買永久自動化技能施放，消耗" + permanent + "積分\r\n";
                cm.sendNext(msg);
            }
            break;
        case 1:
            if(useType == 1) {
                var useDonate = permanentDiscount;
                var date = 36500;
                if(selection == 1) {
                    useDonate = oneMonth;
                    date = 30;
                }

                if(cm.getPlayer().getDonate() < useDonate) {
                    cm.sendOk("很抱歉，您的積分不足唷!");
                    cm.dispose();
                    return;
                }
                cm.purchaseAutoSkill(date);
                cm.getPlayer().gainDonate(-useDonate);
                cm.sendOk("您已經開通自動化技能施放囉！");
                cm.dispose();
                return;
            } else if(useType == 2) {
                var useDonate = permanent;
                var date = 36500;
                if(selection == 1) {
                    useDonate = oneMonth;
                    date = 30;
                }
                if(cm.getPlayer().getDonate() < useDonate) {
                    cm.sendOk("很抱歉，您的積分不足唷!");
                    cm.dispose();
                    return;
                }
                cm.purchaseAutoSkill(date);
                cm.getPlayer().gainDonate(-useDonate);
                cm.sendOk("您已經開通自動化技能施放囉！");
                cm.dispose();
            }
        default:
            cm.dispose();
            return;
    }
}