//技能卡自選

var status = -1;
var useItem = 2450104;
var sel = -1;
var selItem = -1;
var qty = -1;
var rewards = [
    [2000108, 1, 2],
    [2000103, 1, 1],
    [2000109, 1, 1],
    [2000100, 1, 1],
    [2000101, 1, 1],
    [2000102, 1, 1],
    [2000104, 1, 1],
    [2000105, 1, 1],
    [2000106, 1, 1],
    [2000107, 1, 1],
    [2000128, 1, 3],
    [2000123, 1, 2],
    [2000129, 1, 2],
    [2000120, 1, 2],
    [2000121, 1, 2],
    [2000122, 1, 2],
    [2000124, 1, 2],
    [2000125, 1, 2],
    [2000126, 1, 2],
    [2000127, 1, 2],
]

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
			var msg = "您要換什麼呢？#d#e(#i" + useItem + ":#持有 #c" + useItem + "# 個)#n\r\n";
            for (var i = 0; i < rewards.length; i++) {
                var currentItem = rewards[i];
                msg += "#L" + i + "##k使用#r" + currentItem[2] + "#k個#i" + useItem + ":#兌換 #b#i" + currentItem[0] + ":# #t" + currentItem[0]  +":##k x" + currentItem[1] + "個\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            selItem = rewards[sel][0];
            var msg = "\r\n要兌換幾組呢？";
            cm.sendGetNumber(msg,1, 1,1000);
            break;
        case 2:
            qty = selection;
            var useAmount = rewards[sel][2] * qty;
            if (!cm.haveItem(useItem, useAmount)){
                cm.sendOk("你的#i" + useItem + ":##t" + useItem + ":#好像不太夠...");
                cm.dispose();
                return;
            }
            if (!cm.canHold(selItem, qty)) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -useAmount);
            cm.gainItem(selItem, rewards[sel][1] * qty);
            cm.sendOk("#b#i" + selItem + ":##t" + selItem  +"##k x #b" + qty + " #k個，收下吧！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}
