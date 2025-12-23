/*
 * Cygnus 1st Job advancement - Striker
 */
//load('nashorn:mozilla_compat.js');
//importPackage(Packages.client);

var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("這個決定..非常重要.");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendYesNo("你決定好了嘛? 這會是你最後的決定唷, 所以想清楚你要做什麼. 你想要成為 閃雷悍將嘛?");
    } else if (status == 1) {
        qm.sendNext("恭喜成功轉職。");
        if (qm.getJob() != 1500) {
            qm.gainItem(1482014, 1);
            qm.gainItem(1142066, 1);
            if(qm.getChar().getLevel() > 10){
				qm.getChar().setRemainingSp((3*(qm.getChar().getLevel()-10)));
            //    qm.getChar().updateSingleStat(MapleStat.AVAILABLESP, qm.getChar().getRemainingSp());
			}
            qm.changeJob(1500);
            qm.resetStats(4, 4, 4, 4);
        }
        qm.forceCompleteQuest();
    } else if (status == 2) {
        qm.sendNextPrev("好運！.");
        qm.safeDispose();
    }
}