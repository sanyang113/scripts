var status = -1;
var sel = -1;
var log = "測試中";
var useItem = 4000019;
var gainItem = 4000020;
var maxCount = 100;

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
            var msg = "請輸入兌換次數";
            cm.sendGetNumber(msg, 1, 1, 100);
            break;
        case 1:
            sel = selection;
            if(cm.getPlayer().getAccountRestrict(log) == -1) {
                cm.sendOk("系統出現異常");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getAccountRestrict(log) + selection > maxCount) {
                cm.sendOk("很抱歉，兌換數量超過上限");
                cm.dispose();
                return;
            }
            if(!cm.haveItem(useItem, selection)) {
                cm.sendOk("很抱歉，您沒有足夠的材料");
                cm.dispose();
                return;
            }
            if(!cm.canHold(gainItem, selection)) {
                cm.sendOk("請確認背包空間是否足夠");
                cm.dispose();
                return;
            }
            if(!cm.getPlayer().setAccountRestrict(log, selection)) {
                cm.sendOk("系統出現異常");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -selection);
            cm.gainItem(gainItem, selection);
            cm.sendOk("兌換完成");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}