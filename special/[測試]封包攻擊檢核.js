var status = -1;

var useItem = 4030002;

var gainItem = 4001126;

var quantity = 5000;

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
            var msg = "您要使用#b#i" + useItem + ":##t" + useItem + "##k x " + quantity + " 交換#b#i" + gainItem + ":##t" + gainItem + "##k嗎，要換幾組呢？";
            cm.sendGetNumber(msg, 1, 1, 1000000);
            break;
        case 1:
            var sel = selection;
            // if(sel >= 1000) {
            //     cm.sendOk("你在攻擊阿");
            //     cm.dispose();
            //     return;
            // }
            if(!cm.haveItem(useItem, quantity * sel)) {
                cm.sendOk("很抱歉，您沒有足夠的#b#i" + useItem + ":##t" + useItem + "##k唷！");
                cm.dispose();
                return;
            }
            if(!cm.canHold(gainItem, sel)) {
                cm.sendOk("空間不足");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -quantity * sel);
            cm.gainItem(gainItem, sel);
            cm.sendOk("交易完成");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}