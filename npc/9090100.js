var status = -1;
var selects = ["60%卷軸交換", "10%卷軸交換", "混沌卷軸交換", "祝福交換強力驚訝", "強力驚訝交換祝福", "純白卷軸兌換", "強化卷軸交換", "屬性轉移兌換卷", "卷軸自選", "裝備突破卷交換", "覺醒之力自選交換" ,"100%強化卷兌換券使用"];
// var selects = ["普通卷軸交換","10%卷軸交換","混沌卷軸交換", "祝福交換強力驚訝","強力驚訝交換祝福","純白卷軸兌換"];

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
            var msg = "哈囉! 我是愛唱歌的小公主 #bDany#k ，我這邊有一些實用的卷軸，可以跟您交換唷!#b";
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