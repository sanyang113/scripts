var status = -1;
var prize = -1;
var qty = -1;
var totalNum = -1;
var text = -1;
var hint = -1;
var quizType = -1;

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

    if(!cm.getPlayer().isGM()) {
        cm.sendOk("GM才可以進行操作");
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            var msg = "開啟活動，輸入關鍵字";
            cm.sendGetText(msg);
            break;
        case 1:
            text = cm.getText();
            var msg = "關鍵字為:[" + text + "]，請設定獎勵ID";
            cm.sendGetNumber(msg, 1, 1, 10000000);
            break;
        case 2:
            if(!cm.itemExistOrNot(selection)) {
                cm.sendOk("很抱歉，道具不存在");
                cm.dispose();
                return;
            }
            prize = selection;
            var msg = "已設定獎勵道具為#i" + prize + ":##t" + prize + "#，請設定獎勵數量";
            cm.sendGetNumber(msg, 1, 1, 5000);
            break;
        case 3:
            qty = selection;
            var msg = "已設定獎勵數量為:" + qty + "，請設定獲獎人數量";
            cm.sendGetNumber(msg, 1, 1, 5000);
            break;
        case 4:
            totalNum = selection;
            var msg = "已設定獲獎人數量為:" + totalNum + "\r\n請設定搶答提示";
            cm.sendGetText(msg);
            break;
        case 5:
            hint = cm.getText();
            var msg = "提示為(" + hint + ")，請設定題目類型";
            cm.sendGetText(msg);
            break;
        case 6:
            quizType = cm.getText();
            var msg = "題目類型為(" + quizType + "),確定要執行嗎？";
            cm.sendYesNo(msg);
            break;
        case 7:
            var instance = cm.getCustomEvent();
            instance.resetEvent();
            instance.setKeyWord(text);
            instance.setTotalNum(totalNum);
            instance.setPrizeItemId(prize);
            instance.setPrizeQty(qty);
            instance.setEventHolder(cm.getPlayer());
            instance.setQuizType(quizType);
            instance.setHint(hint);
            cm.customEventHandlerSetting(0);
            cm.sendOk("已經設定完畢囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }  
}