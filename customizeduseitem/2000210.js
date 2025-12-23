// HP突破藥水

var increaseHp = {
    900: [5, 10],
    0: [3, 5],
    1000: [3, 5],
    2000: [3, 5],

    100: [10, 20],
    110: [10, 20],
    111: [10, 20],
    112: [10, 20],
    120: [10, 20],
    121: [10, 20],
    122: [10, 20],
    130: [10, 20],
    131: [10, 20],
    132: [10, 20],
    1100: [10, 20],
    1110: [10, 20],
    1111: [10, 20],
    1112: [10, 20],
    2100: [10, 20],
    2110: [10, 20],
    2111: [10, 20],
    2112: [10, 20],

    200: [3, 5],
    210: [3, 5],
    211: [3, 5],
    212: [3, 5],
    220: [3, 5],
    221: [3, 5],
    222: [3, 5],
    230: [3, 5],
    231: [3, 5],
    232: [3, 5],
    1200: [3, 5],
    1210: [3, 5],
    1211: [3, 5],
    1212: [3, 5],

    300: [5, 10],
    310: [5, 10],
    311: [5, 10],
    312: [5, 10],
    320: [5, 10],
    321: [5, 10],
    322: [5, 10],
    1300: [5, 10],
    1310: [5, 10],
    1311: [5, 10],
    1312: [5, 10],

    400: [5, 10],
    410: [5, 10],
    411: [5, 10],
    412: [5, 10],
    420: [5, 10],
    421: [5, 10],
    422: [5, 10],
    1400: [5, 10],
    1410: [5, 10],
    1411: [5, 10],
    1412: [5, 10],
    500: [5, 10],
    510: [5, 10],
    511: [5, 10],
    512: [5, 10],
    520: [5, 10],
    521: [5, 10],
    522: [5, 10],
    1500: [5, 10],
    1510: [5, 10],
    1511: [5, 10],
    1512: [5, 10],
}

function start() {
    var jobId = cm.getPlayer().getJob();
    var increase = increaseHp[String(jobId)];
    if(increase == undefined) {
        cm.getPlayer().dropMessage(5, "發現未定義職業:" + jobId);
        return;
    }
    var selectIncrease = randomBetween(increase[0], increase[1]);
    cm.getPlayer().useHpUpgradePotion(selectIncrease);
    var msg = "幫您增加了:" + selectIncrease + "點生命，您目前的最大生命為" + cm.getPlayer().getStat().getMaxHp();
    cm.getPlayer().dropMessage(6,msg);
}

function check() {
    if (cm.getPlayer().getMaxHp() >= 99999){
        cm.getPlayer().dropMessage(6,"HP超過99999無法使用");
        return false;
    }
    return true;
}

function randomBetween(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}