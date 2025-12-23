var status = -1;
var sel = -1;
var equip = false;
var qty = 1;
var items = [
    [2049104,  1],
    [1022073, 10],
    [4030002, 30],
    [2450116, 150],
]

var useItem = 4030002;

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
            var msg = "請選擇您想兌換的特殊獎勵#d#e（身上持有 #c" + useItem + "# 個#i" + useItem + ":#）#n#k\r\n";
            for(var i = 0; i < items.length; i++) {
                msg += "#L" + i + "##i" + useItem + ":# x #b" + items[i][1] + "#k 兌換 #b#i" + items[i][0] + ":# #t" + items[i][0] + ":#";
                if (items[i][0] == 2049104){msg += " x 3"}
                msg +="#k\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var selItem = items[sel][0];
            cm.sendYesNo("您確定要兌換#b#i" + selItem + ":##t" + selItem + "##k嗎？");
            break;
        case 2:
            if (items[sel][0] == 2049104){qty = 3}
            if(!cm.haveItem(useItem, items[sel][1])) {
                cm.sendOk("很抱歉，您沒有足夠的材料唷！");
                cm.dispose();
                return;
            }

            if(!cm.canHold(items[sel][0], 1)) {
                cm.sendOk("請確認背包空間是否足夠");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -items[sel][1]);
            cm.gainItem(items[sel][0], qty, true);
            cm.sendOk("給了您#i" + items[sel][0] +":##t" +items[sel][0] + ":#");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}