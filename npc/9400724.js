var status = -1;
var selects = ["[倉庫]卷軸倉庫入口","[倉庫]技能書倉庫入口","[倉庫]礦石.魔法粉倉庫入口"];
var selectShow = ["卷軸倉庫入口","技能書倉庫入口","礦石.魔法粉倉庫入口"];

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
            var msg = "您好，您想要進行什麼操作？\r\n\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "#L" + i + "##b" + selectShow[i] + "\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(),selects[selection]);
            return;
        default:
            cm.dispose();
            return;
    }
}