// load('nashorn:mozilla_compat.js');
// importPackage(Packages.tools);
// importPackage(Packages.client.inventory);
// importPackage(Packages.server);

var increaseHp = {
    0: [10, 20],
    100: [100, 200],
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
    var msg = "幫您增加了:" + selectIncrease + "點生命，您目前的最大生命為" + c.getPlayer().getStat().getMaxHp();
    cm.getPlayer().dropMessage(6,msg);
}

function check() {
    return true;
}

function randomBetween(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}