function action(mode, type, selection) {
    if (cm.getQuestStatus(3339) == 1) {
        if (cm.getBossLog("手把2") == 1) {
            cm.sendOk("已經轉不動了。");
        } else {
            cm.setBossLog("手把2");
			cm.sendOk("轉了一下手把。");
        }
        cm.dispose();
    }
    cm.sendOk("看起來沒什麼特別的");
	cm.dispose();
}