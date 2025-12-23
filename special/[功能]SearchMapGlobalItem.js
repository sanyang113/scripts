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
    
    var items = cm.searchMapGlobalDrop();
    var msg = "掉落物結果如下(不受掉寶加倍影響):\r\n";
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
                msg += "\r\n#b#i" + items[i][0] + ":##t" + items[i][0] + "##n(" + items[i][0] +")";
            }
        }
    } 
    cm.sendOk(msg);
    cm.dispose();
    return;
}