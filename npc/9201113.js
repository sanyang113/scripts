var minLevel = 140;
var maxLevel = 250;
var status = -1;
var sel = -1;
var name = "守護者城堡"; //組隊任務名稱
var haveGM = false;
var minPartySize = 5;
var requireitem = 4001256;
var quantity = 100;

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
			cm.sendOk("#b#L0#我想要進入副本\r\n#L1#我想尋找組隊任務小夥伴#l\r\n#L2#我要返回地圖");
			return;
		case 1:
			sel = selection;
			if(sel == 0) {
				cm.sendYesNo("確定要入場嗎？");
			} else if(sel == 1) {
				cm.sendOk("您要尋找哪些跟你一起玩的夥伴呢？\r\n\r\n#b#L0#我要尋找速刷場夥伴。\r\n#L1#我要尋找歡樂場夥伴。");
			} else if(sel == 2) {
				var eim = cm.getDisconnected("CWKPQ");
				if (eim == null) {
					cm.sendOk("你無法返回地圖");
					cm.safeDispose();
				} else {
					var count = eim.getProperty("restRevive");
					if(count > 0) {
						status = 86;
						cm.sendYesNo("遠征副本還有" + count + "次死亡返回機會，您確定要使用嗎？\r\n #r#e※非死亡斷線請善用@dcback!!!\r\n返回次數為全遠征隊伍共用，使用前請與隊友溝通是否使用!!!");
						break;
					} else {
						cm.sendOk("遠征任務已經開始了，您的隊伍沒有返回機會了QQ");
						cm.dispose();
						return;
					}
				}
			}
			return;
		case 2:
			if(sel == 0) {
				if (cm.getParty() == null) { // No Party
					cm.sendOk("請組隊後再來與我交談。");
					cm.dispose();
					return;
				}
				var next = true;
				var inMap = 0;
				var mapId = cm.getMapId();
				var party = cm.getParty().getMembers();
				var it = party.iterator();
				while (it.hasNext()) {
					var cPlayer = it.next();
					if (cPlayer.getLevel() < minLevel && cPlayer.getLevel() > maxLevel) {
						next = false;
					}
					if (cPlayer.getMapid() == mapId) {
						inMap += 1;
					}
					if(cPlayer.getJobId() == 900) {
						haveGM = true;
					}

				}
				if (inMap < minPartySize) {
					next = false;
				}
				var haveItem = true;
				for(var i = 0; i < 5; i++) {
					var rquire = requireitem + i;
					if(!cm.haveItem(rquire, quantity)) {
						haveItem = false;
					}
				}
				if(!haveItem && !cm.getPlayer().isGM()) {
					var msg = "您沒有足夠的材料，需要";
					for(var i = 0; i < 5; i++) {
						var require = requireitem + i;
						msg += "\r\n#b#i" + require + ":##t" + require + "#";
					}
					msg += "#r\r\n\r\n 各100個";
					cm.sendOk(msg);
					cm.dispose();
					return;
				}

				if (next || haveGM) {
					var em = cm.getEventManager("CWKPQ");
					if (em == null) {
						cm.sendOk("找不到腳本，請聯繫GM！");
						cm.dispose();
						return;
					} else {
						var prop = em.getProperty("state");
						if (prop == null || prop.equals("0")) {
							if (!cm.isLeader()) { // Not Party Leader
								cm.sendOk("請你的隊長來跟我說。");
								cm.dispose();
								return;
							}
							if(em.getName() == "CWKPQ" && cm.getParty().getJobs() < 1) {
								cm.sendOk("隊伍中必須包含五大職業");
								cm.dispose();
								return;
							}
							for(var i = 0; i < 5; i++) {
								var require = requireitem + i;
								cm.gainItem(require, -100);
							}
							em.startInstance(cm.getParty(), cm.getMap());
						}
						cm.dispose();
						return;
					}
				} else {
					cm.sendOk("隊伍條件不符，請確認隊伍中是否包含五大職業以及隊伍成員必須140等以上，且隊伍人數必須至少5人。");
					cm.dispose();
					return;
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
			return;
		case 87:
			var eim = cm.getDisconnected("CWKPQ");
			var count = eim.getProperty("restRevive");
			if(count > 0) {
				count--;
				eim.registerPlayer(cm.getPlayer());
				eim.setProperty("restRevive",count);
				cm.dispose();
			}
			break;
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