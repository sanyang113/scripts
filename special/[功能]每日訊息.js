var status = -1;

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
            var msg = "    #fUI/UIWindow/9DDesign/Menu/logo#\r\n\r\n";	//取得LOGO
            msg += "#r#e《山羊谷今日快訊》#k#n\r\n\r\n"
            msg += "※#rFacebook推廣活動開跑中#k，活動詳情請見#bDiscord#k\r\n";
            msg += "※#r冰雪聖誕派對活動開跑中#k，活動詳情請見#b官方網站#k\r\n\r\n\r\n";
            msg += "#r#e《官方實用連結》#k#n\r\n\r\n"
            msg += "#L1##b#e山羊谷官方網站#k#n#l           ";
            msg += "#L2##b#e官方Discord#k#n#l\r\n\r\n";
            msg += "#L3##b#eLine官方帳號#k#n#l             ";
            msg += "#L4##b#e官方粉專連結#k#n#l\r\n\r\n";
            msg += "#b  (ID搜尋: @057lsahj)\r\n\r\n\r\n";
            msg += "#r#e《必讀注意事項》#k#n\r\n\r\n";
            msg += "※BUG回報請使用Discord內的Bug回報專區#k\r\n";
            msg += "※遊戲建議請使用Discord內的遊戲建議專區#k\r\n\r\n";
            msg += "                               #L999##r#e【今日不再顯示】#l";
            cm.sendNext(msg);
            break;
        case 1:
            if(selection == 1) {
                cm.openURL("https://maplefun113.com");
                cm.dispose();
                return;
            } else if(selection == 2) {
                cm.openURL("https://discord.gg/C9RRcksnbQ");
                cm.dispose();
                return;
            } else if(selection == 3) {
                cm.openURL("https://lin.ee/r3otx5q");
                cm.dispose();
                return;
            } else if(selection == 4) {
                cm.openURL("https://www.facebook.com/profile.php?id=61576194484971");
                cm.dispose();
                return;
            } else if(selection == 999) {
                cm.addRemoveDailyMessage();
                cm.dispose();
                return;
            }
        default:
            cm.dispose();
            return;
    }
}