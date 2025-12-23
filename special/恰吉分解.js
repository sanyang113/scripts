var status = -1;
var sel = -1;
var gainItem = 4310107;
var selItem = -1;
var useItem = [
    [1012164, 1],
    [1012167, 2],
    [1012168, 3],
    [1012169, 4],
    [1012170, 5],
    [1012171, 10],
    [1012172, 15]
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
            var msg = "我可以將您不要的恰吉面具進行分解唷，請您選擇：\r\n";
            for(var i = 0; i < useItem.length; i++) {
                msg += "\r\n#L" + i + "##b#i" + useItem[i][0] + ":##t" + useItem[i][0] + "#";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var msg = "您選擇了#b#i" + useItem[sel][0] + ":##t" + useItem[sel][0] + "#";
            msg += "\r\n可以分解成#b#i" + gainItem + ":##t" + gainItem + "# x" + useItem[sel][1] + "個";
            var append = cm.selectEquipment(useItem[sel][0]);
            if(append == null) {
                cm.sendOk("很抱歉，您背包中沒有#b#i" + useItem[sel][0] + ":##t" + useItem[sel][0] + "唷！");
                cm.dispose();
            }
            cm.sendNext(msg + "\r\n" + append);
            break;
        case 2:
            selItem = selection;
            var msg = "確定要進行分解嗎？";
            cm.sendYesNo(msg);
            break;
        case 3:
            if(!cm.canHold(gainItem, useItem[sel][1])) {
                cm.sendOk("很抱歉，您的背包空間不足唷！");
                cm.dispose();
                return;
            }
            if(!cm.haveItem(useItem[sel][0], 1)) {
                cm.sendOk("系統發生錯誤，請聯繫GM");
                cm.dispose();
                return;
            }
            cm.removeEquipmentFromSlot(selItem);
            cm.gainItem(gainItem, useItem[sel][1]);
            cm.sendOk("幫您兌換完畢囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}