//分解全部不速之客裝備
var status = -1;
var sel = -1;
var selType = -1;
var pos = -1;

var start = -1;
var end = -1;

var gainItem = 4030002;
var items = [
    1302143,1312058,1322086,1332116,1372074,1382095,1402086,1412058,1422059,1432077,1442107,1452102,1462087,1472113,1482075,1492075,
    1302144,1312059,1322087,1332117,1372075,1382096,1402087,1412059,1422060,1432078,1442108,1452103,1462088,1472114,1482076,1492076,
    1302145,1312060,1322088,1332118,1372076,1382097,1402088,1412060,1422061,1432079,1442109,1452104,1462089,1472115,1482077,1492077,

];

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
            var msg = "使用此功能請務必確認分解規則，若因個人操作失誤則不進行任何補償！\r\n";
            msg += "分解內容若有滿包情況，請至滿包倉庫尋找\r\n";
            msg += "請選擇您想要從第幾個欄位開始分解#d#e(背包編號為1~96)";
            cm.sendGetNumber(msg, 1, 1, 96);
            break;
        case 1:
            start = selection;
            var msg = "請選擇結束位置";
            cm.sendGetNumber(msg, 1, 1, 96);
            break;
        case 2:
            end = selection;
            var msg = "您選擇從第" + start + "批量分解到" + end + "格欄位，一但確認則不可反悔\r\n";
            msg += "您確定要分解嗎？";
            cm.sendYesNo(msg);
            break;
        case 3:

            var exchangeInfo = new Array();
            var exchangeMap = {};
            for(var i = 0; i < items.length; i++) {
                var result = cm.exchangeToStackedDeck(items[i], start, end);
                // cm.gainItem(items[i][1], result[0]);
                // cm.gainItem(items[i][2], result[1]);
                if(result[0] != 0) {
                    // exchangeInfo.push("#b#i" + items[i][1] + ":##t" + items[i][1] + "##k x" + result[0] + "張\r\n");
                    var value = exchangeMap[gainItem] || 0;
                    exchangeMap[gainItem] = value + result[0];
                }
                if(result[1] != 0) {
                    // exchangeInfo.push("#b#i" + items[i][2] + ":##t" + items[i][2] + "##k x" + result[1] + "張\r\n");
                    var value = exchangeMap[gainItem] || 0;
                    exchangeMap[gainItem] = value + result[1];
                }
            }
            var msg = "分解完成了，以下為分解獎勵:\r\n"
            // for(var i = 0; i < exchangeInfo.length; i++) {
            //     msg += exchangeInfo[i];
            // }
            for (var key in exchangeMap) {
                msg += "#b#i" + key + ":##t" + key + "##k x" + exchangeMap[key] + "個\r\n";
                cm.gainItem(key, exchangeMap[key]);
            }
            cm.sendOk(msg);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}