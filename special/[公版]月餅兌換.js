var status = -1;
var useItem = 4031746;
var rewardType = 0;
var rewards = {
    1: [
        //道具id, 數量, 需要的卯咪象徵數量
        [1122209, 1, 50],
        [4039503, 1, 2],
        [2049200, 1, 5],
        [4039513, 1, 5],
        [2049300, 1, 13],
        [4039514, 1, 30],
        [2049302, 1, 75],
        [4039510, 1, 30],
        [2049206, 1, 75],
        [4039506, 1, 75],
        [2049202, 1, 188],
        [4039516, 1, 100],
        [2049303, 1, 250],
        [3010081, 1, 100],
        [3010082, 1, 100],
        [3010083, 1, 100],
        [3010084, 1, 100],
        [3010597, 1, 100],
        [3010209, 1, 100],
        [3010210, 1, 100],
        [3010600, 1, 100],
        [3010800, 1, 100],
        [3010801, 1, 100],
        [3010802, 1, 100],
        [3010803, 1, 100],
        [3010804, 1, 100],
        [3010704, 1, 300],
        [3015754, 1, 1000],
        [2435036, 1, 1000],
    ],
};

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
            var rewardPackage = rewards[1];
            item = 0;
            var msg = "如果你有#i4031746:##b#t4031746##k，可以和我兌換以下好禮哦！\r\n\r\n";

            for (var i = 0; i < rewardPackage.length; i++) {
                msg += "#L" + i + "#使用#r" + rewardPackage[i][2] + "#k個#i" + useItem + ":##b#t" + useItem + "# #k兌換 #b#i" + rewardPackage[i][0] + ":# #t" + rewardPackage[i][0]  +"##k x" + rewardPackage[i][1] + "個\r\n";
            }

            cm.sendNext(msg);
            break;
        case 1:
            var sel = selection;
            itemSel = sel;
            var msg = "\r\n要兌換幾組呢？";
            cm.sendGetNumber(msg,1, 1, sel == 0 ? 1: 100);
            break;
        case 2:
            var rewardPackage = rewards[1];
            qty = selection;
            useAmount = rewardPackage[itemSel][2]　* qty;
            
            var msg = "#k你確定要用#r" + useAmount + "#k個#i" + useItem + ":##b#t" + useItem + "# #r兌換 #b#i" + rewardPackage[itemSel][0] + ":# #t" + rewardPackage[itemSel][0]  +"##r x" + qty + "#k個嗎？\r\n";
            cm.sendYesNo(msg);
            break;
        case 3:
            var rewardPackage = rewards[1];
            if (!cm.haveItem(useItem, useAmount)){
                cm.sendOk("你的#i" + useItem + ":##t" + useItem + ":#好像不太夠...");
                cm.dispose();
                return;
            }
            if (!cm.canHold(rewardPackage[itemSel][0], qty)) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -useAmount);
            cm.gainItem(rewardPackage[itemSel][0], qty);
            cm.sendOk("#b#i" + rewardPackage[itemSel][0] + ":##t" + rewardPackage[itemSel][0]  +"##r x" + rewardPackage[itemSel][1] + "個，收下吧！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}