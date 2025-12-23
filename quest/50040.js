/*
	任務: 不管多少次都得爭取！
	描述: 我從重力網駕駛員……位於2102年商業區的#p9120033#處，獲得了討伐#o9400295#的任務，他說重力網使用的驅動組件目前出現在#o9400295#的周圍，有了它就可以強化#o9400295#沒時間了，如果不盡快地打倒#o9400295#的話…！
*/
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
        qm.askAcceptDecline("未來東京的BOSS再度入侵了山羊谷的世界，冒險者...接下來就交給您了！");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        qm.sendNext("等您改變心意了再跟我說吧！");
        qm.dispose();
        return;
    }
    if (status == 0) {
        if(qm.getPlayer().getCharacterOnly(log()) >= 2) {
            qm.sendSimple("很抱歉，您今天已經完成過兩次任務了！\r\n#b請您過晚上12點後再找我回報任務。#l");
            qm.dispose();
            return;
        } else {
            qm.sendNext("幹得漂亮！");
        }
    } else if (status == 1) {
        if(!qm.canHold(4310249, 1)) {
            qm.sendOk("請確認背包空間是否足夠！");
            qm.dispose();
            return;
        }

        qm.gainItem(4310249,1);
        qm.forceCompleteQuest();
        qm.getPlayer().setCharacterOnly(log());
        qm.dispose();
    }
}

function log() {
    var event = "東京王戰循環:";
    var id = "玩家ID:" + qm.getPlayer().getId();
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var daytime = "日期:" + year + "年" + month + "月" + day + "日";

    return event + id + daytime;
}