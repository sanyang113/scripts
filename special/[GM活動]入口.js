var status = -1;

var selects = ["丟丟樂","俄羅斯輪盤","大風吹","捕魚遊戲","是非大考驗","梅花幾月開","記憶大考驗","藥水店","老師說","誰是炸彈魔","超級估價王","財寶爭奪戰","躲避怪物","玩楓小學堂","紅綠燈","廣播","取消廣播"]

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
            var msg = "請選擇活動項目\r\n\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "#L" + i + "##b" + selects[i] + "\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(),"[GM活動]" + selects[selection]);
            return;
        default:
            cm.dispose();
            return;
    }
}