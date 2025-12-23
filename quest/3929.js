var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.getBossLog("米奇里的測試1") == 1&&qm.getBossLog("米奇里的測試2") == 1&&qm.getBossLog("米奇里的測試3") == 1&&qm.getBossLog("米奇里的測試4") == 1) {
        qm.gainExp(2000);
        qm.forceCompleteQuest();
        qm.sendNext("好。你完成的非常好，非常優秀。現在能確定你不是王妃的奸細了。");
        qm.dispose();
    } else if (qm.getQuestStatus(3929) == 0&&qm.getQuestStatus(3928) == 2){
        qm.forceStartQuest();
        qm.dispose();
    } else
    qm.sendNext("好像還沒把食物分完");
    qm.dispose();
}
