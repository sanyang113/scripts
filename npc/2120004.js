var status = -1;
var gainItem = 1142534;
var useItem = [
    [4030002, 100],
    [4030002, 1],
];

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
            var msg = "對神祕的勳章有興趣嗎？\r\n幫我蒐集以下道具就給你#b#i" + gainItem + ":##t" + gainItem + "#\r\n";
            for(var i = 0; i < useItem.length; i++) {
                msg += "\r\n#b#i" + useItem[i][0] + ":##t" + useItem[i][0] + "##k x" + useItem[i][1] + "個";
            }
            msg += "\r\n\r\n您確定要兌換嗎？";
            cm.sendYesNo(msg);
            break;
        case 1:
            var check = true;
            for(var i = 0; i < useItem.length; i++) {
                if(!cm.haveItem(useItem[i][0], useItem[i][1])) {
                    check = false;
                }
            }
            if(!check) {
                cm.sendOk("很抱歉，您的材料不足唷！");
                cm.dispose();
                return;
            }
            if(!cm.canHold(gainItem, 1)) {
                cm.sendOk("請確認背包空間是否足夠！");
                cm.dispose();
                return;
            }
            for(var i = 0; i < useItem.length; i++) {
                cm.gainItem(useItem[i][0], -useItem[i][1]);
            }
            cm.gainItem(gainItem, 1);
            cm.sendOk("幫您兌換完成囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}