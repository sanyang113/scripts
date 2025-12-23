var status = -1;

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

    switch (status) {
        case 0:
            cm.sendOk(cm.searchMapMob());
            break;
        case 1:
            var items = cm.searchMob(selection);
            var msg = "掉落物結果如下:\r\n";
            var showMore = cm.getPlayer().isGM();
            if(showMore) {
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        msg += "\r\n#b#i" + items[i][0] + ":##t" + items[i][0] + "##n(" + items[i][0] +")" + "chance=(" + items[i][1] + ")";
                    }
                }
            } else {
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        msg += "\r\n#b#i" + items[i][0] + ":##t" + items[i][0] + "##n(" + items[i][0] +")" + (items[i][1] == 0 ? "(遠征寶箱取得)":"");
                    }
                }
            }
            cm.sendOk(msg);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }

}