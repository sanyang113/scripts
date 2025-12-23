

var status = -1;
var useItem = 4000019;
var selItem = -1;

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
            var msg = "使用#b#i" + useItem + ":##t" + useItem + "##k可將點裝設定成可丟棄一次的狀態，請選擇您想套用的點裝\r\n\r\n";
            var msg2 = cm.selectEquipmentCashAll();

            if(msg2 == null) {
                msg2 = "您目前沒有可轉移的點裝唷！";
                cm.sendOk(msg + msg2);
                cm.dispose();
                return;
            }
            cm.sendNext(msg + msg2);
            break;
        case 1:
            selItem = cm.getItem(1, selection);
            cm.sendYesNo("您確定要將#b#i" + selItem.getItemId() + ":##t" + selItem.getItemId() + "##k變更成可丟棄一次的狀態嗎？");
            break;
        case 2:
            if(!cm.haveItem(useItem, 1)) {
                cm.sendOk("很抱歉，您沒有#b#i" + useItem + ":##t" + useItem + "##k唷！");
                cm.dispose();
                return;
            }
            var result = cm.useCashKarma(selItem);
            if(!result) {
                cm.sendOk("此道具以處於可丟棄狀態唷！");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -1);
            cm.sendOk("幫您設定完成囉");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}