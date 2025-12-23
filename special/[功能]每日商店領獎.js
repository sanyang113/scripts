

var status = -1;
var needTime = 120;

var prizes = [
    [4000019, 1],
    [4000020, 2],
]

function start() {
    action(1, 0, 0);
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
            var msg = "每日商店掛網滿" + needTime + "分鐘即可獲得以下獎勵唷！\r\n\r\n";
            for(var i = 0; i < prizes.length; i++) {
                var item = prizes[i];
                msg += "#b#i" + item[0] + ":##t" + item[0] + "##k x" + item[1] + "\r\n";
            }
            msg += "\r\n#r#e您確定要領取嗎？";
            cm.sendYesNo(msg);
            break;
        case 1:
            if(cm.getPlayer().getAccountOnly(log()) > 0) {
                cm.sendOk("很抱歉，您今天已經領取過獎勵囉！");
                cm.dispose();
                return;
            }
            
            var time = cm.checkMerchantTime();
            if(time == -1) {
                cm.sendOk("您今天尚未擺攤，還不能領取獎勵唷！");
                cm.dispose();
                return;
            }

            var modifyTime = Math.floor(time / 60000);
            if(modifyTime < needTime) {
                cm.sendOk("目前商店營業了" + modifyTime + "分鐘，還不能領取獎勵唷！");
                cm.dispose();
                return;
            }

            var check = [];

            for (var i = 0; i < prizes.length; i++) {
                var item = prizes[i][0];
                var quantity = prizes[i][1];
                check.push([item, quantity]);
            }

            if (!cm.canHold(check)) {
                cm.sendOk("請確認背包空間是否足夠");
                cm.dispose();
                return;
            }

            for(var i = 0; i < prizes.length; i++) {
                var item = prizes[i][0];
                var quantity = prizes[i][1];
                cm.gainItem(item, quantity);
            }

            cm.getPlayer().setAccountOnly(log());

            cm.sendOk("已經發放獎勵至包包囉！");
            cm.dispose();
            return;
            
        default:
            cm.dispose();
            return;
    }
}

function log() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var daytime = "日期:" + year + "年" + month + "月" + day + "日";

    return "每日商店獎勵:" + daytime;
}