var status = -1;

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
            var msg = "您想要進行什麼操作？\r\n";
            msg += "\r\n#L1##b我要儲存我的髮型";
            msg += "\r\n#L2##b我要儲存我的臉型";
            msg += "\r\n#L3##b我要開啟我的髮型簿";
            msg += "\r\n#L4##b我要開啟我的臉型簿";
            cm.sendNext(msg);
            break;
        case 1:
            if(selection == 3 || selection == 4) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), selection == 3 ? "[功能]開啟髮型簿" : "[功能]開啟臉型簿");
                return;
            }
            var ret = 0;
            if(selection == 1) {
                ret = cm.saveHair(cm.getPlayer().getHair());
            } else if(selection == 2) {
                ret = cm.saveFace(cm.getPlayer().getFace());
            }
            if(ret == -1) {
                cm.sendOk("發生異常，請聯繫GM");
                cm.dispose();
                return;
            }
            if(ret == 1) {
                cm.sendOk("儲存簿數量已達到100個囉！請先刪除部分資料");
                cm.dispose();
                return;
            }
            if(ret == 2) {
                cm.sendOk("您已經儲存過該造型了！");
                cm.dispose();
                return;
            }
            if(ret != 0) {
                cm.sendOk("發生異常，請連續GM errorCode:" + ret);
                cm.dispose();
                return;
            }
            cm.sendOk("幫您儲存完畢囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}