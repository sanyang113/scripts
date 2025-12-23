//領取功能性道具

var status = -1;
var sel = -1;
var gainItem = [5530005, 5530100, 5530101];

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
            var msg = "你想要領取什麼呢\r\n\r\n";
            for (var i = 0; i < gainItem.length; i++) {
                msg += "#L" + i + "#領取 #i" + gainItem[i] + ":# #b#t" + gainItem[i] + ":##k\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection
            if (!cm.canHold(gainItem[sel], 1)) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }else if (cm.haveItem(gainItem[sel], 1)) {
                cm.sendOk("你已經有 #i" + gainItem[sel] + ":##t" + gainItem[sel] + ":# 了");
                cm.dispose();
                return;
            }else {
            cm.gainItem(gainItem[sel], 1);
            cm.sendOk("給了你一個 #i" + gainItem[sel] + ":# #b#t" + gainItem[sel] + ":##k，收下吧！\r\n");
            cm.dispose();
            return;
            }
        default:
            cm.dispose();
    }
}
