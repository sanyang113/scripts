//測試
var status = -1;
var sel = -1;
var qty = -1;

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
            if(cm.haveItem(4032136, 1)) {
                cm.sendOk("好像什麼都沒有");
                cm.dispose();
                return;
            }
            cm.gainItem(4032136,1);
            cm.sendOk("找到了一個藍水靈玩偶");
            cm.dispose();
            return;
    }
}