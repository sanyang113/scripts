var status = -1;
var prizeId = -1;
var qty = -1;
var hint = -1;

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
            var msg = "捉迷藏設定，會在您的位置創建NPC，請先設定獎勵ID";
            cm.sendGetNumber(msg, 1, 1, 10000000);
            break;
        case 1:
            prizeId = selection;
            if(!cm.itemExistOrNot(selection)) {
                cm.sendOk("很抱歉，道具不存在");
                cm.dispose();
                return;
            }
            var msg = "獎勵為#b#i" + prizeId + ":##t" + prizeId + "##k，請設定獎勵數量";
            cm.sendGetNumber(msg, 1, 1, 5000);
            break;
        case 2:
            qty = selection;
            var msg = "獎勵#b#i" + prizeId + ":##t" + prizeId + "##K，\r\n數量：" + qty + "，請設定提示：";
            cm.sendGetText(msg);
            break;
        case 3:
            hint = cm.getText();
            var msg = "提示為(" + hint + ")，確定要執行嗎？";
            cm.sendYesNo(msg);
            break;
        case 4:
            cm.getHideAndSeek().setHint(hint);
            cm.getHideAndSeek().handleEvent(cm.getPlayer(),prizeId, qty);
            cm.sendOk("活動已開始");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}