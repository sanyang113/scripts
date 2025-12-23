//楓葉點數
var status = -1;
var useItem = 5530001;
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
            var msg = "要兌換多少楓葉點數呢？#d#e(背包持有 #c" + useItem + "# 個)";
            cm.sendGetNumber(msg, 1, 1, 10000);
            break;
        case 1:
            if(selection == -1) {
                qty = 1;
            } else {
                qty = selection;
            }
            if (!cm.haveItem(useItem, qty)){
                cm.sendOk("你的 #b#i" + useItem + ":# #t" + useItem + "# #k好像不夠...");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -qty);
            cm.getPlayer().modifyCSPoints(2, qty*10, true);
            cm.sendOk("給你了楓葉點數 #b" + qty*10 + "#k 點#k");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}