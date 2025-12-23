var status = 0;

function start() {
    status = -1;
    boat = cm.getEventManager("Boats");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
		cm.sendNext("需要再來找我吧");
		cm.dispose();
		return;
    }
    if (status == 0) {
    	var str = "#k旅客你好，歡迎來到通往天空之城的碼頭。你希望怎麼去天空之城呢?\r\n";
    		str += "#b#L1#我要搭船去天空之城#l\r\n";
    		str += "#L2#我想直接到天空之城#l";
    	cm.sendSimple(str);
    }else if(status == 1){
    	if(selection == 1){
			if(boat == null) {
			    cm.sendNext("找不到腳本請聯繫GM！");
			    cm.dispose();
			} else if(boat.getProperty("entry").equals("true")) {
			    cm.sendYesNo("看起來有很多的空間，可以準備上船。請將你的票準備好，你想乘坐這艘船嗎？");
			} else if(boat.getProperty("entry").equals("false") && boat.getProperty("docked").equals("true")) {
			    cm.sendNext("很抱歉本班船已經走了。對不起，你必須搭乘下一班。");
			    cm.dispose();
			} else {
			    cm.sendNext("我們將在起飛前1分鐘開始登船，請耐心等待幾分鐘。請注意，飛船將準時起飛，我們將在1分鐘前停止接收船票，因此請務必注意在此處時間。");
			    cm.dispose();
			}
		}else if(selection == 2){
			if(!cm.haveItem(4031045)) {
	    		cm.sendNext("哦不，你身上並沒有#b#t4031045##k 所以我不能讓你直接抵達！請到前面找售票員買票。");
	    		cm.dispose();
	    		return;
			}
			cm.gainItem(4031045, -1);
	    	cm.warp(200000100, 0);
	    	cm.sendOk("你已到達天空之城了。祝你旅途愉快！");
	    	cm.dispose();
		}
    } else if(status == 2) {
		if(!cm.haveItem(4031045)) {
		    cm.sendNext("哦不，你身上並沒有 #b#t4031045##k 我不能讓你偷渡進去！請到前面找售票員買票。");
		} else {
		    cm.gainItem(4031045, -1);
		    cm.warp(101000301, 0);
		}
		cm.dispose();
    }
}