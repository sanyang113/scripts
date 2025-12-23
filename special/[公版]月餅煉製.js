var status = -1;
var typeSel = -1;
var sel = -1;
var totalCost = -1;
var selNum = -1;
var useItem = 4031746;

var useGash = 3;
var useMeso = 2000;

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
            var msg = "如果你有月餅可以用來煉製，當放入x個月餅，會隨機獲得0~2*x之間的一個數字，每放一塊月餅花費" + useMeso + "楓幣";
            msg += "\r\n#b#L1#我要使用楓幣數進行月餅煉製";
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            cm.sendGetNumber("請問您要放幾塊月餅呢？", 1, 1, 1000);
            break;
        case 2:
            selNum = selection;
            if(!cm.haveItem(useItem, selNum)) {
                cm.sendOk("你沒有這麼多月餅呀");
                cm.dispose();
                return;
            }
            if(!cm.haveSpace(4)) {
                cm.sendOk("使用煉製月餅系統請確保身上有至少一格空間");
                cm.dispose();
                return;
            }
            var msg = "煉製#b#i" + useItem + ":##t" + useItem + "##k x" + selNum + "個\r\n";
 
            totalCost = useMeso * selection;
            msg += "\r\n需要花費" + (totalCost/10000) + "萬楓幣";
            
            cm.sendYesNo(msg + "\r\n您確定要試試運氣嗎？");
            break;
        case 3:
            if(totalCost > cm.getPlayer().getMeso()) {
                cm.sendOk("很抱歉，您的楓幣不足唷！");
                cm.dispose();
                return;
            }
            cm.gainMeso(-totalCost);

            cm.gainItem(useItem, -selNum);
            var getNum = doAction();
            cm.gainItem(useItem, getNum);
            cm.sendOk("您獲得了" + getNum + "塊#b#i" + useItem + ":##t" + useItem + "##k");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}