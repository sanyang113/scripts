//收藏冊兌換
var status = -1;
var useItem = 2450122;
var gainItem = 4030002;
var select = -1;
var qty = 1;

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
            var msg = "要兌換成#b#i" + gainItem + ":##t" + gainItem + ":##k嗎？#d#e(兌換後不可返回)";
            cm.sendYesNo(msg);
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
            if (!cm.canHold(gainItem, qty)) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -qty);
            cm.gainItem(gainItem, qty);
            cm.sendOk("給你了#b#i" + gainItem + ":##t" + gainItem  +"##r x" + qty + "個#k");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}