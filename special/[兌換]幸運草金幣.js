//幸運草金幣兌換
var status = -1;
var useItem = 4030002;
var sel = -1;
var selItem = -1;
var limit = 1;
var qty = -1;
var log = "幸運草兌換";
var rewards = [
    [4030002,  1, 50],
    [4030002,  1, 80],
    [2435181,  1, 20],
    [2435243,  1, 20],
    [2435451,  1, 20],
    [1902140,  1, 20],
    [3015331,  1, 20],
    [4030127,  2,  1],
    [2000202,  3,  1],
    [2000203,  3,  1],
    [5121014,  3,  1],
    [5530001, 10,  1],
    [5220040,  1,  1],
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
                if(cm.getPlayer().getAccountOnly(log+currentItem[0]) == limit){i=i+1
                    var currentItem = rewards[i];
                }if(cm.getPlayer().getAccountOnly(log+currentItem[0]) == limit){i=i+1
                    var currentItem = rewards[i];
                }
                msg += "#L" + i + "#使用#r"; 
                if (currentItem[2]<=9){msg+=" "}
                msg += currentItem[2] + "#k個#i" + useItem + ":#兌換 #b#i" + currentItem[0] + ":# #t" + currentItem[0]  +":##k x #b" + currentItem[1] + "#k\r\n";
                if (i<=1){msg += "\r\n   帳號限換 #r" + limit + "#k 次，剩餘 #r" + (limit-(cm.getPlayer().getAccountOnly(log+currentItem[0]))) + "#k 次\r\n"}
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            selItem = rewards[sel][0];
            if (sel <=1){
                var msg = "你確定要兌換 #b#i" + rewards[sel][0] + ":# #t" + rewards[sel][0] + ":##k 嗎？";
                cm.sendYesNo(msg);
                break;
            }else {
                var msg = "\r\n要兌換幾組#i" + rewards[sel][0] + ":# #b#t" + rewards[sel][0] + ":##k呢？";
                cm.sendGetNumber(msg,1, 1,1000);
                break;
            }
        case 2:

            if (sel <= 1){
                qty = 1
            }else {
                qty = selection
            }
            var useAmount = rewards[sel][2] * qty;
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
            if (selItem == 4030002||selItem == 4030002){
                if(cm.getPlayer().getAccountOnly(log+selItem) >= limit){
                    cm.sendOk("已經兌換到上限了。");
                    cm.dispose();
                    return;
                }else{
                    cm.getPlayer().setAccountOnly(log+selItem);
                }
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