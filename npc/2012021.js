/* 
	NPC Name: 		Ramini
	Map(s): 		Orbis: Cabin<To Leafre> (200000131)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    flight = cm.getEventManager("Flight");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
		cm.sendNext("等你考慮好再來找我。");
		cm.dispose();
		return;
    }
    if (status == 0) {
    	var str = "#k旅客你好，歡迎來到通往神木村的碼頭。你希望怎麼去神木村呢?\r\n";
    		str += "#b#L1#我要搭船去神木村#l\r\n";
    		str += "#L2#我想直接到神木村#l";
    	cm.sendSimple(str);
    }else if(status == 1){
    	if(selection == 1){
			if(flight == null) {
	    		cm.sendNext("找不到腳本請聯繫GM！");
	    		cm.dispose();
			} else if(flight.getProperty("entry").equals("true")) {
	    		cm.sendYesNo("看起來有很多的空間，可以準備上船。請將你的票準備好，你想乘坐這艘船嗎？");
			} else if(flight.getProperty("entry").equals("false") && flight.getProperty("docked").equals("true")) {
			    cm.sendNext("很抱歉本班船已經走了。對不起，你必須搭乘下一班。");
			    cm.dispose();
			} else {
	    		cm.sendNext("我們將在起飛前1分鐘開始登船，請耐心等待幾分鐘。請注意，飛船將準時起飛，我們將在1分鐘前停止接收船票，因此請務必注意在此處時間。");
	    		cm.dispose();
			}
    	}else if(selection == 2){
			if(!cm.haveItem(4031331)) {
	    		cm.sendNext("不! 你沒有#b#t4031331##k 所以我不能讓你直接抵達！請到前面找售票員買票。");
				cm.dispose();
	    		return;
			}
	    	cm.gainItem(4031331, -1);
	    	cm.warp(240000100, 0);
	    	cm.sendOk("你已到達神木村了。祝你旅途愉快！");
	    	cm.dispose();
		}
    } else if(status == 2) {
		if(!cm.haveItem(4031331)) {
		    cm.sendNext("哦不，你身上並沒有 #b#t4031331##k 我不能讓你偷渡進去！請到前面找售票員買票。");
		} else {
		    cm.gainItem(4031331, -1);
		    cm.warp(200000132, 0);
		}
		cm.dispose();
    }
}