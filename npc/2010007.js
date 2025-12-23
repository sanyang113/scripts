/* guild creation npc */
var status = -1;
var sel;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;

	if (status == 0)
		cm.sendSimple("你想要做什麼？\r\n#b#L0#創建公會#l\r\n#L1#解散公會#l\r\n#L3#轉移公會會長#l#k");
	else if (status == 1) {
		sel = selection;
		if (selection == 0) {
			if (cm.getPlayerStat("GID") > 0) {
				cm.sendOk("你不能創建一個新的工會.");
				cm.dispose();
			} else
				cm.sendYesNo("你確定要創建公會嗎?");
		} else if (selection == 1) {
			if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
				cm.sendOk("你不是公會會長所以不能解散公會");
				cm.dispose();
			} else
				cm.sendGetText("你確定要解散你的公會?你將無法恢復並且GP消失，卻要解散公會，請輸入『我要解散公會』");
		} else if (selection == 2) {
			if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
				cm.sendOk("你不是公會會長所以不能擴充人數");
				cm.dispose();
			} else
				cm.sendYesNo("擴充公會人數 #b5#k 要 #b250,000 楓幣#k, 你確定要擴充嗎?");
		} else if (selection == 3) {
			cm.dispose();
			cm.openNpc(cm.getNpc(), "[功能]公會長轉移");
			return;
		}
	} else if (status == 2) {
		if (sel == 0 && cm.getPlayerStat("GID") <= 0) {
			cm.genericGuildMessage(1);
			cm.dispose();
		} else if (sel == 1 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
			if (cm.getText() != "我要解散公會") {
				cm.sendOk("輸入文字錯誤，請重新再試");
				cm.dispose();
				return;
			}
			cm.disbandGuild();
			cm.dispose();
		} else if (sel == 2 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
			cm.increaseGuildCapacity();
			cm.dispose();
		}
	}
}