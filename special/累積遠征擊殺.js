var status = -1;
var sel = -1;
var currPoints = 0;

var boss = [
    ["拉圖斯遠征　　",8500002],
    ["熊王遠征　　　",9420544],
    ["獅王遠征　　　",9420549],
    ["殘暴炎魔遠征　",8800002],
    ["克雷賽爾遠征　",9420522],
    ["守護者城堡遠征",9400591],
    ["闇黑龍王遠征　",8810018],
    ["黑道長老遠征　",9400300],
    ["天皇蟾蜍遠征　",9400409],
    ["奧芙赫班遠征　",9400289],
    ["皮卡啾遠征　　",8820001],
]

var prizes = [
    [1, 3011100],
    [2, 3011101],
    [3, 3011102],
    [4, 3011103],
    [5, 3011104],
    [6, 3011105],
    [7, 3011106],
    [8, 3011107],
    [9, 3011108],
    [10, 3011109],
    [11, 3011110],
    [12, 3011111],
    [13, 3011112],
    [14, 3011113],
    [15, 3011114],
    [16, 3011115],
    [17, 3011116],
    [18, 3011117],
    [19, 3011118],
    [20, 3011119],
    [21, 3011120],
    [22, 3011121],
    [23, 3011122],
    [24, 3011123],
    [25, 3011124],
    [26, 3011125],
    [27, 3011126],
    [28, 3011127],
    [29, 3011128],
    [30, 3011129],
    [31, 3011130],
    [32, 3011131],
    [33, 3011132],
]

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
            var points = 0;
            var msg = "歡迎來到山羊谷副本累積系統，當您完成副本一定次數，您可以獲得對應等級";
            msg += "，當等級累積值符合以下條件，則可以領取相對應的獎勵\r\n";
            for(var i = 0; i < boss.length; i++) {
                var count = cm.getCountSquad(boss[i][1]);
                var show = 10;
                var finished = false;
                var currLevel = 0;
                if(count >= 10) {
                    currLevel = 1;
                    show = 40;
                    points++;
                }
                if(count >= 40) {
                    currLevel = 2;
                    show = 100;
                    points++;
                }
                if(count >= 100) {
                    currLevel = 3;
                    finished = true;
                    points++;
                }
                if(finished) {
                    msg += "\r\n#b" + boss[i][0] + "#k：完成次數：" + showThreeWord(count) + "/100次 - Level.3#r#e(已完成)#k#n";
                } else {
                    msg += "\r\n#b" + boss[i][0] + "#k：完成次數：" + showThreeWord(count) + "/" + showThreeWord(show) + "次 - Level." + currLevel;
                }
            }
            msg += "\r\n\r\n您目前遠征累積等級為：#b#e Level." + points + "#k#n";
            msg += "\r\n\r\n            【請選擇您想領取的獎勵】\r\n";
            currPoints = points;
            var enter = 0;
            for(var i = 0; i < prizes.length; i++) {
                msg += "#b#L" + i + "# 領取Lv.";
                if(i < 9) {
                    msg += " ";
                }
                msg += prizes[i][0] + "獎勵"

                enter++;
                if(enter % 3 == 0) {
                    msg += "\r\n";
                }
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var msg = "您要領取Level" + prizes[sel][0] + "的獎勵嗎？\r\n"
            msg += "\r\n#b#i" + prizes[sel][1] + ":##t" + prizes[sel][1] + "#";
            cm.sendYesNo(msg);
            break;
        case 2:
            if(prizes[sel][0] > currPoints) {
                cm.sendOk("很抱歉，您的等級未達到" + prizes[sel][0] + "，因此無法領取獎勵");
                cm.dispose();
                return;
            }
            if(!cm.canHold(prizes[sel][1], 1)) {
                cm.sendOk("很抱歉，您的背包空間不足");
                cm.dispose();
                return;
            }
            cm.gainItem(prizes[sel][1], 1);
            cm.sendOk("獎勵發給您囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

function showThreeWord(count) {
    var msg = "";
    if(count < 100) {
        msg += " ";
    }
    if(count < 10) {
        msg += " ";
    }
    return msg + count;
}