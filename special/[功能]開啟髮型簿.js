var status = -1;

var savedHairs = -1;

var useHair = -1;

var sel = -1;

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
            var msg = "以下是您儲存的髮型";
            savedHairs = cm.loadHair();         
            if(savedHairs.length == 0) {
                cm.sendOk("您尚未儲存任何髮型唷！");
                cm.dispose();
                return;
            }
            for(var i = 0; i < savedHairs.length; i++) {
                msg += "\r\n#L" + i + "##b#z" + savedHairs[i] + "#(" + savedHairs[i] + ")";
            }
            cm.sendNext(msg);
            break;
        case 1:
            useHair = savedHairs[selection];
            var msg = "您選擇了#b#z" + useHair + "#(" + useHair + ")\r\n";
            msg += "\r\n#b#L1##b我要使用該髮型";
            msg += "\r\n#b#L2##b我要刪除該髮型";

            cm.sendNext(msg);
            break;
        case 2:
            if(selection == 1) {
                cm.askAvatar("選擇一個喜歡的髮型吧！", useHair);
                break;
            } else if(selection == 2) {
                cm.removeHair(useHair);
                cm.sendOk("幫您移除該髮型紀錄囉！");
                cm.dispose();
                return;
            }
        case 3:
            cm.setHair(useHair);
            cm.sendOk("幫您換好髮型囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}