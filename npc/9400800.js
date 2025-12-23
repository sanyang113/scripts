var status = -1;
var useItem = 4030041;  // 時裝兌換券
var gachaItem = 5220044;  // 限定轉蛋券
var maplePointItem = 5533124;  // 楓點100兌換券
var sel;
var selectType;
var itemSel;
var category = "時裝";

// 物品分類
var rewards = {
    "時裝": [
        [1703320, 100],
        [1006180, 100],
        [1006181, 100],
        [1053953, 100],
        [1053954, 100],
        [1103562, 100],
        [1073732, 100],
        [1073733, 100],
        [1115311, 100],
        [1115210, 100],
        [1702902, 100],
        [1005904, 100],
        [1051681, 100],
        [1050608, 100],
        [1071141, 100],
        [1070125, 100],
        [1103390, 100],
        [1703146, 100],
        [1703145, 20],
        [1005902, 20],
        [1005903, 20],
        [1050607, 20],
        [1051680, 20],
        [1071140, 20],
        [1070124, 20],
        [1103389, 20],
    ]
};

var decomposeRewards = {
    "時裝": [
        [1703320, 5],
        [1006180, 5],
        [1006181, 5],
        [1053953, 5],
        [1053954, 5],
        [1103562, 5],
        [1073732, 5],
        [1073733, 5],
        [1115311, 5],
        [1115210, 5],
        [1702902, 5],
        [1005904, 5],
        [1051681, 5],
        [1050608, 5],
        [1071141, 5],
        [1070125, 5],
        [1103390, 5],
        [1703146, 5],
        [1703145, 2],
        [1005902, 2],
        [1005903, 2],
        [1050607, 2],
        [1051680, 2],
        [1071140, 2],
        [1070124, 2],
        [1103389, 2],
    ]
};

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            var msg = "日安！ 我是#b濱美#k，山羊谷大陸上最有名的#b時裝收藏家！#k\r\n你有#b我喜歡的時裝#k或#i4030041:##b#t4030041##k的話，";
            msg += "可以和我兌換物品或分解時裝。\r\n請選擇你要進行的操作：\r\n\r\n#L2#分解時裝物品#l";
            msg += "\r\n#L3#將#b 5 張 #i" + useItem + " :# #k換成 #b1 張 #b#i" + gachaItem + " :# #k#l";
            msg += "\r\n#L4#將#b 1 張 #i" + useItem + ":# #k換成 #b1 張 #b#i" + maplePointItem + " :# #k#l";
            cm.sendSimple(msg);
            break;
        case 1:
            sel = selection;
            if (sel == 1) {
                selectType = 1;  // 兌換
                var msg = "請選擇你想要兌換的時裝物品：\r\n";
                var rewardList = rewards[category];
                for (var i = 0; i < rewardList.length; i++) {
                    msg += "#L" + i + "#使用#r" + rewardList[i][1] + "#k個#i4030041:##b#t4030041# #k兌換 #b#i" + rewardList[i][0] + ":##t" + rewardList[i][0] + "##k#l\r\n";
                }
                cm.sendSimple(msg);
            } else if (sel == 2) {
                selectType = 2;  // 分解
                var msg = "請選擇你想要分解的時裝物品：\r\n";
                var rewardList = decomposeRewards[category];
                for (var i = 0; i < rewardList.length; i++) {
                    msg += "#L" + i + "#分解#r#i" + rewardList[i][0] + ":##t" + rewardList[i][0] + "# #k得到#b" + rewardList[i][1] + " #k個 #b#i" + useItem + ":##t" + useItem + "##k#l\r\n";
                }
                cm.sendSimple(msg);
            } else if (sel == 3) {
                cm.sendYesNo("你確定要將#b時裝兌換券 5 張 #k兌換成#b限定轉蛋券 1 張#k嗎？");
            } else if (sel == 4) {
                cm.sendYesNo("你確定要將#b時裝兌換券 1 張 #k兌換成#b楓點100兌換券 1 張#k嗎？");
            }
            break;
        case 2:
            if (sel == 3) {
                if (!cm.haveItem(useItem, 5)) {
                    cm.sendSimple("咦！你沒有足夠的#b#i" + useItem + ":##t" + useItem + "##k呀！你需要 5 張時裝兌換券。");
                    cm.dispose();
                    return;
                }

                if (!cm.canHold(gachaItem, 1)) {
                    cm.sendOk("哎呀？你的背包空間不足唷！");
                    cm.dispose();
                    return;
                }

                cm.gainItem(useItem, -5);  // 扣除5張時裝兌換券
                cm.gainItem(gachaItem, 1);  // 增加1張限定轉蛋券

                cm.sendOk("兌換成功！你得到了#b#i" + gachaItem + ":##t" + gachaItem + "##k x 1！");
                cm.dispose();
            } else if (sel == 4) {
                if (!cm.haveItem(useItem, 1)) {
                    cm.sendSimple("咦！你沒有足夠的#b#i" + useItem + ":##t" + useItem + "##k呀！你需要 1 張時裝兌換券。");
                    cm.dispose();
                    return;
                }

                if (!cm.canHold(maplePointItem, 1)) {
                    cm.sendOk("哎呀？你的背包空間不足唷！");
                    cm.dispose();
                    return;
                }

                cm.gainItem(useItem, -1);  // 扣除1張時裝兌換券
                cm.gainItem(maplePointItem, 1);  // 增加1張楓點100兌換券

                cm.sendOk("兌換成功！你得到了#b#i" + maplePointItem + ":##t" + maplePointItem + "##k x 1！");
                cm.dispose();
            } else {
                itemSel = selection;
                var rewardPackage = selectType == 1 ? rewards[category] : decomposeRewards[category];
                var useAmount = rewardPackage[itemSel][1];  // 確保選擇正確
                var msg;
                if (selectType == 1) {
                    msg = "#k你確定要用" + useAmount + "#k個#i" + useItem + ":##b#t" + useItem + "##r兌換 #b#i" + rewardPackage[itemSel][0] + ":##t" + rewardPackage[itemSel][0] + "##k 嗎？\r\n";
                } else {
                    msg = "#k你確定要分解#r#i" + rewardPackage[itemSel][0] + ":##t" + rewardPackage[itemSel][0] + "# #k得到#b " + useAmount + " #k個 #b#i" + useItem + ":##t" + useItem + "##k嗎？\r\n";
                }
                cm.sendYesNo(msg);
            }
            break;
        case 3:
            var rewardPackage = selectType == 1 ? rewards[category] : decomposeRewards[category];
            var useAmount = rewardPackage[itemSel][1];  // 再次確認數據
            if (selectType == 1) {
                if (!cm.haveItem(4030041, useAmount)) {
                    cm.sendSimple("咦！你沒有足夠的#b#i4030041:##t4030041##k呀！");
                    cm.dispose();
                    return;
                }

                if (!cm.canHold(rewardPackage[itemSel][0], 1)) {
                    cm.sendOk("哎呀？你的背包空間不足唷！");
                    cm.dispose();
                    return;
                }

                cm.gainItem(rewardPackage[itemSel][0], 1);
                cm.gainItem(4030041, -useAmount);
                var msg = "換好囉~#b#i" + rewardPackage[itemSel][0] + ":##t" + rewardPackage[itemSel][0] + "# x 1 給你!";
            } else {
                if (!cm.haveItem(rewardPackage[itemSel][0], 1)) {
                    cm.sendSimple("咦！你沒有#b#i" + rewardPackage[itemSel][0] + ":##t" + rewardPackage[itemSel][0] + "##k呀！");
                    cm.dispose();
                    return;
                }

                if (!cm.canHold(4030041, useAmount)) {
                    cm.sendOk("哎呀？你的背包空間不足唷！");
                    cm.dispose();
                    return;
                }

                cm.gainItem(4030041, useAmount);
                cm.gainItem(rewardPackage[itemSel][0], -1);
                var msg = "分解成功！你得到了#b#i4030041:##t4030041# x " + useAmount + " 個!";
            }

            cm.sendOk(msg);
            cm.dispose();
            break;
    }
}