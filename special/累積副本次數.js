var status = -1;
var sel = -1;

var selects = ["累積遠征擊殺","累積組隊任務","累積野王擊殺"];

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
            var msg = "這裡是#b山羊谷副本累積成就系統#k，若您累積了一定次數的遠征討伐或是組隊任務討伐，您可以獲得一些稀有道具，據說可以增加您的角色能力值...\r\n";
            msg += "\r\n#b#L0#我要查看我的遠征討伐成就";
            msg += "\r\n#b#L1#我要查看我的組隊任務成就";
            msg += "\r\n#b#L2#我要查看我的野王擊殺成就";
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(),selects[selection]);
            return;
        default:
            cm.dispose();
            return;
    }
}