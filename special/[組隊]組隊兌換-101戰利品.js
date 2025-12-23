var status = -1;
var sel = -1;
var equip = false;
var qty = -1;
var items = [
    [1022073, 20],
    [1022097, 50],
]

var useItem = 4310063;

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
            var msg = "哈囉，您請選擇您想兌換的戰利品，目前擁有 #b#c" + useItem + "##k 個：\r\n";
            for(var i = 0; i < items.length; i++) {
                msg += "#L" + i + "##b我想兌換#b#i" + items[i][0] + ":##t" + items[i][0] + "##k，需求道具#b#i" + useItem + ":# x" + items[i][1] + "個\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var selItem = items[sel][0];
            if(selItem >= 1000000 && selItem < 2000000) {
                equip = true;
                cm.sendYesNo("您確定要兌換#b#i" + selItem + ":##t" + selItem + "##k嗎？");
            } else {
                var msg = "您確定要兌換#b#i" + selItem + ":##t" + selItem + "##k，請輸入兌換數量";
                cm.sendGetNumber(msg, 1, 1, 100);
            }
            break;
        case 2:
            if(equip) {
                qty = 1;
            } else {
                qty = selection;
            }

            if(!cm.haveItem(useItem, items[sel][1] * qty)) {
                cm.sendOk("很抱歉，您沒有足夠的材料唷！");
                cm.dispose();
                return;
            }

            if(!cm.canHold(items[sel][0], qty)) {
                cm.sendOk("請確認背包空間是否足夠");
                cm.dispose();
                return;
            }

            cm.gainItem(useItem, -items[sel][1] * qty);
            cm.gainItem(items[sel][0], qty);
            cm.sendOk("幫您兌換完成囉，請收好！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}