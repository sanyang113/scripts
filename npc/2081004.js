/* Author: aaroncsn(MapleSea Like)(Incomplete)
	NPC Name: 		Pam
	Map(s): 		Leafre: Pam's House(240000006)
	Description: 		Unknown
*/

//function start(){    
//	if (cm.isQuestActive(20528)) {
//		var msg = "你想製作濃縮離乳食來讓提提阿納成長嗎";
//		cm.sendOk("操");
//		cm.dispose();
//    }
//	cm.sendOk("咦…濃縮離乳食？你該不會還在喝這種東西吧？");
//	cm.dispose();
//	}

//永恆珠寶覺醒精華製作
var status = -1;
var sel = -1;

var items = [
    [4032196,[[4000236,30],[4000237,30],[4000238,30],],2000000],
    [4032197,[[4000239,30],[4000241,30],[4000242,30],],3000000],
    [4032198,[[4000262,30],[4000263,30],[4000265,30],],4000000],
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
			if (cm.isQuestActive(20528)) {
            	var msg = "你想製作濃縮離乳食來讓提提阿那成長嗎？\r\n\r\n";
            	for(var i = 0; i < items.length; i++){
            	    msg += "#L" + i + "##b製作#i" + items[i][0] + ":##t" + items[i][0] + "##k\r\n";
            	}
            	cm.sendNext(msg);
            	break;
			}
			cm.sendOk("咦…濃縮離乳食？你該不會還在喝這種東西吧？");
			cm.dispose();
        case 1:
            sel = selection;
            var msg = "製作#b#i" + items[sel][0] + ":##t" + items[sel][0] + "##k，需要消耗以下材料：\r\n\r\n";
            var useItems = items[sel][1];
            for(var i = 0; i < useItems.length; i++) {
                msg += "#b#i" + useItems[i][0] + ":##t" + useItems[i][0] + ":# x " + useItems[i][1] + "\r\n";
            }
			msg += "再加上 #b" + items[sel][2] + " 楓幣\r\n";
            msg += "要製作幾個呢？";
            cm.sendGetNumber(msg, 1, 1, 3);
            break;
        case 2:
            var qty = selection;
            var check = true;
            var useItems = items[sel][1];
            var useMeso = items[sel][2];
            for(var i = 0; i < useItems.length; i++) {
                if(!cm.haveItem(useItems[i][0], useItems[i][1] * qty)) {
                    check = false;
                    break;
                }
            }
            if(!check) {
                cm.sendOk("很抱歉，您沒有足夠的材料");
                cm.dispose();
                return;
            }
			if(cm.getMeso()<= useMeso * qty) {
                cm.sendOk("很抱歉，您沒有足夠的楓幣");
                cm.dispose();
                return;
            }
            if(!cm.canHold(items[sel][0], qty)) {
                cm.sendOk("請確認背包空間是否足夠");
                cm.dispose();
                return;
            }
            for(var i = 0; i < useItems.length; i++) {
                cm.gainItem(useItems[i][0], -useItems[i][1] * qty);
            }
            cm.gainItem(items[sel][0], qty);
            cm.gainMeso(-items[sel][2] * qty);
            cm.sendOk("兌換完成囉，請收好！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}