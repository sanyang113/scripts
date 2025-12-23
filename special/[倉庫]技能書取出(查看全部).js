var status = -1;
var sel = -1;

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
            var msg = "請選擇想取出的技能書：\r\n";
            var msg2 = cm.getSkillBookStorage().SearchItems(cm.getPlayer());
            if (msg2 == null) {
                cm.sendOk("您沒有可以領取的道具。");
                cm.dispose();
                return;
            }
            cm.sendNext(msg + msg2);
            break;
        case 1:
            sel = selection;
            cm.sendGetNumber("請輸入您想領出的數量", 1, 1, 100);
            break;
        case 2:
            if(!cm.haveSpace(2)) {
                cm.sendOk("提出技能書請確認背包其他欄位是否有一格以上空間");
                cm.dispose();
                return;
            }

            var msg = cm.getSkillBookStorage().RemoveItem(cm.getPlayer(), sel, selection);
            if (msg != null) {
                cm.sendOk(msg);
                cm.dispose();
                return;
            }
            cm.sendOk("道具領取完成。");
            cm.dispose();
            return;
    }
}