
/*
	Machine Apparatus - Origin of Clocktower(220080001)
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var damages = cm.getTotalDamage();
        var msg = "";
        msg += "\r\n獎勵條件：#r120萬#k 總傷害\r\n";
        if(damages != null && damages.length != 0) {
            
            msg += "\r\n====================================";
            msg += "\r\n總輸出排行如下：\r\n";
            for(var i = 0; i < damages.length; i++) {
                msg += "\r\n"+damages[i];
            }
        }


        cm.sendYesNo("嘟...嘟...你想要離開嗎？？"+msg);
    } else if (status == 1) {
        cm.warp(220080000);
        if (cm.getPlayerCount(220080001) == 0) {
            cm.getMap(220080000).resetReactors();
			cm.getMap().EndPapfight();
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}