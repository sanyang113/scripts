//造型領取
var status = -1;
var sel = -1;
var sort = -1;

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
            var msg = "請選擇你想要領取的造型分類\r\n\r\n";
            msg +="#L0##i5153013# #b玩家自製#k造型#l\r\n";
            for(var i = 1; i < 8; i++) {
            msg +="#L"+i+"##i5153013# 免費造型#b 第 "+i+"頁#k#l\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            var msg = "您想要領取哪一個造型呢\r\n\r\n";
            var j = 0;
            sort = selection;
            if(sort == 0){
                for (var i = 1108000; i < 1108100; i++) {
                    if ((cm.getItemName(i)) != null){
                        j = j+1;
                        msg += "#L" + i + "##k#b#i" + i + ":##l";
                        if (j % 6 == 0) {msg += "\r\n"}
                    }
                }
            }if(sort == 1){            
                for (var i = 1106000; i < 1106099; i++) {
                    if ((cm.getItemName(i)) != null){
                        j = j+1;
                        msg += "#L" + i + "##k#b#i" + i + ":##l";
                        if (j % 6 == 0) {msg += "\r\n"}
                    }
                }
            }if(sort == 2){
                for (var i = 1106100; i < 1106200; i++) {
                    if ((cm.getItemName(i)) != null){
                        j = j+1;
                        msg += "#L" + i + "##k#b#i" + i + ":##l";
                        if (j % 6 == 0) {msg += "\r\n"}
                    }
                }
            }if(sort == 3){
                for (var i = 1106500; i < 1106600; i++) {
                    if ((cm.getItemName(i)) != null&&i != 1106511 &&i != 1106520 &&i != 1106531 &&i != 1106534 &&i != 1106542 &&i != 1106543 &&i != 1106547 &&i != 1106548 &&i != 1106549 &&i != 1106551 &&i != 1106554
                        &&i != 1106562 &&i != 1106566 &&i != 1106570 &&i != 1106571 &&i != 1106572 &&i != 1106574 &&i != 1106575 &&i != 1106576 &&i != 1106580 &&i != 1106582 &&i != 1106584 &&i != 1106586 &&i != 1106590){
                        j = j+1;
                        msg += "#L" + i + "##k#b#i" + i + ":##l";
                        if (j % 6 == 0) {msg += "\r\n"}
                    }
                }
            }if(sort == 4){
                for (var i = 1106600; i < 1106700; i++) {
                    if ((cm.getItemName(i)) != null&&i != 1106613 &&i != 1106615 &&i != 1106616 &&i != 1106617 &&i != 1106618 &&i != 1106620 &&i != 1106623 &&i != 1106624 
                        &&i != 1106625 &&i != 1106626 &&i != 1106629 &&i != 1106643 &&i != 1106661 &&i != 1106672 &&i != 1106675 &&i != 1106681 
                        &&i != 1106684 &&i != 1106685 &&i != 1106686 &&i != 1106687 &&i != 1106688 &&i != 1106693 &&i != 1106694 ){
                        j = j+1;
                        msg += "#L" + i + "##k#b#i" + i + ":##l";
                        if (j % 6 == 0) {msg += "\r\n"}
                    }
                }
            }if(sort == 5){
                for (var i = 1106700; i < 1106800; i++) {
                    if ((cm.getItemName(i)) != null&&i != 1106704 &&i != 1106705 &&i != 1106718 &&i != 1106728 &&i != 1106755 &&i != 1106769 &&i != 1106780 ){
                        j = j+1;
                        msg += "#L" + i + "##k#b#i" + i + ":##l";
                        if (j % 6 == 0) {msg += "\r\n"}
                    }
                }
            }if(sort == 6){
                for (var i = 1106800; i < 1106900; i++) {
                    if ((cm.getItemName(i)) != null&&i != 1106812 &&i != 1106826){
                        j = j+1;
                        msg += "#L" + i + "##k#b#i" + i + ":##l";
                        if (j % 6 == 0) {msg += "\r\n"}
                    }
                }
            }if(sort == 7){
                for (var i = 1108900; i < 1109000; i++) {
                    if ((cm.getItemName(i)) != null&&i != 1108901){
                        j = j+1;
                        msg += "#L" + i + "##k#b#i" + i + ":##l";
                        if (j % 6 == 0) {msg += "\r\n"}
                    }
                }
            }
            cm.sendNext(msg);
            break;
        case 2:
            sel = selection;
            if (cm.haveItem(sel, 1)) {
					cm.sendOk("你已經擁有#b #i" + sel + ":##t" + sel + ":# 了");
					cm.dispose();
					return;
				}
            cm.gainItem(sel, 1);
            cm.sendOk("給了你 #b#i" + sel + ":# #t" + sel  +"##k！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}