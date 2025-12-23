var status = -1;
var selects = ["恰吉兌換","恰吉分解","恰吉鍛造","南瓜硬幣商店","恰吉批量分解"];

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
            var msg = "請問您要進行什麼操作？\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "\r\n#L" + i + "##b" + selects[i];
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