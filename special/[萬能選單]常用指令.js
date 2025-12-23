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

    var msg = "  #fUI/UIWindow/9DDesign/Menu/top/常用指令#\r\n";	//取得LOGO
    switch(status) {
        case 0:
            for(var i = 0; i < 4; i++) {
                msg += "#L" + i + "##fUI/UIWindow/9DDesign/Menu/常用指令/" + i + "##l";
            }
            for(var i = 5; i < 11; i++) {
                msg += "#L" + i + "##fUI/UIWindow/9DDesign/Menu/常用指令/" + i + "##l";
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
                    cm.openNpc(cm.getNpc(), "[功能]組隊任務移動");
                    return;
                case 2:
                    cm.dispose();
                    cm.processCommand("@dcback");
                    return;
                case 3:
                    cm.dispose();
                    cm.processCommand("@fm");
                    return;
                case 4:
                    cm.dispose();    
                    cm.openNpc(9000001);
                    return;
                case 5:
                    cm.dispose();
                    cm.processCommand("@pickone");
                    return;
                case 6:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]道具排序");
                    return;
                case 7:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]二段跳設置");
                    return;
                case 8:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]聯絡GM");
                    return;
                case 9:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]世界王入口");
                    return;
                case 10:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]自動化技能-入口");
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