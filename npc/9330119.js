var status = -1
var all = 100;
var topRand = 9.825;
var firstRand = 11.7375;
var gainItems = [];
var useItem = 5220040;
var useGuaranteedItem = 4000019;
var useGuaranteedItemQuantity = 40;

var topPrizes = [
    {itemid: 2340000, quantity: 1, weight: 1,  rareness: 2},
];

var firstPrizes = [
    {itemid: 2000005, quantity: 1, weight: 4,  rareness: 2},
];

// 小獎若機率增加就多放幾次
var otherPrize = [
    1302000,
]

var otherSize = {
    2000001 : 2,
    2000002 : 4,
}

function start() {
    action(1, 0, 0)
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
            var msg = "歡迎使用轉蛋機，希望您能抽到大獎！\r\n"
            msg += "#b#L2#我要進行轉蛋#l#n\r\n";
            msg += "#b#L3#我要進行轉蛋連抽(滿包時會自動停止)#l#n\r\n";
            msg += "#r#L1#查看稀有獎勵#l#n\r\n";
            msg += "#r#L4#查看其他獎勵#l\r\n";
            msg += "#b#L5#使用 菇菇印章 x " + useGuaranteedItemQuantity + "個 抽取轉蛋大獎#l\r\n";
            msg += "#r#L6#查看 菇菇印章 獎勵 #l\r\n";
            msg += "#b#L7#使用 #r花精祝福戒指自選兌換券 #l\r\n";
            msg += "#b#L8#分解 不速之客裝備 #l\r\n";
            msg += "#b#L9#製作 不速之客裝備 #l\r\n";
            msg += "#b#L10#祝福卷軸兌換 #l\r\n";
            msg += "#b#L11#白金鐵鎚、黃金鐵鎚互換 #l\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            var ac = cm.getClient().getAccID();
            sel = selection;
            if(sel == 1) {
                var msg = '這是今天的稀有獎勵！\\n\\n' + showInfo(topPrizes, topRand);
                msg += showInfo(firstPrizes, firstRand);
                cm.sendSimple(msg)
                cm.dispose();
                return;
            } else if(sel == 2 || sel == 5) {
                // if(cm.getPlayer().getLevel() < 30) {
                //     cm.sendSimple("姆．．．你的等級還沒有到30等！")
                //     cm.dispose();
                //     return;
                // }
                if(sel == 2) {
                    if(!cm.haveItem(useItem, 1)) {
                        cm.sendSimple("您的#b#i" + useItem + ":##t" + useItem + "##k好像不太夠...");
                        cm.dispose();
                        return;
                    }
                } else {
                    if(!cm.haveItem(useGuaranteedItem, useGuaranteedItemQuantity)) {
                        cm.sendSimple("您的#b#i" + useGuaranteedItem + ":##t" + useGuaranteedItem + "##k好像不太夠...");
                        cm.dispose();
                        return;
                    }
                }
                if(!cm.canHold()) {
                    cm.sendSimple("請確認背包空間是否足夠！");
                    cm.dispose();
                    return;
                }

                var prop = Math.floor(Math.random() * all);
                var gain = false;
                var item;
                var quantity;

                var guaranteed = false;
                if(sel == 5) guaranteed = true;
                if(prop < topRand || guaranteed) {
                    var totalWeight = calculateTotalWeight(topPrizes);
                    var randsel = Math.floor(Math.random() * totalWeight) + 1;
                    var selItem = pickItem(topPrizes, randsel);
                    quantity = selItem.quantity
                    item = cm.gainGachaponItem(selItem.itemid, quantity, selItem.rareness);
                    gain = true;
                    result = 1;
                } else if(prop < topRand + firstRand){
                    var totalWeight = calculateTotalWeight(firstPrizes);
                    var randsel = Math.floor(Math.random() * totalWeight) + 1;
                    var selItem = pickItem(firstPrizes, randsel);
                    quantity = selItem.quantity
                    item = cm.gainGachaponItem(selItem.itemid, quantity, selItem.rareness);
                    gain = true;
                    result = 2;
                } else {
                    var randsel = Math.floor(Math.random() * otherPrize.length);
                    var selItem = otherPrize[randsel];
                    quantity = otherSize[selItem] || 1;
                    item = cm.gainGachaponItem(selItem, quantity, 4);
                    gain = true;
                    result = 3;
                }
                if(item == -1) {
                    cm.sendSimple("你的包包好像滿了...");
                    cm.dispose();
                    return;
                }
                if(sel == 2) {
                     cm.gainItem(useItem,-1);
                } else {
                    cm.gainItem(useGuaranteedItem,-useGuaranteedItemQuantity);
                }
                switch(result) {
                    case 1:
                    case 2:
                        cm.sendOk("恭喜！獲得" + (result == 1 ? "大獎": "大獎") + "！ #b#i" + item + ":##t" + item +"##k" + (quantity > 1 ? " x " + quantity : "") + "！");
                        break;
                    default:
                        cm.sendOk("恭喜，本次轉蛋獲得了 #b#i" + item + ":##t" + item +"##k"+ (quantity > 1 ? " x " + quantity : "") +"！");
                        break;
                }
                
                cm.dispose();
                return;
            } else if(sel == 3){
                var msg = "請輸入您想抽的數量";
                cm.sendGetNumber(msg, 1, 1, 100);
            } else if(sel == 4){
                var msg = "其他獎勵如下:\r\n";
                msg += showOther(otherPrize);
                cm.sendSimple(msg)
                cm.dispose();
            } else if(sel ==6) {
                var msg = '這是菇菇印章獎勵！\r\n\r\n' + showInfo(topPrizes, all);
                cm.sendSimple(msg)
                cm.dispose();
                return;
            } else if(sel ==7) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[兌換]花精戒指兌換");
                break;
            } else if(sel ==8) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[兌換]分解不速之客裝備");
                break;
            } else if(sel ==9) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[兌換]製作不速之客裝備");
                break;
            } else if(sel ==10) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[兌換]祝福卷軸兌換");
                break;
            } else if(sel ==11) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[兌換]鐵鎚兌換");
                break;
            }
            break;
        case 2:
            var count = selection;
            //if(cm.getPlayer().getLevel() < 30) {
            //    cm.sendSimple("姆．．．你的等級還沒有到30等！")
            //    cm.dispose();
            //    return;
            //}

            for(var i = 0; i < count; i++) {
                var result = startDraw();
                if(!result) break;
            }

            if(gainItems.length == 0) {
                cm.sendOk("您的包包滿了或是沒有轉蛋卷");
                cm.dispose();
                return;
            }

            var msg = "您本次的抽獎結果如下：\r\n";
            for(var i = 0; i < gainItems.length; i++) {
                var itemSet = gainItems[i];
                msg += "#b#i" + itemSet[0] + "##t" + itemSet[0] + "# x" + itemSet[1] + " 個\r\n";
            }

            cm.sendOk(msg);
        default:
            cm.dispose();
    }
}

function startDraw() {
    if(!cm.haveItem(useItem, 1)) {
        return false;
    }
    if(!cm.canHold()) {
        return false;
    }

    var prop = Math.floor(Math.random() * all);
    var gain = false;
    var item;
    var quantity;
    if(prop < topRand) {
        var totalWeight = calculateTotalWeight(topPrizes);
        var randsel = Math.floor(Math.random() * totalWeight) + 1;
        var selItem = pickItem(topPrizes, randsel);
        quantity = selItem.quantity
        item = cm.gainGachaponItem(selItem.itemid, quantity, selItem.rareness);
        gain = true;
        result = 1;
    } else if(prop < topRand + firstRand){
        var totalWeight = calculateTotalWeight(firstPrizes);
        var randsel = Math.floor(Math.random() * totalWeight) + 1;
        var selItem = pickItem(firstPrizes, randsel);
        quantity = selItem.quantity
        item = cm.gainGachaponItem(selItem.itemid, quantity, selItem.rareness);
        gain = true;
        result = 2;
    } else {
        var randsel = Math.floor(Math.random() * otherPrize.length);
        var selItem = otherPrize[randsel];
        quantity = otherSize[selItem] || 1;
        item = cm.gainGachaponItem(selItem, quantity, 4);
        gain = true;
        result = 3;
    }
    if(item == -1) {
        return true;
    }
    gainItems.push([item, quantity]);
    cm.gainItem(useItem,-1);
    return true;
}



function calculateTotalWeight(prizes) {
    var totalWeight = 0;
    for (var i = 0; i < prizes.length; i++) {
        totalWeight += prizes[i].weight;
    }

    return totalWeight;
}

function pickItem(items, randomNum) {
    var sum = 0;
    for (var i = 0; i < items.length; i++) {
        sum += items[i].weight;
        if (randomNum <= sum) {
            return items[i];
        }
    }
}

function showInfo(prizes, totalProp) {
    var totalWeight = calculateTotalWeight(prizes);
    var msg = "";
    for(var i = 0; i < prizes.length; i++) {
        var prize = prizes[i];
        var prop = totalProp / all * prize.weight / totalWeight * 100;
        var roundedProp = parseFloat(prop.toFixed(3));
        msg += "#b#i" + prize.itemid + ":#  #t" + prize.itemid + "##k" + (prize.quantity == 1 ? "":" x "+prize.quantity) + " - #r" + roundedProp + "% #k\r\n";
    }
    return msg;
}

function showOther(prizes) {
    var otherWeight = all - topRand - firstRand;
    var totalCount = prizes.length;
    var prop = parseFloat(otherWeight / all / totalCount * 100);
    var roundedProp = parseFloat(prop.toFixed(3));
    var counts = {};
    for(var i = 0; i < prizes.length; i++) {
        var prize = prizes[i];
        counts[prize] = (counts[prize] || 0) + 1;
    }

    var msg = "";
    for(var key in counts) {
        var roundedProp2 = parseFloat((roundedProp * counts[key]).toFixed(3));
        msg += "#b#i" + key + ":# #t" + key + "##k x" + (otherSize[key] || 1) + " - #r" + roundedProp2 + "% #k\r\n";
    }
    return msg;
}

