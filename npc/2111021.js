function action(mode, type, selection) {
    if (cm.getQuestStatus(3345) == 1) {
        if (cm.getBossLog("魔法石2") == 1) {
            cm.sendOk("魔法陣發出耀眼的光芒。");
        } else {
            cm.setBossLog("魔法石2");
            cm.gainItem(4031740,-1);
            cm.sendOk("魔法陣發出耀眼的光芒。");
        }
        cm.dispose();
    }
    cm.sendOk("看起來只是普通的魔法陣");
	cm.dispose();
}