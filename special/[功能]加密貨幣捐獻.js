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
            var msg = "如果您想要利用加密貨幣捐獻，必須先進行DISCORD帳號驗證並綁定帳號，我會將加密貨幣捐獻的地址以Discord私訊的方式傳給您。\r\n";
            msg += "您確定要接收嗎?";
            cm.sendYesNo(msg);
            break;
        case 1:
            var highestLevel = cm.getAccountHighestLevel();
            if(highestLevel < 70) {
                cm.sendOk("很抱歉，帳號中角色最低等級要達到70等以上才能進行贊助唷！");
                cm.dispose();
                return;
            }
            var result = cm.sendDonateAddress();
            cm.sendOk(result);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}





