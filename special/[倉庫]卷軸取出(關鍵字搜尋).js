var status = -1;
var sel = -1;
var searchText = -1;

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
            var msg = "請輸入關鍵字搜尋道具：";
            cm.sendGetText(msg);
            break;
        case 1:
            var ret = cm.searchScroll(cm.getText());
            if(ret == null) {
                cm.sendOk("沒有匹配的項目唷！");
                cm.dispose();
                return;
            }
            var msg = "請選擇以下搜尋結果：\r\n";
            msg += ret;
            cm.sendNext(msg);
            break;
        case 2:
            var qty = cm.getScrollStorage().SearchOneItem(cm.getPlayer(), selection);
            if(qty == 0) {
                cm.sendOk("很抱歉，您沒有#b#i" + selection + ":##t" + selection + "##k在倉庫唷！");
                cm.dispose();
                return;
            }
            sel = selection;
            var msg = "您有#b#i" + selection + ":##t" + selection + "##k 共計 " + qty + "張，請輸入提領張數：";
            cm.sendGetNumber(msg, 1, 1, qty > 100 ? 100 : qty);
            break;
        case 3:
            if(!cm.haveSpace(2)) {
                cm.sendOk("提出卷軸請確認背包其他欄位是否有一格以上空間");
                cm.dispose();
                return;
            }
            var msg = cm.getScrollStorage().RemoveItem(cm.getPlayer(), sel, selection);
            if (msg != null) {
                cm.sendOk(msg);
                cm.dispose();
                return;
            }
            cm.sendOk("道具領取完成。");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}