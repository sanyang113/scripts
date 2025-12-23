var status = -1;

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
            var msg = "請問您要直接進入龍洞內嗎？";
            cm.sendYesNo(msg);
            break;
        case 1:
            if(cm.getPlayer().getLevel() >= 120) {
                cm.warp(240050000, 0);
            } else {
                cm.sendOk("等級達到120才能使用此功能唷！");
                cm.dispose();
                return;
            }
        default:
            cm.dispose();
            return;
    }
}
