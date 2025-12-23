var status = -1;

var selects = [/*"[倉庫]裝備收藏冊",*/"[倉庫]典藏櫥窗"];

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

    switch(status) {
        case 0:
            var msg = "歡迎使用櫥窗系統，透過蒐集不同道具來增加#b#e全能力值#k#n\r\n#r#e※櫥窗系統同帳號共用，並且增加能力值也會增加在該帳號全部角色上！#k#n\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "\r\n#b#L" + i + "#" + selects[i];
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(), selects[selection]);
            return;
        default:
            cm.dispose();
            return;
    }
}