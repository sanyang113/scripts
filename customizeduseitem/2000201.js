// MP突破藥水
// load('nashorn:mozilla_compat.js');
// importPackage(Packages.tools);
// importPackage(Packages.client.inventory);
// importPackage(Packages.server);

var increaseMp = {
    900: [5, 10],
    0: [3, 5],
    1000: [3, 5],
    2000: [3, 5],

    100: [3, 5],
    110: [3, 5],
    111: [3, 5],
    112: [3, 5],
    120: [3, 5],
    121: [3, 5],
    122: [3, 5],
    130: [3, 5],
    131: [3, 5],
    132: [3, 5],
    1100: [3, 5],
    1110: [3, 5],
    1111: [3, 5],
    1112: [3, 5],
    2100: [3, 5],
    2110: [3, 5],
    2111: [3, 5],
    2112: [3, 5],

    200: [10, 20],
    210: [10, 20],
    211: [10, 20],
    212: [10, 20],
    220: [10, 20],
    221: [10, 20],
    222: [10, 20],
    230: [10, 20],
    231: [10, 20],
    232: [10, 20],
    1200: [10, 20],
    1210: [10, 20],
    1211: [10, 20],
    1212: [10, 20],

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
    var increase = increaseMp[String(jobId)];
    if(increase == undefined) {
        cm.getPlayer().dropMessage(5, "發現未定義職業:" + jobId);
        return;
    }
    var selectIncrease = randomBetween(increase[0], increase[1]);
    cm.getPlayer().useMpUpgradePotion(selectIncrease);
    var msg = "幫您增加了:" + selectIncrease + "點魔力，您目前的最大魔力為" + cm.getPlayer().getMaxMp();
    cm.getPlayer().dropMessage(6,msg);
}

function check() {
    if (cm.getPlayer().getMaxMp() >= 30000){
        cm.getPlayer().dropMessage(6,"MP超過30000無法使用");
        return false;
    }
    return true;
}

function randomBetween(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}