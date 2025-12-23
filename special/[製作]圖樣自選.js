//克雷塞爾遠征兌換
var status = -1;
var useItem = 2450536;
var sel = -1;
var selItem = -1;
var rewards = [
    [2450500, 1, 1],
    [2450501, 1, 1],
    [2450502, 1, 1],
    [2450503, 1, 1],
    [2450504, 1, 1],
    [2450505, 1, 1],
    [2450506, 1, 1],
    [2450507, 1, 1],
    [2450508, 1, 1],
    [2450509, 1, 1],
    [2450510, 1, 1],
    [2450511, 1, 1],
    [2450512, 1, 1],
    [2450513, 1, 1],
    [2450514, 1, 1],
    [2450515, 1, 1],
    [2450516, 1, 1],
    [2450517, 1, 1],
    [2450518, 1, 1],
    [2450519, 1, 1],
    [2450520, 1, 1],
    [2450521, 1, 1],
    [2450522, 1, 1],
    [2450523, 1, 1],
    [2450524, 1, 1],
    [2450525, 1, 1],
    [2450526, 1, 1],
    [2450527, 1, 1],
    [2450528, 1, 1],
    [2450529, 1, 1],
    [2450530, 1, 1],
    [2450531, 1, 1],
    [2450532, 1, 1],
    [2450533, 1, 1],
    [2450534, 1, 1],
    [2450535, 1, 1],
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
			var msg = "您要換哪一個圖樣呢？\r\n";
            for (var i = 0; i < rewards.length; i++) {
                var currentItem = rewards[i];
                msg += "#L" + i + "# #b#i" + currentItem[0] + ":# #t" + currentItem[0]  +":##k\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            selItem = rewards[sel][0];
                var msg = "你確定要兌換 #b#i" + rewards[sel][0] + ":# #t" + rewards[sel][0] + ":##k 嗎？";
                cm.sendYesNo(msg);
                break;
        case 2:
            var useAmount = rewards[sel][2];
            if (!cm.haveItem(useItem, useAmount)){
                cm.sendOk("你的 #b#i" + useItem + ":##t" + useItem + "# #k好像不太夠！");
                cm.dispose();
                return;
            }
            if (!cm.canHold(selItem, 1)) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -useAmount);
            cm.gainItem(selItem, rewards[sel][1],true);
            cm.sendOk("給了你 #b" + rewards[sel][1] + "#k個 #b#i" + selItem + ":# #t" + selItem  +"##k！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}