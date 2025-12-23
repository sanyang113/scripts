var status = -1;
var sel = -1;
var equip = false;
var qty = 1;
var items = [
    [1072455, 10],
    [1082232, 10],
    [4030002, 30],
    [2450118, 150],
]
var items2 = [
    [1072455, 1072534, 10],
    [1082232, 1082322, 10],
]

var useItem = 4001158;

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
            var msg = "請選擇您想兌換的特殊獎勵#d#e（身上持有 #c" + useItem + "# 個#i" + useItem + ":#）#n#k\r\n";
            for(var i = 0; i < items.length; i++) {
                msg += "#L" + i + "##i" + useItem + ":# x #b";
                if(items[i][1]<=99){msg += " "}
                msg +=items[i][1] + "#k 兌換 #b#i" + items[i][0] + ":# #t" + items[i][0] + ":##k\r\n";
            }
            for(var i = 0; i < items2.length; i++) {
                msg += "#L" +(100+i) + "##i" + useItem + ":# x #b"
                if(items2[i][2]<=99){msg += " "}
                msg += items2[i][2] + "#k 升級 #b#i" + items2[i][0] + ":# #t" + items2[i][0] + ":##k\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            if (sel<100){
                var selItem = items[sel][0];
                var msg = "您確定要兌換#b#i" + selItem + ":##t" + selItem + ":##k嗎？"
            }else {
                var costItem = items2[sel-100][0];
                var selItem = items2[sel-100][1];
                var msg = "將#b#i" + costItem + ":##t" + costItem + ":##k升級成#b#i"+ selItem + ":##t" + selItem +":##k\r\n"
                msg += "需要消耗 #b" + items2[sel-100][2] + "#k 個 #b#i" + useItem + ":# #t" + useItem + ":#"
            }
            
            cm.sendYesNo(msg);
            break;
        case 2:
            if (sel<100){
                if(!cm.haveItem(useItem, items[sel][1])) {
                    cm.sendOk("很抱歉，您沒有足夠的材料唷！");
                    cm.dispose();
                    return;
                }

                if(!cm.canHold(items[sel][0], 1)) {
                    cm.sendOk("請確認背包空間是否足夠");
                    cm.dispose();
                    return;
                }
                cm.gainItem(useItem, -items[sel][1]);
                cm.gainItem(items[sel][0], qty, true);
                cm.sendOk("給了您#i" + items[sel][0] +":##t" +items[sel][0] + ":#");
                cm.dispose();
                return;
            }else {
                if(!cm.haveItem(useItem, items2[sel-100][2])) {
                    cm.sendOk("很抱歉，您沒有足夠的#b#i" + useItem +":##t" + useItem +":##k唷！");
                    cm.dispose();
                    return;
                }
                if(!cm.haveItem(items2[sel-100][0], 1)) {
                    cm.sendOk("很抱歉，您沒有#b#i" + items2[sel-100][0] +":##t" +items2[sel-100][0] + ":##k！");
                    cm.dispose();
                    return;
                }
                if(!cm.canHold(items2[sel-100][1], 1)) {
                    cm.sendOk("請確認背包空間是否足夠");
                    cm.dispose();
                    return;
                }
                cm.gainItem(useItem, -items2[sel-100][2]);
                cm.gainItem(items2[sel-100][0], -1);
                cm.gainItem(items2[sel-100][1], 1, true);
                cm.sendOk("幫您升級成#i" + items2[sel-100][1] +":##t" +items2[sel-100][1] + ":#");
                cm.dispose();
                return;

            }
        default:
            cm.dispose();
            return;
    }
}