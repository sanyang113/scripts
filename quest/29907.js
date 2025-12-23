var status = -1;

function start(mode, type, selection) {
	qm.sendNext("謝謝你。");
	qm.gainItem(1142067, 1);
	qm.forceCompleteQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.dispose();
}