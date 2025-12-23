var status = -1;

var selects = ["奧芙赫班象徵兌換","天皇蟾蜍象徵兌換","組隊象徵兌換"];

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

    switch(status) {
        case 0:
            var msg = "請問您想要做什麼呢？\r\n\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "#L" + i + "##b" + selects[i] + "\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(), selects[selection]);
            return;
        default:
            cm.dispose();
            return;
    }
}