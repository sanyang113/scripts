/*by.吳貳 勳章 & 點裝 倉庫*/
var status = -1;
var sel;
var sel2;
function start() {
	action(1,0,0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		return;
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			cm.dispose();
			return;
		}
		if (status == 0) { 
			cm.sendOk("#r※以往在倉庫內異常的勳章請找GM補領勳章。#k\r\n這是#b勳章倉庫#k的服務，若您有暫時用不到的勳章可以寄放在此處。#r※有期限的勳章無法存放。#k#b\r\n#L0##i4031226# 查看倉庫物品\r\n\r\n#L1##i4031226# 我要存入倉庫");
		} else if (status == 1) {
			if(selection != -1) {
				sel2 = selection;
			}
			if (sel2 == 0) {
				cm.getPlayer().setStorageStatus(3);
				cm.sendStorage();
				cm.dispose();
				return;
			} else if (sel2 == 1) {
				var msg = cm.SelectMedalItem();
				if (msg == null) {
					cm.sendOk("沒有可存入的勳章。");
					cm.dispose();
					return;
				} else {
					cm.sendOk("#r請選擇您要存入的勳章：#b\r\n\r\n" + msg);
				}
			}
		} else if (status == 2) {
			if (sel2 == 0) {
				cm.sendOk(cm.RemoveStorageItem(selection, 1));
				cm.dispose();
				return;
			} else {
				cm.sendOk(cm.AddStorageItem(selection, 1));
				status = 0;
			}
		}
	}
}