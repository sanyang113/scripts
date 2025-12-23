var status = -1;
var sel = 0;

var rewards = [
    [2450100, 1, 10, "楓葉轉蛋券"],
    [2450107, 1, 4, "飄鯛魚燒兌換券"],
    [2450104, 1, 1, "技能卡自選兌換券"],
    [4030127, 1, 5, "遠征額外挑戰券"],
    [2000200, 1, 5, "HP上限提升藥水"],
    [2000201, 1, 5, "MP上限提升藥水"],
    [2450103, 1, 1, "捐獻積分兌換券"],
]   // [[商品id, 數量, 價格,  名字]  (若限購為0則不限量)
    
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:

        var msg = "以下是可交換的#b熱門商品#k內容：\r\n\r\n";
        for(var i = 0; i < rewards.length; i++) {
            var items = rewards[i][0];
            var amount = rewards[i][1];
            var price = rewards[i][2];
            var packageName = rewards[i][3];
            if (!Array.isArray(items[0])) {
                items = [items]; // 確保 rewards 是多重數組
            }
        msg +="#L" + i + "##r";
        //if(price<=999){msg +=" "}
        if(price<=99){msg +=" "}
        if(price<=9){msg +=" "}
        msg += + price + "#b 捐獻積分  #i" + items + ":#  #t" + items + ":# x #r" + amount + "#b 個#r#l\r\n"
        }
        cm.sendNext(msg);
    break;

    case 1:
        var sel = selection;
        var items = rewards[sel][0];
        var amount = rewards[sel][1];
        var price = rewards[sel][2];
        var packageName = rewards[sel][3];
    
        var msg = "#k\r\n你確定要用 #r" + price + "#b 捐獻積分 #r兌換 以下物品嗎\r\n";
            msg += " #b #i" + items + ":# #t" + items + "##r x" + amount + "個 \r\n";
            msg += "\r\n#b您要兌換幾個呢#r";
            msg += "\r\n※請注意您的包包是否有足夠空間！\r\n";
        itemSel = sel;
        cm.sendGetNumber(msg,1, 1, 10000);
    break;

    case 2:
        var qty = selection;
        var items = rewards[itemSel][0];
        var amount = rewards[itemSel][1] * qty;
        var price = rewards[itemSel][2] * qty;
        var packageName = rewards[itemSel][3];

        if(cm.getPlayer().getDonate() < price) {
            cm.sendOk("你的捐獻積分好像不夠 " + price + " 點，所以無法兌換！");
            cm.dispose();
            return;
        }
             
        if (!cm.canHold(items,amount)) {
            cm.sendOk("包包空間不足，請確認包包有足夠的空間。");
            cm.dispose();
            return;
        }
        if(!cm.getPlayer().gainDonate(-price)) {
            cm.sendOk("非常抱歉，系統發生異常，請聯繫GM！");
            return;
        }
            cm.gainItem(items,amount);

        var packageName = rewards[itemSel][3] + "x" + qty;
        var playerAccId = cm.getClient().getAccID();
        cm.setPackagePurchaseData(playerAccId, packageName, price)
        cm.sendOk("#b兌換成功！");
        cm.dispose();
        return;
    default:
        cm.dispose();
}
}