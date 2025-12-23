/*
    Jane the Alchemist (購買藥水)
*/

var status = -1;
var amount = -1;
var items = [
    [2000002, 310],   // 白色藥水
    [2022003, 1060],  // 烤鰻魚
    [2022000, 1600],  // 礦泉水
    [2001000, 3120]   // 西瓜
];
var item;

function start() {
    if (cm.getQuestStatus(2013) == 2) {
        cm.sendNext("這是你...謝謝你，我能得到很多完成。現在我已經做了一堆物品。如果你需要什麼，讓我知道。");
    } else {
        if (cm.getQuestStatus(2010) == 1)
            cm.sendNext("你似乎沒有強大到足以能夠購買我的藥水......");
        else
            cm.sendOk("需要完成任務才可以跟我買藥水喔!");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        var selStr = "你想購買哪些藥水呢？#b";
        for (var i = 0; i < items.length; i++) {
            selStr += "\r\n#L" + i + "##b#i" + items[i][0] + ":# #t" + items[i][0] + ":##k - 價格：#r" + items[i][1] + "#k 楓幣#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        item = items[selection];
        var recHpMp = ["300 HP", "1000 HP", "800 MP", "1000 HP 與 MP"];
        cm.sendGetNumber("你想購買 #b#t" + item[0] + "##k 嗎？\r\n此物品可回復 " + recHpMp[selection] + "。\r\n請輸入要購買的數量：", 1, 1, 100);
    } else if (status == 2) {
        amount = selection;
        if (amount<=0){
            cm.sendOk("?");
            cm.dispose();
        }
        var total = item[1] * amount;
        cm.sendYesNo("你確定要購買 #r" + amount + "#k 個 #b#t" + item[0] + "##k？\r\n每個價格 #r" + item[1] + "#k 楓幣，共計 #r" + total + "#k 楓幣。");
    } else if (status == 3) {
        var total = item[1] * amount;
        if (cm.getMeso() < total) {
            cm.sendNext("請確認你的楓幣是否足夠。");
        } else if (!cm.canHold(item[0])) {
            cm.sendNext("請確認你的消耗欄是否有足夠空間。");
        } else {
            cm.gainMeso(-total);
            cm.gainItem(item[0], amount);
            cm.sendOk("購買成功！歡迎下次再來。");
        }
        cm.dispose();
    }
}
