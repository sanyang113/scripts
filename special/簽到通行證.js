var status = -1;
var cash = 10;
var mpoint = 10;
var passPrice = 499;

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
            // cm.sendOk(price)
            var msg = "本喵有偷偷兼差賣#i5252031:##r#t5252031#...#k人類你要用#i5240035##r 罐罐積分#k跟我換嗎(吞口水)，有這個的話就可以去找負責簽到的#b貝貝#k領特別簽到獎喔。#b\r\n\r\n#L1#用#r" + passPrice + "#b捐獻積分 #k換 #i5252031:# #r#t5252031#\r\n#b(交換當下可額外直接獲得4000楓葉點數)";
            cm.sendNext(msg);
            break;
        case 1:
            sel1 = selection;
            cm.sendYesNo("你確定要使用#b " + passPrice + " 捐獻積分#k 兌換 #i5252031:##r#t5252031# 嗎？" );
            break;
        case 2:
            if(cm.getPlayer().getDonate() < passPrice) {
                cm.sendOk("呀咧呀咧，人類你的捐獻積分不足 " + passPrice + " 點，所以無法兌換唷！");
                cm.dispose();
                return;
            }
            var currentDate = new Date();
            var currentMonth = currentDate.getMonth() + 1;
            var accountOnlyLog = "購買簽到通行證:"+ currentMonth + "月";
            if(cm.getPlayer().getAccountOnly(accountOnlyLog) > 0) {
                cm.sendOk("呀咧呀咧，人類你這個月買過通行證了啊！！");
                cm.dispose();
                return;
            }

            if(!cm.canHold(5252031, 1)){
                cm.sendOk("呀咧呀咧，你的背包空間不足唷！");
                cm.dispose();
                return;
            }
            if(!cm.getPlayer().gainDonate(-passPrice)) {
                cm.sendOk("非常抱歉，系統發生異常，請聯繫GM！");
                return;
            }

            if(!cm.getPlayer().setAccountOnly(accountOnlyLog)) {
                cm.sendOk("呀咧呀咧，發生系統異常，請聯繫GM！");
                cm.dispose();
                return;
            }
            
            if(cm.getVIPPass()){
                cm.getPlayer().modifyCSPoints(2, 4000, true);
			    cm.sendOk("換好囉！給你！");
                var packageName = '簽到通行證'
                var playerAccId = cm.getClient().getAccID();
                cm.setPackagePurchaseData(playerAccId, packageName, passPrice)
                cm.dispose();
            }else{
                cm.dispose();
                return;
            }
            
        default:
            cm.dispose();
    }
}