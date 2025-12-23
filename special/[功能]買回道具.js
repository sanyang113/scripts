//測試
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
            cm.sendNext("該功能僅能買回裝備");
            break;
        case 1: 
            cm.dispose();
            cm.processCommand("@buyback");
            return;
        default:
            cm.dispose();
            return;
    }
}

