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
            var npcid = cm.getNpc();
            var npc = cm.getPlayer().getMap().getNPCById(npcid);
            if(getDistance(npc, cm.getPlayer()) >= 50000) {
                cm.sendOk("距離太遠了");
                cm.dispose();
                return;
            }
            cm.sendOk("恭喜通關");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

function getDistance(npc, player) {
    var x1 = npc.getRx0();
    var y1 = npc.getCy();

    var position = player.getPosition();
    var x2 = position.x;
    var y2 = position.y;

    var total = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);

    return total;
}