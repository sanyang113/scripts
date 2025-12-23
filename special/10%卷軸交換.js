var status = -1;
var sel = -1;
var bundle = -1;

var items = [
    //第一欄位放消耗的卷軸，第二第三欄位放兌換到的捲軸
    [2043002, 2043004, 2043005],
    [2043102, 2043104, 2043105],
    [2043202, 2043204, 2043205],
    [2043302, 2043304, 2043305],
    [2043702, 2043704, 2043705],
    [2043802, 2043804, 2043805],
    [2044002, 2044004, 2044005],
    [2044102, 2044104, 2044105],
    [2044202, 2044204, 2044205],
    [2044302, 2044304, 2044305],
    [2044402, 2044404, 2044405],
    [2044502, 2044504, 2044505],
    [2044602, 2044604, 2044605],
    [2044702, 2044704, 2044705],
    [2044802, 2044803, 2044804],
    [2044902, 2044903, 2044904],
]

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
            var msg = "以下是可以兌換的捲軸，請您參考：\r\n";
            for(var i = 0; i < items.length; i++) {
                msg += "\r\n#L" + i + "##b#i" + items[i][0] + ":##t" + items[i][0] + "##k";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection >= 0 ? selection : sel;
            var msg = "隨機兌換 #b#i" + items[sel][1] + ":##k或#b#i" + items[sel][2] + ":##k需要 #b#i" + items[sel][0] + ":##k x5，您要兌換幾組呢？";
            cm.sendGetNumber(msg, 1, 1, 100);
            break;
        case 2:
            bundle = selection >= 0 ? selection : sel;
            var msg = "製作 #b#e" + bundle + "#k#n 組，需要 #b#e#i" + items[sel][0] + ":##t" + items[sel][0] + "##k x" + (bundle * 5) + "#n 張，您確定要兌換嗎?";
            cm.sendYesNo(msg);
            break;
        case 3:
            var cost = bundle * 5;
            if(!cm.haveItem(items[sel][0],cost)) {
                cm.sendOk("很抱歉，您的#b#e#i" + items[sel][0] + ":##t" + items[sel][0] + "##k 不足 #r" + cost + "#k#n 張");
                cm.dispose();
                return;
            }
            if(!cm.canHold(items[sel][1],bundle) || !cm.canHold(items[sel][2],bundle)) {
                cm.sendOk("請確認身上空間是否足夠");
                cm.dispose();
                return;
            }
            var random = Math.floor(Math.random() * 100);
            var gainItem = -1;
            if(random < 50) {
                gainItem = items[sel][1];
            } else {
                gainItem = items[sel][2];
            }
            cm.gainItem(items[sel][0],-cost);
            cm.gainItem(gainItem,bundle);

            cm.sendOk("兌換完成了，請您確認！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            break;
    }
}