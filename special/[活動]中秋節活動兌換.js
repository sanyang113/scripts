//中秋活動
var status = -1;
var log = "中秋節活動兌換"
var useItem = [
    [2002026, 1500],
    [2002027, 1500],
    [2002028, 1500],
]
var prize = [
    [2000204, 50],
    [2000205, 50],
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
            var msg = "中秋節快樂！帶著烤肉和可樂就能換取特別的獎勵喔！\r\n\r\n"
            for(var j = 0; j < useItem.length; j++) {
                msg += "#i" + useItem[j][0] + ":##b#t" + useItem[j][0] + ":##k x#r " + useItem[j][1] + "#k\r\n";
            };  
                msg += "#k\r\n消耗以上道具兌換以下獎勵\r\n\r\n"
            for(var i = 0; i < prize.length; i++) {
                msg += "#i" + prize[i][0] + ":##b#t" + prize[i][0] + ":##k x#r " + prize[i][1] + "#k\r\n";
            };  
                msg += "\r\n#r每個角色限兌換一次\r\n你確定要兌換嗎？";
            cm.sendYesNo(msg);
            break;
        case 1:
            if(cm.getPlayer().getCharacterOnly(log) > 0) {
                cm.sendOk("您似乎兌換過了！！");
                cm.dispose();
                return;
            }
            var checkUse = true;
            for(var i = 0; i < useItem.length; i++) {
                if(!cm.haveItem(useItem[i][0], useItem[i][1])) {
                    checkUse = false;
                    break;
                }
            }
            if(!checkUse) {
                cm.sendOk("您帶來的食物好像不太夠...");
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
            if(!cm.getPlayer().setCharacterOnly(log)) {
                cm.sendOk("發生系統異常，請聯繫GM！");
                cm.dispose();
                return;
            }
            for(var j = 0; j < useItem.length; j++) {
            cm.gainItem(useItem[j][0], -useItem[j][1]);
            }
            for(var i = 0; i < prize.length; i++) {
            cm.gainItem(prize[i][0], prize[i][1]);
            }
            cm.sendOk("兌換完成囉，請收好！");
            cm.dispose();
            return;
    }
} 
