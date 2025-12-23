var status = -1;

function start() {
    cm.sendSimple("喵囉，我是偉大莉莉可。需要我開啟魔法陣把你傳送到#r斗內網頁#k嗎？\r\n#L0##b開啟魔法陣！我要去斗內網站！\r\n #r單筆滿5000贈3％, 10000贈5％ #k #l");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        status++;
        if (status == 0) {
            if (selection == 0) {
                cm.openURL("https://maplenyan.com");
                cm.dispose();
            }
        }
    }
}