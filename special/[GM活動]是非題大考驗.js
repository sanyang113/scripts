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
            msg += "#L3##b讀取題目\r\n";
            msg += "#L4##b發送獎勵\r\n";
            msg += "#L5##b強制終止遊戲\r\n";
            msg += "#L6##b傳送活動地圖\r\n";
            msg += "#L7##b傳送活動等待地圖玩家\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            var instance = cm.getOxQuizSystem();
            var factory = cm.getOxQuizFactory();
            if(selection == 1) {
                cm.dispose();
                instance.description(cm.getPlayer());
                return;
            } else if(selection == 2) {
                cm.dispose();
                instance.startEvent(cm.getPlayer());
                return;
            } else if(selection == 3){
                factory.updateQuizStatus();
                cm.sendOk("已經載入題庫了");
                return;
            } else if(selection == 4) {
                prize = true;
                var msg = "請輸入獎勵ID";
                cm.sendGetNumber(msg, 0, 0, 10000000);
                break;
            } else if(selection == 5) {
                instance.forceStop();
                cm.sendOk("已經終止活動了");
                cm.dispose();
                return;
            } else if(selection == 6) {
                var map = cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(109020001);
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
            if(prize) {
                itemid = selection;
                var msg = "確認獎勵為#b#i" + itemid + ":##t" + itemid + "##k，請輸入獎勵數量";
                cm.sendGetNumber(msg, 1, 1, 5000);
                break;
            }
        case 3:
            if(prize) {
                quantity = selection;
                var msg = "獎勵為#b#i" + itemid + ":##t" + itemid + "##k，數量為:" + quantity + "，確定要發送嗎？";
                cm.sendYesNo(msg);
                break;
            }
        case 4:
            if(prize) {
                var instance = cm.getOxQuizSystem();
                instance.sendPrize(cm.getPlayer(), itemid, quantity);
                cm.sendOk("已經發送獎勵了");
                return;
            }
        default:
            cm.dispose();
            return;
    }
}
