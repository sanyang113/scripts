var status = -1;

var prize = [
    [5533124, 2],
    [4032878, 1],
]


function start() {
    action(1, 0, 0);
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
            var msg = "#b#e=============【每日任務擊殺資訊】=============#n#k\r\n\r\n";
            var instance = cm.getDailyQuest();
            msg += "#b#e怪物名稱：" + cm.getMobName(instance.getMob()) + "\r\n\r\n";
            msg += "擊殺需求數量：" + instance.mission.getMobCount() + " 隻\r\n\r\n";
            msg += "怪物代碼：" + instance.getMob() + "\r\n\r\n";
            msg += "已擊殺數量：" + instance.getMobCount(cm.getPlayer()) + " 隻\r\n\r\n";
            msg += "#b#e=============【每日任務獎勵資訊】=============#n#k\r\n\r\n";
            for(var i = 0; i < prize.length; i++) {
                msg += "#b#i" + prize[i][0] + ":##t" + prize[i][0] + "##k x" + prize[i][1] + "個\r\n";
            }
            if(instance.getMobCount(cm.getPlayer()) >= instance.mission.getMobCount()) {
                msg += "是否要領取獎勵？";
                cm.sendYesNo(msg);
            } else {
                cm.sendOk(msg);
                cm.dispose();
                return;
            }
            break;
        case 1:
            var instance = cm.getDailyQuest();
            if(instance.getMobCount(cm.getPlayer()) < instance.mission.getMobCount()) {
                cm.sendOk("發生異常，請聯繫GM");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getAccountOnly(log()) > 0) {
                cm.sendOk("您已經完成過今日任務囉！");
                cm.dispose();
                return;
            }
            if(!cm.getPlayer().isStackOnline()) {
                cm.sendOk("先完成掛點");
                cm.dispose();
                return;
            }
            var check = [];
            for (var i = 0; i < prize.length; i++) {
                check.push([prize[i][0], prize[i][1]]);
            }

            if(!cm.canHold(check)) {
                cm.sendOk("請確認背包空間是否足夠！");
                cm.dispose();
                return;
            }

            cm.getPlayer().setAccountOnly(log());
            for(var i = 0; i < prize.length; i++) {
                cm.gainItem(prize[i][0], prize[i][1]);
            }
            cm.sendOk("這是給您的獎勵，請收好");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

function log() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var daytime = "日期:" + year + "年" + month + "月" + day + "日";

    return "每日任務:" + daytime;
}