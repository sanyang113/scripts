load('nashorn:mozilla_compat.js');
importPackage(Packages.client);
var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.sendOk("等您下定決心再次找我吧.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getJob() == 511 || cm.getJob() == 521 || cm.getJob() == 512 || cm.getJob() == 522) {	
                cm.sendOk("您屬於海盜部,但是您已經成功三轉了,已經超越了教官的強度了!");
                cm.dispose();
                return;
            }
            if (!(cm.getJob()==510 ||cm.getJob()==520)) {
                cm.sendOk("請找您的轉職教官,您不屬於海盜部的滾吧!");
                cm.dispose();
                return;
            } else if (cm.getPlayer().getLevel() < 70) {
                cm.sendOk("你的等級尚未滿70等");
                cm.dispose();
                return;		
            }
            if (cm.haveItem(4031057, 1)){
                cm.sendNext("恭喜你到達這裡,最後我將給你一個考驗!");			
            } else if (!(cm.haveItem(4031057,1))) {
                cm.warp(120000101);
                cm.sendOk("去找 #r卡伊琳#k 她會幫助你的!");
                cm.dispose();
            } else {
                cm.sendOk("你還不能轉職...");
                cm.dispose();
                return;
            }
        } else if (status == 1) {
            if (cm.haveItem(4031058, 1)) {
                if (cm.getJob()==510) {
                    if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
                        cm.sendOk("你的二轉技能點數還尚未點完，請確認二轉技能點滿#r合計121點#k之後再進行轉職。\r\n※#r請注意，否則將會造成三轉缺少點數問題！#k");
                        cm.dispose();
                        return;
                    }
                    cm.changeJob(511);
                    cm.getPlayer().gainAp(5);
                    cm.gainItem(4031057, -1);
                    cm.gainItem(4031058, -1);
                    cm.sendOk("恭喜轉職了!");
                    cm.dispose();
                } else if (cm.getJob()==520) {
                    if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
                        cm.sendOk("你的二轉技能點數還尚未點完，請確認二轉技能點滿#r合計121點#k之後再進行轉職。\r\n※#r請注意，否則將會造成三轉缺少點數問題！#k");
                        cm.dispose();
                        return;
                    }
                    cm.changeJob(521);
                    cm.getPlayer().gainAp(5);
                    cm.gainItem(4031057, -1);
                    cm.gainItem(4031058, -1);
                    cm.sendOk("恭喜轉職了!");
                    cm.dispose();
                }
            } else if (cm.haveItem(4031057, 1))
                cm.sendAcceptDecline("你準備承擔最終測試??");
            else
                cm.sendAcceptDecline("但是，我可以讓你更加強大。雖然你必須證明不僅是你的實力，但你的知識。你準備好挑戰了嗎？");
        } else if (status == 2) {
            if (cm.haveItem(4031057, 1)) {
                cm.sendOk("去找神聖的石頭測驗吧!!.");
                cm.dispose();
            }
        }
    }
}
