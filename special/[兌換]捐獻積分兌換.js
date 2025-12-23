//捐獻積分
var status = -1;
var useItem = 2450103;
var select = -1;
var qty = -1;

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
            var msg = "要兌換多少捐獻積分呢？#d#e(背包持有 #c" + useItem + "# 個)";
            cm.sendGetNumber(msg, 1, 1, 10000);
            break;
        case 1:
            if(selection == -1) {
                qty = 1;
            } else {
                qty = selection;
            }
            if (!cm.haveItem(useItem, qty)){
                cm.sendOk("你的#i" + useItem + ":##t" + useItem + "#好像不夠...");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -qty);
            cm.gainDonatePoint(qty);
            cm.sendOk("給你了捐獻積分 #b" + qty + "#k 點#k");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}