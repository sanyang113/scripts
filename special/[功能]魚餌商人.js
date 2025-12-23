// 魚餌商人


var status = -1;
var sel = -1;
var item = 5340000;
var item1 = 2300000;
var item2 = 2300001;
var useItem = 5350000
var qty = 120
var log = "領取免費魚餌"

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
			var msg = "我是 #b#p" + cm.getNpc() + "##k 請問您想要做什麼呢\r\n\r\n";
            msg += "#L0##k使用#b 100萬楓幣 #k購買 #b#i" + item + ":##t" + item + ":##l\r\n"
            msg += "#L1##k使用#b 10萬楓幣 #k購買 #b#i" + item1 + ":##t" + item1+ ":# #kx #b" + qty + "#l\r\n"
            //msg += "#L0##b事前登入免費領取 #b#i" + item + ":##t" + item + ":##l\r\n"
            //msg += "#L1##b事前登入免費領取 #b#i" + item1 + ":##t" + item1+ ":# #kx #b" + qty + "(每人限領100次)#l\r\n"
            msg += "#L2##k使用#i" + useItem + ":##b#t" + useItem + ":##k 兌換 #b#i" + item2 + ":##t" + item2 + ":# #kx #b" + qty + "#l"
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            if(sel==0){	
                if (cm.getMeso() < 1000000) {
                    cm.sendOk("你的楓幣好像不太夠");
	                cm.dispose();
                    return;
                }
                if (!cm.canHold(item, 1)) {
					cm.sendOk("你的包包好像滿了");
					cm.dispose();
					return;
				}
                if (cm.haveItem(item, 1)) {
					cm.sendOk("你已經有 #b#i" + item + ":# #t" + item + ":##k 了");
					cm.dispose();
					return;
				}
                cm.gainMeso(-1000000)
                cm.gainItem(item,1);
                cm.sendOk("給了你一個 #b#i" + item + ":# #t" + item + ":##k");
	            cm.dispose();
                return;
            }if(sel==1){	
                if (cm.getMeso() < 100000) {
                    cm.sendOk("你的楓幣好像不太夠");
	                cm.dispose();
                    return;
                }
                if (!cm.canHold(item1, qty)) {
					cm.sendOk("你的包包好像滿了");
					cm.dispose();
					return;
				}
                if (cm.haveItem(item1, 1)) {
					cm.sendOk("不要太貪心唷，釣餌用完再買！");
					cm.dispose();
					return;
				}
                //if (cm.getPlayer().getAccountOnly(log) >= 100){
                //    cm.sendOk("你拿太多魚餌了，不給你了！");
				//	cm.dispose();
				//	return;
                //}
                cm.gainMeso(-100000)
                //cm.getPlayer().setAccountOnly(log);
                cm.gainItem(item1,qty);
                cm.sendOk("給了你 #b" + qty +" #k個 #b#i" + item1 + ":# #t" + item1 + ":##k");
	            cm.dispose();
                return;
            }if(sel==2){
                var count = cm.getItemCount(useItem);
                var msg = "要兌換幾組呢？#d#e（身上持有 " + count + " 個#i" + useItem + ":#）#n#k\r\n";
                cm.sendGetNumber(msg,1, 1, count);
                break;
            }
        case 2:
            if (!cm.canHold(item2, qty * selection)) {
					cm.sendOk("你的包包好像放不下...");
					cm.dispose();
					return;
				}
            if (!cm.haveItem(useItem, selection)) {
				cm.sendOk("你的 #b#i" + useItem + ":# #t" + useItem + ":##k 好像不太夠");
				cm.dispose();
				return;
			}
            cm.gainItem(useItem,-selection);
            cm.gainItem(item2,qty * selection);
            cm.sendOk("給了你 #b" + qty * selection +" #k個 #b#i" + item2 + ":# #t" + item2 + ":##k");
	        cm.dispose();
            return;
        default:
            cm.dispose();
    }
}