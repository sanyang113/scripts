/*
	NPC Name: 		Dida
	Description: 		Quest - Break of Blaze
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1) {
	    status++;
	}
	if (status == 0) {
	    qm.sendNext("好吧，那你也要去參戰了。謝謝...只是讓你知道，敵人可能比你曾經面對過的任何東西都更強大，你準備好了嗎？");
	} else if (status == 1) {
	    qm.warp(802000800, 0);
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {
}