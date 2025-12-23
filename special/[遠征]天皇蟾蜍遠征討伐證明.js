//天皇蟾蜍遠征兌換
var status = -1;
var useItem = 2450406;
var sel = -1;
var selItem = -1;
var log = "天皇蟾蜍兌換藥水";
var rewards = [
    [2000204, 90, 10],
    [2000205, 90, 10],
    [2000200,  1,  1],
    [2000201,  1,  1],
    [2049251,  1,  1],
    [1052071,  1,  5],
    [1052072,  1,  5],
    [1052075,  1,  5],
    [1052076,  1,  5],
    [1052134,  1,  5],
    [1082163,  1,  5],
    [1082164,  1,  5],
    [1082167,  1,  5],
    [1082168,  1,  5],
    [1082216,  1,  5],
    [1382045,  1, 25],
    [1382046,  1, 25],
    [1382047,  1, 25],
    [1382048,  1, 25],
    [3010620,  1, 25],
    [3010621,  1, 25],
    [2450123,  1,150],
    [4030002,  1, 50],
    [2450124,  1,150],
    [4030002,  1, 50],
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
                if(cm.getPlayer().getCharacterOnly(log+currentItem[0]) == 3){i=i+1
                    var currentItem = rewards[i];
                }if(cm.getPlayer().getCharacterOnly(log+currentItem[0]) == 3){i=i+1
                    var currentItem = rewards[i];
                }
                msg += "#L" + i + "#使用#r"; 
                if (currentItem[2]<=99){msg+=" "}
                if (currentItem[2]<=9){msg+=" "}
                msg += currentItem[2] + "#k個#i" + useItem + ":#兌換 #b#i" + currentItem[0] + ":# #t" + currentItem[0]  +":##k x" + currentItem[1] + "個\r\n";
                if (i<=1){msg += "\r\n   剩餘 #r" + (3-(cm.getPlayer().getCharacterOnly(log+currentItem[0]))) + "#k 次\r\n"}
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            selItem = rewards[sel][0];
            //if (sel >=2){
                var msg = "你確定要兌換 #b#i" + rewards[sel][0] + ":# #t" + rewards[sel][0] + ":##k 嗎？";
                cm.sendYesNo(msg);
                break;
            //}else{
            //    var msg = "\r\n要兌換幾組呢？";
            //    cm.sendGetNumber(msg,1, 1,1000);
            //    break;
            //}
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
            if (selItem == 2000204||selItem == 2000205){
                if(cm.getPlayer().getCharacterOnly(log+selItem) >= 3){
                    cm.sendOk("已經兌換到上限了。");
                    cm.dispose();
                    return;
                }else{
                    cm.getPlayer().setCharacterOnly(log+selItem);
                }
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