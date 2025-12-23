var status = -1;
var sel = -1;
var currPoints = 0;

var boss = [
    ["超級綠水靈",9100000],
    ["時空的裂縫",9300012],
    ["毒霧森林　",9300182],
    ["金勾海賊王",9300119],
    ["羅密歐　　",9300140],
    ["女神的痕跡",9300039]
]

var prizes = [
    [1, 3011001],
    [2, 3011002],
    [3, 3011003],
    [4, 3011004],
    [5, 3011005],
    [6, 3011006],
    [7, 3011007],
    [8, 3011008],
    [9, 3011009],
    [10, 3011010],
    [11, 3011011],
    [12, 3011012],
    [13, 3011013],
    [14, 3011014],
    [15, 3011015],
    [16, 3011016],
    [17, 3011017],
    [18, 3011018],
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
            msg += "\r\n\r\n您目前組隊任務累積等級為：#b#e Level." + points + "#k#n";
            msg += "\r\n\r\n            【請選擇您想領取的獎勵】\r\n";
            currPoints = points;
            var enter = 0;
            for(var i = 0; i < prizes.length; i++) {
                msg += "#b#L" + i + "# 領取Lv." + prizes[i][0];
                if(i < 9) {
                    msg += " ";
                }
                msg +=  "獎勵"

                enter++;
                if(enter % 3 == 0) {
                    msg += "\r\n";
                }
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var msg = "您要領取 #b#eLevel." + prizes[sel][0] + "#k#n 的獎勵嗎？\r\n"
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