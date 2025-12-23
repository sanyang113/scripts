function enter(pi) {
	if (pi.haveItem(4031890,1)) {
		pi.gainItem(4031890, -1);
		pi.warp(120000101, "earth01");
	} else {
		pi.playerMessage(5,"我需要一個東西...");
	}
}