var status = -1;
var sel = -1;
var rankType = -1;
var job = [
	"英雄","聖騎士","黑騎士","火毒大魔導士","冰雷大魔導士","主教","箭神","神射手","夜使者","暗影神偷","拳霸","槍神","聖魂劍士","烈焰巫師","破風使者","暗夜行者","閃雷悍將","狂狼勇士"
]

function start() {
	action(1, 0, 0)
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendSimple("#b你好 #k#h  ##e  #b我是排名系統.#k\r\n#L1##d玩家排名#l\r\n#L3##b職業排名#l\r\n#L4##b傷害排名#l");
		// cm.sendSimple("#b你好 #k#h  ##e  #b我是排名系統.#k\r\n#L1##d玩家排名#l\r\n#L3##b職業排名#l\r\n#L4##b傷害排名#l\r\n#L6#上週傷害排名#l");
	} else if (status == 1) {
		if (selection == 0) {
			cm.displayGuildRanks();
			cm.dispose();
		} else if (selection == 1) {
			cm.showlvl();
			cm.dispose();
		} else if (selection == 2) {
			cm.showmeso();
			cm.dispose();
		} else if (selection == 3) {
			sel = selection;
			var msg = "#L1##d劍士#k排名\r\n";
			msg += "#L2##d法師#k排名\r\n";
			msg += "#L3##b弓箭手#k排名\r\n";
			msg += "#L4##b盜賊#k排名\r\n";
			msg += "#L5##r海盜#k排名\r\n";
			msg += "#L6##r狂狼勇士#k排名\r\n";
			msg += "#L7##r聖魂劍士#k排名\r\n";
			msg += "#L8##r烈焰巫師#k排名\r\n";
			msg += "#L9##r破風使者#k排名\r\n";
			msg += "#L10##r暗夜行者#k排名\r\n";
			msg += "#L11##r閃雷悍將#k排名\r\n";
			cm.sendSimple(msg);
		} else if (selection == 4) {
			sel = selection;
			var msg = "";
			for(var i = 0; i < job.length; i++) {
				msg += "#L" + i + "##d" + job[i] + "#k排名\r\n";
			}
			cm.sendSimple(msg);
		} else if(selection == 6) {
			sel = selection;
			var msg = "";
			for(var i = 0; i < job.length; i++) {
				msg += "#L" + i + "##d" + job[i] + "#k排名\r\n";
			}
			cm.sendSimple(msg);
		}
	} else if (status == 2) {
		if(sel == 3) {
			cm.sendNext(cm.ShowJobRank(selection));
			cm.dispose();
		} else if(sel == 4) {
			cm.sendNext(cm.getDpmRankCached(selection));
			cm.dispose();
		} else if(sel == 6) {
			cm.sendNext(cm.getPreviousDpmRank(selection));
			cm.dispose();
		}
	} else {
		cm.dispose();
	}
}
