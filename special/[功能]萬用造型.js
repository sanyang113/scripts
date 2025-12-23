var status = -1;

var selects = ["[功能]造型美髮","[功能]造型染髮","[功能]造型整形","[功能]造型膚色","[功能]造型存檔簿"];
var showName = ["造型美髮","造型染髮","造型整形","造型膚色","造型存檔簿"];

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
            var msg = "HI，我是山羊谷萬用造型設計師，您想要進行什麼操作呢？\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "\r\n#b#L" + i + "#" + showName[i];
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