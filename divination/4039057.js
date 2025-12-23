// 隨機海盜佩沙里裝備(四排附魔少捲次)

var status = -1;
var sel = -1;

var items = [1004233, 1072971, 1082612, 1102722, 1052803];

var useItem = 4039057;
var quantity = 5;
var exchangeMessage = "隨機海盜佩沙里裝備(0~3捲次、四排附魔詞)";
var note = "獲得裝備為四排附魔詞、無汙染，但裝備僅有0~3捲次";

function doAction() {
    var random = Math.floor(Math.random() * items.length);
    var itemid = items[random];

    var scroll = Math.floor(Math.random() * 4);
    var equip = cm.generateEquipRandomStats(itemid).setUpgradeSlotsNew(scroll).setEnchant(4);
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