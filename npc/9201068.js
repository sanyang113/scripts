var sw;

function start() {
    status = -1;
    sw = cm.getEventManager("Subway");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("你有一些經濟的負擔而無法搭地鐵對吧?");
	cm.dispose();
	return;
    }
    if (status == 0) {
    	var str = "#k旅客你好，歡迎來到往返墮落城市及新葉城的地鐵。你希望怎麼去新葉城呢?\r\n";
    		str += "#b#L1#我要慢慢搭地鐵去#l\r\n";
    		str += "#L2#我想直接到目的地#l";
    	cm.sendSimple(str);
    }else if(status == 1){
    	if(selection == 1){
			if(sw == null) {
	    		cm.sendNext("找不到此腳本請回報GM");
	    		cm.dispose();
			} else if(sw.getProperty("entry").equals("true")) {
	    		cm.sendYesNo("看起來有很多的空間，可以準備搭乘。請將你的票準備好，你想乘坐這班地鐵嗎？");
			} else if(sw.getProperty("entry").equals("false") && sw.getProperty("docked").equals("true")) {
	    		cm.sendNext("很抱歉本班地鐵已經開走,請搭乘下一班");
	    		cm.dispose();
			} else {
	    		cm.sendNext("請耐心等待幾分鐘，正在整理地鐵列車！");
	    		cm.dispose();
			}
    	}else if(selection == 2 && cm.getMapId() == 103000100){
			if(!cm.haveItem(4031711)) {
	    		cm.sendNext("哦不，你身上並沒有#b#t4031711##k 所以我不能讓你直接抵達！請到前面找售票員買票。");
	    		cm.dispose();
	    		return;
			}
			cm.gainItem(4031711, -1);
	    	cm.warp(600010001, 0);
	    	cm.sendOk("你已到達新葉城了。祝你旅途愉快！");
	    	cm.dispose();
		}else if(selection == 2 && cm.getMapId() == 600010001){
			if(!cm.haveItem(4031713)) {
	    		cm.sendNext("哦不，你身上並沒有#b#t4031713##k 所以我不能讓你直接抵達！請到前面找售票員買票。");
	    		cm.dispose();
	    		return;
			}
			cm.gainItem(4031713, -1);
	    	cm.warp(103000100, 0);
	    	cm.sendOk("你已到達墮落城市了。祝你旅途愉快！");
	    	cm.dispose();
		}

    } else if(status == 2 && cm.getMapId() == 103000100) {
	if(!cm.haveItem(4031711)) {
		cm.sendNext("不! 你沒有#b#t4031711##k 所以我不能放你走!");
		cm.dispose();
	} else {
	    cm.gainItem(4031711,-1);
	    cm.warp(600010004);
		cm.dispose();
	}
	} else if(status == 2 && cm.getMapId() == 600010001) {
	if(!cm.haveItem(4031713)) {
		cm.sendNext("不! 你沒有#b#t4031713##k 所以我不能放你走!");
		cm.dispose();
	} else {
	    cm.gainItem(4031713,-1);
	    cm.warp(600010002);
		cm.dispose();
	}
	cm.dispose();
    }
}
