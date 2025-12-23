function enter(pi) {
	if (pi.haveItem(4031890,1)) {
		pi.gainItem(4031890, -1);
		pi.warp(221000300, "earth00");
	} else {
		pi.playerMessage(5,"我需要一個東西...");
	}
}