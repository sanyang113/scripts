var status = -1;

function action(mode, type, selection) {
    if (cm.getQuestStatus(3929) == 1) {
        if (cm.haveItem(4031580)) {
            if (cm.getBossLog("米奇里的測試3") == 1) {
                cm.sendNext("貌似已經給過食物了。");
            } else {
                cm.setBossLog("米奇里的測試3");
                cm.gainItem(4031580, -1);
				cm.sendNext("放了一個食物在這裡。");
            }
        }
        cm.dispose();
    }
    if (cm.getQuestStatus(3926) == 1) {
        if (cm.haveItem(4031579)) {
            if (cm.getBossLog("耍紅蠍子團3") == 1) {
                cm.sendNext("貌似已經給過寶物了。");
            } else {
                cm.setBossLog("耍紅蠍子團3");
                cm.gainItem(4031579, -1);
				cm.sendNext("放了一個寶物在這裡。");
            }
        }
        cm.dispose();
    }
    cm.dispose();
}