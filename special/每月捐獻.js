var status = -1;
var sel;
var currMonth = 4;
var month = 0;
//cm.getCurrMonth != currMonth時，領取items[1](表示已換月，應領取新獎勵)
//當換月日後，若有異動項目，需將items[1]移轉至items[0]，並新增下個月份items[1]
//並且更改currMonth
var items = [
    [
        [1000, [5220040, 3, 0], [666, 0, 1], [8888, 0, 3]],
        [2000, [5220040, 10, 0], [777, 0, 2], [99999, 0, 3]]
    ],
    [
        [100, [5220040, 3, 0], [666, 0, 1], [8888, 0, 3]],
        [10000, [5220040, 10, 0], [777, 0, 2], [99999, 0, 3]]
    ]
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
            var msg = "哈囉！#b#h  ##k 您好，請問您想要領取每月捐獻的額外獎勵嗎？\r\n#b";
            if(cm.getCurrMonth() != currMonth) {
                month = 1;
            }
            for(var i = 0; i < items[month].length; i++) {
                var price = items[month][i][0];
                msg += "\r\n#L" + i + "#我想領取 #e#r" + price + "#n#b 每月捐獻額外獎勵";
            }
            cm.sendNext(msg);
            break;
        case 1:
            var msg = "";
            sel = selection;
            var item = items[month][sel];
            for(var i = 1; i < item.length; i++) {
                switch(item[i][2]) {
                    case 0:
                        msg += "\r\n#b#i" + item[i][0] + ":##t" + item[i][0] + "# x" + item[i][1] + " 個";
                        break;
                    case 1:
                        msg += "\r\n#bGASH " + item[i][0] + " 點";
                        break;
                    case 2:
                        msg += "\r\n#r楓葉點數 " + item[i][0] + " 點";
                        break;
                    case 3:
                        msg += "\r\n#d楓幣 " + item[i][0];
                        break;
                }
            }
            msg += "\r\n#r您確定要領取這個階段的每月獎勵嗎？#r\r\n#e※請先再次確認您的背包空位是否足夠領取所有道具#k";
            cm.sendYesNo(msg);
            break;
        case 2:
            var item = items[month][sel];
            var price = item[0];
            if(cm.getPlayer().getCurrMonthDonate() < price) {
                cm.sendOk("很抱歉，您這個月的捐獻積分不足 " + price + " 唷！");
                cm.dispose();
                return;
            }
            var accountOnlyLog = "每月捐獻,月份"+ cm.getCurrMonth() +",金額:" + price;
            if(cm.getPlayer().getAccountOnly(accountOnlyLog) > 0) {
                cm.sendOk("非常抱歉，這個階段的每月捐獻的獎勵您似乎已經領取過了！");
                cm.dispose();
                return;
            }
            var check = new Array();
            var c = 0;
            for(var i = 1;  i < item.length; i++) {
                if(item[i][2] == 0) {
                    check[c] = [];
                    check[c][0] = item[i][0];
                    check[c][1] = item[i][1];
                    c++;
                }
            }
            if(!cm.canHold(check)) {
                cm.sendOk("非常抱歉，您的背包空間不足唷！");
                cm.dispose();
                return;
            }
            var check2 = 0;
            for(var i = 1; i < item.length; i++) {
                if(item[i][2] == 3) {
                    check2 += item[i][0];
                }
            }
            if(cm.getPlayer().getMeso() + check2 < 0) {
                cm.sendOk("非常抱歉，請確認身上楓幣是否過多！");
                cm.dispose();
                return;
            }
            if(!cm.getPlayer().setAccountOnly(accountOnlyLog)) {
                cm.sendOk("非常抱歉，發生系統異常，請聯繫GM！");
                cm.dispose();
                return;
            }
            for(var i = 1; i < item.length; i++) {
                switch(item[i][2]) {
                    case 0:
                        cm.gainItem(item[i][0],item[i][1]);
                        break;
                    case 1:
                    case 2:
                        cm.getPlayer().modifyCSPoints(item[i][2], item[i][0], true);
                        break;
                    case 3:
                        cm.gainMeso(item[i][0]);
                        break;
                }
            }
            cm.setLog("Donate.txt", (cm.getPlayer().getName() + " 兌換了 " + price + " 每月獎勵, 月份:" + cm.getCurrMonth()));
            cm.sendOk("兌換成功，給您獎勵了！");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}