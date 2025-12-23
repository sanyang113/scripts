var status = -1;
var sel = -1;
var prizes = -1;
var choose = -1;
var typeSel = -1;

var gifts = [
    [5533126, 12],
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
            var msg = "我是山羊谷關鍵時刻系統，您想要進行什麼操作呢？\r\n\r\n";
            msg += "#L1##b我想要兌換關鍵時刻獎勵\r\n";
            msg += "#L2##b我想要查看關鍵時刻兌換序號\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            if(sel == 1) {
                var msg = "您尚未領取的中獎紀錄如下：\r\n";
                prizes = cm.getCrucialTimeResult();
                if(prizes.length == 0) {
                    cm.sendOk("您目前沒有中獎記錄");
                    cm.dispose();
                    return;
                }
                for(var i = 0; i < prizes.length; i++) {
                    msg += "#L" + i + "##b我想領取 " + prizes[i] + " 中獎獎勵\r\n";
                }
                cm.sendNext(msg);
            } else if (sel == 2) {
                var msg = "您所中獎的兌換序號如下：\r\n\r\n";
                var foodpanda = cm.browseCoupons();
                if(foodpanda.length == 0) {
                    msg += "很抱歉，您沒有中獎的紀錄";
                } else {
                    for(var i = 0; i < foodpanda.length; i++) {
                        msg += (i+1) + ".  #b" + foodpanda[i] + "#k\r\n";
                    }
                }
                cm.sendOk(msg);
                cm.dispose();
                return;
            }
            break;
        case 2:
            choose = selection;
            var msg = "您想要領取什麼獎勵呢？\r\n\r\n";
            msg += "#bA: Foodpanda 100元優惠券\r\n\r\n";
            msg += "#bB: 禮包獎勵\r\n";
            for(var i = 0; i < gifts.length; i++) {
                msg += "#b#i" + gifts[i][0] + ":##t" + gifts[i][0] + "##k x" + gifts[i][1] + "個\r\n";
            }
            msg += "\r\n";
            msg += "#L1##b我要選擇A獎勵\r\n";
            msg += "#L2##b我要選擇B獎勵\r\n";
            cm.sendNext(msg);
            break;
        case 3:
            typeSel = selection;
            var msg = "您確定要選擇" + (typeSel == 1 ? "A" : "B") + "獎勵嗎，一旦選擇就不可反悔！！";
            cm.sendYesNo(msg);
            break;
        case 4:
            if(typeSel == 1) {
                var ret = cm.selectFoodPanda(prizes[choose]);
                var msg = "您的兌換coupon如下：\r\n";
                msg += ret;
                cm.sendOk(msg);
            } else if(typeSel == 2) {
                var check = [];
                for (var i = 0; i < gifts.length; i++) {
                    var item = gifts[i][0];
                    var quantity = gifts[i][1];
                    check.push([item, quantity]);
                }
                if (!cm.canHold(check)) {
                    cm.sendOk("包包已經塞不下了。");
                    cm.dispose();
                    return;
                }
                var ret = cm.selectCrucialPrize(prizes[choose]);
                if(ret != null) {
                    cm.sendOk(ret);
                    cm.dispose();
                    return;
                }

                for(var i = 0; i < gifts.length; i++) {
                    cm.gainItem(gifts[i][0], gifts[i][1]);
                }
                cm.sendOk("獎勵發給您囉，請收好");
            }
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}