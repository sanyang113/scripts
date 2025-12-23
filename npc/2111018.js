var status = -1;

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
            if (cm.getQuestStatus(3339) == 1||cm.getQuestStatus(3340) == 1) {
                if (cm.getBossLog("手把1") == 1 && cm.getBossLog("手把2") == 1) {
                    cm.sendGetText("好像可以輸入密碼");
                } else {
	        		cm.sendNext("手把轉不太動，先調查其他手把看看。");
                    cm.dispose();
                }
            }else{
                cm.sendNext("看起來沒什麼特別的");
	            cm.dispose();
                return;
            }
            break;
        case 1:
            var text = cm.getText();
            if(text == "菲莉亞我的愛") {
                cm.warpMap(261000001, 1);
                cm.sendOk("密碼好像對了。");
                cm.dispose();
                return;
            }else {
                cm.sendOk("沒有反應，可能是密碼錯了");
                cm.dispose();
                return;
            }
    }
}