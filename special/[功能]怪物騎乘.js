var status = -1;

function start() {
    return action(1,0,0);
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
            var msg = "#L1#學習#b 怪物騎乘 #k技能#l\r\n";
            msg += "#L2#領取#b 小小兔子 #k騎寵#l";
            cm.sendYesNo(msg);
            break;
        case 1:
            var sel;
            sel = selection;
            if(sel==1){
                //if(cm.getPlayer().getMeso() < 1000000) {
                //    cm.sendOk("很抱歉，您的楓幣不足唷！");
                //    cm.dispose();
                //    return;
                //}

                var check = [];
                check.push([1912000, 1]);
                //check.push([1902029, 1]);

                if (!cm.canHold(check)) {
                    cm.sendOk("包包已經塞不下了。");
                    cm.dispose();
                    return;
                }
                if(cm.getPlayer().getJob()>=0 &&cm.getPlayer().getJob()<=999){
                    if(cm.hasSkill(1004)) {
                        cm.sendOk("很抱歉，您已經學習過該技能了！");
                        cm.dispose();
                        return;
                    }
                    cm.teachSkill(1004, 1, 1);
                }if(cm.getPlayer().getJob()>=1000 &&cm.getPlayer().getJob()<=1999){
                    if(cm.hasSkill(10001004)) {
                        cm.sendOk("很抱歉，您已經學習過該技能了！");
                        cm.dispose();
                        return;
                    }
                    cm.teachSkill(10001004, 1, 1);
                }if(cm.getPlayer().getJob()>=2000 &&cm.getPlayer().getJob()<=2999){
                    if(cm.hasSkill(20001004)) {
                        cm.sendOk("很抱歉，您已經學習過該技能了！");
                        cm.dispose();
                        return;
                    }
                    cm.teachSkill(20001004, 1, 1);
                }
                cm.gainItem(1912000, 1);
                //cm.gainItem(1902029, 1);
                //cm.gainMeso(-1000000);
                cm.sendOk("幫您學會騎乘技能囉！");
                cm.dispose();
                return;
            }else if (sel == 2){
                if (cm.haveItem(1902059, 1)) {
					cm.sendOk("你已經有 #b#i" + 1902059 + ":# #t" + 1902059 + ":##k 了");
					cm.dispose();
					return;
				}
                cm.gainItem(1902059,1);
                cm.sendOk("給了您一隻 #b#i" + 1902059 + ":# #t" + 1902059 + ":##k \r\n\r\n要好好照顧他唷");
            }
        default:
            cm.dispose();
            return;
    }
}