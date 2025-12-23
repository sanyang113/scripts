var status = -1;
var text = -1;

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            cm.sendGetText("請輸入需要查詢的道具關鍵字:");
            break;
        case 1:
            text = cm.getText();
            cm.sendOk(cm.searchDataRestrict(1, text));
            break;
        case 2:
            if(selection >= 1000000000) {
                var index = selection - 1000000000;
                status --;
                cm.sendOk(cm.searchDataRestrict(1, text, index));
                break;
            }
            var items = cm.searchItem(selection);
            var msg = "以下是掉落物品的怪物:\r\n";
            var showMore = cm.getPlayer().isGM();

            if(showMore) {
                for(var i = 0; i < items.length; i++) {
                    var mob = cm.getMobName(items[i][0]);
                    if(mob != null) {
                        msg += "#b\r\n" + mob + "(" + items[i][0]+")" + "chance=" + items[i][1];
                    }
                }
            } else {
                for(var i = 0; i < items.length; i++) {
                    var mob = cm.getMobName(items[i][0]);
                    if(mob != null) {
                        msg += "#b\r\n" + mob + "(" + items[i][0]+")" + (items[i][1] == 0 ? "(遠征寶箱取得)":"");
                    }
                }
            }
            cm.sendOk(msg);
            cm.dispose();
            return;
    }
}