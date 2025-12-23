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
            if (cm.getMonsterCount(910400000) <= 0) {
                cm.sendOk("就知道這樣做你就會上當");
                cm.spawnMonster(9300345, 1, 85, 120)
                cm.dispose();
                return;
            }
            cm.sendOk("受死吧");
            cm.dispose();
            return;
    }
}