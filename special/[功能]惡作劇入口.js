var status = -1;

var selects = ["[功能]整人變身隨機","[功能]整人變身指定","[功能]整人殺人"];

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
            var msg = "今天是否想要來作點壞壞的事情呢？\r\n\r\n";
            msg += "#L0##b我想花費10,000,000楓幣指定一名玩家進行隨機變身\r\n";
            msg += "#L1##b我想花費10,000,000楓幣指定一名玩家進行指定項目變身\r\n";
            msg += "#L2##b我想花費10,000,000楓幣殺死一位玩家(不會扣除經驗)\r\n";
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