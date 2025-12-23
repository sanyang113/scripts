//永恆珠寶覺醒精華製作
var status = -1;
var sel = -1;

var items = [
    [4030002,[[2450409,  1],[2450410,  1],[2450411,  1],[2450412,  1],[2450413,  1],[2450414,  1],]]
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
            sel = selection;
            var msg = "\r\n合成 #b#i" + items[sel][0] + ":# #t" + items[sel][0] + "##k，需要以下材料：\r\n\r\n";
            var useItems = items[sel][1];
            for(var i = 0; i < useItems.length; i++) {
                msg += "#b#i" + useItems[i][0] + ":# #t" + useItems[i][0] + "# #kx #b" + useItems[i][1] + "#k 個#d #e(背包持有 #e#c" + useItems[i][0] + "# 個)#n\r\n";
            }
            msg += "\r\n您要合成幾個？";
            cm.sendGetNumber(msg, 1, 1, 1000);
            break;
        case 1:
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
                cm.sendOk("很抱歉，您的材料好像不太夠");
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
            cm.sendOk("合成成功囉！合成出了 #b" + qty + "#k 個#b #i" +items[sel][0] + ":##t" + items[sel][0] + ":#");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}