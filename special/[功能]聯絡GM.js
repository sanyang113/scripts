var status = -1;

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
            var msg = "\r\n\r\n若您有遇到遊戲內的狀況為 \r\n\r\n"
            msg += " #r小bug #k 請至 #bDiscord - bug回報 #r進行開單、回報#k\r\n";
            msg += " #r遊戲建議 #k 請至 #bDiscord - 遊戲建議 #r進行開單、回報#k\r\n";
            msg += " #r疑難雜症#k 請至 #bDiscord - 問題討論 #k向玩家詢問\r\n";
            msg += " #r緊急狀況、遊戲外掛、活動回圖、重大Bug #k 再使用本系統進行回報#k\r\n\r\n";
            msg += "若回報非 #r緊急狀況、遊戲外掛、活動回圖 #k狀況則不予回應#k\r\n";
            msg += "回報#r#e緊急狀況#n#k時需#r敘述遇到的問題#k，否則不予回應\r\n";
            msg += "若有#r濫用#k該系統的玩家，則會#r禁止該玩家#k使用該系統\r\n";
            cm.sendGetText(msg);
            break;
        case 1:
            var text = cm.getText();
            if(text.length == 0) {
                cm.sendOk("請輸入文字。");
                cm.dispose();
                return;
            }
            if(text == "緊急狀況") {
                cm.sendOk("請說明原因。");
                cm.dispose();
                return;
            }
            if(text.length > 500) {
                cm.sendOk("很抱歉，您輸入的字數過多。");
                cm.dispose();
                return;
            }
            var cooldown = cm.getPlayer().getSendCGMCoolDown(300);
            if(cooldown > 0) {
                cm.sendOk("很抱歉，您不能連續傳送訊息，需等待" + cooldown + "秒");
                cm.dispose();
                return;
            }
            var sendStatus = cm.getSendCGM(cm.getText());
            if(sendStatus) {
                cm.sendOk("幫您傳送訊息囉，請稍候GM的回覆");
                cm.getPlayer().setSendCGMCoolDown();
                cm.dispose();
                return;
            } else {
                cm.sendOk("發生系統異常");
                cm.dispose();
                return;
            }
        default:
            cm.dispose();
            return;
    }
}