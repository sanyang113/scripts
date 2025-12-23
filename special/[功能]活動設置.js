var status = -1;

var selects = ["設置廣播活動1","[GM活動]楓之谷小學堂","設置活動搶答","設置活動楓之谷小學堂","重置廣播活動","搶答活動介紹"];

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

    if(!cm.getPlayer().isGM()) {
        cm.sendOk("GM才可以進行操作");
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            var msg = "請選擇活動項目：\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "\r\n#L" + i + "#" + selects[i];
            }
            cm.sendNext(msg);
            break;
        case 1:
            if(selection == 2 || selection == 3) {
                cm.customEventHandlerSetting(selection - 2);
                cm.sendOk("已切換活動項目");
                cm.dispose();
                return;
            } else if(selection == 4) {
                cm.getCustomEvent().resetEvent();
                cm.sendOk("已重置");
                cm.dispose();
                return;
            } else if(selection == 5) {
                cm.getCustomEvent().gameHelper();
                cm.sendOk("已發送");
                cm.dispose();
                return;
            }
            cm.dispose();
            cm.openNpc(cm.getNpc(),selects[selection]);
            return;
        default:
            cm.dispose();
            return;
    }

}