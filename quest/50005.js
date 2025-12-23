/*
	NPC Name: 		Asia
	Description: 		Quest - A rush of Core Blaze
*/

var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.getQuestStatus(50005) == 0) {
	qm.forceStartQuest();
	qm.dispose();
    } else {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    qm.sendNext("（我重新進入了2102年的澀谷。我看到的是…#p9120033#！）\n…你是…！");
	} else if (status == 1) {
	    qm.sendNextPrev("……啊，所以你被派到這裡來打敗#o9400296#。說實話，真的很抱歉...\n(說這句話的時候#p9120033#不忍直視我的眼睛)");
	} else if (status == 2) {
	    qm.sendNextPrev("敵人總部位於市中心#b六本木商城#k。當然，你將無法面對面進入。在主大廳，一群名為#o9400287#的機器人待命，擔任保全。你的第一個任務是透過偽裝那些機器人進入大樓。");
	} else if (status == 3) {
	    qm.sendNextPrev("事實上，從澀谷到六本木製購物中心都有地下通道。使用這個可以讓你進入建築物而不被#o9400287#注意到。這是將引導您到達那裡的地圖。這只是一條直線，所以你進入那裡應該沒有問題，但我還是會給你地圖。");
	} else if (status == 4) {
	    qm.sendOk("請前往2102年的澀谷，並經由地下通道進入商場。由於商場是總部，你可能會遇到一些你從未見過的怪物。請不要低估他們。祝你好運！");
	    qm.forceCompleteQuest();
	    qm.safeDispose();
	}
    }
}