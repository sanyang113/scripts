//中秋活動
var status = -1;
var log = "感恩節活動兌換"
var useItem = [
    [2002029, 1000]
]
var prize = [
    [1146006, 1],
    [2000204, 50],
    [2000205, 50],
]

var prize2 = [
    [1146006, 1],
    [2000214, 15],
    [2000215, 15],
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
            var msg = "使用感恩節火雞可以自選兌換其中一種系列獎勵喔！\r\n\r\n"
            for(var j = 0; j < useItem.length; j++) {
                msg += "#i" + useItem[j][0] + ":##b#t" + useItem[j][0] + ":##k x#r " + useItem[j][1] + "#k\r\n";
            };  
                msg += "#k\r\n消耗以上道具兌換以下兩種獎勵其中一種\r\n#r每個角色限兌換一次，且獎勵無法交易、存倉庫\r\n\r\n"
                msg += "\r\n#b#L1# 獎勵系列1 #l#k\r\n\r\n"
            for(var i = 0; i < prize.length; i++) {
                msg += "#i" + prize[i][0] + ":##b#t" + prize[i][0] + ":##k x#r " + prize[i][1] + "#k\r\n";
            };  
                msg += "\r\n#b#L2# 獎勵系列2 #l#k\r\n\r\n"
            for(var i = 0; i < prize2.length; i++) {
                msg += "#i" + prize2[i][0] + ":##b#t" + prize2[i][0] + ":##k x#r " + prize2[i][1] + "#k\r\n";
            };  
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            if(sel == 1){
                msg = "你確定要兌換以下道具嗎?\r\n"
                for(var i = 0; i < prize.length; i++) {
                    msg += "#i" + prize[i][0] + ":##b#t" + prize[i][0] + ":##k x#r " + prize[i][1] + "#k\r\n";
                }; 
            }
            if(sel == 2){
                msg = "你確定要兌換以下道具嗎?\r\n"
                for(var i = 0; i < prize2.length; i++) {
                    msg += "#i" + prize2[i][0] + ":##b#t" + prize2[i][0] + ":##k x#r " + prize2[i][1] + "#k\r\n";
                }; 
            }
            cm.sendNext(msg);
            break;
        case 2:
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
                cm.sendOk("您帶來的火雞好像不太夠...");
                cm.dispose();
                return;
            }


            if(sel == 1){
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
                cm.sendOk("兌換完成囉！");
                cm.dispose();
                return;
            }else if(sel == 2){
                var check = [];
                for (var i = 0; i < prize2.length; i++) {
                    check.push([prize2[i][0], prize2[i][1]]);
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
                for(var i = 0; i < prize2.length; i++) {
                cm.gainItem(prize2[i][0], prize2[i][1]);
                }
                cm.sendOk("兌換完成囉！");
                cm.dispose();
                return;
            }
    }
} 
