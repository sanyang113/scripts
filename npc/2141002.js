/*
	NPC Name: 		The Forgotten Temple Manager
	Map(s): 		Deep in the Shrine - Twilight of the gods
	Description: 		Pink Bean
 */

function start() {
	var damages = cm.getTotalDamage();
    var msg = "";
    if(damages != null && damages.length != 0) {
        msg += "\r\n====================================";
        msg += "\r\n總輸出排行如下：\r\n";
        for(var i = 0; i < damages.length; i++) {
            msg += "\r\n"+damages[i];
        }
    }

    cm.sendYesNo("您確定要離開嗎？"+msg);
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(270050000, 0);
    }
    cm.dispose();
}