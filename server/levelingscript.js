//自定義升級腳本
load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.client.inventory);

function start() {
    
    var level = cm.getPlayer().getLevel();

    switch(level) {
        //case 140:
        //    MapleInventoryManipulator.removeById(cm.getPlayer().getClient(), MapleInventoryType.EQUIPPED, 1113997, 4, true, false);
        //    if(cm.haveItem(1113997)){
        //        cm.getPlayer().dropMessage(5, "恭喜達到140等，已移除燃燒戒指");
        //    }
        //    cm.removeAll(1113997);
        //break;
    }
}