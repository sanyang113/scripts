var status = -1;
var total = 210000;
var exp = 75000;

var itemList = new Array(
	4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,
	4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,
	4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,
	4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,
	4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,
	4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,
	4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,
	4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,
	4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,
	4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,
	4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,4001198,
	1032060,1032060,1032060,1032060,1032060,1032061,1032061,1032061,
	
	4030002,4030002,4030002,4030002,4030002,
	2450117
); 

var randNum = Math.floor(Math.random()*(itemList.length));
var randItem = itemList[randNum];
var qty;

switch (randItem) {
	case 2250000:
	case 2049200:
		qty = Math.floor((Math.random() * 3) + 1);
		break;
	case 4004000:
	case 4004001:
	case 4004002:
	case 4004003:
	case 4004004:
	case 4010000:
	case 4010001:
	case 4010002:
	case 4010003:
	case 4010004:
	case 4010005:
	case 4010006:
	case 4010007:
	case 4020000:
	case 4020001:
	case 4020002:
	case 4020003:
	case 4020004:
	case 4020005:
	case 4020006:
	case 4020007:
	case 4020008:
		qty = 5;
		break;
	default:
		qty = 1;
}



function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    switch(cm.getPlayer().getMapId()) {
	case 930000000:
		var eim = cm.getEventInstance();
		if(eim != null && eim.getProperty("check") == 1) {
			cm.warp(930000500, 0);
			break;
		} else if(eim != null && eim.getProperty("check") == 2) {
			cm.warp(930000600, 0);
			break;
		}
	    cm.sendNext("歡迎，請進入。");
	    break;
	case 930000100:
		var eim = cm.getEventInstance();
		if(eim != null && eim.getProperty("check") == 1) {
			cm.warp(930000500, 0);
			break;
		} else if(eim != null && eim.getProperty("check") == 2) {
			cm.warp(930000600, 0);
			break;
		}
	    cm.sendNext("我們必須消除所有這些怪物的污染！");
	    break;
	case 930000200:
	    cm.sendNext("我們必須消除所有這些被污染的反應堆！");
	    break;
	case 930000300:
	    cm.warpParty(930000400);
	    break;
	case 930000400:
	    if (cm.haveItem(4001169,10)) {
			if(eim != null) {
				eim.setProperty("check",1);
			}
            cm.warpParty(930000500, 0);
			cm.gainItem(4001169,-10);
	    } else if (!cm.haveItem(2270004)) {
		cm.gainItem(2270004,10);
		cm.sendOk("請淨化這些怪物");
	    } else {
		cm.sendOk("請給我10個怪物株!");
	    }
	    break;
	case 930000600:
	    cm.sendNext("就是這個！");
	    break;
	case 930000700:
		cm.removeAll(4001161);
		cm.removeAll(4001162);
		cm.removeAll(4001163);
		cm.removeAll(4001164);
		cm.removeAll(4001169);

        if (cm.canHold(4001198,1)) {
    		if (!cm.checkSpace(2)) {
    		    cm.sendOk("請檢查你的包包所有欄位是否有2個空格或以上");
    		    cm.dispose();
    		    return;
    		}
			cm.gainExp(exp);
			var eim = cm.getEventInstance();
			cm.broadcastFinishEvent("毒霧森林");
			cm.addCountPartyQuest(9300182);
	        cm.getPlayer().endPartyQuest(1206);
	        cm.removeAll(2270004);
			//cm.gainItem(randItem, qty, true);
			var gainItem = cm.gainItem(randItem, qty, true);
            cm.gainItem(4001198,1);
			if(randItem ==1032060||randItem ==1032061||randItem ==2450117||randItem ==4030002){
            	cm.worldMessageYellowItem(gainItem, "組隊任務","被他從毒霧森林組隊任務中取得了，大家恭喜他吧！");
        	}
	        cm.warp(930000800,0);
	} else {
		cm.getPlayer().dropMessage(5, "請確認你的其他欄有沒有滿");
	}
	    break;
    }
    cm.dispose();
}

function log() {
    var event = "毒霧組隊:";
    // 計算這週的週一日期
    var d = new Date(); // 今天的日期
    var dayOfWeek = d.getDay(); // 取得今天是星期幾 (0=星期日, 1=星期一, ..., 6=星期六)
    
    // 計算差距，回退到週一
    var diffToMonday = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek; // 週日特例處理 (-6 天回到週一)
    d.setDate(d.getDate() + diffToMonday); // 回退到本週的週一
    
    // 取得週一的年、月、日
    var year = d.getFullYear();
    var month = d.getMonth() + 1; // 月份從0開始
    var day = d.getDate();
    
    var daytime = "日期:" + year + "年" + month + "月" + day + "日";
    
    return event + daytime;
}
