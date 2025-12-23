var status = -1;
var sel = -1;
var use = false;
var slot = -1;
var rate = 40;
var selects = ["龍武鍛造", "劍士裝備鍛造", "法師裝備鍛造", "弓箭手裝備鍛造", "盜賊裝備鍛造", "海盜裝備鍛造", "飾品鍛造", "盾牌鍛造", "戒指鍛造", "航海師武器鍛造"];

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
            var msg = "您好，我是#b派伊#k，請問您找我有什麼事情？";
            msg += "\r\n#L0##b我要鍛造我的裝備#k";
            msg += "\r\n#L1##b我要鍛造卯咪意志墜飾#k";
            msg += "\r\n#L2##b我要鍛造龍神裝備#k";
            msg += "\r\n#L3##b我要鍛造卯咪永恆墜飾#k";
            msg += "\r\n#L4##b我要鍛造卯咪的夢幻腰帶#k";
            msg += "\r\n#L5##b我要重鑄卯咪探險家腰帶#k";
            cm.sendNext(msg);
            break;
        case 1:
            if(selection == 0) {
                var msg = "我在山羊谷的世界中領悟了一項#b危險的技術#k，可以#b強化#k您目前的裝備，有興趣知道嗎？\r\n#r※鍛造失敗不會破壞原始裝備，僅消耗材料道具。#k";
                for(var i = 0; i < selects.length; i++) {
                    msg += "\r\n#L" + i + "#我要進行" + selects[i];
                }
                cm.sendNext(msg);
                break;
            } else if(selection == 1) {
                cm.dispose();
                cm.openNpc(cm.getNpc(),"鍛造卯咪意志墜飾");
                return;
            } else if(selection == 2) {
                cm.dispose();
                cm.openNpc(cm.getNpc(),"鍛造龍神手套");
                return;
            } else if(selection === 3) {
                cm.dispose();
                cm.openNpc(cm.getNpc(),"免費永恆綴飾");
                return;
            } else if(selection == 4){
                cm.dispose();
                cm.openNpc(cm.getNpc(),"鍛造卯咪的夢幻腰帶");
                return;
            } else if(selection == 5) {
                cm.dispose();
                cm.openNpc(cm.getNpc(),"重鑄卯咪探險家腰帶");
                return;
            } else {
                cm.dispose();
                return;
            }
        case 2:
            cm.dispose();
            cm.openNpc(cm.getNpc(), selects[selection]);
            break;
        default:
            cm.dispose();
            return;
    }
}