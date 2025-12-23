//組隊任務-101

var status;

var exp = 37500;

var itemList = new Array(
    1032055,1032056,1032057,1032058,1052165,1052166,1052167,1002797,1002800,1072366,1072368,1072262,1072264,1082244,1082245,1102174,1322003, //equips
    2044901,2044902,2044802,2044801,2044702,2044701,2044602,
    2044601,2044501,2044502,2044402,2044401,2044302,2044301,2044201,2044202,2044102,2044101,
    2044002,2044001,2043802,2043801,2043702,2043701,2043302,2043301,2043202,2043201,2043102,
    2043101,2043002,2043001,2040801,2040803,2040816,2040817,2040818,2040802,2040913,2040915,2040914,2040805,2040804,2040532,2040534,2040517,2040516,
    2040514,2040513,2040502,2040501,2040323,2040321,2040317,2040316,2040302,2040301,2040918,2040919,2040920, //1x use items
    2000002,2000003,2000004,2000005,2000006,2000006,2000006,2000006,2000006,2000005,2000005,
    2000005,2000005,2000002,2000002,2000002,2000002,2000003,2000003,2000003,2000004,2000004,
    2000004,2000004,2022003,//
                         
    4020000,4020000,4020001,4020001,4020002,4020002,4020003,4020003,4020004,4020004,4020005,
    4020005,4020006,4020006,4010000,4010000,4010001,4010001,4010002,4010002,4010003,4010003,
    4010004,4010004,4010005,4010005,4010006,4020007,4020008,4003000,
    1022073,1022073,1022073,1022073,1022073,1022073,1022073,1022073,1022073,1022073,
    4030002,4030002,4030002,4030002,4030002,4030002,4030002,
    2049104,2049104,2049104,2049104,2049104,2049104,2049104,2049104,2049104,2049104,
    2450116
    ); //etc items
    // 17+15+22+17+10+22+6+22+8

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
    case 2049104:
        qty = 3;
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
    default:
        qty = 1;
}

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode,type,selection) {
    if (mode == -1) {
        cm.dispose();
    }
    if (mode == 1)
        status ++;
    else
        status --;
    if (status == 0) {
        cm.sendNext("請確認你的道具欄有沒有滿,滿了領不到東西喔");
    } else if (status == 1) {

        if (!cm.checkSpace(2)) {
            cm.sendOk("請檢查你的包包所有欄位是否有2個空格或以上");
            cm.dispose();
            return;
        }
        cm.removeAll(4001022);
        cm.removeAll(4001023);

        cm.gainExp(exp);
        cm.getPlayer().endPartyQuest(1202);//might be a bad implentation.. incase they dc or something
        //cm.gainItem(randItem, qty, true);
        var gainItem = cm.gainItem(randItem, qty, true);
        if(randItem ==2450116||randItem ==4030002||randItem ==1022073){
            cm.worldMessageYellowItem(gainItem, "組隊任務","被他從玩具城101組隊任務中取得了，大家恭喜他吧！");
        }
        cm.addCountPartyQuest(9300012);
        cm.gainItem(4030002, 1);
        cm.warp(221024500);
        cm.dispose();
    }
}

function log() {
    var event = "101組隊:";
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