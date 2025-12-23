var status = -1;

var gainItem = 5533124;
var qty = 20;

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
            var msg = "您要領取DISCORD綁定獎勵嗎？可以獲取以下道具唷！\r\n\r\n";
            msg += "#b#i" + gainItem + ":##t" + gainItem + "##k x" + qty + "個";
            cm.sendYesNo(msg);
            break;
        case 1:
            var ret = cm.getPlayer().isDiscordIdentity();

            if(!ret) {
                cm.sendOk("您尚未進行DISCORD帳號綁定");
                cm.dispose();
                return;
            }

            if(cm.getPlayer().getAccountOnly(log()) > 0) {
                cm.sendOk("很抱歉，您的帳號已經領取過DISCORD綁定獎勵囉");
                cm.dispose();
                return;
            }
            if(!cm.canHold(gainItem, qty)) {
                cm.sendOk("請確認背包空間是否足夠");
                cm.dispose();
                return;
            }
            cm.getPlayer().setAccountOnly(log());
            cm.gainItem(gainItem, qty);
            cm.sendOk("獎勵發給您囉，請收好！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

function log() {
    return "DISCORD綁定獎勵";
}