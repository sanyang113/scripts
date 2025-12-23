var status = -1;
var exp = 100000;
var itemList = new Array(
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,4001160,
    1122010,1122010,1122010,1122010,1122010,
    2041212,2041212,2041212,2041212,2041212,2041212,2041212,2041212,2041212,2041212,

    1122116,1122116,1122116,
    1122117,1122117,1122117,
    4030002,4030002,4030002,4030002,4030002,
    2450120
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
        qty = 15;
        break;
    default:
        qty = 1;
}

function action(mode, type, selection) {
    if (cm.getMapId() == 926100600) {
        cm.removeAll(4001130);
        cm.removeAll(4001131);
        cm.removeAll(4001132);
        cm.removeAll(4001133);
        cm.removeAll(4001134);
        cm.removeAll(4001135);
        var em = cm.getEventManager("Romeo");
        if (em != null) {
            var itemid = 4001160;
            if (!cm.checkSpace(2)) {
                cm.sendOk("請檢查你的包包所有欄位是否有2個空格或以上");
                cm.dispose();
                return;
            }
            var total = 0;
            if (em.getProperty("stage").equals("2")) {
                total = 400000;
            } else {
                total = 200000;
            }
            cm.gainExp(total);
            //cm.gainItem(randItem, qty, true);
            var gainItem = cm.gainItem(randItem, qty, true);
            cm.gainItem(itemid, 1);
            if(randItem ==4030002||randItem ==2450120||randItem ==1122010||randItem ==1122116||randItem ==1122117){
            	cm.worldMessageYellowItem(gainItem, "組隊任務","被他從羅密歐與茱麗葉組隊任務中取得了，大家恭喜他吧！");
        	}
            cm.addCountPartyQuest(9300140);
            cm.getPlayer().endPartyQuest(1205);
        }
        cm.warp(926100700, 0);
        cm.dispose();
        return;
    }
    if (mode > 0) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.removeAll(4001130);
        cm.removeAll(4001131);
        cm.removeAll(4001132);
        cm.removeAll(4001133);
        cm.removeAll(4001134);
        cm.removeAll(4001135);
        cm.sendSimple("#L0##b我要離開這裡。");//)#l\r\n#L1#我要兌換#t1122010#。#l\r\n#L2#我要用#t4001160# x10 兌換#t2041212##l#k");
    } else {
        if (selection == 0) {
            cm.warp(926100600, 0);
        } else if (selection == 1) {
            if (cm.canHold(1122010, 1) && cm.haveItem(4001160, 25)) {
                cm.gainItem(1122010, 1);
                cm.gainItem(4001160, -25);
            } else {
                cm.sendOk("您需要#t4001160#25個才能兌換#t1122010#，還有檢查一下您的空間是否足夠。");
            }
        } else {
            if (cm.canHold(2041212, 1) && cm.haveItem(4001160, 10)) {
                cm.gainItem(2041212, 1);
                cm.gainItem(4001160, -10);
            } else {
                cm.sendOk("您需要#t4001160# 10個才能兌換#t2041212# ，還有檢查一下您的空間是否足夠。");
            }
        }
        cm.dispose();
    }
}

function log() {
    var event = "羅密歐組隊:";
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