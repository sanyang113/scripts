// 東京商店
var status = -1;
var qty = -1;
var sel = -1;
var sele = -1;

var rewards = [
    [4032169, [[4020010, 1], [4032181, 1000]]],
    [4032170, [[4020011, 1], [4032181, 1000]]],
    [4032171, [[4020012, 1], [4032181, 1000]]]
];

var items = [
    [2450409, [[4032181, 200]]],
    [2450410, [[4032181, 200]]],
    [2450411, [[4032181, 200]]],
    [2450412, [[4032181, 200]]],
    [2450413, [[4032181, 200]]],
    [2450414, [[4032181, 200]]],
];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            var msg = "在這裡可以使用過去楓之谷世界的楓幣來兌換各種素材\r\n";
            msg += "可以將部分道具解除封印\r\n";
            msg += "也有販賣稀有的挑戰券碎片\r\n";
            msg += "您想要做什麼呢？\r\n\r\n";
            msg += "#L1#想要解除封印#l\r\n";
            msg += "#L2#想要使用過去楓之谷世界的貨幣來購買素材#l\r\n";
            msg += "#L3#想要購買奧芙赫班遠征挑戰券碎片#l\r\n";
            cm.sendNext(msg);
            break;

        case 1:
            sele = selection;
            if (sele == 1) {
                var msg = "想要解除哪一個道具的封印呢？\r\n\r\n";
                for (var i = 0; i < rewards.length; i++) {
                    var itemId = rewards[i][1];
                    msg += "#L" + i + "# #b#i" + itemId + ":# #t" + itemId + "##k\r\n";
                }
                cm.sendNext(msg);
            } else if (sele == 2) {
                cm.openShop(123);
                cm.dispose();
            } else if (sele == 3) {
                var msg = "想要購買哪一個奧芙赫班遠征挑戰券碎片呢？\r\n\r\n";
                for (var i = 0; i < items.length; i++) {
                    var itemId = items[i][0];
                    msg += "#L" + i + "# #b#i" + itemId + ":# #t" + itemId + "##k\r\n";
                }
                cm.sendNext(msg);
            }
            break;

        case 2:
            if (sele == 1) {
                sel = selection;
                var itemId = rewards[sel][0];
                var useItems = rewards[sel][1];
                var msg = "製作 #b#i" + itemId + ":# #t" + itemId + "##k 需要以下材料：\r\n\r\n";
                for (var i = 0; i < useItems.length; i++) {
                    msg += "#b#i" + useItems[i][0] + ":# #t" + useItems[i][0] + "# #k x ";
                    msg += "#b" + useItems[i][1] + "#k 個 #d#e(背包持有：#c" + useItems[i][0] + "# 個)#k#n\r\n";
                }
                msg += "\r\n請輸入要製作的數量：";
                cm.sendGetNumber(msg, 1, 1, 100);
                break;
            }else if(sele == 3) {
                sel = selection;
                var itemId = items[sel][0];
                var useItems = items[sel][1];
                var msg = "購買 #b#i" + itemId + ":# #t" + itemId + "##k 需要以下材料：\r\n\r\n";
                for (var i = 0; i < useItems.length; i++) {
                    msg += "#b#i" + useItems[i][0] + ":# #t" + useItems[i][0] + "# #k x ";
                    msg += "#b" + useItems[i][1] + "#k 個 #d#e(背包持有：#c" + useItems[i][0] + "# 個)#k#n\r\n";
                }
                msg += "\r\n請輸入要製作的數量：";
                cm.sendGetNumber(msg, 1, 1, 10);
                break;
            }
        case 3:
            if(sele ==1){
                qty = selection;
                var useItems = rewards[sel][1];
                var resultItem = rewards[sel][0];

                for (var i = 0; i < useItems.length; i++) {
                    if (!cm.haveItem(useItems[i][0], useItems[i][1] * qty)) {
                        cm.sendOk("很抱歉，您的材料不足。");
                        cm.dispose();
                        return;
                    }
                }
                if (qty<=0){
                    cm.sendOk("做了什麼。");
                    cm.dispose();
                    return;
                }
                if (!cm.canHold(resultItem, qty)) {
                    cm.sendOk("請確認背包空間是否足夠。");
                    cm.dispose();
                    return;
                }
                for (var i = 0; i < useItems.length; i++) {
                    cm.gainItem(useItems[i][0], -useItems[i][1] * qty);
                }
                cm.gainItem(resultItem, qty, true);
                cm.sendOk("製作完成囉！");
                cm.dispose();
                break;
            }else if(sele ==3){
                qty = selection;
                var useItems = items[sel][1];
                var resultItem = items[sel][0];

                for (var i = 0; i < useItems.length; i++) {
                    if (!cm.haveItem(useItems[i][0], useItems[i][1] * qty)) {
                        cm.sendOk("很抱歉，您的材料不足。");
                        cm.dispose();
                        return;
                    }
                }
                if (qty<=0){
                    cm.sendOk("做了什麼。");
                    cm.dispose();
                    return;
                }
                if (!cm.canHold(resultItem, qty)) {
                    cm.sendOk("請確認背包空間是否足夠。");
                    cm.dispose();
                    return;
                }
                for (var i = 0; i < useItems.length; i++) {
                    cm.gainItem(useItems[i][0], -useItems[i][1] * qty);
                }
                cm.gainItem(resultItem, qty, true);
                cm.sendOk("製作完成囉！");
                cm.dispose();
                break;
            }
        default:
            cm.dispose();
            break;
    }
}
