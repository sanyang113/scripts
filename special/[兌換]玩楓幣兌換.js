//玩楓幣兌換
var status = -1;
var useItem = 4030002;
var sel = -1;
var selItem = -1;
var limit = 3;
var qty = -1;
var rewards = [
    [2000204, 20, 1],
    [2000205, 20, 1],
    [5530001, 10, 1],
    [5220040,  1, 1],
    [2340000,  1, 5],
    [2340001,  1, 5],
    [2049200,  1, 2],
    [2049100,  1, 2],
    [2041132,  1, 2],
    [2041136,  1, 2],
    [2041133,  1, 2],
    [2041137,  1, 2],
    [2041134,  1, 2],
    [2041138,  1, 2],
    [2041135,  1, 5],
    [2041139,  1, 5],
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
                if(cm.getPlayer().getCharacterOnly(log()+currentItem[0]) == limit){i=i+1
                    var currentItem = rewards[i];
                }if(cm.getPlayer().getCharacterOnly(log()+currentItem[0]) == limit){i=i+1
                    var currentItem = rewards[i];
                }
                msg += "#L" + i + "#使用#r"; 
                if (currentItem[2] <= 9){msg+=" "}
                msg += currentItem[2] + "#k個#i" + useItem + ":#兌換 #b#i" + currentItem[0] + ":# #t" + currentItem[0]  +":##k x #b" + currentItem[1] + "#k\r\n";
                if (i<=1){msg += "\r\n   每月限換 #r" + limit + "#k 次，剩餘 #r" + (limit-(cm.getPlayer().getCharacterOnly(log()+currentItem[0]))) + "#k 次\r\n"}
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
            if (selItem == 2000204||selItem == 2000205){
                if(cm.getPlayer().getCharacterOnly(log()+selItem) >= limit){
                    cm.sendOk("已經兌換到上限了。");
                    cm.dispose();
                    return;
                }else{
                    cm.getPlayer().setCharacterOnly(log()+selItem);
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

function log() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    return +year+"年"+month+"月,玩楓幣兌換";
}
