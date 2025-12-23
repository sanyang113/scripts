var status = -1;
var minLevel = 71; // 35
var maxLevel = 250; // 65

var minPartySize = 4;
var maxPartySize = 4;

var sel = -1;
var name = "羅密歐與茱麗葉"; //組隊任務名稱

function start() {
    action(1, 0, 0);
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
			switch(cm.getPlayer().getMapId()) {
				case 261000011:
        			var msg = "這裡是 #b" + name + "#k 組隊任務\r\n\r\n";
        			msg += "等級限制：#r" + minLevel + " #k以上\r\n"
        			msg += "時間限制：#r60 #k分鐘\r\n"
        			msg += "人數限制：#r4#k 人\r\n"
        			msg += "\r\n#L0#我要進行#b " + name + "#k";
        			msg += "\r\n#L1#我要尋找#b " + name + "#k 夥伴";
        			msg += "\r\n#L2#我要兌換#b " + name + "#k 特殊獎勵";
        			msg += "\r\n#L3#我要合成#b " + name + "#k 特殊獎勵";
        			cm.sendNext(msg);
        			return;
				case 926100000:
					var em = cm.getEventManager("Romeo");
					if(em.getProperty("bossbattle").equals("1")) {
						cm.warp(926100401,0);
						break;
					}
					cm.sendOk("你應該嘗試在這裡調查各地。看看庫中的文件，直到你可以找到入口實驗室.");
					break;
				case 926100001:
					cm.sendOk("請消除所有的怪物。");
					break;
				case 926100100:
					cm.sendOk("請把燒杯裡的溢體裝滿。");
					break;
				case 926100200:
					if (cm.haveItem(4001130,1)) {
						cm.sendOk("哦，我的信找到了，謝謝！");
						cm.gainItem(4001130,-1);
						em.setProperty("stage", "1");
					} else if (cm.haveItem(4001134,1) && cm.haveItem(4001135,1)) {
						cm.gainItem(4001134,-1);
						cm.gainItem(4001135,-1);
						cm.sendOk("謝謝你，已經過關了。.");
						em.setProperty("stage4", "2");
					} else {
						cm.sendOk("現在我們必須停止衝突，請幫我找出#t4001134# 和 #t4001135#。");
					}
					break;
				case 926100300:
					cm.sendOk("我們一定要到實驗室的頂部.");
					break;
				case 926100400:
					cm.sendOk("當你準備好了，我們要快去救救我的愛人.");
					break;
				case 926100401:
					cm.warpParty(926100500); //urete
					break;
				}
			if (cm.getPlayer().getMapId() != 261000011) {
				cm.dispose();
				return;
			}
        case 1:
            sel = selection;
            if(sel == 0) {
                cm.sendYesNo("確定要入場嗎?");
            } else if(sel == 1) {
                cm.sendOk("您要尋找哪些跟你一起玩的夥伴呢？\r\n\r\n#b#L0#我要尋找速刷場夥伴。\r\n#L1#我要尋找歡樂場夥伴。");
            } else if(sel == 2) {
				cm.dispose();
				cm.openNpc(cm.getNpc(),"[組隊]羅密歐與茱麗葉獎勵");
				return;
			} else if(sel == 3) {
				cm.dispose();
				cm.openNpc(cm.getNpc(),"[組隊]羅密歐與茱麗葉獎勵2");
				return;
			}
            return;
		case 2:
			if(sel == 0) {
				var em = cm.getEventManager("Romeo");
				if (em == null) {
					cm.sendOk("找不到腳本，請聯繫GM！");
					cm.dispose();
					return;
				}
				cm.removeAll(4001130);
				cm.removeAll(4001131);
				cm.removeAll(4001132);
				cm.removeAll(4001133);
				cm.removeAll(4001134);
				cm.removeAll(4001135);
				if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
					cm.sendOk("請找隊長來和我談。");
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
						size += (ccPlayer.isGM() ? 6 : 1);
					}	
					var prop = em.getProperty("state");
                    if (prop == null || prop.equals("0")) {
                        if (next && (cm.getPlayer().isGM() || size >= 4)) {
                            em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                        } else {
							cm.sendOk("需要" + minPartySize + "個人，等級必須是" + minLevel + "到" + maxLevel + "級");
							cm.dispose();
							return;
                        }
                    } else {
                        cm.sendOk("已有組隊正在嘗試任務。");
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
			}
			cm.dispose();
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