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
            var msg = "您要取消當前廣播設定嗎？";
            cm.sendYesNo(msg);
            break;
        case 1:
            cm.sendOk("已經幫你註銷了");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}