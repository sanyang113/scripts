var status = -1;

var selects = ["[功能]世界王兌換","[功能]世界王資訊","[功能]世界王介紹"];

function start() {
    action(1,0,0);
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
            var msg = "請選擇您想要進行的操作\r\n";
            msg += "#L0##b我想要進行世界王獎勵兌換#k#l\r\n";
            msg += "#L1##b我想要查看世界王討伐資訊#k#l\r\n";
            msg += "#L2##b我想要了解世界王是什麼#k#l\r\n";
            cm.sendOk(msg);
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