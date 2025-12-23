var status = -1;
var useItem = 5530002;
var rewardType = 0;

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
            var msg = "我可以幫你兌換你有的#b#i" + useItem + ":##t" + useItem + "##k喔！\r\n\r\n";
            msg += "\r\n要兌換幾張呢？#b(1張可以換1捐獻積分)";
            cm.sendGetNumber(msg,1, 1, 5000);
            break;
        case 1:
            useAmount = selection;            
            var msg = "#k你確定要用#r" + useAmount + "#k個#i" + useItem + ":##b#t" + useItem + "##k兌換 #r" + useAmount + " #b捐獻積分 #k嗎？\r\n";
            cm.sendYesNo(msg);
            break; 
        case 2:
            if (!cm.haveItem(useItem, useAmount)){
                cm.sendOk("你的#i" + useItem + ":##b#t" + useItem + "##k好像不夠...");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -useAmount);
            cm.gainDonatePoint(useAmount);
            cm.sendOk("這是#b#i" +useItem + ":##r" + useAmount + "#k點，收下吧！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}