//永恆珠寶覺醒精華製作
var status = -1;
var sel = -1;

var items = [
    [4030002,[[4030002,  3000],[4031627,  3000],[4031628,  3000],[4031630,  3000],[4031631,  3000],]],
    [4030002,[[4030002, 10000],[4031627, 10000],[4031628, 10000],[4031630, 10000],[4031631, 10000],]],
    [4030002,[[4030002, 20000],[4031627, 20000],[4031628, 20000],[4031630, 20000],[4031631, 20000],]],
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
            var msg = "您好，您想要兌換什麼物品呢？\r\n\r\n";
            for(var i = 0; i < items.length; i++) {
                msg += "#L" + i + "#我想要兌換 #b#i" + items[i][0] + ":##t" + items[i][0] + "##k\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var msg = "兌換 #b#i" + items[sel][0] + ":# #t" + items[sel][0] + "##k，需要以下材料：\r\n\r\n";
            var useItems = items[sel][1];
            for(var i = 0; i < useItems.length; i++) {
                msg += "#b#i" + useItems[i][0] + ":# #t" + useItems[i][0] + "# #kx #b" + useItems[i][1] + "#k 個\r\n";
            }
            msg += "您要兌換幾個？";
            cm.sendGetNumber(msg, 1, 1, 1000);
            break;
        case 2:
            var qty = selection;
            var check = true;
            var useItems = items[sel][1];
            for(var i = 0; i < useItems.length; i++) {
                if(!cm.haveItem(useItems[i][0], useItems[i][1] * qty)) {
                    check = false;
                    break;
                }
            }
            if(!check) {
                cm.sendOk("很抱歉，您沒有足夠的材料");
                cm.dispose();
                return;
            }
            if(!cm.canHold(items[sel][0], qty)) {
                cm.sendOk("請確認背包空間是否足夠");
                cm.dispose();
                return;
            }
            for(var i = 0; i < useItems.length; i++) {
                cm.gainItem(useItems[i][0], -useItems[i][1] * qty);
            }
            cm.gainItem(items[sel][0], qty);
            cm.sendOk("兌換完成囉，請收好！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}