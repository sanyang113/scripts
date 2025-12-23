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

    var msg = "  #fUI/UIWindow/9DDesign/Menu/top/開關設定#\r\n";	//取得LOGO
    switch(status) {
        case 0:
            for(var i = 0; i < 8; i++) {
                msg += "#L" + i + "##fUI/UIWindow/9DDesign/Menu/開關設定/" + i + "##l";
            }
            cm.sendNext(msg);
            break;
        case 1:
            switch(selection) {
                case 0:
                    cm.dispose();
                    cm.processCommand("@Tsmega");
                    return;
                case 1:
                    cm.dispose();
                    cm.processCommand("@hideatk");
                    return;
                case 2:
                    cm.dispose();
                    cm.processCommand("@攻擊影響");
                    return;
                case 3:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]HpHelper");
                    return;
                case 4:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]MpHelper");
                    return;
                case 5:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]排除掉落物");
                    return;
                case 6:
                    cm.dispose();
                    cm.processCommand("@AP");
                    return;
                case 7:
                    cm.dispose();
                    cm.processCommand("@SP");
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