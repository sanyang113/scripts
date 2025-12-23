var status = -1;
var minLevel = 51;
var maxLevel = 250;

var minPartySize = 5;
var maxPartySize = 6;

var sel = -1;

var name = "女神之塔"; //組隊任務名稱

function start() {
	action(1,0,0);
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

	if (cm.getMapId() == 920010000) { //inside orbis pq
		cm.sendOk("我們必須拯救他 需要20個雲的碎片");
		cm.dispose();
		return;
	}
	
	if(status == 0) {
        var msg = "這裡是 #b" + name + "#k 組隊任務\r\n\r\n";
        msg += "等級限制：#r" + minLevel + " #k以上\r\n"
        msg += "時間限制：#r60 #k分鐘\r\n"
        msg += "人數限制：#r5~6#k 人\r\n"
        msg += "\r\n#L0#我要進行#b " + name + "#k";
        msg += "\r\n#L1#我要尋找#b " + name + "#k 夥伴";
        msg += "\r\n#L2#我要兌換#b " + name + "#k 特殊獎勵";
        cm.sendNext(msg);
        return;
	} else if (status == 1) {
		sel = selection;
		if(sel == 0) {
			cm.sendYesNo("確定要入場嗎？");
		} else if(sel == 1) {
			cm.sendOk("您要尋找哪些跟你一起玩的夥伴呢？\r\n\r\n#b#L0#我要尋找速刷場夥伴。\r\n#L1#我要尋找歡樂場夥伴。");
		} else if(sel == 2) {
			cm.dispose();
			cm.openNpc(cm.getNpc(), "[組隊]女神之塔獎勵");
			return;
		}
	} else if(status == 2) {
		if(sel == 0) {
			for (var i = 4001044; i < 4001064; i++) {
				cm.removeAll(i); //holy
			}
			if (cm.getParty() == null) { // No Party
				cm.sendSimple("你貌似沒有達到要求...:\r\n\r\n#r要求: " + minPartySize + " 玩家成員, 每個人的等級必須在 " + minLevel + " 到 等級 " + maxLevel + ".");
				cm.dispose();
				return;
			} else if (!cm.isLeader()) { // Not Party Leader
				cm.sendSimple("如果你想做任務，請 #b隊長#k 跟我談.");
				cm.dispose();
				return;
			} else {
				// Check if all party members are within PQ levels
				var party = cm.getParty().getMembers();
				var mapId = cm.getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				var it = party.iterator();
				
				while (it.hasNext()) {
					var cPlayer = it.next();
					if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
						levelValid += 1;
					} else {
						next = false;
					}
					if (cPlayer.getMapid() == mapId) {
						inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
					}
				}
				if (party.size() > maxPartySize || inMap < minPartySize) {
					next = false;
				}
				if (next) {
					var em = cm.getEventManager("OrbisPQ");
					if (em == null) {
						cm.sendSimple("找不到腳本請聯絡GM#b\r\n");
					} else {
						var prop = em.getProperty("state");
						if (prop.equals("0") || prop == null) {
							em.startInstance(cm.getParty(), cm.getMap());
							cm.dispose();
							return;
						} else {
							cm.sendSimple("其他隊伍已經在裡面做 #r組隊任務了#k 請嘗試換頻道或者等其他隊伍完成。");
							cm.dispose();
							return;
						}
					}
				} else {
					cm.sendSimple("你的隊伍貌似沒有達到要求...:\r\n\r\n#r要求: " + minPartySize + " 玩家成員, 每個人的等級必須在 " + minLevel + " 到 等級 " + maxLevel + "");
					cm.dispose();
					return;
				}
			}
		} else if(sel == 1) {
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