var status = -1;
var selects = ["[倉庫]卷軸全部存入","[倉庫]卷軸取出","[倉庫]卷軸存入倉庫","[倉庫]卷軸取出(查看全部)","[倉庫]卷軸取出(關鍵字搜尋)"];
var selectShow = ["卷軸全部存入","卷軸取出","卷軸存入倉庫","卷軸取出(查看全部)","卷軸取出(關鍵字搜尋)"];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            var msg = "這裡是山羊谷卷軸倉庫，請問您想要做什麼呢？\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "\r\n#L" + i + "##b" + selectShow[i];
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