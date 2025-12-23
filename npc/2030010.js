/* Amon
 * Last Mission : Zakum's Altar (280030000)
 */

function start() {
    if(cm.getPlayer().getMapId() == 280030000) {
        var msg = "如果你現在離開，你將不得不重新開始。你確定要離開這裡到外面去嗎？\r\n";
        var damages = cm.getTotalDamage();
        msg += "\r\n獎勵條件：#r2000萬#k 總傷害\r\n";
        msg += "總輸出排行如下：\r\n"
        for(var i = 0; i < damages.length; i++) {
            msg += "\r\n"+damages[i];
        }
        cm.sendYesNo(msg);
    } else {
        cm.sendYesNo("如果你現在離開，你將不得不重新開始。你確定要離開這裡到外面去嗎？");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        if(cm.getPlayer().getMapId() == 280030000) {
            cm.warp(211042400);
        } else {
            cm.warp(211042300);
        }
    }
    cm.dispose();
}