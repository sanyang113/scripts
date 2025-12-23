var status = -1;
var cash = 10;
var mpoint = 10;
var sel1;
var sel2;

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
            var msg = "本喵可以把捐獻積分兌換成遊戲點數：#r(比值1：10)#k#b\r\n\r\n#L1#我想要兌換GASH點數\r\n#r#L2#我想要兌換楓葉點數";
            cm.sendNext(msg);
            break;
        case 1:
            sel1 = selection;
            cm.sendGetNumber(("你想用多少捐獻積分進行兌換呢？" + (sel1 == 1 ? ("#bGASH點數比值為 1 : " + cash) : ("#r楓葉點數比值為 1 : " + mpoint))), 1, 1, 30000);
            break;
        case 2:
            sel2 = selection;
            cm.sendYesNo("你確定要花費#b " + sel2 + " 捐獻積分#k 兌換 " + (sel1 == 1 ? ("#bGASH點數 " + (cash * sel2) + "#k") : ("#r楓葉點數 " + (mpoint * sel2))) + " 點#k 嗎？");
            break;
        case 3:
            var gain = (sel1 == 1 ? (cash * sel2) : (mpoint * sel2));
            var price = sel2;
            if(cm.getPlayer().getDonate() < price) {
                cm.sendOk("呀咧呀咧，人類你的捐獻積分不足 " + price + " 點，所以無法兌換唷！");
                cm.dispose();
                return;
            }
            if(!cm.getPlayer().gainDonate(-price)) {
                cm.sendOk("非常抱歉，系統發生異常，請聯繫GM！");
                return;
            }
            cm.getPlayer().modifyCSPoints(sel1, gain, true);
            cm.setLog("Donate.txt", (cm.getPlayer().getName() + " 用 " + price + " 捐獻積分 兌換了 " + gain + " " + (sel1 == 0 ? "GASH" : "楓葉") + "點數。"));
			cm.sendOk("換好囉！給你 " + (sel1 == 1 ? "#bGASH點數#k" : "#r楓葉點數#k") + " " + gain + " 點囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}