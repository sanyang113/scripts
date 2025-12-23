//製作星之劍 焰之劍
var status = -1;
var sel = -1;

var items = [
    [1372040,[[2450532,  1],[4032171,  3],[4032167,  10],[4032181,  5000]]]
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
            var msg = "製作 #b#i" + items[sel][0] + ":# #t" + items[sel][0] + "##k 需要以下材料：\r\n\r\n\r\n";
            var useItems = items[sel][1];
            for(var i = 0; i < useItems.length; i++) {
                msg += "#b#i" + useItems[i][0] + ":# #t" + useItems[i][0] + "# #kx #b" + useItems[i][1] + "#k 個#d #e(背包持有 #e#c" + useItems[i][0] + "# 個)#n\r\n";
            }
            msg += "您確定要製作嗎？";
            cm.sendYesNo(msg);
            break;
        case 1:
            var check = true;
            var useItems = items[sel][1];
            for(var i = 0; i < useItems.length; i++) {
                if(!cm.haveItem(useItems[i][0], useItems[i][1] * 1)) {
                    check = false;
                    break;
                }
            }
            if(!check) {
                cm.sendOk("很抱歉，您沒有足夠的材料");
                cm.dispose();
                return;
            }
            if(!cm.canHold(items[sel][0], 1)) {
                cm.sendOk("請確認背包空間是否足夠");
                cm.dispose();
                return;
            }
            for(var i = 0; i < useItems.length; i++) {
                cm.gainItem(useItems[i][0], -useItems[i][1] * 1);
            }
            cm.sendOk("製作完成囉");
            var gainItem = cm.gainItem(items[sel][0], 1, true);
            cm.worldMessageYellowItem(gainItem, "武器鍛造","成功被他鍛造出來了，大家恭喜他吧！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}