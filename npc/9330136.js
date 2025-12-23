var status = -1
var all = 100;
var topRand = 1;
var firstRand = 0.45;
var gainItems = [];
var useItem = 5220040;
var useGuaranteedItem = 4030002;
var useGuaranteedItemQuantity = 40;
var useMeso = 1000000;

var topPrizes = [
    {itemid: 2435418, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 2435423, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 2435426, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 2435467, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 2435683, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 2435663, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 2435640, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 2435613, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 2435598, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 2435552, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 1902842, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 1902843, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 1902844, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 1902880, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 1902908, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 1902913, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 1909016, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 1909018, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 1902814, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 1902768, quantity: 1, weight: 1,  rareness: 2},
];

var firstPrizes = [
    {itemid: 3018511, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 3018227, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 3018638, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 3018257, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 3014020, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 3019063, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 3015449, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 3019242, quantity: 1, weight: 1,  rareness: 2},
    {itemid: 3018022, quantity: 1, weight: 1,  rareness: 2},
];

// 小獎若機率增加就多放幾次
var otherPrize = [
    3010002,3010003,3010004,3010005,3010006,3010007,3010008,3010010,3010011,3010012,
    3010013,3010016,3010017,3010018,3010019,3010021,3010022,3010023,3010024,3010025,
    3010026,3010027,3010028,3010034,3010035,3010036,3010037,3010040,3010041,3010043,
    3010044,3010045,3010046,3010047,3010048,3010049,3010050,3010051,3010052,3010053,
    3010054,3010056,3010058,3010059,3010068,3010071,3010072,3010073,3010074,3010075,
    3010077,3010080,3010083,3010084,3010085,3010087,3010088,3010089,3010090,3010091,
    3010093,3010094,3010095,3010096,3010097,3010099,3010100,3010105,3010106,3010107,
    //3010108,3010109,3010110,3010111,3010112,3010116,3010117,3010119,3010120,3010122,
    //3010123,3010124,3010125,3010126,3010127,3010128,3010130,3010131,3010132,3010133,
    //3010135,3010137,3010138,3010139,3010140,3010141,3010142,3010144,3010145,3010148,
    //3010150,3010151,3010152,3010153,3010154,3010155,3010156,3010157,3010161,3010162,
    //3010166,3010168,3010169,3010170,3010172,3010173,3010174,3010175,3010177,3010179,
    //3010183,3010184,3010187,3010188,3010189,3010192,3010193,3010194,3010195,3010196,
    //3010201,3010204,3010209,3010210,3010211,3010212,3010215,3010216,3010217,3010218,
    //3010219,3010220,3010221,3010222,3010223,3010224,3010226,3010279,3010281,3010282,
    //3010283,3010284,3010285,3010286,3010287,3010288,3010290,3010296,3010297,3010299,
    //3010306,3010308,3010312,3010313,3010314,3010315,3010316,3010317,3010318,3010320,
    //3010321,3010354,3010360,3010362,3010364,3010365,3010372,







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
            var msg = "這裡是活動轉蛋機，希望您能抽到你想要的物品！\r\n"
            msg += "#b本期活動只到#r 10/22 維護前#b ，別錯過啦！\r\n";
            msg += "#b每次抽取需要消耗#r "+ useMeso/10000 +"萬楓幣 #b\r\n";
            msg += "#b#L2#我要進行轉蛋#l#n\r\n";
            msg += "#b#L3#我要進行轉蛋連抽(滿包時會自動停止)#l#n\r\n";
            msg += "#r#L1#查看本期獎勵#l#n\r\n";

            //cm.sendNext(msg);
            //break;
            cm.sendOk("敬請期待下次活動");
            cm.dispose();
            return;
        case 1:
            var ac = cm.getClient().getAccID();
            sel = selection;
            if(sel == 2||sel == 3||sel == 5) {
                if(ac==2298||ac==2299){
                    topRand = (topRand * 0.7);
                    firstRand = (firstRand * 0.7);
                }
                if(ac==2355||ac==2356||ac==2296||ac==2406||ac==2440||ac==2369||ac==2412||ac==2490||ac==2646||ac==2768||ac==2769||ac==2475||ac==2598||ac==2785||ac==2812
                 ||ac==2616||ac==2361||ac==2479||ac==2504||ac==2934||ac==2435||ac==2477||ac==2476||ac==3199||ac==2935){
                    topRand = (topRand * 0.8);
                    firstRand = (firstRand * 0.8);
                }
            }
            if(sel == 1) {
                var msg = '這是本期的獎勵！\\n\\n' + showInfo(topPrizes, topRand);
                msg += showInfo(firstPrizes, firstRand);
                msg += showOther(otherPrize);
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
                    if(cm.getMeso() < useMeso) {
                        cm.sendSimple("您的#b 楓幣 #k好像不太夠...");
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
                    cm.gainMeso(-useMeso);
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
                cm.sendOk("您的包包滿了或是楓幣不夠了");
                cm.dispose();
                return;
            }

            var msg = "您本次的抽獎結果如下：\r\n";
            for(var i = 0; i < gainItems.length; i++) {
                var itemSet = gainItems[i];
                msg += "#b#i" + itemSet[0] + ":#";
            }

            cm.sendOk(msg);
        default:
            cm.dispose();
    }
}

function startDraw() {
    if(cm.getMeso() < useMeso) {
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
    cm.gainMeso(-useMeso);
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
        msg += "#b#i" + prize.itemid + ":#";
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
        msg += "#b#i" + key + ":#";
    }
    return msg;
}
