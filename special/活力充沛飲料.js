var status = -1;
var useItem = 4032181;
var quantity = 200;
var gainItem = 2022345;

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
            var msg = "使用#b#i" + useItem + ":##t" + useItem + "##k x" + quantity + "可以交換#b#i" + gainItem + ":##t" + gainItem + "#，您要交換幾組呢？";
            cm.sendGetNumber(msg, 1, 1, 100);
            break;
        case 1:
            var qty = selection;
            if(!cm.haveItem(useItem, qty * quantity)) {
                cm.sendOk("很抱歉，您沒有足夠的#b#i" + useItem + ":##t" + useItem + "#");
                cm.dispose();
                return;
            }

            if(!cm.canHold(gainItem, qty)) {
                cm.sendOk("很抱歉，您的背包滿了");
                cm.dispose();
                return;
            }

            cm.gainItem(useItem, - qty * quantity);
            cm.gainItem(gainItem, qty);
            cm.sendOk("幫您兌換好囉！");
            break;
        default:
            cm.dispose();
            return;
    }
}