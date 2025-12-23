/*
Return from Free Market Script
*/

var transfer = false

function enter(pi) {

    //if(!transfer) {
    //    pi.getPlayer().dropMessage(1, "冒險者您好，暫時還不能出去唷，敬請期待9/19開服日！！");
    //    return;
    //}


    var returnMap = pi.getSavedLocation("FREE_MARKET");
    pi.clearSavedLocation("FREE_MARKET");

    if (returnMap < 0) {
	returnMap = 102000000; // to fix people who entered the fm trough an unconventional way
    }
    // 調整如果return map是自由市場的話就直接傳送至勇士之村
    if (returnMap == 910000000) {
        returnMap = 102000000;
    }

    var target = pi.getMap(returnMap);
    var portal;

    if (returnMap == 230000000) { // aquaroad has a different fm portal - maybe we should store the used portal too?
	portal = target.getPortal("market01");
    } else {
	portal = target.getPortal("market00");
    }
    if (portal == null) {
	portal = target.getPortal(0);
    }
    if (pi.getMapId() != target) {
	pi.getPlayer().changeMap(target, portal);
    }
}