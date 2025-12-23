// 隨機過度頭盔(四排附魔已汙染)

var status = -1;
var sel = -1;

var items = [1002927, 1002926, 1002357, 1004119];

var useItem = 4039088;
var quantity = 5;
var exchangeMessage = "隨機過度頭盔(四排附魔詞，已汙染)";
var note = "獲得裝備為四排附魔詞、已汙染";

function doAction() {
    var random = Math.floor(Math.random() * items.length);
    var itemid = items[random];

    var equip = cm.generateEquipRandomStats(itemid).setEnchant(4).setPollute();
    cm.buildEquip(equip);
    cm.sendOk("恭喜您獲得#b#i" + items[random] + ":##t" + items[random] + "##k");
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
            msg += "\r\n#r#e※" + note + "#n#k";
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
            if(!cm.haveItem(useItem, 1)) {
                cm.sendOk("很抱歉，您沒有足夠的#b#i" + useItem + ":##t" + useItem + "##k");
                cm.dispose();
                return;
            }
            var check = false;
            for(var i = 0; i < items.length; i++) {
                if(!cm.canHold(items[i], 1)) {
                    check = true;
                }
            }
            if(check) {
                cm.sendOk("很抱歉，您身上有相關專屬道具，無法兌換此命運卡");
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