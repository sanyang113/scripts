var status = -1;
var sel;
var inv;
var items = [
	2450000, 2450001, 2450002, 2450003, 2450004, 2450005, 2450006, 2450008,
	2049310, 2049311, 2049312, 2049313, 2049314,
	2049210, 2049211, 2049212, 2049213, 2049214, 2049215, 2049216, 2049217, 2049218, 2049219,
	4032879, 4032880, 4036036, 4310059, 4310063, 4310064, 4001198, 4001158, 4001160, 4032878,
	4001337, 4310107, 4030002, 4030002, 4033400,
	2330008, 2459001, 2459002, 2459003, 2459004, 2070014,
			];
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
			var msg = "這是#b道具倉庫#k的服務，#r部分無法交易的道具#k可以寄放在此處於#b帳號內共用#k。#r※有期限的道具無法存放。#k\r\n可存放的道具如下：\r\n";
			for(var i = 0; i < items.length; i++) {
				msg += "#i" + items[i]+":#";
			}
			msg += "\r\n#L0##i4031226# 我要領取道具";
			msg += "\r\n#L1##i4031226# 我要存入道具";
			cm.sendNext(msg);
		} else if (status == 1) {
			sel = selection;
			if (sel == 0) {
				var msg = cm.getItemStorage().SearchItems(cm.getPlayer());
				if (msg == null) {
					cm.sendOk("您沒有可以領取的道具。");
					cm.dispose();
					return;
				}
				cm.sendNext(msg);
			} else if (sel == 1) {
				var msg = "以下是目前有開放流通的欄位，請選擇想要存放的道具對應欄位：";
				msg += "\r\n#d#L2#消耗欄";
				msg += "\r\n#d#L4#其他欄";
				// msg += "\r\n#d#L5#特殊欄";
				cm.sendNext(msg);
			}
		} else if (status == 2) {
			if (sel == 0) {
				var msg = cm.getItemStorage().RemoveItem(cm.getPlayer(), selection);
				if (msg != null) {
					cm.sendOk(msg);
					cm.dispose();
					return;
				}
				cm.sendOk("道具領取完成。");
				cm.dispose();
				return;
			} else if (sel == 1) {
				inv = selection;
				var msg = cm.getAllItems(inv, items);
				if (msg == null) {
					cm.sendOk("目前沒有可以存放的道具。");
					cm.dispose();
					return;
				}
				cm.sendNext(msg);
			}
		} else if (status == 3) {
			if (sel == 1) {
				var item = cm.getItem(inv, selection);
				if(item.getExpiration() > 0) {
					cm.sendOk("不能放入有期限物品唷!");
					cm.dispose();
					return;
				}
				if (item == null) {
					cm.sendOk("發生錯誤，請稍後在嘗試。");
					cm.dispose();
					return;
				}
				var msg = cm.getItemStorage().addItem(cm.getPlayer(), item);
				if (msg != null) {
					cm.sendOk(msg);
					cm.dispose();
					return;
				}
				cm.sendOk("存放道具成功。");
				cm.dispose();
				return;
			}
		}
	}
}