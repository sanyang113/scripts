var status = -1;
var sel = -1;
var itemsel = -1;

var rewards = {
    10: [
        [2022192, 300], // 鬆餅x300
        [2022230, 20], // 番石榴x20
        [5130000, 1], // 護身符x1
        [1142677, 1], //卯咪勳章
        [5530578, 1],// 卯咪寵物箱
    ],
    20: [
        [2022667, 300], // 奇多起司x300
        [5072000, 3], // 高效能喇叭x3
        [5190000, 1], // 撿道具
        [5190001, 1], // 補HP
        [5190002, 1], // 擴大
        [5190003, 1], // 範圍撿起
        [5190006, 1], // 補MP
    ],
    30: [
        [2022189, 500], // 烤起司x500
        [1002788, 1], // 褐色貓耳
        [5561000, 3], // 任意門高級x3
        [5072000, 3], // 高效能喇叭x3
    ],
    40: [
        [2022016, 500], // 便當x500
        [2022230, 20], // 番石榴x20
        [5561000, 3], // 任意門高級x3
    ],
    50: [
        [2022335, 500], // 小雞餅乾x500
        [5220040, 1], // 楓葉轉蛋券x1
        [1142975, 1], // 勳章x1
        [5530576 ,1],// 附魔石箱子x1
        [5050000, 10], //能力重置捲x10
    ],
    60: [
        [2022356, 500], // 糕點x500
        [2022230, 20], // 番石榴x20
        [5530576 ,1]// 附魔石箱子x1 
    ],
    70: [
        [2022356, 500], // 糕點x500
        [5561000, 3], // 任意門高級x3
        [5530576 ,1],// 附魔石箱子x1 
        [1142679, 1],// 勳章x1
    ],
    80: [
        [2022180, 500], // 米果x500
        [5076000, 3], // 道具廣x3
        [5530576 ,1],// 附魔石箱子x1 
    ],
    90: [
        [2022180, 500], // 米果x500
        [2022230, 20], // 番石榴x20
        [5530576 ,1],// 附魔石箱子x1
    ],
    100: [
        [2022028, 300], // 巧克力x300
        [5530576 ,1],// 附魔石箱子x1 
        [5076000, 3], // 道具廣x3
        [5050000, 10], //能力重置捲x10
    ],
    110: [
        [2022028, 300], // 巧克力x300
        [5220040, 1], // 楓葉轉蛋券x1
        [5530576 ,1],// 附魔石箱子x1 
    ],
    120: [
        [2022011, 300], // 飯糰x300
        [5561000, 3], // 任意門高級x3
        [5220040, 1], // 楓葉轉蛋券x1
        [5530576 ,1], // 附魔石箱子x1 
        [4032878, 1], // 卯咪象徵x1
        [1143083, 1],// 勳章x1
        [5050000, 10], //能力重置捲x10
    ],
    130: [
        [2022011, 300], // 飯糰x300
        [4032878, 1], // 卯咪象徵x1
        [5533124, 3],// 楓葉點數x300
        [2049312, 1],// 強力混沌x1 (2049312)
    ],
    140: [
        [2022011, 300], // 飯糰x300
        [4032878, 1], // 卯咪象徵x1
        [5530576 ,1],// 附魔石箱子x1 
        [2049312, 2],// 強力混沌x2 (2049312)
    ],
    150: [
        [2022031, 300], // 餅乾x300
        [4032878, 1],// 卯咪象徵x1
        [5076000, 3], // 道具廣x3
        [5220040, 1], // 楓葉轉蛋券x1
    ],
    160: [
        [2022031, 300], // 餅乾x300
        [4032878, 1],// 卯咪象徵x1
        [5533124, 3],// 楓葉點數x300
        [1142355, 1],// 勳章x1
    ],
    170: [
        [2022031, 300], // 餅乾x300
        [4032878, 1], // 卯咪象徵x1
        [5220040, 1], // 楓葉轉蛋券x1
    ],
    180: [
        [2022029, 300], // 白巧克力x300
        [4032878, 2], // 卯咪象徵x2
        [5533124, 3],// 楓葉點數x300
    ],
    190: [
        [2022029, 300], // 白巧克力x300
        [4032878, 3],// 卯咪象徵x3
        [5530576 ,1],// 附魔石箱子x1
    ],
    200: [
        [2022029, 300], // 白巧克力x300
        [5220040, 3], // 楓葉轉蛋券x3
        [5533124, 5],// 楓葉點數x500
        [4032878, 5],// 卯咪象徵x5
        [1143031, 1],// 勳章x1
    ]
};

function start() {
    action(1, 0, 0);
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
            var playerName = cm.getPlayer().getName();
            var msg = playerName + "， 你..你好，我..我是琳恩，\r\n請問你是要領取獎勵嗎？\r\n\r\n"
            msg += "#L1##b我要領取等級獎勵#l\r\n";
            msg += "#L2##b領取等級獎勵箱子(每個帳號限領一次)#k#l\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            if (sel == 1) {
                var msg = "您要領取哪個獎勵禮包呢?\r\n";
                for (var i = 1; i <= 20; i++) {
                    if (cm.getPlayer().getCharacterOnly("領取" + i*10 + "等獎勵禮包")) {
                        msg += "#L" + i + "##b" + i * 10 + "等級禮包 #r (※已領取)#l\r\n";
                    }else{
                        msg += "#L" + i + "##b" + i * 10 + "等級禮包#l\r\n";
                    }   
                }
                cm.sendSimple(msg);
            } else if(sel == 2) {
                var msg = "你要領取#b#v2459020##z2459020##k嗎";
                rewardType = 2;
                cm.sendYesNo(msg);
            }
            break;
        case 2:
            level = selection * 10;
            var rewardPackage = rewards[level];
            if (sel == 1) {
                if (rewardPackage) {
                    var msg = "以下是" + level + "等獎勵禮包內容：\r\n\r\n\r\n";
                    for (var i = 0; i < rewardPackage.length; i++) {
                        msg += "#b#i" + rewardPackage[i][0] + ":##t" + rewardPackage[i][0]  +"##k x" + rewardPackage[i][1] + "個\r\n";
                    }

                    msg += "\r\n\r\n";

                    if (cm.getPlayer().getCharacterOnly("領取" + level + "等獎勵禮包")) {
                        msg += "#r哎呀？　看．．看來您已經領取過獎勵了呢。";
                        cm.sendOk(msg);
                        cm.dispose();
                    }else if (cm.getPlayer().getLevel() < level){
                        msg += "#r咦．．．您的等級不符合條件呢。";
                        cm.sendOk(msg);
                        cm.dispose();
                    }else {
                        msg += "#r您要現在領取獎勵嗎？";
                        cm.sendYesNo(msg);
                    }
                } else {
                    cm.sendOk("目前沒有" + level + "等的獎勵禮包。");
                }
            } else if(sel == 2) {
                var accountOnlyLog = "冒險者獎勵箱子"
                if(cm.getPlayer().getAccountOnly(accountOnlyLog) > 0) {
                    cm.sendOk("冒險者獎勵箱子您似乎已經領取過了！！");
                    cm.dispose();
                    return;
                }
                if(!cm.canHold(2459020, 1)) {
                    cm.sendOk("請確認背包空間是否足夠");
                    cm.dispose();
                    return;
                }
                if(!cm.getPlayer().setAccountOnly(accountOnlyLog)) {
                    cm.sendOk("發生系統異常，請聯繫GM！");
                    cm.dispose();
                    return;
                }
                cm.gainItem(2459020, 1);
                cm.sendOk("給您了1個#b#v2459020##z2459020##k，請開啟背包查看。");
                cm.dispose();
                return;
            }

    
            break;
        case 3:
            var rewardPackage = rewards[level];
            var msg = "#k這這是您..您的禮包\r\n\r\n\r\n";
            var check = [];

            for (var i = 0; i < rewardPackage.length; i++) {
                var item = rewardPackage[i][0];
                var quantity = rewardPackage[i][1];
                check.push([item, quantity]);
            }

            if (!cm.canHold(check)) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }

            var isInsertSuccess = cm.getPlayer().setCharacterOnly("領取" + level + "等獎勵禮包");

            if (isInsertSuccess) {
                for (var i = 0; i < rewardPackage.length; i++) {
                    var item = rewardPackage[i][0];
                    var quantity = rewardPackage[i][1];
                    cm.gainItem(item, quantity);
                }
                for (var i = 0; i < rewardPackage.length; i++) {
                    msg += "#b#i" + rewardPackage[i][0] + "##t" + rewardPackage[i][0]  +"# x" + rewardPackage[i][1] + "個\r\n";
                }
                msg += "\r\n\r\n#k請您收下...";
                cm.sendSimple(msg);
            } else {
                cm.sendSimple("出錯了阿！聯絡GM吧");
            }
            cm.dispose();
            break;
    }
}
