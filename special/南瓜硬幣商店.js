var status = -1;
var sel = -1;
var useItem = 4030002;
var qty = -1;
var gainItem = [
    [4310107, 1, 1],
    [4030038, 1, 10],
    [4001337, 1, 5],
    [1032259, 5, 1],
    [1012554, 5, 1],
    [1122330, 5, 1],
    [1113218, 10, 1],
    [1142542, 2000, 1]
]

function start() {
    return action(1,0,0);
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
            var msg = "如果你有#b#i" + useItem + ":##t" + useItem + "##k，可以交換一些物品：\r\n";
            for(var i = 0; i < gainItem.length; i++) {
                msg += "\r\n#L" + i + "##b兌換#i" + gainItem[i][0] + ":##t" + gainItem[i][0] + "##k x" + gainItem[i][2] + "個" + (gainItem[i][1] > 1 ? "，需消耗#i" + useItem + ":# x" + gainItem[i][1] + "個":"");
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var msg = "您選擇兌換#b#i" + gainItem[sel][0] + ":#，想要兌換幾組呢？\r\n";
            var only = Math.floor(gainItem[sel][0] / 1000000) == 1;
            if(only) {
                cm.sendYesNo("確定要兌換#b#i" + gainItem[sel][0] + ":##t" + gainItem[sel][0] + "##k嗎？");
            }
            cm.sendGetNumber(msg, 1, 1, 100);
            break;
        case 2:
            if(selection == -1) {
                qty = 1;
            } else {
                qty = selection;
            }
            if(!cm.haveItem(useItem, gainItem[sel][1] * qty)) {
                cm.sendOk("很抱歉，您沒有足夠的#b#i" + useItem + ":##t" + useItem + "##k唷！");
                cm.dispose();
                return;
            }
            if(!cm.canHold(gainItem[sel][0], gainItem[sel][2] * qty)) {
                cm.sendOk("請確認背包空間是否足夠！");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -gainItem[sel][1] * qty);
            cm.gainItem(gainItem[sel][0], gainItem[sel][2] * qty);
            cm.sendOk("幫您兌換完畢囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}