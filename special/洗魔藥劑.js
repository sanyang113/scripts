var status = -1;
var useItem = 4000019;

var increaseMp = {
    0: [10, 20],
    100: [5, 10],
}

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
            var jobId = cm.getPlayer().getJob();
            var increase = increaseMp[String(jobId)];
            if(increase == undefined) {
                cm.sendOk("發生未定義職業，請聯繫GM");
                cm.dispose();
                return;
            }

            var msg = "使用#b#i" + useItem + ":##t" + useItem + "##k可以增加您角色的最大魔力\r\n";
            msg += "您的職業使用一次可隨機提升" + increase[0] + "~" + increase[1] + "的魔力\r\n";
            msg += "您確定要使用嗎？";
            cm.sendYesNo(msg);
            break;
        case 1:
            if(!cm.haveItem(useItem, 1)) {
                cm.sendOk("很抱歉，您沒有#b#i" + useItem + ":##t" + useItem + "##k唷！");
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -1);
            var jobId = cm.getPlayer().getJob();
            var increase = increaseMp[String(jobId)];

            var selectIncrease = randomBetween(increase[0], increase[1]);
            cm.useMpUpgradePotion(selectIncrease);
            var msg = "幫您增加了:" + selectIncrease + "點魔力\r\n";
            msg += "您目前的最大魔力為" + cm.getPlayer().getMaxMp();
            cm.sendOk(msg);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

function randomBetween(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
