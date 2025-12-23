var status = -1;
var sel;
var selected;
function start() {
	action(1,0,0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		return;
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			cm.dispose();
			return;
		}
		if (status == 0) {
		var msg = "#d";
		if (cm.getPlayer().getLevel() >= 25) { 
			msg += "#L0#任務：艾溫的玻璃鞋";
			if (cm.getQuestRecord(2017) != null) {
				if (cm.getQuestRecord(2017).getQuest().canComplete(cm.getPlayer(), null)) {
					msg += " (可完成)";
				} else if (cm.getQuestRecord(2017).getStatus() == 1) {
					msg += " (進行中)";
				}
			}
			msg += "\r\n\r\n";
		}
			msg += "#L1#聽說你能製作出某些珍貴的物品...";
			cm.sendOk(msg);
		} else if (status == 1) {
			sel = selection;
			if (sel == 0) {
			if (cm.getQuestRecord(2017) == null || cm.getQuestRecord(2017).getStatus() == 2) {	//modify by 小哥
			cm.sendNext("幾天前在去勇士之村的路上, 遭到渾身都是火的怪物襲擊, 害我把寶貴的玻璃鞋弄丟了, 保存了很久的東西, 真想找回來。");
			} else if (cm.getQuestRecord(2017).getQuest().canComplete(cm.getPlayer(), null)) {
				cm.sendOk("啊! 那個閃爍的東西是我丟掉的玻璃鞋。能把那玻璃鞋還給我嗎?反正它對你來說也沒什麼用處。\r\n\r\n#fUI/UIWindow/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow/QuestIcon/8/0# 4000 exp\r\n\r\n#fUI/UIWindow/QuestIcon/5/0#");
			} else {
				cm.sendOk("還沒找到我那珍貴的玻璃鞋吧。在勇士之村周圍出現的, 渾身都使獲球的怪物拿走了我的玻璃鞋。請一定要幫我找回來, 拜託了。");
				cm.dispose();
				return;
			}
			} else if (sel == 1) {
			if (cm.getPlayerStat("LVL") >= 40) {
			cm.sendNext("是啊...我是仙女的煉金大師。但是，仙女不應該在一個人的時間很長一段時間的接觸......。如果你得到了我的資料，我會讓你成為一個特殊的道具。");
			} else {
			cm.sendOk("我可以做出稀有，貴重物品，但不幸的是，我不能讓它像你這樣的陌生人。");
			cm.dispose();
			}
			}
		} else if (status == 2) {
			if (sel == 0) {
				if (cm.getQuestRecord(2017).getQuest().canComplete(cm.getPlayer(), null)) {
					cm.completeQuest(2017);
					cm.dispose();
					return;
				} else {
					cm.sendAcceptDecline("我們妖精一族對閃爍的漂亮東西很著迷, 人類可能會覺得無關緊要, 可是對我來說, 那個東西真的很重要。雖然不想請求人類的幫助, 請幫助我吧。");
				}
			} else if (sel == 1) {
				cm.sendSimple("你想要做什麼#b\r\n#L0#月石#l\r\n#L1#星石#l\r\n#L2#黑羽毛#l");
			}
		} else if (status == 3) {
			if (sel == 0) {
				cm.startQuest(2017);
				cm.dispose();
				return;
			} else if (sel == 1) {
			selected = selection;
			if (selection == 0) {
			item = "月石";
			cm.sendYesNo("所以，你想要做" + item + "? 那麼你需要的材料有: #b#t4011000##k, #b#t4011001##k,\r\n#b#t4011002##k, #b#t4011003##k, #b#t4011004##k, #b#t4011005##k, 和 #b#t4011006##k. 然後還有 10,000 楓幣");
			} else if (selection == 1) {
			item = "星石";
			cm.sendYesNo("所以，你想要做" + item + "? 那麼你需要的材料有: #b#t4021000##k, #b#t4021001##k, #b#t4021002##k, #b#t4021003##k, #b#t4021004##k, #b#t4021005##k, #b#t4021006##k, #b#t4021007##k 和 #b#t4021008##k. 然後還有 15,000 楓幣");
			} else if (selection == 2) {
			item = "黑羽毛";
			cm.sendYesNo("所以，你想要做" + item + "? 那麼你需要的材料有: #b1 #t4001006##k, #b1 #t4011007##k 和 #b1 #t4021008##k. 然後還有 30,000 楓幣");
			}
			}
		} else if (status == 4) {
			if (sel == 0) {
				
			} else if (sel == 1) {
			if (selected == 0) {
			if (cm.haveItem(4011000) && cm.haveItem(4011001) && cm.haveItem(4011002) && cm.haveItem(4011003) && cm.haveItem(4011004) && cm.haveItem(4011005) && cm.haveItem(4011006) && cm.getMeso() > 10000) {
				cm.gainMeso(-10000);
				cm.gainItem(4011000, -1);
				cm.gainItem(4011001, -1);
				cm.gainItem(4011002, -1);
				cm.gainItem(4011003, -1);
				cm.gainItem(4011004, -1);
				cm.gainItem(4011005, -1);
				cm.gainItem(4011006, -1);
				cm.gainItem(4011007, 1);
				cm.sendNext("做好了你要的 " + item + "。");
			} else {
				cm.sendNext("請準備好材料和錢再來找我。");
			}
			} else if (selected == 1) {
			if (cm.haveItem(4021000) && cm.haveItem(4021001) && cm.haveItem(4021002) && cm.haveItem(4021003) && cm.haveItem(4021004) && cm.haveItem(4021005) && cm.haveItem(4021006) && cm.haveItem(4021007) && cm.haveItem(4021008) && cm.getMeso() > 15000) {
				cm.gainMeso(-15000);
				cm.gainItem(4021000, -1);
				cm.gainItem(4021001, -1);
				cm.gainItem(4021002, -1);
				cm.gainItem(4021003, -1);
				cm.gainItem(4021004, -1);
				cm.gainItem(4021005, -1);
				cm.gainItem(4021006, -1);
				cm.gainItem(4021007, -1);
				cm.gainItem(4021008, -1);
				cm.gainItem(4021009, 1);
				cm.sendNext("做好了你要的 " + item + "。");
			} else {
				cm.sendNext("請準備好材料和錢再來找我。");
			}
			} else if (selected == 2) {
			if (cm.haveItem(4001006) && cm.haveItem(4011007) && cm.haveItem(4021008) && cm.getMeso() > 30000) {
				cm.gainMeso(-30000);
				cm.gainItem(4001006, -1);
				cm.gainItem(4011007, -1);
				cm.gainItem(4021008, -1);
				cm.gainItem(4031042, 1);
				cm.sendNext("做好了你要的 " + item + "。");
			} else {
				cm.sendNext("請準備好材料和錢再來找我。");
			}
			}
			cm.dispose();
			}
		}
	}
}