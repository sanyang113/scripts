var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.getBossLog("耍紅蠍子團1") == 1&&qm.getBossLog("耍紅蠍子團2") == 1&&qm.getBossLog("耍紅蠍子團3") == 1&&qm.getBossLog("耍紅蠍子團4") == 1) {
        qm.gainExp(6500);
        qm.forceCompleteQuest();
        qm.sendNext("呼呼，看樣子你的確把紅蠍子團的寶物分給#m260000000#村民了。現在你開心了吧？");
        qm.dispose();
    } else if (qm.getQuestStatus(3926) == 0&&qm.getQuestStatus(3925) == 2){
        qm.forceStartQuest();
        qm.dispose();
    } else
        qm.sendNext("好像還沒把食物分完");
        qm.dispose();
}
