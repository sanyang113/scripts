var status = -1;
var sel = -1;
var itemsel = -1;
var isVipReward;
var makeupSignInItem = 2250001;
var isMakeupSignIn;
var spgift = 4030002;
var spgiftqty = 300;

var julyGifts = [
    // 當月累積簽到獎勵
    [1, 2250001, 1, 30],  // 楓幣1000w //只收到933356
    [2, 5076000, 3, 0],  // 道具喇叭X3
    [3, 5220040, 2, 50],  // 轉蛋券*2
    [4, 5533124, 2, 50],  // 楓葉點數200 /需要import
    [5, 5561000, 10, 0],  // 高級任意門x10
    [6, 5041000, 10, 0],  // 高級瞬間移動石頭x10
    [7, 5530576, 2, 50],  // 附魔石箱子 2 把#刪掉
    [8, 4032878, 2, 50],  // 山羊谷象徵
    [9, 5130000, 1, 0],  // 護身符
    [10, 2450000, 3, 0],  // 獵人的幸運(不可交易)
    [11, 2049310, 3, 50],  // 混沌卷軸*3
    [12, 5530576, 2, 50],  // 附魔石箱子
    [13, 5533124, 3, 50],  // 楓葉點數200
    [14, 5533123, 2, 50],  // 御守箱子 2
    [15, 5220041, 2, 50],  // 限定轉蛋券 2
    [16, 5533125, 1, 50],  // 大師箱
    [17, 5533125, 1, 50],  // 大師箱
    [18, 5533125, 1, 50],  // 大師箱
    [19, 5533125, 1, 50],  // 大師箱
    [20, 5533125, 1, 50],  // 大師箱
];

var normalGifts = [
    // 當月累積簽到獎勵
    [1, 2250000, 5, 35],  // 楓幣500w //只收到933356
    [2, 2450000, 5, 0],  // 獵人的幸運x5(綁)
    [3, 5041000, 10, 0],  // 高級瞬間移動石頭x10(綁)
    [4, 5561000, 10, 0],  // 高級任意門x10(綁)
    [5, 5073000, 30, 0],  // 愛心喇叭*30(綁)
    [6, 2049461, 10, 0],  // L1星火*10(綁)
    [7, 5533123, 2, 50],  // 御守箱子*2
    [8, 2022271, 20, 0],  // 鮮奶油蛋糕*20(綁)
    [9, 4032878, 2, 50],  // 卯咪水晶球*2
    [10, 5220040, 1, 50],  // 楓葉轉蛋券*1
    [11, 5130000, 5, 0],  // 護身符*5(綁)
    [12, 2049462, 5, 0],  // L2星火*5(綁)
    [13, 5533124, 5, 50],  // 楓葉點數500
    [14, 4030002, 5, 50],  // 卷軸自選*5
    [15, 2450000, 5, 0],  // 獵人的幸運x5(綁)
    [16, 2049462, 5, 0],  // L2星火*5(綁)
    [17, 2049310, 5, 50],  // 混沌卷軸*5
    [18, 5074000, 1, 0],  // 骷髏喇叭*30(綁)
    [19, 2049244, 1, 0],  // 淬鍊*1(綁)
    [20, 2049463, 3, 0],  // L3星火*3(綁)
    [21, 2049312, 1, 50],  // 強力混沌卷軸(不可交易)
    [22, 2049245, 10, 0],  // 高階附魔石*10(綁)
    [23, 2022270, 5, 0],  // 紫色蘋果*5(綁)
    [24, 4310080, 3, 50],  // 鮮豔的楓葉*3
    [25, 2049464, 2, 0],  // L4星火*2(綁)
];

var totalGifts = [];

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var d = new Date();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var daysThisMonth = daysInMonth(month, year);
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            var msg = "我負責山羊谷簽到系統，這裡是你的資料。\r\n#r" + month + "#k月累積簽到：#b" + cm.findCheckInMonth() + " #k天\r\n";
            msg += "#L1##b進行簽到#l\r\n";
            msg += "#L2##k我要領取#b簽到獎勵#l\r\n";
            msg += "#L3##k我要領取#r簽到通行證#b特別簽到獎勵(特別活動進行中)#l\r\n";
            msg += "#L4##k我要#r補簽#l#k\r\n";
            cm.sendOk(msg);
            break;
        case 1:
            if (month == 7) {
                totalGifts = julyGifts.slice();
            } else {
                totalGifts = normalGifts.slice();
                for (var day = 26; day <= daysThisMonth; day++) {
                    totalGifts.push([day, 5533125, 1, 50]);  // 特殊禮物：每日高級簽到箱
                }
            }

            sel = selection;
            if (sel == 1) {
                if (cm.checkIn()) {
                    cm.sendSimple("簽到成功！");
                } else {
                    cm.sendSimple("欸？你今天已經簽到過了喔");
                }
                cm.dispose();
            } else if (sel == 2 || sel == 3) {
                isVipReward = sel == 3;
                var msg = (month == 7 ? "#b開服首月特別#r" : "#r") + month + "#k月簽到獎勵。\r\n #r※ 領取資格也必須達到需求等級唷！#k\r\n #r※ 簽到獎勵需在當月領取完畢唷。\r\n";
                if(isVipReward){
                msg += "#b(現在活動期間領取的通行證簽到獎勵可以多獲得#r" + spgiftqty + "#b個#i" + spgift + ":##b)\r\n";

                    
                }
                for (var i = 0; i < totalGifts.length; i++) {
                    if(totalGifts[i][3] == 0) {
                        var gift = totalGifts[i];
                        var log = (isVipReward ? "簽到通行證: " : "") + year + "年" + month + "月簽到:" + gift[0];
                        if (cm.getPlayer().getPrizeLog(log) > 0) {
                            msg += "#b#L" + i + "##k第" + gift[0] + "天：#b#i" + gift[1] + " : ##t" + gift[1] + "# x" + gift[2] + "#r ※已領取#l\r\n";
                        } else if (gift[0] <= cm.findCheckInMonth() && (!isVipReward || cm.haveItem(5252031))) {
                            msg += "#b#L" + i + "##k第" + gift[0] + "天：#b#i" + gift[1] + " : ##t" + gift[1] + "# x" + gift[2] + "#b ※可領取#l\r\n";
                        } else {
                            msg += "#b#L" + i + "##k第" + gift[0] + "天：#b#i" + gift[1] + " : ##t" + gift[1] + "# x" + gift[2] + "#l\r\n";
                        }
                    }else {
                        var gift = totalGifts[i];
                        var log = (isVipReward ? "簽到通行證: " : "") + year + "年" + month + "月簽到:" + gift[0];
                        if (cm.getPlayer().getPrizeLog(log) > 0) {
                            msg += "#b#L" + i + "##k第" + gift[0] + "天：#b#i" + gift[1] + " : ##t" + gift[1] + "# x" + gift[2] + " 限" + totalGifts[i][3] + "等以上領取 #r※ 已領取#l\\n";
                        } else if (gift[0] <= cm.findCheckInMonth() && (!isVipReward || cm.haveItem(5252031))) {
                            msg += "#b#L" + i + "##k第" + gift[0] + "天：#b#i" + gift[1] + " : ##t" + gift[1] + "# x" + gift[2]  + " 限" + totalGifts[i][3] + "等以上領取 #b ※可領取#l\\n";
                        } else {
                            msg += "#b#L" + i + "##k第" + gift[0] + "天：#b#i" + gift[1] + " : ##t" + gift[1] + "# x" + gift[2] + " 限" + totalGifts[i][3] + "等以上領取 #l\\n";
                        }
                    }
                }
                cm.sendOk(msg);
            } else if (sel == 4) {
                var msg = "你必須先完成#r今天的簽到#k才能進行補簽，你要現在簽到嗎？";
                isMakeupSignIn = true;
                cm.sendYesNo(msg);
            } else {
                cm.dispose();
            }
            break;
        case 2:
            if (isMakeupSignIn) {
                if (cm.checkIn()) {
                    cm.sendSimple("簽到成功！請再重新補簽一次");
                    status = 3;
                } else {
                    var msg = "你今天已完成簽到，若要補簽到需要#b#i" + makeupSignInItem + ":##t" + makeupSignInItem + "# x1個 你要補簽嗎？";
                    cm.sendYesNo(msg);
                }
            } else {
                itemsel = selection;
                if (isVipReward && !cm.haveItem(5252031)) {
                    cm.sendSimple("你沒有簽到通行證啊");
                    cm.dispose();
                    break;
                }

                var days = cm.findCheckInMonth();
                var gift = totalGifts[itemsel];
                var log = (isVipReward ? "簽到通行證: " : "") + year + "年" + month + "月簽到:" + gift[0];

                if (days < gift[0]) {
                    cm.sendSimple("搞什麼阿，簽到的天數不足阿。");
                    cm.dispose();
                } else if (cm.getPlayer().getLevel() < gift[3]) {
                    cm.sendSimple("等級不符合條件，去練練再來吧。");
                    cm.dispose();
                } else if (cm.getPlayer().getPrizeLog(log) > 0) {
                    cm.sendSimple("你已經領取過獎勵了。");
                    cm.dispose();
                } else if (!cm.canHold(gift[1], gift[2])) {
                    cm.sendSimple("包包已經塞不下了。");
                    cm.dispose();
                } else {
                    var isInsertSuccess = cm.getPlayer().setPrizeLog(log);
                    if (isInsertSuccess) {
                        cm.gainItem(gift[1], gift[2]);
                        //有通行證的人可以多拿spgift
                        if(isVipReward){
                            cm.gainItem(spgift, spgiftqty);
                            cm.sendSimple("你的獎勵#b #i" + gift[1] + ":##t" + gift[1] + "# x " + gift[2] + " #k個\r\n跟#b #i" + spgift + ":##t" + spgift + "# x " + spgiftqty + "#k 個，收好！");
                        }
                        
                        cm.sendSimple("你的獎勵 #i" + gift[1] + ":##t" + gift[1] + "# " + gift[2] + " 個，收好！");
                    } else {
                        cm.sendSimple("出錯了阿！聯絡GM吧");
                    }
                    cm.dispose();
                }
            }
            break;
        case 3:
            if (isMakeupSignIn) {
                var availableDays = daysThisMonth - cm.findCheckInMonth();
                if (availableDays <= 0) {
                    cm.sendSimple("你這個月已經沒有漏簽的天數可以補簽了。");
                    cm.dispose();
                } else {
                    var msg = "請選擇你要補簽的日期：\r\n";
                    for (var i = 1; i <= daysThisMonth; i++) {
                        if (!cm.hasCheckedIn(year, month, i)) {
                            msg += "#L" + i + "##b補簽#k " + year + "年" + month + "月" + i + "日#l\r\n";
                        }
                    }
                    cm.sendSimple(msg);
                }
            }
            break;
        case 4:
            var selectedDay = selection;
            if (selectedDay <= 0 || selectedDay > daysThisMonth) {
                cm.sendSimple("無效的日期選擇。");
                cm.dispose();
            } else if (cm.hasCheckedIn(year, month, selectedDay)) {
                cm.sendSimple("這一天已經簽到過了，不能再補簽。");
                cm.dispose();
            } else if (!cm.haveItem(makeupSignInItem)) {
                cm.sendSimple("你沒有足夠的補簽道具。");
                cm.dispose();
            } else {
                cm.gainItem(makeupSignInItem, -1);  // 扣除補簽道具
                if (cm.markupCheckIn(year, month, selectedDay)) {
                    cm.sendSimple("補簽成功！");
                } else {
                    cm.sendSimple("補簽失敗，請稍後再試。");
                }
                cm.dispose();
            }
            break;
        default:
            cm.dispose();
    }
}
