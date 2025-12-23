var status = -1;
// var selects = ["小國旗兌換", "台灣國旗兌換", "國旗碎片交換", "小國旗煉製", "台灣國旗煉製"];
var selects = ["製作純潔之心", "純潔之心兌換"];

// var icons = [4032065, 4034214, 4032064, 4032065, 4034214];
var icon = 4030206


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
            var msg = "你好，#b"+ playerName +"#k！我是#b國熙#k！ 你是來找#r純潔之心#k的嗎？\r\n";
            // var msg = "你好，#b"+ playerName +"#k！我是#b山羊谷活動大使#r 莉比#k！ 期待下次再見喔！\r\n";
            msg += "#n\r\n";
            var count = 0;
            for(var i = 0; i < selects.length; i++) {
                msg += "#L" + i + "##i" + icon + "##r " + selects[i] + "#b\r\n";
                count++;
                if(count >= 2) {
                    msg += "\r\n";
                    count = 0;
                }
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