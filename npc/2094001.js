var status = -1;
var exp = 70000

var itemList = new Array(
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,4030002,
	1002571,1002571,1002571,1002571,1002571,
	1002572,1002572,1002572,1002572,
	1002573,1002573,1002573,
	1002574,1002574,
	1003267,

	4030002,4030002,4030002,4030002,4030002,
	2450119
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
		qty = 2;
		break;
	default:
		qty = 1;
}


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.removeAll(4001117);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	cm.sendSimple("#b#L0#我要離開#l#k");
    } else if (status == 1) {
	if (selection == 0) {
		if (!cm.checkSpace(2)) {
        	cm.sendOk("請檢查你的包包所有欄位是否有2個空格或以上");
        	cm.dispose();
        	return;
    	}
        cm.gainExp(exp); 
		//cm.gainItem(randItem, qty, true);
		var gainItem = cm.gainItem(randItem, qty, true);
		cm.gainItem(4030002, 1);
		if(randItem ==1002571||randItem ==1002572||randItem ==1002573||randItem ==1002574||randItem ==1003267||randItem ==4030002||randItem ==2450119){
            cm.worldMessageYellowItem(gainItem, "組隊任務","被他從金勾海賊王組隊任務中取得了，大家恭喜他吧！");
        }
		cm.addCountPartyQuest(9300119);
        cm.getPlayer().endPartyQuest(1204);
        cm.warp(251010404, 0);

	} else {
	    var cmp = cm.getPlayer().getOneInfo(1204, "cmp");
	    var have0 = cm.getPlayer().getOneInfo(1204, "have0");
	    var have1 = cm.getPlayer().getOneInfo(1204, "have1");
	    var have2 = cm.getPlayer().getOneInfo(1204, "have2");
	    var have3 = cm.getPlayer().getOneInfo(1204, "have3");
	    if (cmp == null) {
		cm.sendOk("30 場海盜PQ = #t1002571#\r\n80 場海盜PQ = #t1002572#\r\n200 場海盜PQ = #t1002573#\r\n350 場海盜PQ = #t1002574#");
	    } else {
		var cmp_i = parseInt(cmp);
		var have0_i = parseInt(have0);
		var have1_i = parseInt(have1);
		var have2_i = parseInt(have2);
		var have3_i = parseInt(have3);
		if (have3_i > 0) {
		    if (cm.canHold(1002574,1)) {
		    	cm.gainItem(1002574,1);
			cm.sendOk("我已經給你帽子了。");
		    } else {
			cm.sendOk("我已經給你帽子了但如果你想要其它的，請清出裝備欄空間。");
		    }
		} else if (have2_i > 0) {
		    if (cmp_i >= 350) {	
			if (cm.canHold(1002574,1)) {
		    	    cm.gainItem(1002574,1);
			    cm.sendOk("我已經給你帽子了。");
		    	} else {
			    cm.sendOk("請清出裝備欄空間。");
		        } 
		    } else {
			cm.sendOk("你需要有玩30場 目前總共 : " + cmp_i);
		    }
		} else if (have1_i > 0) {
		    if (cmp_i >= 200) {	
			if (cm.canHold(1002573,1)) {
		    	    cm.gainItem(1002573,1);
			    cm.sendOk("我已經給你帽子了。");
		    	} else {
			    cm.sendOk("請清出裝備欄空間。");
		        } 
		    } else {
			cm.sendOk("你需要有玩200場 目前總共 : " + cmp_i);
		    }
		} else if (have0_i > 0) {
		    if (cmp_i >= 80) {	
			if (cm.canHold(1002572,1)) {
		    	    cm.gainItem(1002572,1);
			    cm.sendOk("我已經給你帽子了。");
		    	} else {
			    cm.sendOk("請清出裝備欄空間。");
		        } 
		    } else {
			cm.sendOk("你需要有玩80場 目前總共 : " + cmp_i);
		    }
		} else {
		    if (cmp_i >= 30) {	
			if (cm.canHold(1002571,1)) {
		    	    cm.gainItem(1002571,1);
			    cm.sendOk("我已經給你帽子了。");
		    	} else {
			    cm.sendOk("請清出裝備欄空間。");
		        } 
		    } else {
			cm.sendOk("你需要有玩30場 目前總共 : " + cmp_i);
		    }
		}
	    }
	}
	cm.dispose();
    }
}

function log() {
    var event = "金勾海賊組隊:";
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