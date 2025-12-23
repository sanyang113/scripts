var status = -1;
var mapId = -1;
var warpMap = false;

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
			var msg = "哇! 您是誰?!";
			cm.sendNext(msg);
		case 1:
			mapId = cm.getPlayer().getMapId();
			if(mapId == 800040211) {
				cm.sendYesNo("什麼!? 您想繼續前進嗎？");
				break;
			} else {
				cm.sendYesNo("嘿...我有特別的方法能帶你瞬間穿越這片區域。\r\n代價是 #b1,000,000 楓幣#k，你要不要試試？");
				break;
			}
		case 2:
			if(mapId == 800040211) {
				warpMap = true;
			} else {
				if(cm.getPlayer().getMeso() < 1000000) {
					cm.sendOk("很抱歉，您身上的楓幣不足唷！");
					cm.dispose();
					return;
				}
			}
			cm.sendNext("...好的，那我就成全你的意思了!");
			break;
		case 3:
			if(warpMap) {
				cm.warp(800040300, 0);
			} else {
				cm.gainMeso(-1000000);
				cm.warp(800040211, 0);
			}
			cm.dispose();
			return;
		default:
			cm.dispose();
			return;
	}
}