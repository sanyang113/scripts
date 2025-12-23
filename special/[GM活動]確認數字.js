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
            var chooseNumber = cm.getMapleCandyGame().getTempNumber(cm.getPlayer());
            var msg = "您目前猜測的數字為 [" + chooseNumber + "] ，一旦確定就不能反悔囉？";
            cm.sendYesNo(msg);
            break;
        case 1:
            cm.getMapleCandyGame().confirm(cm.getPlayer());
            cm.sendOk("幫您確認好數字囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}