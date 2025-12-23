var status = -1;

function start() {
    var msg = "請選擇您想要捐獻的方式\r\n\r\n";
    msg += "#L0##b使用台幣(信用卡.轉帳.超商繳款進行捐獻)#l#k\r\n";
    msg += "#L1##b使用加密貨幣(目前僅收USDT，會有額外 #r20%#b捐獻積分)#l#k\r\n";
    cm.sendSimple(msg);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        status++;
        if (status == 0) {
            if (selection == 0) {
                var highestLevel = cm.getAccountHighestLevel();
                if(highestLevel < 70) {
                    cm.sendOk("很抱歉，帳號中角色最低等級要達到70等以上才能進行贊助唷！");
                    cm.dispose();
                    return;
                }
                cm.openURL("https://website.maplefun113.com/maple");
                cm.dispose();
                return;
            } else if (selection == 1) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[功能]加密貨幣捐獻");
                return;
            }
        }
    }
}