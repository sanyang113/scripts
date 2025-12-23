var status = -1;
var sel = -1;
var selType = -1;
var pos = -1;

var start = -1;
var end = -1;
var normal = true;

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
            var msg = "你想把不速之客裝分解成#b#i" + gainItem + ":##t" + gainItem + ":##k嗎？\r\n";
            msg += "您想要分解什麼呢？\r\n\r\n";
            for(var i = 0; i < items.length; i++) {
                msg += "#L" + i + "##b#i" + items[i] + ":##t" + items[i] + "##k\r\n";
            }
            msg += "#L999##r#e我要批量分解以上所有裝備#k#n\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            if(sel == 999) {
                cm.dispose();
                cm.openNpc(cm.getNpc(),"[兌換]分解全部不速之客裝備");
                return;
            }
            var msg = "您選擇了#b#i" + items[sel] + ":##t" + items[sel] +"##k，請選擇分解方式\r\n\r\n";
            msg += "#L0##b我要單選一件裝備進行分解\r\n";
            msg += "#L1##b我要進行批量分解\r\n";
            cm.sendNext(msg);
            break;
        case 2:
            selType = selection;
            if(selType == 0) {
                var msg = "請選擇您要分解的裝備(可用裝備已排序)#b\r\n\r\n";
                var result = cm.selectEquipment(items[sel]);
                if(result == null) {
                    cm.sendOk("很抱歉，您沒有#b#i" + items[sel] + ":##t" + items[sel] + "##k唷！");
                    cm.dispose();
                    return;
                }
                cm.sendNext(msg + result);
            } else {
                var msg = "您選擇了分解#b#i" + items[sel] + ":##t" + items[sel] + "##k\r\n";
                msg += "請選擇您想要從第幾個欄位開始分解(背包編號為1~96)#k\r\n";
                cm.sendGetNumber(msg, 1, 1, 96);
            }
            break;
        case 3:
            if(selType == 0) {
                pos = selection;
                var msg = "此裝備可以分解成 #b#i" + gainItem + ":##t" + gainItem + ":##k";
                cm.sendYesNo(msg + "\r\n您確定要分解嗎？");
            } else {
                start = selection;
                var msg = "請選擇結束位置";
                cm.sendGetNumber(msg, 1, 1, 96);
            }
            break;
        case 4:
            if(selType == 0) {
                if(!cm.canHold(gainItem, 1)) {
                    cm.sendOk("請確認背包空間是否足夠");
                    cm.dispose();
                    return;
                }
                cm.removeEquipmentFromSlot(pos);
                cm.gainItem(gainItem,1);
                cm.sendOk("幫您分解完成囉，請收好#i" + gainItem + ":#！");
                cm.dispose();
                return;
            } else {
                end = selection;
                var msg = "您選擇從第" + start + "批量分解到" + end + "格欄位，一但確認則不可反悔\r\n";
                msg += "#r#e※請再次確認需要用到的裝備是否都已經放到倉庫去了！！！ 分解錯誤不補償！！！#k#n\r\n\r\n";
                msg += "您確定要分解嗎？";
                cm.sendYesNo(msg);
            }
            break;
        case 5:
            if (selType == 1) {
                var result = cm.exchangeToStackedDeck(items[sel], start, end);

                // 將 Java int[] 轉成 JS 陣列
                var count = 0;
                try {
                    count = result[0]; // 通常第一個是成功數量
                } catch (e) {
                    cm.playerMessage(5, "[ERROR] 無法解析 result: " + e);
                    count = 0;
                }
                //cm.playerMessage(5, "[DEBUG] exchangeToStackedDeck 回傳值: " + result + " / count=" + count);

                if (count <= 0) {
                    cm.sendOk("在您選擇的範圍內沒有可分解的裝備。");
                    cm.dispose();
                    return;
                }
                if (!cm.canHold(gainItem, count)) {
                    cm.sendOk("背包空間不足，請先清出足夠的空間再試一次。");
                    cm.dispose();
                    return;
                }
                cm.gainItem(gainItem, count);
                var msg = "分解完成！\r\n";
                msg += "成功分解為 #b#i" + gainItem + ":##t" + gainItem + "##k x " + count + " 個。";
                cm.sendOk(msg);
                cm.dispose();
                return;
            }
            break;
        default:
            cm.dispose();
            return;
    }
}