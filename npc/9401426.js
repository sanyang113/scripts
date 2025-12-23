var status = -1;
var useItemForLimit = 4032879;
var useItemForNormal = 4032880;
var rewardType = 0;
var itemSel = 0;
var useItem;

var topPrizeReward = [];

var rewards = {
    1: [
        //道具id, 數量, 需要的數量
        [1143199, 1, 3000],
        [1142362, 1, 3000],
        [1143344, 1, 3000],
        [1143310, 1, 3000],
        [1143064, 1, 3000],
        [1142787, 1, 3000],
        [1112972, 1, 1500],
        [1112973, 1, 1500],
        [1112974, 1, 1500],
        [1112975, 1, 1500],
        [2049201, 1, 250],
        [2049209, 1, 250],
        [2340000, 1, 250],
        [2049304, 1, 250],
        [4032878, 1, 20],
        [2049302, 1, 30],
        [2049202, 1, 30],
        [2049203, 1, 100],
        [2049204, 1, 100],
        [2049205, 1, 100],
        [2049303, 1, 100],
        [2450007, 1, 30],
        [1372035, 1, 30],
        [1372036, 1, 30],
        [1372037, 1, 30],
        [1372038, 1, 30],
        [1382045, 1, 60],
        [1382046, 1, 60],
        [1382047, 1, 60],
        [1382048, 1, 60],
        [1302328, 1, 250],
        [1312198, 1, 250],
        [1322249, 1, 250],
        [1332273, 1, 250],
        [1372220, 1, 250],
        [1382258, 1, 250],
        [1402249, 1, 250],
        [1412176, 1, 250],
        [1422183, 1, 250],
        [1432213, 1, 250],
        [1442267, 1, 250],
        [1452251, 1, 250],
        [1462238, 1, 250],
        [1472260, 1, 250],
        [1482215, 1, 250],
        [1492225, 1, 250],
    ],
    2: [

    ]
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

    var topPrizes = cm.getTopPrizes();
    rewards[2] = [];
    prob = 0;

    for (var i = 0; i < topPrizes.length; i++) {
        switch (topPrizes[i].mid) {
            case 'font':
                itemQty = 1250;
                break;
            case 'chair':
                itemQty = 200;
                break;
            case 'pet':
                itemQty = 500;
                break;
        }
        rewards[2].push([topPrizes[i].left, 1, itemQty, topPrizes[i].right]);
    }


    switch(status) {
        case 0:
            item = 0;
            var playerName = cm.getPlayer().getName();
            var msg = playerName + "~ 你好呀! 我是#b麻美，#k我抽了超多轉蛋的，如果你有我想要的東西的話，我就跟你換！";
            
            msg += "\r\n\r\n#b#L1#兌換一般轉蛋機獎品 #k#l\r\n";
            msg += "\r\n#b#L2#兌換限定轉蛋機獎品#k#l\r\n";

            cm.sendNext(msg);
            break;
        case 1:
            var sel = selection;
            var rewardPackage = rewards[sel];
            if(sel == 1) {
                var msg = "以下是可兌換的#b轉蛋機獎品#k內容：\r\n\r\n\r\n";
                rewardType = 1;
                for (var i = 0; i < rewardPackage.length; i++) {
                    msg += "#L" + i + "#使用#r" + rewardPackage[i][2] + "#k個#i"+ useItemForNormal +":##b#t" + useItemForNormal + "# #k兌換 #b#i" + rewardPackage[i][0] + ":##t" + rewardPackage[i][0]  +"##k x" + rewardPackage[i][1] + "個\r\n";
                }
            } else if(sel == 2) {
                var msg = "以下是可兌換的#b限定轉蛋機獎品#k內容：\r\n\r\n\r\n";
                rewardType = 2;
                for (var i = 0; i < rewardPackage.length; i++) {
                    msg += "#L" + i + "#使用#r" + rewardPackage[i][2] + "#k個#i"+ useItemForLimit +":##b#t" + useItemForLimit + "# #k兌換 #b#i" + rewardPackage[i][0] + ":##t" + rewardPackage[i][0]  +"##r(剩餘"+rewardPackage[i][3]+")#k x" + rewardPackage[i][1] + "個\r\n";
                }
            } 

            
            cm.sendOk(msg);
            break;
        case 2:
            var sel = selection;
            var rewardPackage = rewards[rewardType];
            if (rewardType == 1){
                useItem = useItemForNormal;                
            }else if(rewardType == 2) {
                useItem = useItemForLimit;
            }
            var msg = "#r你確定要用" + rewardPackage[sel][2] + "#k個#i"+ useItem +":##b#t"+ useItem +"# #r兌換 #b#i" + rewardPackage[sel][0] + ":##t" + rewardPackage[sel][0]  +"##r x" + rewardPackage[sel][1] + "個嗎？\r\n";
            itemSel = sel;
            cm.sendYesNo(msg);
            break;
        case 3:
            var rewardPackage = rewards[rewardType];
            var useAmount = rewardPackage[itemSel][2];
            if (!cm.haveItem(useItem, useAmount)){
                cm.sendOk("你的#i" + useItem + ":##t" + useItem + "#好像不夠...");
                cm.dispose();
                return;
            }
            if (!cm.canHold(rewardPackage[itemSel][0], rewardPackage[itemSel][1])) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }
            if(rewardType == 1){
                cm.gainGachaponItem(rewardPackage[itemSel][0], rewardPackage[itemSel][1], 9);
            }else if(rewardType == 2){
                cm.gainLimitGachaponItem(rewardPackage[itemSel][0], rewardPackage[itemSel][1], 9);
            }
            cm.gainItem(useItem, -useAmount);
            
            if(useItem == useItemForLimit){
                cm.updatePrizeCount(rewardPackage[itemSel][0]);
            }
            cm.sendOk("#b#i" + rewardPackage[itemSel][0] + ":##t" + rewardPackage[itemSel][0]  +"##r x" + rewardPackage[itemSel][1] + "個，收下吧！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}