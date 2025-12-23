var status = -1;
var sel = -1;

var maps = [
    ["超級綠水靈組隊任務",103000000,21],
    ["玩具城101組隊任務",221024500,35],
    ["毒霧森林組隊任務",300030100,50],
    ["金勾海賊王組隊任務",251010404,55],
    ["羅密歐與茱麗葉組隊任務",261000011,71],
    ["女神之塔組隊任務",200080101,51],
    //["不用結婚組隊任務",670010000, 40],
]

function start() {
    action(1, 0, 0);
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

    var level = cm.getPlayer().getLevel();
    if(level < 21) {
        cm.sendOk("您還太弱小了，快去訓練吧!");
        cm.dispose();
        return;
    }
    if(cm.getPlayer().getEventInstance() != null || cm.getPlayer().getUcity() != null) {
        cm.sendOk("目前無法使用傳送唷!");
        cm.dispose();
        return;
    }

    if(cm.getPlayer().getMapId() == 922010000) {
        cm.sendOk("目前無法使用傳送唷!");
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:    
            var msg = "您可以移動到下列組隊任務入口:\r\n";
            for(var i = 0; i < maps.length; i++) {
                if(level >= maps[i][2]) {
                    msg += "\r\n#b#L" + i + "#" + maps[i][0];
                }
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var msg = "您確定要移動到 #b" + maps[sel][0] + " #k的路口嗎？";
            cm.sendYesNo(msg);
            break;
        case 2:
            cm.warp(maps[sel][1],0);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}