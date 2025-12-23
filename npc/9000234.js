var status = -1;
var sel = -1;

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    var level = cm.getPlayer().getLevel();
    if(level < 120) {
        cm.dispose();
        cm.openNpc(cm.getNpc(),"小確幸兌換");
        return;
    } else {
        cm.dispose();
        cm.openNpc(cm.getNpc(),"分身小確幸兌換");
        return;
    }
}