var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            var msg = "請選擇想取出的道具：\r\n\r\n";
            var msg2 = cm.getFullStorage().SearchItems(cm.getPlayer());
            if (msg2 == null) {
                cm.sendOk("您沒有可以領取的道具。");
                cm.dispose();
                return;
            }
            cm.sendNext(msg + msg2);
            break;
        case 1:
            if(!cm.canHold()) {
                cm.sendOk("請確認各欄位有至少一格空間");
                cm.dispose();
                return;
            }
            var msg = cm.getFullStorage().RemoveItem(cm.getPlayer(), selection);
			if (msg != null) {
				cm.sendOk(msg);
				cm.dispose();
				return;
			}
			cm.sendOk("道具領取完成。");
            status = -1;
            break;
        default:
            cm.dispose();
            return;
    }
}