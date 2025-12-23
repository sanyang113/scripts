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

    var msg = "  #fUI/UIWindow/9DDesign/Menu/top/外觀設定#\r\n";	//取得LOGO
    switch(status) {
        case 0:
            for(var i = 0; i < 2; i++) {
                msg += "#L" + i + "##fUI/UIWindow/9DDesign/Menu/外觀設定/" + i + "##l";
            }
            cm.sendNext(msg);
            break;
        case 1:
            switch(selection) {
                case 0:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(), "[功能]萬用造型");
                    return;
                case 1:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(), "[功能]DamageSkinCreator");
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