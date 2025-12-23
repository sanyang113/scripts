var status = -1;
var sel = -1;
var map = -1;

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
            map = cm.getPlayer().getMapId();
            if(map == 230040420) {
                var msg = "每天有五次的機會可以挑戰野王BOSS\r\n\r\n";
                msg += "#L1##b我要挑戰右魚王\r\n";
                msg += "#L2##b我要挑戰左魚王\r\n";
                cm.sendNext(msg);
            } else {
                var msg = "每天有五次的機會可以挑戰野王BOSS，您確定要進入嗎？";
                status++;
                cm.sendYesNo(msg);
            }
            break;
        case 1:
            if(selection == 2) {
                map = 230040421;
            }
        case 2:
            if(cm.getPlayer().getCharacterOnly(log(map)) >= 5) {
                cm.sendOk("很抱歉，您今天挑戰次數已經達到上限");
                cm.dispose();
                return;
            }
            var arr = findEvent(map);
            if(arr == null) {
                cm.sendOk("找不到腳本，請聯繫GM, errorCode = 1");
                cm.dispose();
                return;
            }
            var event = cm.getMapFactory().getMap(arr[0]);

            if(event == null) {
                cm.sendOk("找不到腳本，請聯繫GM, errorCode = 2");
                cm.dispose();
                return;
            }

            if(event.playerCount() != 0) {
                cm.sendOk("很抱歉，裡面已經有人了！");
                cm.dispose();
                return;
            }
            event.killAllMonsters(true);
            cm.getPlayer().setCharacterOnly(log(map));
            cm.warp(arr[0], 0);
			cm.spawnMobOnMap(arr[1], 1, arr[2], arr[3], arr[0]);
            cm.dispose();
            return;
    }
}

function findEvent(mapId) {
    var arr = null;
    switch(mapId) {
        case 270010500:
            arr = [750000010, 8220004, 81, 179];
            break;
        case 270020500:
            arr = [750000011, 8220005, 81, 179];
            break;
        case 270030500:
            arr = [750000012, 8220006, 81, 179];
            break;
        case 240020401:
            arr = [750000013, 8180000, -27, 452];
            break;
        case 240020101:
            arr = [750000014, 8180001, -27, 452];
            break;
        case 240040401:
            arr = [750000015, 8220003, 302, 2471];
            break;
        case 230040420:
            arr = [750000016, 8510000, 568, 137];
            break;
        case 230040421:
            arr = [750000018, 8520000, -459, 137];
            break;
    }
    return arr;
}


function log(map) {
    var event = "野王挑戰:" + map;
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var daytime = "日期:" + year + "年" + month + "月" + day + "日";

    return event + daytime;
}