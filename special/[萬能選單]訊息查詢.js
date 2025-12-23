var status = -1;

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

    var msg = "  #fUI/UIWindow/9DDesign/Menu/top/訊息查詢#\r\n";	//取得LOGO
    switch(status) {
        case 0:
            for(var i = 0; i < 6; i++) {
                msg += "#L" + i + "##fUI/UIWindow/9DDesign/Menu/訊息查詢/" + i + "##l";
            }
            cm.sendNext(msg);
            break;
        case 1:
            switch(selection) {
                case 0:
                    cm.dispose();
                    cm.processCommand("@expinfo");
                    return;
                case 1:
                    cm.dispose();
                    cm.processCommand("@bosscd");
                    return;
                case 2:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]SearchMapItem");
                    return;
                case 3:
                    cm.dispose();
                    cm.processCommand("@itemdrop");
                    return;
                case 4:
                    cm.dispose();
                    cm.processCommand("@mobdrop");
                    return;
                case 5:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]SearchMapGlobalItem");
                    return;
                default:
                    cm.dispose();
                    return;
            }
        default:
            cm.dispose();
            return;
    }
}