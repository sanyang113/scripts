var status = -1;

function start() {
    action(1,0,0);
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
            var msg = "測試";
    		cm.gainExp(2147483647);
            cm.sendOk(msg);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}