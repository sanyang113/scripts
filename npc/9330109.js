//活動大使
var status = -1;
var selects = ["查看釣魚說明","兌換釣魚獎勵","兌換特殊獎勵"]

var icons = [5340000,4030002,4030002];


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
            var playerName = cm.getPlayer().getName();
            var msg = "您好，#b"+ playerName +"#k！我是#b釣魚場最頂級的廚師#k！\r\n";
            msg += "#n#k您想要做什麼呢\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "#L" + i + "##i" + icons[i] + ":##r " + selects[i] + "#b\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(), "[釣魚]" + selects[selection]);
            break;
        default:
            cm.dispose();
    }
}