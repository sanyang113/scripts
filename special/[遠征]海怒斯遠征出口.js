var status = -1;
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
            cm.sendYesNo("您確定要退出嗎？" + msg);
            break;
        case 1:
            cm.warp(230040410, 0);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}