var status = -1;
var sel = -1;
var useItem = 4000019;
var useAmount = 28;
var giveItem = 1142103;

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
            var msg = "您好，冒險者！保護東京是我們玖魂貓一族的使命";
            msg += "\r\n#L1##b#i" + useItem + "##t" + useItem + "##k x " + useAmount + " #n兌換 #b#i" + giveItem + "##t" + giveItem + "##k嗎？";
            cm.sendNext(msg);
            break;
        case 1:
            cm.sendYesNo("您確定要用#b#i" + useItem + "##t" + useItem + "##k x " + useAmount + "個#n兌換#b#i" + giveItem + "##t" + giveItem + "##k嗎？");
            break;
        case 2:
            if(!cm.canHold(giveItem,1)) {
                cm.sendOk("本喵發現您的背包空間不太足夠唷！");
                cm.dispose();
                return;
            }
            if(!cm.haveItem(useItem,useAmount)) {
                cm.sendOk("喵險者，您沒有足夠的#i"+useItem+"##t"+useItem+"# 唷！！");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -useAmount);
            cm.gainItem(giveItem, 1);
            cm.sendOk("#b#i" + giveItem + "##t" + giveItem + "##k請收下吧！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}