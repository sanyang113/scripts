//技能書全部存入

var status = -1;

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
            cm.sendYesNo("您確定要將身上礦石.魔法粉全部存入倉庫嗎？");
            break;
        case 1:
            var msg = cm.getOreStorage().addAllOres(cm.getPlayer());
            if (msg != null) {
                cm.sendOk(msg);
                cm.dispose();
                return;
            }
            cm.sendOk("存放道具成功。");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}