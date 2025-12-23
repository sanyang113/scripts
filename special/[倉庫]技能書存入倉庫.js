var status = -1;
var sel = -1;
var keepItem = -1;

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
            var msg = "請選擇想存入的技能書：";
            var msg2 = "";
            for (var i = 0; i < 100; i++) {
                if (cm.getInventory(2).getItem(i) != null && cm.isSkillBook(cm.getInventory(2).getItem(i).getItemId())) {
                    msg2 += "\r\n#b#L" + Math.abs(i) + "##t" + cm.getInventory(2).getItem(i).getItemId() + "##l　";
                }
            }
            if(msg2 == "") {
                cm.sendOk("您身上沒有技能書可以存放");
                cm.dispose();
                return;
            }
            cm.sendNext(msg + msg2);
            break;
        case 1:
            sel = selection;
            var item = cm.getItem(2, selection);
            if (item == null) {
                cm.sendOk("發生錯誤，請稍後在嘗試。");
                cm.dispose();
                return;
            }
            keepItem = item;
            cm.sendGetNumber("請問您要存入幾本呢？ 目前擁有" + item.getQuantity() + "本", item.getQuantity(), 1, item.getQuantity() > 5000 ? 5000 : item.getQuantity());
            break;
        case 2:
            var msg = cm.getSkillBookStorage().addItem(cm.getPlayer(), keepItem, selection);
            if (msg != null) {
                cm.sendOk(msg);
                cm.dispose();
                return;
            }
            cm.sendOk("存放道具成功。");
            status = -1;
    }
}