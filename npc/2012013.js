/* 
	NPC Name: 		Sunny
	Map(s): 		Orbis: Station<To Ludibrium> (200000121)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    train = cm.getEventManager("Trains");
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
    	var str = "#k旅客你好，歡迎來到通往玩具城的碼頭。你希望怎麼去玩具城呢?\r\n";
    		str += "#b#L1#我要搭船去玩具城#l\r\n";
    		str += "#L2#我想直接到玩具城#l";
    	cm.sendSimple(str);
    }else if(status == 1){
    	if(selection == 1){
    		if(train == null) {
	    		cm.sendNext("找不到腳本請聯繫GM！");
	    		cm.dispose();
			} else if (train.getProperty("entry").equals("true")) {
	   			cm.sendYesNo("看起來有很多的空間，可以準備上船。請將你的票準備好，你想乘坐這艘船嗎？");
			} else if (train.getProperty("entry").equals("false") && train.getProperty("docked").equals("true")) {
	    		cm.sendNext("很抱歉本班船已經走了。對不起，你必須搭乘下一班。");
	    		cm.dispose();
			} else {
	    		cm.sendNext("我們將在起飛前1分鐘開始登船，請耐心等待幾分鐘，裡面正在整理中！");
	    		cm.dispose();
			}
    } else if(selection == 2) {
		if(!cm.haveItem(4031074)) {
	    	cm.sendNext("不! 你沒有 #b#t4031074##k 所以我不能讓你直接抵達！請到前面找售票員買票。");
	    	cm.dispose();
	    	return;
			}
	    	cm.gainItem(4031074, -1);
	    	cm.warp(220000100, 0);
	    	cm.sendOk("你已到達玩具城了。祝你旅途愉快！");
	    	cm.dispose();
		}
    } else if(status == 2) {
		if(!cm.haveItem(4031045)) {
		    cm.sendNext("哦不，你身上並沒有 #b#t4031074##k 我不能讓你偷渡進去！請到前面找售票員買票。");
		} else {
		    cm.gainItem(4031074, -1);
		    cm.warp(200000122, 0);
		}
		cm.dispose();
    }
}
