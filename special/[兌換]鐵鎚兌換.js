//祝福卷軸兌換
var status = -1;
var sel = -1;
var selItem = -1;
var qty = -1;
var rewards = [
    //消耗道具 取得道具 消耗數量 取得數量 消耗楓幣
    [2049201, 2049202, 1, 1, 2000000],
    [2049202, 2049201, 1, 1, 2000000],
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
			var msg = "您要換什麼呢？\r\n";
            for (var i = 0; i < rewards.length; i++) {
                var currentItem = rewards[i];
                msg += "#L" + i + "#使用#r"; 
                msg += currentItem[2] + "#k個#i" + currentItem[0] + ":#兌換 #b#i" + currentItem[1] + ":##k x #b" + currentItem[3] + "#k (需消耗#r " + currentItem[4]/10000 + " 萬楓幣#k)\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            selItem = rewards[sel][0];
            var msg = "\r\n要兌換幾個#i" + rewards[sel][1] + ":# #b#t" + rewards[sel][1] + ":##k呢？";
            cm.sendGetNumber(msg,1, 1,1000);
            break;
        case 2:
            qty = selection;
            if(qty <=0){
                cm.sendOk("你在做什麼");
            }
            var useAmount = rewards[sel][2]*qty;
            var useItem = rewards[sel][0]
            var gainAmount = rewards[sel][3]*qty;
            var gainItem = rewards[sel][1]
            var useMeso = rewards[sel][4]*qty;
            if (!cm.haveItem(useItem, useAmount)){
                cm.sendOk("你的 #b#i" + useItem + ":##t" + useItem + "# #k好像不太夠！");
                cm.dispose();
                return;
            }
            if (cm.getMeso()<useMeso){
                cm.sendOk("你的楓幣好像不太夠！");
                cm.dispose();
                return;
            }
            if (!cm.canHold(selItem, gainAmount)) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -useAmount);
            cm.gainItem(gainItem, gainAmount, true);
            cm.gainMeso(-useMeso);
            cm.sendOk("給了你 #b" + gainAmount + "#k個 #b#i" + selItem + ":# #t" + selItem  +"##k！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}