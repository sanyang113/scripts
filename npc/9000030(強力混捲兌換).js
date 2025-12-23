var status = -1;
var sel = -1;
var useItem = 2049300;
var useAmount = 3;
var giveItem = 2049302;
var useMeso = 10000000;

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
            msg += "\r\n#L1##b#i" + useItem + "##t" + useItem + "# x " + useAmount + "個#n 和 #b10,000,000 楓幣#k 兌換 #b#i" + giveItem + "##t" + giveItem + "#";
            cm.sendNext(msg);
            break;
        case 1:
            cm.sendYesNo("您確定要用#b#i" + useItem + "##t" + useItem + "# x " + useAmount + "個#n 和 #b10,000,000 楓幣#k 兌換#b#i" + giveItem + "##t" + giveItem + "# 嗎？");
            break;
        case 2:
            if(!cm.canHold(giveItem,1)) {
                cm.sendOk("本喵發現您的背包空間不太足夠唷！");
                cm.dispose();
                return;
            }
            if(cm.getMeso() < useMeso) {
                cm.sendOk("很抱歉，您的楓幣似乎不太足夠唷！");
                cm.dispose();
                return;
            }
            if(!cm.haveItem(useItem,useAmount)) {
                cm.sendOk("您沒有足夠的#i"+useItem+"##t"+useItem+"# 唷！！");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -useAmount);
            cm.gainMeso(-10000000);
            cm.gainItem(giveItem, 1);
            cm.sendOk("這是給您的 #b#i" + giveItem + "##t" + giveItem + "##k，請收下吧！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}