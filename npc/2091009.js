var status = -1;

function start() {
	if (cm.isQuestActive(21747))
		cm.sendGetText("若想進入，#e#b就要說出暗號#k#n");
	else
		cm.dispose();
}

function action(mode, type, selection) {
    if(mode != 1) {
        cm.dispose();
    } else {
        status++;
		if (status == 0) {
			if (cm.getText() == "道可道非常道") {
				cm.warp(925040100);
			} else {
				cm.sendNext("暗號好像不對");
			}
			cm.dispose();
		}
    }
}
