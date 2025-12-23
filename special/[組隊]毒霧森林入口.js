var status = -1;
var minLevel = 50;
var maxLevel = 250;
var name = "毒霧森林"; //組隊任務名稱

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	    cm.givePartyItems(4001161, 0, true);
	    cm.givePartyItems(4001162, 0, true);
	    cm.givePartyItems(4001163, 0, true);
	    cm.givePartyItems(4001169, 0, true);
	    cm.givePartyItems(2270004, 0, true);
            var msg = "這裡是 #b" + name + "#k 組隊任務\r\n\r\n";
            msg += "等級限制：#r" + minLevel + " #k以上\r\n"
            msg += "時間限制：#r30 #k分鐘\r\n"
            msg += "人數限制：#r3~6#k 人\r\n"
            msg += "\r\n#L2#我要進行#b " + name + "#k";
            msg += "\r\n#L3#我要尋找#b " + name + "#k 夥伴";
            msg += "\r\n#L4#我要兌換#b " + name + "#k 特殊獎勵";
            cm.sendNext(msg);
    } else if (status == 1) {
		if (selection == 0) {
			if (!cm.haveItem(1032060) && cm.haveItem(4001198, 20)) {
			cm.gainItem(1032060,1, true);
			cm.gainItem(4001198, -20);
			} else {
				cm.sendOk("你需要20個亞泰爾碎片,或者是你已經有亞泰爾耳環了");
			}
			cm.dispose();
			return;
		} else if (selection == 1){
			if (cm.haveItem(1032060) && !cm.haveItem(1032061) && cm.haveItem(4001198, 30)) {
			cm.gainItem(1032060,-1);
			cm.gainItem(1032061, 1, true);
			cm.gainItem(4001198, -30);
			} else {
				cm.sendOk("你需要30個亞泰爾碎片跟亞泰爾耳環,或者是你已經有藍色亞泰爾耳環了");
			}
			cm.dispose();
			return;
		} else if (selection == 2) {
			if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
				cm.sendOk("找您的隊長來和我談話。");
				cm.dispose();
				return;
			} else {
				var party = cm.getPlayer().getParty().getMembers();
				var mapId = cm.getPlayer().getMapId();
				var next = true;
				var size = 0;
				var it = party.iterator();
				while (it.hasNext()) {
					var cPlayer = it.next();
					var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
							if (ccPlayer == null || ccPlayer.getLevel() < minLevel || ccPlayer.getLevel() > maxLevel) {
						next = false;
						break;
					}
					size += (ccPlayer.isGM() ? 4 : 1);
				}	
				if (next && size >= 3) {
					var em = cm.getEventManager("Ellin");
					if (em == null) {
						cm.sendOk("當前副本有問題，請聯絡管理員....");
						cm.dispose();
						return;
					} else {
						var prop = em.getProperty("state");
						if (prop.equals("0") || prop == null) {
							em.startInstance(cm.getParty(), cm.getMap());
							cm.dispose();
							return;
						} else {
							cm.sendOk("裡面已經有人了,請你稍後在進入看看,或者是換頻");
							cm.dispose();
							return;
						}
					}
				} else {
					cm.sendOk("你的隊伍3個(含)以上" + minLevel + "等的隊員才能進入");
					cm.dispose();
					return;
				}
			}
		} else if(selection == 3) {
			cm.sendOk("您要尋找哪些跟你一起玩的夥伴呢？\r\n\r\n#b#L0#我要尋找速刷場夥伴。\r\n#L1#我要尋找歡樂場夥伴。");
		} else if(selection == 4) {
			cm.dispose();
			cm.openNpc(cm.getNpc(),"[組隊]毒霧森林獎勵");
			return;
		}
    } else if(status == 2) {
		if (cm.getPlayer().isPartyMessage()) {
			cm.getPlayer().setPartyMessage();
			cm.sendOk(Message(selection));
		} else {
			cm.sendOk("廣播冷卻時間剩餘:" + cm.getPlayer().getPartyMessage() + " 秒。");
		}
		cm.dispose();
		return;
	}
}

function Message(type) {
    cm.YellowMessage(cm.getPlayer().getName() + " : 【" + name + "組隊任務】(Lv." + minLevel + " ~ Lv." + maxLevel + ") 徵求" + (type == 0 ? "【速刷場】小夥伴，快來一起玩吧！" : "【歡樂場】小夥伴，快來一起玩吧！"));
    var field = [
        ["喊話內容:",
            "我們在 【" + cm.getPlayer().getClient().getChannel() + "】 頻道的 " + name + " 組隊任務(Lv." + minLevel + " ~ Lv." + maxLevel + ")，缺" + (type == 0 ? "【速刷場】小夥伴，快來一起玩吧！":"【歡樂場】小夥伴，快來一起玩吧！")]
    ];
    cm.sendPartyDiscordMessage("玩家『" + cm.getPlayer().getName() + "』在『" + cm.getPlayer().getClient().getChannel() + "頻』的『" + name + "組隊任務(Lv." + minLevel + " ~ Lv." + maxLevel + ")』尋求夥伴，快一起來玩吧！");
    return "已經幫您開廣了，也同步發送到Discord群尋找組隊小夥伴囉！希望你們玩的開心！";
}