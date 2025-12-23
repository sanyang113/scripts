var status = -1;

var ability = ["力量","敏捷","智力","幸運","物攻","魔攻","生命","魔力","防禦力","魔法防禦力","命中率","迴避率","速度","跳躍","可用捲次"];

var items = [
    // [
    //     [outputid, inputid,level,gem],
    //     [str, dex, int, luk, watk, matk,hp, mp, wdef, mdef, acc, avoid, speed, jump, addScroll],
    //     [
    //         [useitemid, count],
    //         [useitemid, count2]
    //     ]
    // ]
    [
        [1004424, 1004231, 160, 50000000, 4034054],
        [5, 5, 0, 0, 3, 0, 100, 100, 30, 30, 10, 10, 0, 0, 0],
        [
            [4036718, 10],
            [4000235, 10],
            [4000243, 10],
            [4005000, 20],
            [4005001, 20],
            [4005002, 20],
            [4005003, 20],
            [4005004, 20],
        ]
    ],
    [
        [1102795, 1102720, 160, 50000000, 4034054],
        [5, 5, 0, 0, 3, 0, 100, 100, 30, 30, 10, 10, 0, 0, 0],
        [
            [4036718, 10],
            [4000235, 10],
            [4000243, 10],
            [4005000, 20],
            [4005001, 20],
            [4005002, 20],
            [4005003, 20],
            [4005004, 20],
        ]
    ],
    [
        [1082638, 1082610, 160, 50000000, 4034054],
        [5, 5, 0, 0, 3, 0, 100, 100, 30, 30, 10, 10, 0, 0, 0],
        [
            [4036718, 10],
            [4000235, 10],
            [4000243, 10],
            [4005000, 20],
            [4005001, 20],
            [4005002, 20],
            [4005003, 20],
            [4005004, 20],
        ]
    ],
    [
        [1052888, 1052801, 160, 50000000, 4034054],
        [5, 5, 0, 0, 3, 0, 100, 100, 30, 30, 10, 10, 0, 0, 0],
        [
            [4036718, 10],
            [4000235, 10],
            [4000243, 10],
            [4005000, 20],
            [4005001, 20],
            [4005002, 20],
            [4005003, 20],
            [4005004, 20],
        ]
    ],
    [
        [1073033, 1072969, 160, 50000000, 4034054],
        [5, 5, 0, 0, 3, 0, 100, 100, 30, 30, 10, 10, 0, 0, 0],
        [
            [4036718, 10],
            [4000235, 10],
            [4000243, 10],
            [4005000, 20],
            [4005001, 20],
            [4005002, 20],
            [4005003, 20],
            [4005004, 20],
        ]
    ],
     [
         [1004810, 1004424, 180, 100000000, 4034054],
         [5, 5, 0, 0, 3, 0, 100, 100, 30, 30, 0, 40, 0, 0, 3],
         [
            [4000460, 10],
            [4000461, 10],
            [4000462, 10],
            [4005000, 20],
            [4005001, 20],
            [4005002, 20],
            [4005003, 20],
            [4005004, 20],
            [4001620, 1]
         ]
     ],
     [
         [1102942, 1102795, 180, 100000000, 4034054],
         [5, 5, 0, 0, 3, 0, 100, 100, 30, 30, 0, 40, 0, 0, 3],
         [
            [4000460, 10],
            [4000461, 10],
            [4000462, 10],
            [4005000, 20],
            [4005001, 20],
            [4005002, 20],
            [4005003, 20],
            [4005004, 20],
            [4001620, 1]
         ]
     ],
     [
         [1082697, 1082638, 180, 100000000, 4034054],
         [5, 5, 0, 0, 3, 0, 100, 100, 30, 30, 0, 40, 0, 0, 3],
         [
            [4000460, 10],
            [4000461, 10],
            [4000462, 10],
            [4005000, 20],
            [4005001, 20],
            [4005002, 20],
            [4005003, 20],
            [4005004, 20],
            [4001620, 1]
         ]
     ],
     [
         [1053065, 1052888, 180, 100000000, 4034054],
         [5, 5, 0, 0, 3, 0, 100, 100, 30, 30, 0, 40, 0, 0, 3],
         [
            [4000460, 10],
            [4000461, 10],
            [4000462, 10],
            [4005000, 20],
            [4005001, 20],
            [4005002, 20],
            [4005003, 20],
            [4005004, 20],
            [4001620, 1]
         ]
     ],
     [
         [1073160, 1073033, 180, 100000000, 4034054],
         [5, 5, 0, 0, 3, 0, 100, 100, 30, 30, 0, 40, 0, 0, 3],
         [
            [4000460, 10],
            [4000461, 10],
            [4000462, 10],
            [4005000, 20],
            [4005001, 20],
            [4005002, 20],
            [4005003, 20],
            [4005004, 20],
            [4001620, 1]
         ]
     ]
]

var sel = -1;
var use = false;
var slot = -1;
var rate = 40;

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
            var msg = "請選擇您想鍛造的裝備吧！\r\n";
            msg += "#r#e※請將沒有要鍛造的裝備放入倉庫，避免進化錯誤#k#n";
            for(var i = 0; i < items.length; i++) {
                var item = items[i];
                msg += "\r\n#L" + i + "#我要鍛造 #i" + item[0][1] + ":##t" + item[0][1] + "#";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var item = items[sel];
            var itemid = item[0][0];
            var check = item[2];
            var msg = "鍛造成為 #i" + itemid + ":##t" + itemid + "# 需求如下：";
            msg += "\r\n您目前鍛造的成功機率為:#r#e" + cm.getPlayer().getMakeItemChance(itemid) + "%#k#n";
            msg += "\r\n每次失敗後鍛造同品項成功率會增加１０％，一旦成功後則會回歸為基礎機率:" + cm.getPlayer().getMakeItemNum() + "%";
            msg += "\r\n使用#b#i" + item[0][4] + ":##t" + item[0][4] + "##k可將鍛造成功機率提升至１００％唷！#k";
            msg += "\r\n若為使用#b#i" + item[0][4] + ":##t" + item[0][4] + "##k，則成功不重置成功率";
            msg += "\r\n#d#e等級需要 #r" + item[0][2] + "級#d 以上才可以鍛造#n";
            msg += "\r\n#i" + item[0][1] + ":##t" + item[0][1] + "# #b";
			for (var i = 0; i < check.length; i++) {
				msg += "\r\n#i" + check[i][0] + ":##t" + check[i][0] + "#  *" + check[i][1];
			}
            msg += "\r\n需要花費 #e#b" + item[0][3] + "#k#n 楓幣";
            msg += "\r\n==================================================";
            msg += "\r\n本次鍛造將會對原始裝備調整以下素質：";
            for(var i = 0; i < item[1].length; i++) {
                if(item[1][i] != 0) {
                    msg += "\r\n" + ability[i] + ": +" + item[1][i];
                }
            }
            cm.sendYesNo(msg);
            break;
        case 2:
            var item = items[sel];
			var itemid = item[0][1];
			var msg = cm.selectUpgradeEquip(itemid);
            var gem = item[0][4];
			if (msg == null) {
				cm.sendOk("您似乎沒有 #i" + itemid + ":##t" + itemid + "#");
				cm.dispose();
				return;
			}
			if (gem == -1 || !cm.haveItem(gem, 1)) {
				status++;
			}
			cm.sendNext(msg);
            break;
        case 3:
            var item = items[sel];
            var gem = item[0][4];
            slot = selection;
            use = true;
            cm.sendYesNo("欸！你身上好像有 #i" + gem + ":##b#t" + gem + "##k，使用此物品可以將鍛造成功機率提升到 #r１００％#k。\r\n#e#r您要使用嗎？");
            break;
        case 4:
            if(slot == -1) {
                slot = selection;
            }
            var item = items[sel];
			var check = item[2];
			var have = true;
			var set = item[0];
            var enhanced = item[1];
            var meso = item[0][3];
            var gem = item[0][4];
            var itemid = item[0][0];
            rate = cm.getPlayer().getMakeItemChance(itemid);
			if (cm.getPlayer().getLevel() < item[0][2]) {
				cm.sendOk("您的等級似乎還未達到 " + item[0][2] + "級 唷!!");
				cm.dispose();
				return;
			}
			for (var i = 0; i < check.length; i++) {
				if (!cm.haveItem(check[i][0], check[i][1])) {
					have = false;
					break;
				}
			}
			if (!have) {
				cm.sendOk("需求道具不足，無法進行裝備鍛造。");
				cm.dispose();
				return;
			}
			if (cm.getPlayer().getMeso() < meso) {
				cm.sendOk("您身上的楓幣不足 " + meso + " 元。");
				cm.dispose();
				return;
			}
            if(use) {
                rate = 100;
            }
            var result = cm.upgradeEquip(slot, rate, set, enhanced);
            //移除材料
            if (result != null) {
				if (result == "很不幸的鍛造失敗了。") {
					for (var i = 0; i < check.length; i++) {
						cm.gainItem(check[i][0], -check[i][1]);
					}
                    cm.getPlayer().setMakeItemChance(itemid, rate + 10);
					cm.gainMeso(-meso);
					if (use) {
						cm.gainItem(gem, -1);
					}
				}
				cm.sendOk(result);
				cm.dispose();
				return;
			}
			for (var i = 0; i < check.length; i++) {
				cm.gainItem(check[i][0], -check[i][1]);
			}
			cm.gainMeso(-meso);
			if (use) {
				cm.gainItem(gem, -1);
			} else {
                cm.getPlayer().setMakeItemChance(itemid, cm.getPlayer().getMakeItemNum());
            }
			cm.sendOk("鍛造成功了！恭喜你啊！快打開背包看看吧！");
			cm.dispose();
			return;
        default:
            cm.dispose();
            return;
    }
}