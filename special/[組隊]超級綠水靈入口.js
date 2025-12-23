var status = -1;
var sel = -1;
var name = "超級綠水靈"; //組隊任務名稱

var minLevel = 21;
var maxLevel = 250;

var haveGM = false;

function start() {
	action(1,0,0);
}


function action(mode, type, selection) {
	if (mode == 1) {
        status++;
    } else if (mode == 0) {
        cm.dispose();
        return;
    } else {
        cm.dispose();
        return;
    }

	switch(status) {
		case 0:
            var msg = "這裡是 #b" + name + "#k 組隊任務\r\n\r\n";
            msg += "等級限制：#r" + minLevel + " #k以上\r\n"
            msg += "時間限制：#r30 #k分鐘\r\n"
            msg += "人數限制：#r4#k 人\r\n"
            msg += "\r\n#L0#我要進行#b " + name + "#k";
            msg += "\r\n#L1#我要尋找#b " + name + "#k 夥伴";
            msg += "\r\n#L2#我要兌換#b " + name + "#k 特殊獎勵";
            cm.sendNext(msg);
            break;
		case 1:
			sel = selection;
			if(sel == 0) {
				cm.sendYesNo("確定要入場嗎？");
			} else if(sel == 1) {
				cm.sendOk("您要尋找哪些跟你一起玩的夥伴呢？\r\n\r\n#b#L0#我要尋找速刷場夥伴。\r\n#L1#我要尋找歡樂場夥伴。");
			} else if(sel == 2) {
				cm.dispose();
				cm.openNpc(cm.getNpc(),"[組隊]超級綠水靈獎勵");
				return;
			}
			return;
		case 2:
			if(sel == 0) {
				cm.removeAll(4001007);
				cm.removeAll(4001008);
				if (cm.getParty() == null) { // No Party
					cm.sendOk("請組隊再來找我");
				} else if (!cm.isLeader()) { // Not Party Leader
					cm.sendOk("請叫你的隊長來找我!");
				} else {
				// Check if all party members are within Levels 21-30
					var party = cm.getParty().getMembers();
					var mapId = cm.getMapId();
					var next = true;
					var inMap = 0;

					var it = party.iterator();
					while (it.hasNext()) {
						var cPlayer = it.next();
						if ((cPlayer.getLevel() < minLevel || cPlayer.getLevel() > maxLevel)) {
							next = false;
						}
						if (cPlayer.getMapid() == mapId) {
							inMap += 1;
						}
						if(cPlayer.getJobId() == 900) {
							haveGM = true;
						}
					}
					//if (party.size() > 4 || inMap < 3) {
					//	next = false;
					//}
					if (next) {
						var em = cm.getEventManager("KerningPQ");
						if (em == null) {
							cm.sendOk("找不到腳本，請聯繫GM！");
							cm.dispose();
							return;		
						} else {
							var prop = em.getProperty("state");
							if (prop == null || prop.equals("0")) {
								em.startInstance(cm.getParty(),cm.getMap());
							} else {
								cm.sendOk("已經有隊伍在裡面挑戰了。");
								cm.dispose();
								return;
							}
						}
					} else {
						cm.sendOk("你的隊伍需要四個人,等級必須在 #b" + minLevel + "#k 以上,請確認你的隊友有沒有都在這裡,或是裡面已經有人了!");
						cm.dispose();
						return;
					}
				}
				cm.dispose();
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
			return;
		default:
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