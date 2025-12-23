//測試
var status = -1;
var sel = -1;
var qty = -1;

function start() {
    action(1,0,0);
}
  
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0: 
            var callValue = getDailyValue();
            cm.sendOk("今天呼叫的值為：" + callValue);
            cm.gainItem(1113997, 1, 0, callValue, 0);
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