//領取宅配道具
var status = -1;
var msg = null;
function start() {
	action(1,0,0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {
			if (cm.isDueyReloading()) {
				cm.sendOk("禮物盒系統GM目前正在重載中，請稍後再試。");
				cm.dispose();
				return;
			}
			msg = cm.getDueyItemList();
			cm.sendOk("哈囉！我是山羊谷的#b宅配人員#k，負責配送管理組發送的禮物。\r\n#b" + msg);
		} else if (status == 1) {
            if (msg == "您目前沒有未領取的物品唷!") {
				cm.dispose();
				return;
			} else {
                cm.sendOk(cm.gainDueyItem(selection));
                status = -1
            }
		}
	}
}