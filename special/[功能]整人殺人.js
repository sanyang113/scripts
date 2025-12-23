var status = -1;
var currentPlayers;
var victum;

var useMeso = 10000000;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            var msg = "請選擇鎖定目標:\r\n\r\n";
            var players = cm.getPlayer().getMap().getCharactersThreadsafe();
            currentPlayers = players;
            var append = "";
            for(var i = 0; i < players.length; i++) {
                var player = players[i];
                if(player == cm.getPlayer()) continue;
                // if(player.isGM()) continue;
                append += "#L" + i + "##b" + player.getName() + "#k\r\n";
            }
            if(append == "") {
                cm.sendOk("目前地圖上沒有其他玩家唷！");
                cm.dispose();
                return;
            }
            cm.sendNext(msg + append);
            break;
        case 1:
            victum = currentPlayers[selection];
            if(cm.getPlayer().getMeso() < useMeso) {
                cm.sendOk("很抱歉，您的楓幣不足唷！");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getMap() != victum.getMap()) {
                cm.sendOk("該玩家已經離開地圖了");
                cm.dispose();
                return;
            }
            var result = victum.trickDead();
            if(!result) {
                cm.sendOk("該玩家正在坐著椅子釣魚唷，無法進行惡作劇");
                cm.dispose();
                return;
            }
            victum.dropMessage(5,"你被某個玩家無情的殺死了QQ");
            cm.gainMeso(-useMeso);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}