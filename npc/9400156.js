var status = -1;
var selects = ["淬鍊交換富豪附魔石","富豪交換淬鍊附魔石","製作瓦爾附魔石", "製作高階附魔石(組隊任務素材)","崇高附魔石製作","神話附魔石製作","被詛咒的神話附魔石製作","製作高階附魔石","製作神聖附魔石","製作祝福附魔石","製作混沌附魔石","降階兌換高階附魔石","降階兌換瓦爾崇高附魔石","降階兌換瓦爾附魔石","製作改造附魔石","製作玷污改造附魔石"];
// var selects = ["淬鍊交換富豪附魔石","富豪交換淬鍊附魔石","製作瓦爾附魔石", "製作高階附魔石(組隊任務素材)"];

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
            var msg = "哈囉! 我能幫您煉製一些附魔石唷!#b";
            for(var i = 0; i < selects.length; i++) {
                msg += "\r\n#L" + i + "##i5240035#" + selects[i];
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(), selects[selection]);
            return;
        default:
            cm.dispose();
            return;
    }
}