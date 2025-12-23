var status = -1;

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
			if(cm.getMapId() == 103000100) {
				cm.sendYesNo("您確定要前往宅邸嗎？");
			} else {
				cm.sendOk("不給糖就搗蛋!!!");
				cm.dispose();
				return;
			}
			break;
		case 1:
			cm.warp(229010000);
			cm.dispose();
			return;
		default:
			cm.dispose();
			return;
	}
}