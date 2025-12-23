function action(mode, type, selection) {
    if (cm.getQuestStatus(3345) == 1) {
        if (cm.getBossLog("魔法石1") == 1&&cm.getBossLog("魔法石2") == 1&&cm.getBossLog("魔法石3") == 1) {
            cm.forceCompleteQuest(3345);
            cm.sendOk("魔法陣發出耀眼的光芒，回去找亞凱斯特回報吧！");
        } else {
            cm.sendOk("沒有反應，可能要先查看魔法陣的其他地方。");
        }
        cm.dispose();
    }
    cm.sendOk("看起來只是普通的魔法陣");
	cm.dispose();
}