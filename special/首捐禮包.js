var status = -1;
var sel;
//首儲禮包偶爾能重置，有更新後可在此新增version，或刪除DB資料
var version = 1;
var money = 1688888;

var items = [
    [4032878, 1], //卯咪水晶球*1
    [5076000, 3], //道具喇叭*3
    //卯咪任意門
    [2450000, 1], //獵人 不能交易
    [5533124, 1], //楓點100
]

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
            var msg = "喵囉！#b#h  ##r 你想要領取罐罐首捐禮包嗎？ \r\n\r\n#e※禮包內容物如下：#n#k\r\n";
            for(var i = 0;  i < items.length; i++) {
                msg += "\r\n#b#i" + items[i][0] + ":##t" + items[i][0] + "# x" + items[i][1] + " 個";
            }
            msg += "\r\n\r\n#d楓幣： " + money;

            cm.sendYesNo(msg);
            break;
        case 1:
            if(cm.getPlayer().getTotalDonate() <= 0) {
                cm.sendOk("呀咧呀咧，你尚未有捐獻紀錄，所以無法領取唷！");
                cm.dispose();
                return;
            }
            var accountOnlyLog = "首儲禮包,version:"+version;
            if(cm.getPlayer().getAccountOnly(accountOnlyLog) > 0) {
                cm.sendOk("呀咧呀咧，這個階段的累積捐獻的獎勵你似乎已經領取過了！");
                cm.dispose();
                return;
            }
            var check = new Array();
            var c = 0;
            for(var i = 1;  i < items.length; i++) {
                if(items[i][2] == 0) {
                    check[c] = [];
                    check[c][0] = items[i][0];
                    check[c][1] = items[i][1];
                    c++;
                }
            }
            if(!cm.canHold(check)) {
                cm.sendOk("呀咧呀咧，你的背包空間不足唷！");
                cm.dispose();
                return;
            }

            if(cm.getPlayer().getMeso() + money < 0) {
                cm.sendOk("呀咧呀咧，請確認身上楓幣是否過多！");
                cm.dispose();
                return;
            }
            if(!cm.getPlayer().setAccountOnly(accountOnlyLog)) {
                cm.sendOk("呀咧呀咧，發生系統異常，請聯繫GM！");
                cm.dispose();
                return;
            }
            for(var i = 0; i < items.length; i++) {
                cm.gainItem(items[i][0],items[i][1]);
            }
            cm.gainMeso(money);

            cm.setLog("Donate.txt", (cm.getPlayer().getName() + " 兌換了首儲獎勵,version:"+version));
            cm.sendOk("感謝你的贊助，山羊谷的喵咪天皇感謝你，本喵的本月罐罐份額就靠你了！");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}