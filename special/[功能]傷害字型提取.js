var status = -1;
var sel = -1;
function start() {
    action(1,0,0);
}
var chooseItem = -1;
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
            var msg = "以下是您擁有的傷害字型，可以花 100 捐獻積分提取已存入的字型";

            var damageskin = cm.findDamageSkinList().toArray();

            if(damageskin.length == 0) {
                msg += "\r\n\r\n很抱歉，您字型倉庫內尚無存在任何傷害字型唷！";
                cm.sendOk(msg);
                cm.dispose();
                return;
            }

            for(var i = 0; i < damageskin.length; i++) {
                var itemid = (2435000 + damageskin[i]);
                msg += "\r\n#L" + damageskin[i] + "# 傷害字型 #b#i" + itemid + ":##t" + itemid + "##k";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            chooseItem = (2435000 + sel);
            var msg = "您確定要花 #b100#k 捐獻積分將傷害字型 #b#i" + chooseItem + ":##t" + chooseItem + "##k 提出嗎，此操作不可還原!";
            cm.sendYesNo(msg);
            break;
        case 2:
            if(!cm.canHold(chooseItem)) {
                cm.sendOk("請確認消耗欄位是否有足夠空間！");
                cm.dispose();
                return;
            }

            if(cm.getDonatePoint() < 100) {
                cm.sendOk("請確認您的積分點數是否足夠！");
                cm.dispose();
                return;
            }

            var result = cm.removeDamageSkin(sel);
            if(!result) {
                cm.sendOk("發生異常錯誤，請聯繫GM!");
                cm.dispose();
                return;
            }
            cm.gainDonatePoint(-100);
            cm.sendOk("已經將您的傷害字型 #b#i" + chooseItem + ":##t" + chooseItem + "##k 提出了!");
            cm.gainItem(chooseItem,1);
            cm.getPlayer().getStat().recalcLocalStats();
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}