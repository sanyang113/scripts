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

    var msg = "  #fUI/UIWindow/9DDesign/Menu/top/移動相關#\r\n";	//取得LOGO
    switch(status) {
        case 0:
            for(var i = 0; i < 3; i++) {
                msg += "#L" + i + "##fUI/UIWindow/9DDesign/Menu/移動相關/" + i + "##l";
            }
            cm.sendNext(msg);
            break;
        case 1:
            switch(selection) {
                case 0:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(), "[功能]組隊任務移動");
                    return;
                case 1:
                    cm.dispose();
                    cm.processCommand("@dcback");
                    return;
                case 2:
                    cm.dispose();
                    cm.processCommand("@fm");
                    return;
                case 3:
                    cm.dispose();    
                    cm.openNpc(9000001);
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