var status = -1;

function start() {
    cm.openURL("https://maplefun113.com/category/events/");
    cm.dispose();
    return;
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        status++;
        if (status == 0) {
            if (selection == 0) {
                cm.openURL("https://maplefun113.com/category/events/");
                cm.dispose();
                return;
            } else if (selection == 1) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[功能]加密貨幣捐獻");
                return;
            }
        }
    }
}