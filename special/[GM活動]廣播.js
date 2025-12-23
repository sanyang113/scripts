var status = -1;
var sel = -1;

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
            var msg = "需要在幾分鐘後開始GM活動呢？";
            cm.sendGetNumber(msg, 1, 1, 100);
            break;
        case 1:
            sel = selection;
            var msg = "您確定要在 " + sel + " 分鐘後舉辦GM活動嗎？";
            cm.sendYesNo(msg);
            break;
        case 2:
            cm.createGMEventBroadcast(sel);
            cm.sendOk("已經幫您建立廣播");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}