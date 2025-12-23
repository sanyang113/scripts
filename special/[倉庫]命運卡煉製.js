var status = -1;
var typeSel = -1;
var sel = -1;
var totalCost = -1;
var selNum = -1;
var keepItem = -1;

var useGash = 3;
var useMeso = 400000;

function doAction() {
    var rand = Math.random() * (2 * selNum);
    var roundedRand = Math.round(rand);
    return roundedRand;
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
            var msg = "如果你有命運卡可以來進行煉製，當放入x張命運卡，會隨機獲得0~2x之間的一個數字，每放一張命運卡花費"+useGash+"楓點/"+useGash+"GASH/"+useMeso+"楓幣擇一";
            msg += "\r\n#b#L0#我要使用楓葉點數進行命運卡煉製";
            msg += "\r\n#b#L1#我要使用GASH數進行命運卡煉製";
            msg += "\r\n#b#L2#我要使用楓幣數進行命運卡煉製";
            cm.sendNext(msg);
            break;
        case 1:
            if(selection == -1) {
                cm.dispose();
                return;
            }
            
            typeSel = selection;
            var msg = "請選擇您要煉製的命運卡：";
            var msg2 = "";
            for (var i = 0; i < 100; i++) {
                if (cm.getInventory(4).getItem(i) != null && cm.isDivination(cm.getInventory(4).getItem(i).getItemId())) {
                    msg2 += "\r\n#b#L" + Math.abs(i) + "##t" + cm.getInventory(4).getItem(i).getItemId() + "##l　";
                }
            }
            if(msg2 == "") {
                cm.sendOk("您身上沒有命運卡可以煉製");
                cm.dispose();
                return;
            }
            cm.sendNext(msg + msg2);
            break;
        case 2:
            sel = selection;
            var item = cm.getItem(4, selection);
            if (item == null) {
                cm.sendOk("發生錯誤，請稍後在嘗試。");
                cm.dispose();
                return;
            }
            keepItem = item;
            cm.sendGetNumber("請問您要煉製幾張呢？", 1, 1, item.getQuantity() > 100 ? 100 : item.getQuantity());
            break;
        case 3:
            selNum = selection;
            if(selection > keepItem.getQuantity()) {
                cm.sendOk("選擇的命運卡數量不得超過擁有的數量");
                cm.dispose();
                return;
            }
            if(!cm.haveSpace(4)) {
                cm.sendOk("使用煉製系統請確保身上有至少一格空間");
                cm.dispose();
                return;
            }
            var msg = "煉製#b#i" + keepItem.getItemId() + ":##t" + keepItem.getItemId() + "##k x" + selection + "張\r\n";
            if(typeSel == 0) {
                totalCost = useGash * selection;
                msg += "\r\n需要花費" + totalCost + "楓葉點數";
            } else if(typeSel == 1) {
                totalCost = useGash * selection;
                msg += "\r\n需要花費" + totalCost + "GASH";
            } else {
                totalCost = useMeso * selection;
                msg += "\r\n需要花費" + (totalCost/10000) + "萬楓幣";
            }
            cm.sendYesNo(msg + "\r\n您確定要煉製嗎？");
            break;
        case 4:
            if(typeSel == 0) {
                if(totalCost > cm.getPlayer().getCSPoints(2)) {
                    cm.sendOk("很抱歉，您的楓葉點數不足唷！");
                    cm.dispose();
                    return;
                }
                cm.getPlayer().modifyCSPoints(2, -totalCost, true);
            } else if(typeSel == 1) {
                if(totalCost > cm.getPlayer().getCSPoints(1)) {
                    cm.sendOk("很抱歉，您的GASH不足唷！");
                    cm.dispose();
                    return;
                }
                cm.getPlayer().modifyCSPoints(1, -totalCost, true);
            } else if(typeSel == 2) {
                if(totalCost > cm.getPlayer().getMeso()) {
                    cm.sendOk("很抱歉，您的楓幣不足唷！");
                    cm.dispose();
                    return;
                }
                cm.gainMeso(-totalCost);
            } else {
                cm.sendOk("發生異常錯誤");
                cm.dispose();
                return;
            }
            cm.gainItem(keepItem.getItemId(), -selNum);
            var getNum = doAction();
            cm.gainItem(keepItem.getItemId(), getNum);
            cm.sendOk("您獲得了" + getNum + "張#b#i" + keepItem.getItemId() + ":##t" + keepItem.getItemId() + "##k");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}