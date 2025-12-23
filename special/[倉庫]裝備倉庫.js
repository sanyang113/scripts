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
			cm.sendOk("這是#b裝備倉庫#k的服務，若您有暫時用不到的裝備可以寄放在此處。#r※有期限的裝備無法存放，並且最高存放100件裝備。\r\n#L0#查看倉庫道具\r\n#L1#我要存入倉庫");
		} else if (status == 1) {
			if(selection != -1) {
				sel2 = selection;
			}
			if (sel2 == 0) {
				cm.getPlayer().setStorageStatus(1);
				cm.sendStorage();
				cm.dispose();
				return;
			} else if (sel2 == 1) {
				var msg = cm.SelectEquipItem();
				if (msg == null) {
					cm.sendOk("沒有可存入的裝備。");
					cm.dispose();
					return;
				} else {
					cm.sendOk("#r請選擇您要存入的裝備：#b\r\n\r\n" + msg);
				}
			}
		} else if (status == 2) {
			if (sel2 == 0) {
				cm.sendOk(cm.RemoveStorageItem(selection, 2));
				cm.dispose();
				return;
			} else {
				cm.sendOk(cm.AddStorageItem(selection, 2));
				status = 0;
			}
		}
	}
}