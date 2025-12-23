var item = 4032361;
function start() {
	if (cm.haveItem(item, 1)) {
		cm.dispose();
		return;
	} else {
		cm.gainItem(item, 1);
		cm.sendNext("（是什麼在閃光......這是......什麼東西？我從戰鬥後的場所撿到了一塊碎片。）");
		cm.dispose();
		return;
	}
}