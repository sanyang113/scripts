/*
	Red Sign - 101st Floor Eos Tower (221024500)
*/

var status = -1;
var minLevel = 35; // 35
var maxLevel = 250; // 65

var minPartySize = 5;
var maxPartySize = 6;

var sel = -1;
var name = "玩具城101"; //組隊任務名稱

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

    if (status == 0) {
            var msg = "這裡是 #b" + name + "#k 組隊任務\r\n\r\n";
            msg += "等級限制：#r" + minLevel + " #k以上\r\n"
            msg += "時間限制：#r60 #k分鐘\r\n"
        	msg += "人數限制：#r5~6#k 人\r\n"
            msg += "\r\n#L0#我要進行#b " + name + "#k";
            msg += "\r\n#L2#我要尋找#b " + name + "#k 夥伴";
            msg += "\r\n#L3#我要兌換#b " + name + "#k 特殊獎勵";
            cm.sendNext(msg);
	} else if(status == 1) {
		sel = selection;
		if(sel == 0) {
			cm.sendYesNo("確定要入場嗎？");
		} else if(sel == 1) {
			var cmp = cm.getPlayer().getOneInfo(1202, "cmp");
            if (cm.haveItem(1022073, 1)) {
                cm.sendOk("做好了。");
            } else if (!cm.canHold(1022073, 1)) {
                cm.sendOk("請空出一些裝備攔空間。");
            } else if (cmp != null && parseInt(cmp) >= 35) {
                if (cm.getPlayer().getOneInfo(1202, "have") == null || cm.getPlayer().getOneInfo(1202, "have").equals("0")) {
                    cm.gainItem(1022073, 1, true); //should handle automatically for "have"
                } else {
                    cm.sendOk("你已經有#t1022073#了.");
                }
            } else {
                cm.sendOk("你還沒有做35次PQ 目前做了: " + (cmp == null ? "0" : cmp) + "次");
            }
            cm.dispose();
            return;
		} else if(sel == 2) {
			cm.sendOk("您要尋找哪些跟你一起玩的夥伴呢？\r\n\r\n#b#L0#我要尋找速刷場夥伴。\r\n#L1#我要尋找歡樂場夥伴。");
		} else if(sel == 3) {
			cm.dispose();
			cm.openNpc(cm.getNpc(),"[組隊]玩具城101獎勵");
		}
	} else if(status == 2) {
		if (sel == 0) {
			cm.removeAll(4001022);
			cm.removeAll(4001023);
			if (cm.getParty() == null) { // No Party
				cm.sendSimple("你的隊伍需要#b 6 #k個人,等級必須在 #b" + minLevel + "#k 以上");
			} else if (!cm.isLeader()) { // Not Party Leader
				cm.sendSimple("如果你想做任務，請 #b隊長#k 跟我談.");
			} else {
				if(sel == 0) {
					// Check if all party members are within PQ levels
					var party = cm.getParty().getMembers();
					var mapId = cm.getMapId();
					var next = true;
					var levelValid = 0;
					var inMap = 0;
					var it = party.iterator();
					while (it.hasNext()) {
						var cPlayer = it.next();
						if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel) || cPlayer.getJobId() == 900 || cm.getPlayer().isGM()) {
							levelValid += 1;
						} else {
							next = false;
						}
						if (cPlayer.getMapid() == mapId) {
							inMap += (cPlayer.getPlayer().isGM() ? 6 : 1);
						}
					}
					if (party.size() > maxPartySize || inMap < minPartySize) {
						next = false;
					}

					if (next) {
						var em = cm.getEventManager("LudiPQ");
						if (em == null) {
							cm.sendSimple("找不到腳本請聯絡GM");
						} else {
							var prop = em.getProperty("state");
							if (prop.equals("0") || prop == null) {
								em.startInstance(cm.getParty(), cm.getMap());
								//扣除隊員物品
								//cm.gainPartyItems(itemid, -quantity, party);
								cm.removeAll(4001022);
								cm.removeAll(4001023);
								cm.dispose();
								return;
							} else {
								cm.sendSimple("其他隊伍已經在裡面做 #r組隊任務了#k 請嘗試換頻道或者等其他隊伍完成。");
							}
						}
					} else {
						cm.sendSimple("你的隊伍需要#b 6 #k個人,等級必須在 #b" + minLevel + "#k 以上");
					}
					cm.dispose();
					return;
				}
			}
		} else if(sel == 2) {
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

function other() {
    var msg = "";
    msg += "\r\n#L30678#我可以在" + name + "組隊任務中得到什麼呢？";
    msg += "\r\n#L30679#我想尋找組隊任務小夥伴";
    return msg;
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