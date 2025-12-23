var status = -1;

var useItem = 4000019;
var minLevel = 30;
var drawAll = false;

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
            var msg = "如果您有#b#i" + useItem + ":##t" + useItem + "##k 可以進行一番賞抽獎唷！\r\n\r\n";
            msg += "#L1##b開始抽獎\r\n";
            msg += "#L2##b查看現有獎勵內容\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            if(selection == 1) {
                if(cm.getPlayer().getLevel() < minLevel) {
                    cm.sendOk("等級需要達到 #r#e" + minLevel + " #k#n才可以進行抽獎唷！");
                    cm.dispose();
                    return;
                }
                if(!cm.haveItem(useItem, 1)) {
                    cm.sendOk("很抱歉，您沒有足夠的#b#i" + useItem + ":##t" + useItem + "##k唷！");
                    cm.dispose();
                    return;
                }
                if(!cm.canHold()) {
                    cm.sendOk("請確認背包空間是否足夠");
                    cm.dispose();
                    return;
                }
                var prize = cm.drawIchbanKuji();
                if(prize == null) {
                    cm.sendOk("目前一番賞正在維修中或是獎勵被抽完了，請聯繫GM");
                    cm.dispose();
                    return;
                }
                cm.gainItem(useItem, -1);
                var item = cm.gainItem(prize.itemid, prize.quantity, true);
                if(prize.rare) {
                    if(item != null) {
                        cm.worldMessageYellowItem(item, "一番賞抽獎", "x" + prize.quantity + "被他/她抽到了，大家恭喜他/她吧！");
                    } else {
                        cm.worldMessageYellowItem(prize.itemid, "一番賞抽獎", "x" + prize.quantity + "被他/她抽到了，大家恭喜他/她吧！");
                    }
                }
                cm.sendOk("恭喜您獲得了#b#i" + prize.itemid + ":##t" + prize.itemid + "##k x" + prize.quantity + "個");
                cm.dispose();
                return;
            } else if(selection == 2) {
                var msg = "目前一番賞的獎勵如下方\r\n\r\n";
                var prizes = cm.showIchibanKuji();
                if(prizes.length == 0) {
                    cm.sendOk("很抱歉，目前一番賞內容正在更新中");
                    cm.dispose();
                    return;
                }
                for(var i = 0; i < prizes.length; i++) {
                    var prize = prizes[i];
                    msg += "#b" + prize.number + "號#k: 獎勵 #b#i" + prize.itemid + ":##t" + prize.itemid + "##k x" + prize.quantity + "個 " + (prize.canDraw?"#b#e(尚未抽出)#k#n":"#r#e(已抽出)#k#n") +  "\r\n";
                }
                cm.sendOk(msg);
                cm.dispose();
                return;
            }
        default:
            cm.dispose();
            return;
    }
}
        
