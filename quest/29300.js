
var status = -1;

function start(mode, type, selection) {
	//if (qm.getPlayer().getLevel() >= 180 && ((qm.getPlayer().getJob() / 100) | 0) == 1||qm.getPlayer().getLevel() >= 180 && ((qm.getPlayer().getJob() / 100) | 0) == 11) {
	//	qm.forceStartQuest();
	//	qm.dispose();
	//}
	//qm.dispose();
}

function end(mode, type, selection) {
	if (qm.canHold(1142009,1) && !qm.haveItem(1142009,1) && qm.getPlayer().getLevel() >= 200 && ((qm.getPlayer().getJob() / 100) | 0) == 1||
		qm.canHold(1142009,1) && !qm.haveItem(1142009,1) && qm.getPlayer().getLevel() >= 200 && ((qm.getPlayer().getJob() / 100) | 0) == 11
		) {
		qm.gainItem(1142009,1);
		//qm.teachSkill(1005, qm.getPlayer().getSkillLevel(1005), 1);
		//qm.forceStartQuest();
		qm.forceCompleteQuest();
	}
	qm.dispose();
}