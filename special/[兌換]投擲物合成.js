//投擲物合成
var status = -1;
var sel = -1;
var items = [
    [2070023,[[2070018, 1600]],[[2070018, 1],[2070018, 1],],[[2070018, 2],]],
    [2070026,[[2070023, 2000]],[[2070023, 1],[2070023, 1],],[[2070023, 2],]],

    [2330008,[[2330007, 8000]],[[2330007, 1],[2330007, 1],],[[2330007, 2],]],
    [2330009,[[2330008,10000]],[[2330008, 1],[2330008, 1],],[[2330008, 2],]],
    
    [2450301,[[2450300, 5]],[[2450300, 5]],[[2450300, 5]]],
    [2450302,[[2450301, 5]],[[2450301, 5]],[[2450301, 5]]],
    
    [2450306,[[2450305, 5]],[[2450305, 5]],[[2450305, 5]]],
    [2450307,[[2450306, 5]],[[2450306, 5]],[[2450306, 5]]],
]

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            var msg = "您想要升級什麼道具？\r\n\r\n";
            for(var i = 0; i < items.length; i++) {
                msg += "#L" + i + "##b我想升級#i" + items[i][1] + ":##t" + items[i][1] + ":##k\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var msg = "要升級成#b#i" + items[sel][0] + ":##t" + items[sel][0] + ":##k需求材料如下：\r\n\r\n";
            var requireItems = items[sel][3];
            for(var i = 0; i < requireItems.length; i++) {
                msg += "#b#i" + requireItems[i][0] + ":##t" + requireItems[i][0] + ":##k x" + requireItems[i][1] + "個\r\n";
            }
            msg += "\r\n確定要合成嗎？";
            cm.sendYesNo(msg);
            break;
        case 2:
            var qty = selection;
            var check = true;
            var requireItems = items[sel][1];
            for(var i = 0; i < requireItems.length; i++) {
                if(!cm.haveItem(requireItems[i][0], requireItems[i][1])) {
                    check = false;
                    break;
                }
            }
            if(!check) {
                cm.sendOk("很抱歉，您沒有足夠的材料，或請先將子彈/飛鏢補滿");
                cm.dispose();
                return;
            }
            if(!cm.canHold(items[sel][0], 1)) {
                cm.sendOk("請確認背包空間是否足夠");
                cm.dispose();
                return;
            }
            var useItems = items[sel][2];
            for(var i = 0; i < useItems.length; i++) {
                cm.gainItem(useItems[i][0], -useItems[i][1]);
            }
            cm.gainItem(items[sel][0], 1);
            cm.sendOk("幫您兌換完成囉，請收好！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}