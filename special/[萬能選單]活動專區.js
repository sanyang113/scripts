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

    var msg = "  #fUI/UIWindow/9DDesign/Menu/top/活動專區#\r\n";	//取得LOGO
    switch(status) {
        case 0:
            for(var i = 2; i < 5; i++) {
                msg += "#L" + i + "##fUI/UIWindow/9DDesign/Menu/活動專區/" + i + "##l";
            }
            cm.sendNext(msg);
            break;
        case 1:
            switch(selection) {
                case 0:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]每日商店領獎");
                    return;
                case 1:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]事前推廣");
                    return;
                case 2:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[兌換]玩楓幣兌換");
                    return;
                case 3:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]當期活動"); //這邊改NPC敘述
                    return;
                case 4:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]世界王入口");
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