var status = -1;

function start() {
    return action(1,0,0);
}

function action(mode, type, selection) {
    if(cm.getPlayer().getMapId() == 109020010) {
        cm.dispose();
        cm.openNpc(cm.getNpc(),"[GM活動]紅綠燈通關");
    }
}

