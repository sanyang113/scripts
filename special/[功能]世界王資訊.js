var status = -1;

var icon = 4030002;

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
            var msg = "";
            msg += showPrefix() + "前次世界王討伐幸運兒名單：\r\n" + cm.showWorldBossLuckyCharacters() + "#k\r\n";
            msg += showPrefix() + "前次世界王討伐最終擊殺者：#b" + cm.showWorldBossLastHitter() + "#k\r\n";
            msg += showPrefix() + cm.showMyDamage() + "\r\n";
            msg += showPrefix() + cm.showWorldBossInfo() + "\r\n";
            msg += showPrefix() + "下一次世界王血量：#d#e" + formatNumber(cm.getNextWorldBossHp()) + "#k#n\r\n";
            msg += showPrefix() + "下一次世界王討伐獎勵：#b#e" + formatNumber(cm.getNextWorldBossQuantity()) + "#k#n 個";
            // msg += "前次參與世界王討伐總人數:";
            cm.sendOk(msg);
            break;
        default:
            cm.dispose();
            return;
    }
}

function showPrefix() {
    return "#i" + icon + ":# ";
}

function formatNumber(num) {
    // 先轉成字串、清除原本可能存在的逗號
    var str = String(num).replace(/,/g, '');

    // 驗證是否為有效數字（可帶小數點）
    if (!/^[-+]?\d*(\.\d+)?$/.test(str)) return '';

    var parts = str.split('.');
    var integer = parts[0];
    var decimal = parts.length > 1 ? '.' + parts[1] : '';

    // 將整數部分加上千分位逗號
    var result = '';
    var count = 0;
    for (var i = integer.length - 1; i >= 0; i--) {
        result = integer.charAt(i) + result;
        count++;
        if (count % 3 === 0 && i !== 0) {
        result = ',' + result;
        }
    }

    return result + decimal;
}