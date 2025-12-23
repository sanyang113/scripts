var status = -1;
var sel = -1;
var currPoints = 0;

var boss = [
    ["噴火龍    ",8180000],
    ["格瑞芬多  ",8180001],
    ["寒霜冰龍  ",8220003],
    ["多多      ",8220004],
    ["利里諾斯  ",8220005],
    ["萊伊卡    ",8220006],
    ["海怒斯(右)",8510000],
    ["海怒斯(左)",8520000],
    ["黑道大姐頭",9400121],
    ["鎧甲武士  ",9400405],
    ["天狗      ",9400014]
]

var prizes = [
    [1, 3011050],
    [2, 3011051],
    [3, 3011052],
    [4, 3011053],
    [5, 3011054],
    [6, 3011055],
    [7, 3011056],
    [8, 3011057],
    [9, 3011058],
    [10, 3011059],
    [11, 3011060],
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
                var show = 300;
                var finished = false;
                var currLevel = 0;
                if(count >= 300) {
                    currLevel = 1;
                    finished = true;
                    points++;
                }
                if(finished) {
                    msg += "\r\n#b" + boss[i][0] + "#k：完成次數：" + showThreeWord(count) + "/300次 - Level.1#r#e(已完成)#k#n";
                } else {
                    msg += "\r\n#b" + boss[i][0] + "#k：完成次數：" + showThreeWord(count) + "/" + showThreeWord(show) + "次 - Level." + currLevel;
                }
            }
            msg += "\r\n\r\n您目前野王擊殺累積等級為：#b#e Level." + points + "#k#n";
            msg += "\r\n\r\n            【請選擇您想領取的獎勵】\r\n";
            currPoints = points;
            var enter = 0;
            for(var i = 0; i < prizes.length; i++) {
                msg += "#b#L" + i + "# 領取Lv.";
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