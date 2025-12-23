var status = -1;

var gainItem = 2051000;
var useMeso = 500000;
var sel = -1;

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
            var msg = "購買#b#i" + gainItem + ":##t" + gainItem + "##k需要花費#b " + useMeso / 10000 + " 萬楓幣#k\r\n您要購買幾個呢？";
            msg += "\r\n#r#e※使用臨時密碼無法購買道具，共用帳號者請斟酌購買數量，以避免重要道具被交易出去！";
            cm.sendGetNumber(msg, 1, 1, 100);
            break;
        case 1:
            var tempStatus = cm.checkTempStatus();
            if(tempStatus) {
                cm.sendOk("使用臨時密碼不得使用此功能！");
                cm.dispose();
                return;
            }
            sel = selection;
            var msg = "您確定要購買 #r#e" + sel + "#k#n 個 #b#i" + gainItem + ":# #t" + gainItem + "##k嗎？需要花費 #b" + useMeso * sel / 10000 + "萬楓幣";
            cm.sendYesNo(msg);
            break;
        case 2:
            if (cm.getMeso() < useMeso * sel) {
                cm.sendOk("你的楓幣好像不太夠");
	            cm.dispose();
                return;
            }
            if(!cm.canHold(gainItem, sel)) {
                cm.sendOk("您的背包空間不足唷！");
                cm.dispose();
                return;
            }
            cm.gainMeso(-useMeso * sel)
            cm.gainItem(gainItem, sel);
            cm.sendOk("給了您！#r#e" + sel + "#k#n 個 #b#i" + gainItem + ":# #t" + gainItem + "#");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}