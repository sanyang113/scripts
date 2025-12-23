/*
Map : Mu Lung Training Center
Npc : So Gong
Desc : Training Center Start
 */

var status = -1;
var sel;
var mapid;

function start() {
	mapid = cm.getMapId();

	if (mapid == 925020001) {
		cm.sendSimple("我們主人是武陵道場的師傅。你想要挑戰我們師傅？不要說我沒提醒你他是最強的。 \r\n #b#L0#我要單人挑戰#l \r\n #L1#我要組隊進入#l \r\n #L2#我要兌換道具#l \r\n #L5#什麼是武陵道場?#l");
	} else if (isRestingSpot(mapid)) {
		cm.sendSimple("我很驚訝，您已經安全的達到這層了，我可以向你保證，它沒有這麼容易過關的，你想要堅持下去？#b \r\n #L0#是，我想繼續。#l \r\n #L1# 我想離開#l \r\n #L2# 我想要保存這一次的紀錄下一次用。#l");
	} else {
		cm.sendYesNo("你想要離開了？？");
	}
}

function action(mode, type, selection) {
	if (mapid == 925020001) {
		if (mode == 1) {
			status++;
		} else {
			cm.dispose();
			return;
		}
		if (status == 0) {
			sel = selection;

			if (sel == 5) {
				cm.sendNext("#b[武陵道場]#k 就是可以挑戰自我挑戰的地方，若遇到強的敵人絕對不可以退縮，挑戰本道館的元老吧！");
				cm.dispose();
			} else if (sel == 3) {
				cm.sendYesNo("你是真的要重置！？ \r\n別怪我沒警告你。");
			} else if (sel == 2) {
				var msg = "現在你的道場點數有 #b" + cm.getDojoPoints() + "#k. 我們的主人喜歡有才華的人，所以如果你有了足夠的道場點數，你就可以根據你的道場點數換取腰帶...\r\n #L0##i1132000:# #t1132000#(200)#l \r\n #L1##i1132001:# #t1132001#(1800)#l \r\n #L2##i1132002:# #t1132002#(4000)#l \r\n #L3##i1132003:# #t1132003#(9200)#l \r\n #L4##i1132004:# #t1132004#(30000)#l";
				msg += " \r\n #L5##i1132112:# #t1132112#(30000)(需消耗一個#i1132004:#)#l"
				cm.sendSimple(msg);
			} else if (sel == 1) {
				if (cm.getParty() != null) {
					if (cm.isLeader()) {
						if (CheckPartyP()) {
							cm.sendOk("走囉。");
						} else {
							cm.sendNext("請確認隊員是否有在地圖內。");
							cm.dispose();
							return;
						}
					} else {
						cm.sendOk("請找你的隊長來找我說話。");
					}
				} else {
					cm.sendOk("你好像沒有組隊。");
					cm.dispose();
					return;
				}
			} else if (sel == 0) {
				if (cm.getParty() != null) {
					cm.sendOk("你離開你的組隊。.");
					cm.dispose();
					return;
				}
				var record = cm.getQuestRecord(150000);
				var data = record.getCustomData();

				if (data != null) {
					cm.warp(get_restinFieldID(parseInt(data)), 0);
					record.setCustomData(null);
				} else {
					cm.start_DojoAgent(true, false);
				}
				cm.dispose();
				// cm.sendYesNo("The last time you took the challenge yourself, you were able to reach Floor #18. I can take you straight to that floor, if you want. Are you interested?");
			}
		} else if (status == 1) {
			if (sel == 2) {
				var choose = selection;
				var itemid;
				var useItem = 0;
				switch (choose) {
				case 0:
					itemid = 1132000;
					required = 200;
					break;
				case 1:
					itemid = 1132001;
					required = 1800;
					break;
				case 2:
					itemid = 1132002;
					required = 4000;
					break;
				case 3:
					itemid = 1132003;
					required = 9200;
					break;
				case 4:
					itemid = 1132004;
					required = 30000;
					break;
				case 5:
					itemid = 1132112;
					required = 30000;
					useItem = 1132004;
				}

				if (cm.getDojoPoints() >= required) {
					if (cm.canHold(itemid)) {
						if(!useItem == 0){
							if(!cm.haveItem(useItem,1)){
								cm.sendOk("很抱歉，您好像沒有#i" + useItem + ":##t" + useItem + ":#");
								cm.dispose();
								return;
							}
							cm.gainItem(useItem, -1);
							cm.gainItem(itemid, 1);
							cm.getPlayer().setDojo(cm.getDojoPoints()-required);
							cm.sendOk("恭喜兌換成功！！");
							cm.getPlayer().dropMessage(6,"您消耗了 " + required + "點武陵點數，您的武陵點數剩餘 " + cm.getDojoPoints() + "點");
							cm.dispose();
							return;
						}
						cm.gainItem(itemid, 1);
						cm.getPlayer().setDojo(cm.getDojoPoints()-required);
						cm.sendOk("恭喜兌換成功！！");
						cm.getPlayer().dropMessage(6,"您消耗了 " + required + "點武陵點數，您的武陵點數剩餘 " + cm.getDojoPoints() + "點");
						cm.dispose();
						return;
					} else {
						cm.sendOk("請確認一下你的背包是否滿了.");
					}
				} else {
					cm.sendOk("你好像沒有足夠的道場點數可以換....");
				}
				cm.dispose();
			} else if (sel == 1) {
				cm.start_DojoAgent(true, true);
				cm.dispose();
			}
		}
	} else if (isRestingSpot(mapid)) {
		if (mode == 1) {
			status++;
		} else {
			cm.dispose();
			return;
		}

		if (status == 0) {
			sel = selection;

			if (sel == 0) {
				cm.dojoAgent_NextMap(true, true);
				//cm.getQuestRecord(150000).setCustomData(null);
				cm.dispose();
			} else if (sel == 1) {
				cm.askAcceptDecline("你真的想要離開這裡？");
			} else if (sel == 2) {
				if (cm.getParty() == null) {
					var stage = get_stageId(cm.getMapId());

					cm.getQuestRecord(150000).setCustomData(stage);
					cm.sendOk("我剛剛保存你這次的紀錄，下次當你返回我就直接送你到這裡。");
					cm.dispose();
				} else {
					cm.sendOk("嘿，小傢伙你不能保存..因為這是組隊挑戰！");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			if (sel == 1) {
				if (cm.isLeader()) {
					if (CheckPartyP()) {
						cm.warpParty(925020002);
					} else {
						cm.sendNext("請確認隊員是否有在地圖內。");
					}
				} else {
					cm.warp(925020002);
				}
			}
			cm.dispose();
		}
	} else {
		if (mode == 1) {
			if (cm.isLeader()) {
				if (CheckPartyP()) {
					cm.warpParty(925020002);
				} else {
					cm.sendNext("請確認隊員是否有在地圖內。");
				}
			} else {
				cm.warp(925020002);
			}
		}
		cm.dispose();
	}
}

function get_restinFieldID(id) {
	var idd = 925020002;
	switch (id) {
	case 1:
		idd = 925020600;
		break;
	case 2:
		idd = 925021200;
		break;
	case 3:
		idd = 925021800;
		break;
	case 4:
		idd = 925022400;
		break;
	case 5:
		idd = 925023000;
		break;
	case 6:
		idd = 925023600;
		break;
	}
	for (var i = 0; i < 15; i++) {
		var canenterr = true;
		for (var x = 1; x < 39; x++) {
			var map = cm.getMap(925020000 + 100 * x + i);
			if (map.getCharactersSize() > 0) {
				canenterr = false;
				break;
			}
		}
		if (canenterr) {
			idd += i;
			break;
		}
	}
	return idd;
}

function get_stageId(mapid) {
	if (mapid >= 925020600 && mapid <= 925020614) {
		return 1;
	} else if (mapid >= 925021200 && mapid <= 925021214) {
		return 2;
	} else if (mapid >= 925021800 && mapid <= 925021814) {
		return 3;
	} else if (mapid >= 925022400 && mapid <= 925022414) {
		return 4;
	} else if (mapid >= 925023000 && mapid <= 925023014) {
		return 5;
	} else if (mapid >= 925023600 && mapid <= 925023614) {
		return 6;
	}
	return 0;
}

function isRestingSpot(id) {
	return (get_stageId(id) > 0);
}

function CheckPartyP() {
	var party = cm.getParty().getMembers();
	var mapid = cm.getPlayer().getMapId();
	var next = true;
	var it = party.iterator();
	while (it.hasNext()) {
		var cPlayer = it.next();
		var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if (ccPlayer == null) {
			next = false;
			break;
		}
	}
	return next;
}
