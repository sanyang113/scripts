load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);

var status = -1;

function start() {
    return action(1,0,0);
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
            cm.testEquip(1000000);
            cm.getPlayer().getClient().sendPacket(MaplePacketCreator.modifyInventory(true, null));
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}