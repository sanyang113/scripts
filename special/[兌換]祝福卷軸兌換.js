//祝福卷軸兌換
var status = -1;
var useItem = 2340000;
var sel = -1;
var selItem = -1;
var qty = -1;
var rewards = [
    [2340001, 1, 1],
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
			var msg = "您要換什麼呢？#d#e(#i" + useItem + ":#持有 #c" + useItem + "# 個)#k#n\r\n";
            for (var i = 0; i < rewards.length; i++) {
                var currentItem = rewards[i];
                msg += "#L" + i + "#使用#r"; 
                msg += currentItem[2] + "#k個#i" + useItem + ":#兌換 #b#i" + currentItem[0] + ":# #t" + currentItem[0]  +":##k x #b" + currentItem[1] + "#k\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            selItem = rewards[sel][0];
            var msg = "\r\n要兌換幾個#i" + rewards[sel][0] + ":# #b#t" + rewards[sel][0] + ":##k呢？";
            cm.sendGetNumber(msg,1, 1,1000);
            break;
        case 2:
            qty = selection;
            if(qty <=0){
                cm.sendOk("你在做什麼");
            }
            var useAmount = rewards[sel][2]*qty;
            if (!cm.haveItem(useItem, useAmount)){
                cm.sendOk("你的 #b#i" + useItem + ":##t" + useItem + "# #k好像不太夠！");
                cm.dispose();
                return;
            }
            if (!cm.canHold(selItem, qty * rewards[sel][1])) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -useAmount);
            cm.gainItem(selItem, rewards[sel][1] * qty, true);
            cm.sendOk("給了你 #b" + rewards[sel][1] * qty + "#k個 #b#i" + selItem + ":# #t" + selItem  +"##k！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}