var status = -1;
var useItem = 4001320;
var qty = 1;

var selects = ["游泳圈抽獎","游泳圈保底兌換","游泳圈碎片交換"];

function start() {
    action(1, 0, 0);
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
            var msg = "歡迎來到山羊谷的世界，你如果有#b#i" + useItem + ":##t" + useItem + "##k的話，能跟我交換神秘禮物唷！";
            for(var i = 0; i < selects.length; i++) {
                msg += "#b\r\n#L" + i + "#" + selects[i];
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(),selects[selection]);
            return;
        default:
            cm.dispose();
            return;
    }
}