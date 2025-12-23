var status = -1;
var sel = -1;

var useItem1 = 1122116;
var useItem2 = 1122117;
var gainItem = 1122118;

function start() {
    action(1, 0, 0);
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
            var msg = "使用#b#i" + useItem1 + ":# #k與 #b#i" + useItem2 + ":##k 可以合成 #b#i" + gainItem + ":##t" + gainItem + ":##k，請問您要合成嗎？\r\n";
            cm.sendYesNo(msg);
            break;
        case 1:
            if(!cm.haveItem(useItem1, 1) || !cm.haveItem(useItem2, 1)) {
                cm.sendOk("很抱歉，您沒有足夠的材料");
                cm.dispose();
                return;
            }
            if(!cm.canHold(gainItem, 1)) {
                cm.sendOk("請確認背包空間是否足夠");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem1, -1);
            cm.gainItem(useItem2, -1);
            cm.gainItem(gainItem, 1,true);
            cm.sendOk("幫您兌換完成了，請收好！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}