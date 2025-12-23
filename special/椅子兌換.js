// 椅子交換券兌換
var status = -1;
var items1 = [
    [3015015, 5],
    [3015016, 5],
    [3015017, 5],
    [3015018, 5],
    [3015019, 5],
    [3015020, 5],
    [3015021, 5],
    [3015022, 5],
    [3015023, 5],
    [3015024, 5],
    [3015025, 5],
    [3015026, 5],
]

var items2 = [
    3018015,3018336,3018428,3018540,3018506,3018474,3018703,3018704,3018697,3018505,3018056
]

var sel = -1;
var chooseItem = -1;
var useItem = 5530265;

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
            var msg = "您想要兌換什麼呢？\r\n";
            msg += "\r\n#b#L1#我想要兌換限定椅子";
            msg += "\r\n#b#L2#我想要兌換稀有椅子";
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            if(selection == 1) {
                var msg = "目前剩餘可兌換的限定椅子商品如下：\r\n";
                for(var i = 0; i < items1.length; i++) {
                    var rest = items1[i][1] - cm.getGlobalLimitedItem(items1[i][0]);
                    msg += "\r\n#L" + i + "##b#i" + items1[i][0] + ":##t" + items1[i][0] + "##k，剩餘數量:" + (rest < 0 ? 0 : rest) + "個";
                }
                cm.sendNext(msg);
            } else if(selection == 2) {
                var msg = "目前可兌換稀有椅子商品如下：\r\n";
                for(var i = 0; i < items2.length; i++) {
                    msg += "\r\n#L" + i + "##b#i" + items2[i] + ":##t" + items2[i] + "##k";
                }
                cm.sendNext(msg);
            } else {
                cm.dispose();
                return;
            }
            break;
        case 2:
            chooseItem = selection;
            if(sel == 1) {
                cm.sendYesNo("您確定要兌換#b#i" + items1[chooseItem][0] + ":##t" + items1[chooseItem][0] + "##k嗎？");
            } else if(sel == 2) {
                cm.sendYesNo("您確定要兌換#b#i" + items2[chooseItem] + ":##t" + items2[chooseItem] + "##k嗎？");
            }
            break;
        case 3:
            if(!cm.haveItem(useItem, 1)) {
                cm.sendOk("很抱歉，您沒有#b#i" + useItem + ":##t" + useItem + "##k");
                cm.dispose();
                return;
            }
            if(sel == 1) {
                if(!cm.canHold(items1[chooseItem][0], 1)) {
                    cm.sendOk("很抱歉，您的背包空間不足");
                    cm.dispose();
                    return;
                }
                var rest = items1[chooseItem][1] - cm.getGlobalLimitedItem(items1[chooseItem][0]);
                if(rest <= 0) {
                    cm.sendOk("很抱歉，此張椅子已經被兌換光了！");
                    cm.dispose();
                    return;
                }
                var result = cm.insertGlobalLimitedItem(items1[chooseItem][0]);
                if(!result) {
                    cm.sendOk("發生異常，請聯繫GM!");
                    cm.dispose();
                    return;
                }
                cm.gainItem(useItem, -1);
                cm.gainItem(items1[chooseItem][0], 1);
                cm.sendOk("幫您兌換完成囉，請收好！");
            } else {
                if(!cm.canHold(items2[chooseItem], 1)) {
                    cm.sendOk("很抱歉，您的背包空間不足");
                    cm.dispose();
                    return;
                }
                cm.gainItem(useItem, -1);
                cm.gainItem(items2[chooseItem], 1);
                cm.sendOk("幫您兌換完成囉，請收好！");
            }
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}