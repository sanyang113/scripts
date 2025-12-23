//天皇蟾蜍象徵兌換

var status = -1;
var useItem = 4030002;
var sel = -1;
var selItem = -1;
var qty = -1;
var rewards = [

    [2049244, 1, 5, 1],
    [2049244, 1, 30, 100],
    [2049464, 1, 3, 100],
    [2049465, 1, 5, 100],
    [2049466, 1, 10, 100],
    [2049353, 1, 30, 100],
    [2049351, 1, 60, 100],
    [2049355, 1, 30, 100],
    [2049354, 1, 60, 100],
    [4030402, 1, 1, 100],
    [4030408, 1, 3, 100],
    [3010620, 1, 60, 100],
    [3010621, 1, 60, 100],

]

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
			var msg = "您要換什麼呢？\r\n#r#e※需求數量5的淬鍊附魔石每個月僅能兌換一次！#n#k\r\n";
            msg += "#r#e※不同種類能力值椅子能力可加成#n#k\r\n";
            for (var i = 0; i < rewards.length; i++) {
                var currentItem = rewards[i];
                msg += "#L" + i + "#使用#r" + currentItem[2] + "#k個#i" + useItem + ":##k兌換 #b#i" + currentItem[0] + ":# #t" + currentItem[0]  +"##k x" + currentItem[1] + "個\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            selItem = rewards[sel][0];
            if((selItem >= 1000000 && selItem < 2000000) || (selItem >= 3000000 && selItem < 4000000) || sel == 0) {
                var msg = "您確定要兌換#b#i" + selItem + ":##t" + selItem + "##k嗎？";
                cm.sendYesNo(msg);
            } else {
                var msg = "\r\n要兌換幾組呢？";
                cm.sendGetNumber(msg,1, 1, rewards[sel][3]);
                break;
            }
            break;
        case 2:
            if((selItem >= 1000000 && selItem < 2000000) || (selItem >= 3000000 && selItem < 4000000) || sel == 0) {
                qty = 1;
            } else {
                qty = selection;
            }
            var useAmount = rewards[sel][2] * qty;
            if (!cm.haveItem(useItem, useAmount)){
                cm.sendOk("你的#i" + useItem + ":##t" + useItem + ":#好像不太夠...");
                cm.dispose();
                return;
            }
            if (!cm.canHold(selItem, qty)) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }
            if (sel == 0) {
                if(cm.getPlayer().getAccountOnly(log()) > 0) {
                    cm.sendOk("很抱歉，您這個月已經兌換過囉！");
                    cm.dispose();
                    return;
                }
                cm.getPlayer().setAccountOnly(log());
            }

            cm.gainItem(useItem, -useAmount);
            cm.gainItem(selItem, qty);
            cm.sendOk("#b#i" + selItem + ":##t" + selItem  +"##r x" + qty + "個，收下吧！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}

function log() {
    var event = "天皇蟾蜍兌換淬鍊:";
    var id = "玩家ID:" + cm.getPlayer().getId();
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var daytime = "日期:" + year + "年" + month + "月";

    return event + id + daytime;
}
