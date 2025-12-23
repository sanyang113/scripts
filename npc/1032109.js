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
            //#L1#     #l
            //if(!cm.checkSpace(2)){ 
            //    cm.sendOk("使用命運卡系統請確認各欄位皆有至少一格空間！");
            //    cm.dispose();
            //    return;
            //}
            //cm.gainItem(1302000, 1, false, 10, 0, 1)
            //cm.givePartyExp(10000)
            // var msg ="";
            // var i = 2340000
            // if ((cm.getItemName(i)) != null){msg += cm.getItemName(i)}
            // cm.sendOk(msg);
            // cm.dispose();
            // return;
            if (cm.getMonsterCount(910110000) <= 0) {
                cm.spawnMobOnMap(9300286, 3, -23, 184, 910110000);
                cm.sendOk("從黑影中出現了幾隻危險的藍菇菇");
                cm.dispose();
                return;
            }
            cm.sendOk("危險的藍菇菇好可怕呀");
            cm.dispose();
            return;
    }
}