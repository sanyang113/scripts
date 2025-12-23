var status = -1;

var itemid = -1;
var quantity = -1;
var prize = false;

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
            var msg = "請選擇項目\r\n\r\n";
            msg += "#L1##b遊戲規則公告\r\n";
            msg += "#L2##b開始進行遊戲\r\n";
            msg += "#L3##b停止遊戲\r\n";
            msg += "#L4##b排程結束活動\r\n";
            msg += "#L5##b強制終止遊戲\r\n";
            msg += "#L6##b傳送活動地圖\r\n";
            msg += "#L7##b傳送活動等待地圖玩家\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            var instance = cm.getMapleFishGame();
            if(selection == 1) {
                cm.dispose();
                instance.description(cm.getPlayer());
                return;
            } else if(selection == 2) {
                cm.dispose();
                instance.startEvent(cm.getPlayer());
                return;
            } else if(selection == 3) {
                cm.dispose();
                instance.stopEvent();
                return;
            } else if(selection == 4) {
                cm.sendGetNumber("請設定多少秒後結束活動", 1, 1, 1800);
                break;
            } else if(selection == 5) {
                instance.forceStop();
                cm.sendOk("已經終止活動了");
                cm.dispose();
                return;
            } else if(selection == 6) {
                var map = cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(109020003);
                if(map == null) {
                    cm.sendOk("無法傳送到該地圖");
                    cm.dispose();
                    return;
                }
                var fromMap = cm.getPlayer().getMap();
                var chrs = fromMap.getCharactersThreadsafe();
                for (var i = 0; i < chrs.length; i++) {
                    chrs[i].changeMap(map, map.getPortal(0));
                }
                cm.dispose();
                return;
            } else if(selection == 7) {
                var map = cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(910000200);
                if(map == null) {
                    cm.sendOk("找不到該地圖");
                    cm.dispose();
                    return;
                }
                var toMap = cm.getPlayer().getMap();
                var chrs = map.getCharactersThreadsafe();
                for (var i = 0; i < chrs.length; i++) {
                    chrs[i].changeMap(toMap, toMap.getPortal(0));
                }
                cm.dispose();
                return;
            }
        case 2:
            var seconds = selection;
            var instance = cm.getMapleFishGame();
            instance.scheduleStopEvent(seconds);
            cm.sendOk("已設定完成，活動將於" + seconds + "後結束");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}
