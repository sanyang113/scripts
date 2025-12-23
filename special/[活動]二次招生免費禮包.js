//8月大更新免費大禮包
var status = -1;
var accountOnlyLog = "二次招生免費禮包"
var prize = [
    [1146408, 1],
    [2450106, 200],
    [5530001, 20],
    [5121014, 10],
    [5041000, 10],
    [5072000, 10],
    [5073000, 10],
    [5074000, 10],

]

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
            var msg = "山羊谷二次招生免費禮包領取";
            msg += "\r\n#r每個帳號限領取一次#b\r\n";
            for(var i = 0; i < prize.length; i++) {
                msg += "#i" + prize[i][0] + ":##t" + prize[i][0] + ":##k x#r " + prize[i][1] + "#k個#b\r\n";
            };  msg += "#r你確定要領取嗎？";
            cm.sendYesNo(msg);
            break;
        case 1:
            if(cm.getPlayer().getAccountOnly(accountOnlyLog) > 0) {
                cm.sendOk("你已經領取過" +accountOnlyLog + "囉，不要太貪心！");
                cm.dispose();
                return;
            }
            var check = [];
            for (var i = 0; i < prize.length; i++) {
                check.push([prize[i][0], prize[i][1]]);
            }
            if(!cm.canHold(check)) {
                cm.sendOk("請確認背包空間是否足夠！");
                cm.dispose();
                return;
            }
            if(!cm.getPlayer().setAccountOnly(accountOnlyLog)) {
                cm.sendOk("發生系統異常，請聯繫GM！");
                cm.dispose();
                return;
            }
            for(var i = 0; i < prize.length; i++) {
            cm.gainItem(prize[i][0], prize[i][1]);
            }
            cm.sendOk("免費禮包已發送到您的包包內囉");
            cm.dispose();
            return;
    }
} 
