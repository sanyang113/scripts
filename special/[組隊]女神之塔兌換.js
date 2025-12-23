var status = -1;
var itemid = 4001158;
var items = [
	[1082232, 1, 20],
];
var sel;
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
		   var msg = "只要您有#i" + itemid + ":#，就可以找我進行兌換，目前有 #b#c" + itemid +"##k 個。";
		   for (var i = 0; i < items.length; i++) {
			   msg += "\r\n#L" + i + "#我要兌換#b#i" + items[i][0] + ":##t" + items[i][0] + "##k #rx" + items[i][1] + "#k  #d需求：" + items[i][2] + "個#k";
		   }
		   cm.sendNext(msg);
		}  else if (status == 1) {
			sel = selection;
			cm.sendYesNo("確定要兌換#i" + items[sel][0] + ":##t" + items[sel][0] + "# x" + items[sel][1] + "嗎?\r\n#d#e需要消耗 #r" + items[sel][2] + "#d個#b#i" + itemid + ":##z" + itemid + "##n");
		} else if (status == 2) {
			if (!cm.haveItem(itemid, items[sel][2])) {
				cm.sendOk("您的#i" + itemid + ":##t" + itemid + "# 不足 " + items[sel][2] + " 個。");
				cm.dispose();
				return;
			}
			if (!cm.canHold(items[sel][0], items[sel][1])) {
				cm.sendOk("請注意，您的背包放不下#i" + items[sel][0] + ":##t" + items[sel][0] + "# x" + items[sel][1] + "個!");
				cm.dispose();
				return;
			}
			cm.gainItem(itemid, -items[sel][2]);
			cm.gainItem(items[sel][0], items[sel][1]);
			cm.sendOk("兌換完成了!!!");
			cm.dispose();
			return;
		}
	}
}