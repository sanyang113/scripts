var status = -1;

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

    var msg = "  #fUI/UIWindow/9DDesign/Menu/top/其他功能#\r\n";	//取得LOGO
    switch(status) {
        case 0:
            for(var i = 0; i < 1; i++) {
                msg += "#L" + i + "##fUI/UIWindow/9DDesign/Menu/其他功能/" + i + "##l";
            }
            for(var i = 2; i < 11; i++) {
                msg += "#L" + i + "##fUI/UIWindow/9DDesign/Menu/其他功能/" + i + "##l";
            }
            cm.sendNext(msg);
            break;
        case 1:
            switch(selection) {
                case 0:
                    cm.dispose();
                    cm.processCommand("@pickone");
                    return;
                case 1:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]領取活動道具廣播");
                    return;
                case 2:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(), "[功能]怪物騎乘");
                    return;
                case 3:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]解封印鑰匙購買");
                    return;
                case 4:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]道具排序");
                    return;
                case 5:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]DISCORD綁定獎勵");
                    return;
                case 6:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]二段跳設置");
                    return;
                case 7:
                    cm.dispose();
                    cm.processCommand("@expinfo");
                    return;
                case 8:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]物品堆疊");
                    return;
                case 9:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]自動化技能-入口");
                    return;
                case 10:
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]聯絡GM");
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