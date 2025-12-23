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

    switch (status) {
        case 0:
            var msg = "歡迎來到#b山羊谷#k練等副本，請問您想要做什麼呢？";
            msg += "\r\n#b#L0#我想要開啟練等副本";
            msg += "\r\n#b#L1#我想要尋找練等副本的小夥伴";
            msg += "\r\n#b#L2#我想要兌換戰利品";
            cm.sendNext(msg);
            break;
        case 1:
            if(selection == 0) {
                cm.dispose();
                cm.openNpc(cm.getNpc(),"練等副本");
                return;
            } else if(selection == 1) {
                cm.dispose();
                cm.openNpc(cm.getNpc(),"練等開廣");
                return;
            } else if(selection == 2) {
                cm.dispose();
                cm.openNpc(cm.getNpc(),"網咖硬幣交換");
                return;
            }
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}