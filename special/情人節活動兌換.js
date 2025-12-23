//情人節活動兌換

var eventName = "情人節活動";
var status = -1;
var useItem = 4030002;
var sel = -1;
var selItem = -1;
var qty = -1;
var rewards = [
//物品id, 兌換數量, 需求數量, 單次兌換上限, 需求楓幣, 可兌換次數, 編號
    [2049355, 1, 300, 1, 300000000, 1, 1],//神秘覺醒
    [2435051, 1, 200, 1, 100000000, 1, 2],//字型
    [2435124, 1, 200, 1, 100000000, 1, 3],//字型
    [2435459, 1, 200, 1, 100000000, 1, 4],//字型
    [1902567, 1, 30, 1, 0, 1, 5],//坐騎椅子
    [1902448, 1, 150, 1, 0, 1, 6],//坐騎椅子
    [3010813, 1, 100, 1, 0, 1, 7],//坐騎椅子
    [3018101, 1, 100, 1, 0, 1, 8],//坐騎椅子
    [3019092, 1, 100, 1, 0, 1, 9],//坐騎椅子    
    [2049464, 1, 10, 10, 5000000, 10, 10],//星火
    [2049465, 1, 25, 10, 10000000, 10, 11],//星火
    [2049466, 1, 50, 10, 15000000, 10, 12],//星火
    [4030409, 1, 200, 2, 150000000, 2, 13],//魔方
    [4030411, 1, 200, 2, 150000000, 2, 14],//永恆附魔
    [4030403, 1, 200, 1, 500000000, 1, 15],//柔光寶石
    [4030400, 1, 10, 20, 5000000, 20, 16],//微弱寶石
    [4030402, 1, 10, 20, 5000000, 20, 17],//微弱寶石
    [4030408, 1, 10, 10, 10000000, 10, 18],//勇氣證明
    [4030408, 1, 20, 10, 15000000, 10, 19],//勇氣證明
    [2049244, 1, 10, 2, 0, 2, 20],//綁粹
    [2049244, 1, 100, 2, 100000000, 2, 21],//綁粹
    [2049245, 1, 3, 200, 0, 200, 22],//綁高
    [2049245, 1, 1, 200, 1000000, 200, 23],//綁高
    [2049203, 1, 10, 50, 5000000, 50, 24],//神聖
    [2049204, 1, 10, 50, 5000000, 50, 25],//祝福
    [2049205, 1, 10, 50, 5000000, 50, 26],//混沌
    [2049302, 1, 10, 20, 10000000, 20, 27],//強力混沌
    [2049303, 1, 50, 10, 20000000, 10, 28],//驚訝混沌
    [2020022, 1, 3, 100, 2000000, 100, 29],//加攻藥水
    [2020023, 1, 3, 100, 2000000, 100, 30],//加攻藥水
    [2250000, 1, 2, 100, 0, 500, 31],//楓票
    [2370014, 1, 1, 100, 0, 100, 32],//兵書
    [2370013, 1, 1, 100, 0, 100, 33],//兵書
    [4030410, 1, 5, 100, 5000000, 100, 34],//挑戰憑證
    [2000005, 100, 1, 100, 200000, 500, 35],//超水
    [2004000, 100, 1, 100, 200000, 500, 36],//聖靈藥
    [2004001, 100, 1, 100, 200000, 500, 37],//聖靈藥
    [4032878, 1, 20, 20, 5000000, 20, 38],//水晶球
    [2450000, 1, 5, 30, 0, 30, 39],//獵人
    [5220040, 1, 5, 5, 0, 5, 40],//轉蛋券
]

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
			var msg = "您要換什麼呢？\r\n#r需製作過愛情加速機器才可兌換以下道具\r\n#k";
            for (var i = 0; i < rewards.length; i++) {
                var limit = rewards[i][5]; // 限制次數
                var log = "兌換" + eventName + rewards[i][6];
                var remainingCount = limit - cm.getPlayer().getAccountRestrict(log); // 剩餘次數
                var currentItem = rewards[i];
                msg += "#L" + i + "#使用#r" + currentItem[2] + "#k個#i" + useItem + ":#加上#d" + currentItem[4] + "#k楓幣\r\n兌換#b#i" + currentItem[0] +":# #t" + currentItem[0]  +"##k x" + currentItem[1] + "個#r(剩餘 " + remainingCount + " 次)#k\r\n\r\n";
            }                
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            selItem = rewards[sel][0];
            if((selItem >= 1000000 && selItem < 2000000) || (selItem >= 3000000 && selItem < 4000000)) {
                var msg = "您確定要兌換#b#i" + selItem + ":##t" + selItem + "##k嗎？";
                cm.sendYesNo(msg);
            } else {
                var msg = "\r\n要兌換幾組呢？";
                cm.sendGetNumber(msg,1, 1, rewards[sel][3]);
                break;
            }
            break;
        case 2:
            if(cm.getPlayer().getAccountOnly("製作愛情加速機器") == 0) { //情人節活動限定，其他活動要拿掉
                cm.sendOk("愛情加速機器製作過後才可兌換！");
                cm.dispose();
                return;
            }
            if((selItem >= 1000000 && selItem < 2000000) || (selItem >= 3000000 && selItem < 4000000)) {
                qty = 1;
                selection =1;
            } else {
                qty = selection * rewards[sel][1];
            }
            var useAmount = rewards[sel][2] * selection;
            var useMeso = rewards[sel][4] * selection;
            var changelimit = rewards[sel][5];
            var setlog = "兌換" + eventName + rewards[sel][6];
            if (!cm.haveItem(useItem, useAmount)){
                cm.sendOk("你的#i" + useItem + ":##t" + useItem + "#好像不太夠...");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getMeso() < useMeso) {
                cm.sendOk("很抱歉，您的楓幣不足唷！");
                cm.dispose();
                return;
            }
            if (!cm.canHold(selItem, qty)) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getAccountRestrict(setlog) == -1) {
                cm.sendOk("系統出現異常");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getAccountRestrict(setlog) + selection > changelimit) {
                cm.sendOk("很抱歉，兌換數量超過上限");
                cm.dispose();
                return;
            }
            if(!cm.getPlayer().setAccountRestrict(setlog, selection)) {
                cm.sendOk("系統出現異常");
                cm.dispose();
                return;
            }
            cm.gainMeso(-useMeso);
            cm.gainItem(useItem, -useAmount);
            cm.gainItem(selItem, qty);
            cm.sendOk("#b#i" + selItem + ":##t" + selItem  +"##r x" + qty + "個，收下吧！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}