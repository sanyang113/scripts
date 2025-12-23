var status = -1;

var objDate = new Date();

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        qm.sendNext("等您改變心意了再跟我說吧！");
        qm.dispose();
        return;
    }
    if (status == 0) {
        qm.askAcceptDecline("BOSS再度入侵了山羊谷的世界，冒險者...接下來就交給您了！");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.dispose();
    }
}
var prize = [
    [2250001, 5],
    [2049202, 20],
    [2049203, 1],
    [2049204, 1],
    [2049205, 1],
    [2459100, 10],
    [4030410, 5],
    [4030402, 1],
    [4030408, 1],
    [4001017, 1],
    [4030002, 30],
    [4030002, 500],
]
function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        qm.sendNext("等您改變心意了再跟我說吧！");
        qm.dispose();
        return;
    }
    if (status == 0) {
        if(qm.getPlayer().getCharacterOnly(log()) >= 1) {
            qm.sendSimple("很抱歉，您今天已經完成過1次任務了！\r\n#b請您過晚上12點後再找我回報任務。#l");
            qm.dispose();
            return;
        } else {
            qm.sendNext("幹得漂亮！");
        }
    } else if (status == 1) {
        var check = [];
        for (var i = 0; i < prize.length; i++) {
            check.push([prize[i][0], prize[i][1]]);
        }

        if(!qm.canHold(check)) {
            qm.sendOk("請確認背包空間是否足夠！");
            qm.dispose();
            return;
        }
        for(var i = 0; i < prize.length; i++) {
            qm.gainItem(prize[i][0], prize[i][1]);
        }
        qm.forceCompleteQuest();
        qm.getPlayer().setCharacterOnly(log());
        qm.dispose();
    }
}

function log() {
    var event = "中階王戰循環:";
    var id = "玩家ID:" + qm.getPlayer().getId();
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var daytime = "日期:" + year + "年" + month + "月" + day + "日";

    return event + id + daytime;
}