load('nashorn:mozilla_compat.js');
importPackage(Packages.scripting);

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
            var msg = "今日贊助可獲得道具如下：\r\n\r\n";
            var playerAccount = cm.getClient().getAccountName();
            var todayDonate = cm.getTodayDonateAmt(playerAccount);
            var donate = DonatePrizeScriptManager.getInstance().getDonatePrize(getDate());
            var showList = donate.getTodayDonatePrizeList(todayDonate);
            if(showList.length == 0) {
                cm.sendOk("目前暫時沒有活動唷！");
                cm.dispose();
                return;
            }
            for(var i = 0; i < showList.length; i++) {
                var content = showList[i];
                msg += "當日滿 " + content.start + " 可獲得#i" + content.itemid + ":# x" + content.quantity;
                if(content.repeatCounts > 1 || content.repeatCounts == -1) {
                    msg += "，每再+" + content.step + "再送" + content.quantity;
                    if(content.repeatCounts == -1) {
                        msg += "(無上限)";
                    } else {
                        msg += "(上限" + content.repeatCounts + "次)";
                    }
                }
                msg += "\r\n";
            }
            cm.sendOk(msg);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}


function getDate() {
    var d = new Date();

    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    if (month < 10)
        month = '0' + month;
    else
        month = '' + month;

    if (day < 10)
        day = '0' + day;
    else
        day = '' + day;

    return year + month + day;
}