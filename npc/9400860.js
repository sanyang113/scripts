var eventName = "春日活動";
var status = -1;
var selects = ["春日活動兌換", "春日活動技能書兌換"]

var icons = [4030002, 4030208];


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
            var msg = "你好，#b"+ playerName +"#k！我是#b山羊谷活動大使#r 莉比#k！ \r\n現在是#r" + eventName + "#k期間哦！\r\n";
            //var msg = "你好，#b"+ playerName +"#k！我是#b山羊谷活動大使#r 莉比#k！ \r\n期待下次再見喔！\r\n";
            msg += "#n\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "#L" + i + "##i" + icons[i] + "##r " + selects[i] + "#b\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(), selects[selection]);
            break;
        default:
            cm.dispose();
    }
}