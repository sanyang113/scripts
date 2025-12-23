var status = -1;
var minLevel = 10; // 35
var maxLevel = 250; // 65

var minPartySize = 1;
var maxPartySize = 6;
var have = 4030002;
var itemid = 5450000;

var n_items = [

				[[4030002, 1]],
                [[4030002, 5]],
				[[4030002, 5]],
				[[4030002, 10]],
				[[4030002, 5]],
				[[4030002, 5]],
				[[4030002, 5]],
				[[4030002, 10]],
				];

var g_items = [

                [[1142655, 1]],
                [[1102369, 1]],
                [[1342052, 1]],
				[[3015901, 1]],
				[[3017023, 1]],
				[[3017024, 1]],
				[[3017025, 1]],
				[[2435066, 1]],
				]

var items = [
];
var sel;
var name = "保護月妙大作戰";
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendNext("#r※保護月妙的活動將會持續到10/15的12:00止，請把握時間參與以及兌換獎勵喔！#b\r\n#L0#我想要進入" + name + "\r\n#L1#我可以在這裡獲得甚麼？\r\n#L2#我想要使用月餅進行兌換");//
    } else if (status == 1) {
        sel = selection;
        if (sel == 0) {
            if (cm.getParty() == null) {
                cm.sendOk("很抱歉，依靠您一己之力是無法進行保護月妙的，請組隊集結更多力量後再來找我。");
                cm.dispose();
                return;
            }
            if (!cm.isLeader()) {
                cm.sendOk("你好，我只能跟您的隊長說話，請讓您的隊長來找我。");
                cm.dispose();
                return;
            }
            cm.sendYesNo("您確定要進入 " + name + "嗎？");
        } else if (sel == 1) {
            cm.sendOk("在#b【保護月妙大作戰】#k內將會獲得：#i" + have + ":#");
            cm.dispose();
            return;
        } else if (sel == 2) {
			var str = "#d以下為可以兌換的物品列表：\r\n\r\n";
			
			for(var i = 0; i < n_items.length; i ++) {
				str += "#L"+i+"#";
				for(var j = 0; j <n_items[i].length; j++) {
					if(j != 0) {
						str += "#r+";
					}
					str += "#b#i"+n_items[i][j][0]+":# #rx"+n_items[i][j][1]+"#k 兌換：";
				}
				for(var j = 0; j < g_items[i].length; j++) {
					str += "#b#i"+g_items[i][j][0]+":##t"+g_items[i][j][0]+"# #rx"+g_items[i][j][1]+"#l"
				}
				str += "\r\n";
			}
            cm.sendYesNo(str);
        }
    } else if (status == 2) {
        if (sel != 0) {
			for(var j = 0; j < n_items[selection].length; j++) {
				if(!cm.haveItem(n_items[selection][j][0], n_items[selection][j][1])) {
					cm.sendOk("很抱歉，您身上並沒有 #i" + n_items[selection][j][0] + ":##t" + n_items[selection][j][0] + "# #rx " + n_items[selection][j][1] + "");
					cm.dispose();
					return;
				}
			}
			if(!cm.canHold(g_items[selection])) {
				cm.sendOk("您的背包空間不足，請檢查後再來。");
				cm.dispose();
				return;
			}
			var str = "#b兌換成功!\r\n\r\n";
			str += "#e#r花費物品如下:\r\n\r\n#n";
			for(var j = 0; j <n_items[selection].length; j++) {
				cm.gainItem(n_items[selection][j][0], -n_items[selection][j][1]);
				str += "#b#i"+n_items[selection][j][0]+":##t"+n_items[selection][j][0]+"# #rx"+n_items[selection][j][1]+"\r\n";
			}
			str += "\r\n#e#r兌換物品如下:\r\n\r\n#n";
			for(var j = 0; j < g_items[selection].length; j++) {
				cm.gainItem(g_items[selection][j][0], g_items[selection][j][1]);
				str += "#b#i"+g_items[selection][j][0]+":##t"+g_items[selection][j][0]+"# #rx"+g_items[selection][j][1]+"\r\n"
			}
			cm.sendOk(str);
            cm.dispose();
			return;
        }
        var party = cm.getParty().getMembers();
        //if (!cm.getPartyItems(have, 1, party)) {
        //    cm.sendOk("很抱歉，您的隊伍中有人身上沒有 #i" + have + ":##t" + have + "#，請再檢查一下！");
        //    cm.dispose();
        //    return;
        //}
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
            var em = cm.getEventManager("HenesysPQ");
            if (em == null) {
                cm.sendSimple("目前活動尚未開放。");
                cm.dispose();
                return;
            } else {
                var prop = em.getProperty("state");
                if (prop.equals("0") || prop == null) {
                    //cm.givePartyItems(have, -1, false);
                    for (var i = 4001095; i < 4001099; i++) {
                        cm.givePartyItems(i, 0, true);
                    }
                    for (var i = 4001100; i < 4001101; i++) {
                        cm.givePartyItems(i, 0, true);
                    }
                    em.startInstance(cm.getParty(), cm.getMap());
                    cm.dispose();
                    return;
                } else {
                    cm.sendSimple("很抱歉，這個頻道已經有人在進行了，請換頻再繼續！");
                    cm.dispose();
                    return;
                }
            }
        } else {
            cm.sendSimple("您的隊伍不符合限制：\r\n人數：" + minPartySize + "人以上\r\n最低等級：" + minLevel + " 等以上\r\n最高等級：" + maxLevel + " 等以下");
            cm.dispose();
            return;
        }
    }
}