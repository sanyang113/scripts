function action(mode, type, selection) {
	if (cm.getQuestStatus(3322) == 1) {
        if(cm.haveItem(4031697,1)){
            cm.sendNext("看起來是普通的畫框");
		    cm.dispose();
        } else {
            cm.gainItem(4031697,1);
            cm.sendNext("找到了一個銀製墜飾");
            cm.dispose();
        }
    } else {
        cm.sendNext("看起來是普通的畫框");
		cm.dispose();
    }   
}

