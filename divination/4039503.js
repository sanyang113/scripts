// 隨機數量基礎附魔石(1~100)

var status = -1;
var sel = -1;

var items = [2049200];

var useItem = 4039503;
var quantity = 10;
var exchangeMessage = "隨機#b#i2049200:##k (1~10顆)";

var minSize = 1;
var maxSize = 10;

function doAction() {
    var random = Math.floor(Math.random() * items.length);
    var randomNum = minSize + Math.floor(Math.random() * (maxSize - minSize + 1));
    cm.gainItem(items[random], randomNum);
    cm.sendOk("恭喜您獲得#b#i" + items[random] + ":##k x" + randomNum + "顆");
}

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            var msg = "交換" + exchangeMessage + "，\r\n需要材料#b#i" + useItem + ":##t" + useItem + "##k x" + quantity + "張";
            // msg += "\r\n#r#e※" + note + "#n#k";
            msg += "\r\n可兌換物品如下方：\r\n";
            for(var i = 0; i < items.length; i++) {
                msg += "#i" + items[i] + ":#  ";
            }
            msg += "\r\n#e您確定要交換嗎？";
            cm.sendYesNo(msg);
            break;
        case 1:
            if(!cm.canHold()) {
                cm.sendOk("使用命運卡系統請確認各欄位皆有至少一格空間！");
                cm.dispose();
                return;
            }
            if(!cm.haveItem(useItem, quantity)) {
                cm.sendOk("很抱歉，您沒有足夠的#b#i" + useItem + ":##t" + useItem + "##k");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -quantity);
            doAction();
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}