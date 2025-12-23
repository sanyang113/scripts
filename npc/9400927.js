var status = -1;
var useItem = 4032878;
var rewardType = 0;
var select = -1;
var qty = -1;

var rewards = {
    1: [
        //道具id, 數量, 需要的卯咪象徵數量
        [2049300, 2, 1], // 混沌x2
        [2049302, 1, 2], // 強力混
        [2049303, 1, 10], // 驚訝
        [2049304, 1, 20], //強力驚訝
        [2340000, 1, 20]// 祝福
        //[5220042, 1, 50] //樂觀未上
    ],
    2: [
        [2049200, 10, 1], // 基礎x10
        [2049202, 1, 3], // 高階
        [2049206, 1, 3],// 瓦爾
        [2049203, 1, 10], // 神聖
        [2049204, 1, 10], // 祝福
        [2049205, 1, 10], //混沌
        [2049207, 1, 10],// 瓦爾
        [2049208, 1, 15],// 瓦爾
        [2049201, 1, 20],// 淬鍊
    ],
    3:[
        [2049244, 1, 15],// 淬鍊
        [2049201, 1, 20],// 淬鍊可交易
        [2049245, 2, 1], // 高階
        [2049203, 1, 5], // 神聖
        [2049204, 1, 5], // 祝福
        [2049205, 1, 5], // 混沌
        [2049300, 3, 1], // 混沌x3
        [2049302, 1, 2], // 強力混
        [2049303, 1, 10], // 驚訝
        [4001620, 1, 2], // 武公的象徵
        [5533124, 1, 1], // 楓葉點數100
        [4030408, 1, 2], // 勇氣的象徵
        [4030411, 1, 30], // 永恆附魔石
        [4030409, 1, 40], // 神秘魔方
    ],
    4:[
        [2340000, 1, 20], // 祝福卷
        [2049201, 1, 18], // 淬鍊
        [4030002, 150, 1], // 春日活動道具
        [4030002, 8, 1], // 卷軸自選
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


    switch(status) {
        case 0:
            item = 0;
            var msg = "本嚕毛負責幫喵咪天皇收集#i" + useItem + ":##b#t" + useItem + "#，#k本嚕毛可以用收藏品跟你換！";
            var playerName = cm.getPlayer().getName();
         //   msg += "\r\n\r\n#b#L1# 兌換卷軸#k#l\r\n";
         //   msg += "\r\n#b#L2#兌換附魔石#k#l\r\n";
            msg += "\r\n#b#L3#兌換道具#k#l\r\n";
            msg += "\r\n#b#L4#讓我看看#r3月期間限定#b的好貨#l\r\n";

            cm.sendNext(msg);
            break;
        case 1:
            var sel = selection;
            var rewardPackage = rewards[sel];
            if(sel == 1) {
                var msg = "以下是可兌換的#b卷軸#k內容：\r\n\r\n\r\n";
                rewardType = 1;
            } else if(sel == 2) {
                var msg = "以下是可兌換的#b附魔石#k內容：\r\n\r\n\r\n";
                rewardType = 2;
            } else if(sel == 3) {
                var msg = "以下是可兌換的#b道具#k內容：\r\n\r\n\r\n";
                rewardType = 3;
            } else if(sel == 4) {
                var msg = "以下是可兌換的#b期間限定#k內容：\r\n\r\n\r\n";
                rewardType = 4;
            }

            for (var i = 0; i < rewardPackage.length; i++) {
                msg += "#L" + i + "#使用#r" + rewardPackage[i][2] + "#k個#i" + useItem + ":# #k兌換 #b#i" + rewardPackage[i][0] + ":##t" + rewardPackage[i][0]  +"##k x" + rewardPackage[i][1] + "個\r\n";
            }
            cm.sendOk(msg);
            break;
        case 2:
            select = selection;
            var item = rewards[rewardType][select][0];
            if(Math.floor(item / 1000000) == 1) {
                cm.sendYesNo("確定要兌換#b#i" + item + ":##t" + item + "##k嗎？");
                break;
            }
            var msg = "兌換#b#i" + item + ":##t" + item + "##k，要兌換幾組呢？";
            cm.sendGetNumber(msg, 1, 1, 100);
            break;
        case 3:
            if(selection == -1) {
                qty = 1;
            } else {
                qty = selection;
            }
            var rewardPackage = rewards[rewardType];
            var useAmount = rewardPackage[select][2] * qty;
            if (!cm.haveItem(useItem, useAmount)){
                cm.sendOk("你的#i" + useItem + ":##t" + useItem + "#好像不太夠...");
                cm.dispose();
                return;
            }
            if (!cm.canHold(rewardPackage[select][0], (rewardPackage[select][1] * qty))) {
                cm.sendOk("包包已經塞不下了。"+qty);
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -useAmount);
            cm.gainItem(rewardPackage[select][0], (rewardPackage[select][1] * qty));
            cm.sendOk("#b#i" + rewardPackage[select][0] + ":##t" + rewardPackage[select][0]  +"##r x" + (rewardPackage[select][1] * qty) + "個#k，收下吧！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}