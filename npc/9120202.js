/* Konpei
	Showa - Nightmarish Last Days
*/
function start() {
    var damages = cm.getTotalDamage();
    var msg = "";
    msg += "\r\n獎勵條件：#r3300萬#k 總傷害\r\n";
    if(damages != null && damages.length != 0) {
        msg += "\r\n====================================";
        msg += "\r\n總輸出排行如下：\r\n";
        for(var i = 0; i < damages.length; i++) {
            msg += "\r\n"+damages[i];
        }
    }
    cm.sendNext("您確定要離開嗎？" + msg);
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(801040004,0);
        cm.dispose();
        return;
    } else {
        cm.sendOk("我真的很佩服你的任性!好吧，如果你想要回到昭和村的時候再讓我知道吧！");
        cm.dispose();
        return;
    }
}