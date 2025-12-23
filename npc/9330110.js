/* Kedrick
	Fishking King NPC
*/
function action(mode, type, selection) {
    cm.dispose();
    cm.openNpc(cm.getNpc(),"[功能]魚餌商人");
}

/*
var status = -1;
var sel = -1;
var item = 5340000;

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
        cm.sendSimple("我能為您做什麼嗎？？#b \n\r #L1#買普通魚餌。#l \n\r #L3#使用高級的魚餌。#l \n\r #L0#買普通釣竿。#l#k");
  	} else if (status == 1) {
		sel = selection;
		if (sel == 3) {
			status = 5;
			cm.sendGetNumber("請問您要兌換幾組呢？每組有120個高級魚餌",1,1,100);
		} else if (sel == 1) {
			cm.sendYesNo("請問確定要花 10萬 楓幣 買 120 個普通魚餌？？");
		} else if (sel == 0) {
			cm.sendYesNo("請問確定要花 100萬 楓幣 買#b#i" + item + ":##t" + item + "##k嗎？？");
		}
    } else if (status == 2) {
		if(sel == 1) {
			if (cm.canHold(2300000,120) && cm.getMeso() >= 500000) {
				if (!cm.haveItem(2300000)) {
					cm.gainMeso(-100000);
					cm.gainItem(2300000, 120);
					cm.sendNext("開心釣魚吧！");
				} else {
					cm.sendNext("真貪心！等用完再來找我！");
				}
			} else {
				cm.sendOk("請確認是否有足夠的楓幣，或者檢查您的道具欄有沒有滿了。");
			}
		} else if(sel == 0) {
			if(cm.getMeso() < 1000000) {
				cm.sendOk("請確認是否有足夠的楓幣，或者檢查您的道具欄有沒有滿了。");
				cm.dispose();
				return;
			}
			if(!cm.canHold(item, 1)) {
				cm.sendOk("請確認您的背包空間。");
				cm.dispose();
				return;
			}
			cm.gainMeso(-1000000);
			cm.gainItem(5340000, 1);
			cm.sendOk("請收好道具。");
			cm.dispose();
			return;
			
		}
		cm.safeDispose();
	} else if(status == 6) {
		if (cm.canHold(2300001,120 * selection) && cm.haveItem(5350000,selection)) {
			cm.gainItem(2300001, 120 * selection);
			cm.gainItem(5350000,-selection);
			cm.sendNext("開心釣魚吧！");
		} else {
			cm.sendOk("請確認是否有高級的魚餌罐頭，或者檢查您的道具欄有沒有滿了。");
		}
		cm.safeDispose();
		
	}
}*/