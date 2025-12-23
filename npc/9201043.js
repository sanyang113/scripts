var status = -1;
var sel = -1;
var cost = 3000000;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    cm.removeAll(4031595);
    cm.removeAll(4031594);
    cm.removeAll(4031597);
    if (status == 0) {
        var marr = cm.getQuestRecord(160001);
        var data = marr.getCustomData();
        if (data == null) {
            marr.setCustomData("0");
            data = "0";
        }
        if (cm.getPlayer().getLevel() < 40) {
            cm.sendNext("你必須等級達到40等以上才能跟我說話唷～！");
            cm.dispose();
            return;
        } else {
            var msg = "#b#L0#我想要購買入場券\r\n#L1#我想要進去了(會消耗入場券)";
            //cm.sendNext(msg);
            cm.sendOk("結婚組隊任務目前尚未開放");
        }
    } else if (status == 1) {
        sel = selection;
        if(selection == 0) {
            var msg = "購買#b#i4031592##t4031592##k，需要花費您 #b三百萬#k 楓幣，您確定要購買嗎？";
            cm.sendYesNo(msg);
        } else if(selection == 1) {
            if (cm.haveItem(4031592)) {
                cm.sendYesNo("我可以讓你進去. 進去後就會失去入場卷了唷～確定要？.");
            } else {
                cm.sendOk("很抱歉，您身上沒有#b#i4031592:##t4031592##k");
                cm.dispose();
                return;
            }
        }
    } else if (status == 2) {
        if(sel == 0) {
            if(cm.getPlayer().getMeso() < cost) {
                cm.sendOk("很抱歉，您沒有足夠的楓幣");
                cm.dispose();
                return;
            }
            if(cm.haveItem(4031592,1)) {
                cm.sendOk("您已經有#b#i4031592:##t4031592##k了");
                cm.dispose();
                return;
            }
            if(!cm.canHold(4031592,1)) {
                cm.sendOk("請確認背包空間是否足夠！");
                cm.dispose();
                return;
            }
            cm.gainMeso(-cost);
            cm.gainItem(4031592, 1);
            cm.sendOk("幫您兌換完畢囉！");
            cm.dispose();
        } else {
            cm.gainItem(4031592, -1);
            cm.warp(670010100, 0);
            cm.dispose();
        }
    }
}