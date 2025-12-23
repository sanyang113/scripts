var status = -1;

function start() {
	action(1,0,0);
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
			if(cm.getPlayer().getQuestStatus(50003) == 1 || cm.getQuestStatus(50004) == 2) {
				cm.sendYesNo("您確定進去六本木商城嗎?");
			} else {
				cm.sendOk("這裡很危險，請注意好安全！");
				cm.dispose();
				return;
			}
			break;
		case 1:
			cm.warp(802000800,0);
			cm.dispose();
			return;
		case 2:
			cm.dispose();
			return;
	}
}