var status = -1;

var selects = ["[倉庫]裝備倉庫","[倉庫]道具倉庫","[倉庫]勳章倉庫","[倉庫]點裝倉庫","[倉庫]坐騎倉庫","[倉庫]滿包倉庫"];
var selectShow = ["裝備倉庫","道具倉庫","勳章倉庫","點裝倉庫","坐騎倉庫","滿包倉庫"];

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
            var msg = "您好，我是#b布丁#k，請問您找我有什麼事情？\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "\r\n#L" + i + "##b我要使用" + selectShow[i] + "#k";
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(),selects[selection]);
            return;
        default:
            dispose();
            return;
    }
}