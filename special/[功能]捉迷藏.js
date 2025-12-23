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
            if(cm.getHideAndSeek().findHideAndSeek(cm.getPlayer())) {
                cm.getHideAndSeek().getPrzie(cm.getPlayer());
                cm.sendOk("哇！您是第一個發現到我的人耶，獎勵幫您送至Duey囉!");
                cm.dispose();
                return;
            } else {
                cm.sendOk("很抱歉，您來晚了QQ");
                cm.dispose();
                return;
            }
        default:
            cm.dispose();
            return;
    }
}