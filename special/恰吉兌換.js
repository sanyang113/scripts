var status = -1;
var sel = -1;
var items = [
    [
        [4310107, 50],
        [4021009, 5],
        [4011007, 5],
        [2250002, 1],
    ],
    [
        [2040150, 1],
        [4310107, 50],
        [4030038, 200],
        [4021009, 5],
        [4011007, 5],
        [2250002, 2],
    ],
    [
        [4310107, 10],
        [2250001, 3],
    ]
]

var gainItem = [2040150, 2040151, 1012170];

function start() {
    return action(1,0,0);
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
            var msg = "如果你有足夠的材料，我們幫你合成恰吉的面具唷，請選擇合成項目：\r\n";
            for(var i = 0; i < gainItem.length; i++) {
                msg += "\r\n#L" + i + "##b#i" + gainItem[i] + ":##t" + gainItem[i] + "#";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var msg = "合成#b#i" + gainItem[sel] + ":##t" + gainItem[sel] + "##k需要以下材料：\r\n";
            for(var i = 0; i < items[sel].length; i++) {
                msg += "\r\n#b#i" + items[sel][i][0] + ":##t" + items[sel][i][0] + "##k x" + items[sel][i][1] +"個";
            }
            msg += "\r\n\r\n確定要合成嗎？";
            cm.sendYesNo(msg);
            break;
        case 2:
            if(!cm.canHold(gainItem[sel],1)) {
                cm.sendOk("很抱歉，您的背包空間不足唷！");
                cm.dispose();
                return;
            }         
            var check = true;
            for(var i = 0; i < items[sel].length; i++) {
                if(!cm.haveItem(items[sel][i][0], items[sel][i][1])) {
                    check = false;
                    break;
                }
            }   
            if(!check) {
                cm.sendOk("很抱歉，您的材料不足唷！");
                cm.dispose();
                return;
            }
            for(var i= 0; i < items[sel].length; i++) {
                cm.gainItem(items[sel][i][0],  -items[sel][i][1]);
            }
            cm.gainItem(gainItem[sel], 1, true);
            cm.sendOk("幫您兌換完成囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }

}