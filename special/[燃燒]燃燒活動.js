var status = -1;
var burnRateInfo = 1;

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
            burnRateInfo = cm.getBurnRateInfo();
            var msg = "本期燃燒活動可指定 #b#e" + burnRateInfo.maxSize + " #k#n隻角色\r\n";
            msg += "燃燒該角色經驗值提升為 #b#e" + burnRateInfo.burnRate + " #k#n倍\r\n";
            msg += "本次活動期間為 #b#e" + burnRateInfo.startDate + "#k#n ~ #b#e" + burnRateInfo.endDate + "#k#n\r\n";
            msg += "燃燒等級區間為 #r#eLV" + burnRateInfo.minLevel + "#k#n ~ #r#eLV" + burnRateInfo.maxLevel + "#k#n\r\n";
            msg += "您要設定本角色進行燃燒嗎？\r\n";
            msg += "設定後將會取得 #b#e#i1113997:# #t1113997:##r\r\n";
            msg += burnRateInfo.endDate + "例行性維護後會刪除#b#e#i1113997:# #t1113997:#\r\n"
            msg += "#r#e(設定後無法變更燃燒角色)#k#n";
            cm.sendYesNo(msg);
            break;
        case 1:
            if(cm.getPlayer().getLevel() < burnRateInfo.minLevel || cm.getPlayer().getLevel() >= burnRateInfo.maxLevel) {
                cm.sendOk("您的角色等級沒有符合等級區間唷！");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getAccountOnly(burnRateInfo.title) >= burnRateInfo.maxSize) {
                cm.sendOk("很抱歉，您的帳號開啟的燃燒角色已經達到上限！");
                cm.dispose();
                return;
            }
            if(cm.getCurrentTime() > burnRateInfo.endTime) {
                cm.sendOk("很抱歉，本次活動已經結束囉！");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getStat().burnRate > 1) {
                cm.sendOk("很抱歉，您的角色已經開啟燃燒了！");
                cm.dispose();
                return;
            }
            var result = cm.addBurnLevelNewCharacter();
            if(result) {
                cm.sendOk("已經為您的角色開啟燃燒囉！");
                var callValue = getDailyValue();
                cm.gainItem(1113997,1);
                cm.dispose();
                return;
            } else {
                cm.sendOk("很抱歉，您的資格不符合，或是您的角色已經開啟燃燒了");
                cm.dispose();
                return;
            }
        default:
            cm.dispose();
            return;
    }
}


function getDailyValue() {
    // 活動起始日（記得月份是 0 開始，所以 11 是 12 月）
    var startDate = new Date(2025, 11, 10);
    var endDate = new Date(2026, 0, 7);
    var today = new Date();

    // 不在期間 → 回傳 0
    if (today < startDate || today > endDate) {
        return 0;
    }

    // 計算差幾天
    var diffTime = today.getTime() - startDate.getTime();
    var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // 起始值
    var startValue = 29;

    // 每天 -1
    return startValue - diffDays;
}