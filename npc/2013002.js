//組隊任務-女神

var status;

var itemList = new Array(
    1012460,1012789,1012790,1012791,1012792,1032055,1032056,1032057,1032058,1052165,1052166,
    1052167,1002797,1002800,1072366,1072368,1072262,1072264,1082244,1082245,1102174,1322003, //equips
    2044901,2044902,2044802,2044801,2044702,2044701,2044602,
    2044601,2044501,2044502,2044402,2044401,2044302,2044301,2044201,2044202,2044102,2044101,
    2044002,2044001,2043802,2043801,2043702,2043701,2043302,2043301,2043202,2043201,2043102,
    2043101,2043002,2043001,2040801,2040816,2040817,2040818,2040802,2040915,2040914,2040913,2040918,2040919,2040920,2040805,2040804,2040803,2040532,2040534,2040517,2040516,
    2040514,2040513,2040502,2040501,2040323,2040321,2040317,2040316,2040302,2040301, //1x use items
    2000002,2000003,2000004,2000005,2000006,2000006,2000006,2000006,2000006,2000005,2000005,
    2000005,2000005,2000002,2000002,2000002,2000002,2000003,2000003,2000003,2000004,2000004,
    2000004,2000004,2022003,//multiuse items
                         
    4020000,4020000,4020001,4020001,4020002,4020002,4020003,4020003,4020004,4020004,4020005,
    4020005,4020006,4020006,4010000,4010000,4010001,4010001,4010002,4010002,4010003,4010003,
    4010004,4010004,4010005,4010005,4010006,4020007,4020008,4003000,
    2049104,2049104,2049104,2049104,2049104,2049104,2049104,2049104,2049104,2049104,


    1082232,1082232,1082232,1082232,1082232,1082322,1082322,
    1072455,1072455,1072455,1072455,1072455,1072534,1072534,
    4030002,4030002,4030002,4030002,4030002,
    2450118
                        ); 

var randNum = Math.floor(Math.random()*(itemList.length));
var randItem = itemList[randNum];
var qty;

switch (randItem) {
    case 4020000:
    case 4020001:
    case 4020002:
    case 4020003:
    case 4020004:
    case 4020005:
    case 4020006:
    case 4010000:
    case 4010001:
    case 4010002:
    case 4010003:
    case 4010004:
    case 4010005:
        qty = 16;
        break;
    case 4010006:
    case 4020007:
    case 4020008:
        qty = 8;
        break;
    case 4003000:
        qty = 30;
        break;
    case 2000002:
    case 2000006:
        qty = 100;
        break;
    case 2000003:
        qty = 200;
        break;
    case 2000004:
        qty = 50;
        break;
    case 2000005:
    case 2022003:
        qty = 10;
        break;
    case 2049104:
        qty = 3;
        break;
    default:
        qty = 1;
}

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode, type, selection) {
	var em = cm.getEventManager("OrbisPQ");
	if (em == null) {
		cm.dispose();
		return;
	}
	for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}
	switch(cm.getMapId()) {
		case 920010100: //center stage, minerva warps to bonus
			//em.setProperty("done", "1");
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");

			cm.getPlayer().endPartyQuest(1203);
			cm.warp(920011100);
	        cm.dispose();
		break;
		default:
            if (mode == -1) {
                cm.dispose();
            }
            if (mode == 1)
                status ++;
            else
                status --;
            if (status == 0) {
                    cm.sendNext("請確認你的其他欄有沒有空兩格,另外欄位空一格就好,確認都有空再來跟我對話");
            } else if (status == 1) {
                if (!cm.checkSpace(2)) {
                    cm.sendOk("請檢查你的包包所有欄位是否有2個空格或以上");
                    cm.dispose();
                    return;
                }
                cm.broadcastFinishEvent("天空之城-女神的痕跡");
                cm.addCountPartyQuest(9300039);
                //cm.gainItem(randItem, qty, true);
                var gainItem = cm.gainItem(randItem, qty, true);
                cm.gainItem(4001158, 1);
                cm.gainExp(200000)
                if(randItem ==4030002||randItem ==2450118||randItem ==1072455||randItem ==1072534||randItem ==1082232||randItem ==1082322){
            	    cm.worldMessageYellowItem(gainItem, "組隊任務","被他從女神之塔組隊任務中取得了，大家恭喜他吧！");
        	    }
                cm.warp(200080101);
                cm.dispose();
                break;
            }
        break;
	}
}