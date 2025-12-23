var status = -1;

var item = 5078000;

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
            var msg = "您要領取免費的#i" + item + ":##t" + item + "#嗎？僅可在活動期間內使用唷！";
            cm.sendYesNo(msg);
            break;
        case 1:
            if(cm.haveItem(item, 100)) {
                cm.sendOk("太貪心了吧！");
                cm.dispose();
                break;
            }
            cm.gainItem(item, 100);
            cm.sendOk("請收下吧！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}