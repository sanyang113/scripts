var status = -1;

function start() {
    return action(1,0,0);
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
            var msg = "請輸入以下數字來解除警報值\r\n";
            msg += cm.getPlayer().getAntiCheatNumber();
            cm.sendGetText(msg);
            break;
        case 1:
            var text = cm.getText();
            if(cm.getPlayer().getAntiCheatNumber() == text) {
                cm.clearAntiCheat();
                cm.sendOk("幫您清除囉!");
                cm.gainItem(2450125, 1);
                cm.dispose();
                return;
            } else {
                cm.sendOk("輸入錯誤，請重新再試");
                cm.dispose();
                return;
            }
        default:
            cm.dispose();
            return;
    }
}