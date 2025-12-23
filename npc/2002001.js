
var status = 0;

var selects = [104,105,106];

function start() {
    status = -1;
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
            var msg = "您想要購買什麼呢？\r\n\r\n";
            msg += "#L0##b我要開啟商店1#l\r\n";
            msg += "#L1##b我要開啟商店2#l\r\n";
            msg += "#L2##b我要開啟商店3#l\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            cm.openShop(selects[selection]);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}