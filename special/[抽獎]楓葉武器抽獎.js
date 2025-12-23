
var status = -1;
var useItem = 4001126;
var useQty = -1000;
var prob = 0;

var reward = [
    //帽子
    { itemId: 1002508, chance: 1.5 },
    { itemId: 1002509, chance: 1.5 },
    { itemId: 1002510, chance: 1.5 },
    { itemId: 1002511, chance: 1.375 },
    //{ itemId: 1002600, chance: 1.5 },
    //{ itemId: 1002601, chance: 1.5 },
    //{ itemId: 1002602, chance: 1.5 },
    //{ itemId: 1002603, chance: 1.5 },
    { itemId: 1003224, chance: 0.5 },//大獎
    //臉飾
    { itemId: 1012460, chance: 0.5 },//大獎
    { itemId: 1012789, chance: 2 },
    { itemId: 1012790, chance: 2 },
    { itemId: 1012791, chance: 2 },
    { itemId: 1012792, chance: 2 },
    //耳環
    { itemId: 1032040, chance: 2 },
    { itemId: 1032041, chance: 2 },
    { itemId: 1032042, chance: 2 },
    //手套
    { itemId: 1082439, chance: 2 },
    { itemId: 1082440, chance: 2 },
    { itemId: 1082441, chance: 0.5 },//大獎
    //盾牌
    { itemId: 1092030, chance: 1.5 },
    { itemId: 1092045, chance: 0.5 },//大獎
    { itemId: 1092046, chance: 0.5 },//大獎
    { itemId: 1092047, chance: 0.5 },//大獎
    //披風
    { itemId: 1102468, chance: 2 },
    { itemId: 1102469, chance: 2 },
    { itemId: 1102470, chance: 0.5 },//大獎
    //戒指
    { itemId: 1112670, chance: 1.75 },
    { itemId: 1112671, chance: 0.5 },//大獎
    //項鍊
    { itemId: 1122074, chance: 2 },
    { itemId: 1122110, chance: 0.5 },//大獎
    //武器
    { itemId: 1302020, chance: 2 },//35
    { itemId: 1302030, chance: 1.75 },//43
    { itemId: 1302064, chance: 1.25 },//64
    { itemId: 1302142, chance: 0.375 },//77
    { itemId: 1312032, chance: 1.25 },//64
    { itemId: 1312056, chance: 0.375 },//77
    { itemId: 1322054, chance: 1.25 },//64
    { itemId: 1322084, chance: 0.375 },//77
    { itemId: 1332025, chance: 1.75 },//43
    { itemId: 1332055, chance: 1.25 },//64
    { itemId: 1332056, chance: 1.25 },//64
    { itemId: 1332114, chance: 0.375 },//77
    { itemId: 1372034, chance: 1.25 },//64
    { itemId: 1372071, chance: 0.375 },//77
    { itemId: 1382009, chance: 2 },//35
    { itemId: 1382012, chance: 1.75 },//43
    { itemId: 1382039, chance: 1.25 },//64
    { itemId: 1382093, chance: 0.375 },//77
    { itemId: 1402039, chance: 1.25 },//64
    { itemId: 1402085, chance: 0.375 },//77
    { itemId: 1412011, chance: 1.75 },//43
    { itemId: 1412027, chance: 1.25 },//64
    { itemId: 1412055, chance: 0.375 },//77
    { itemId: 1422014, chance: 1.75 },//43
    { itemId: 1422029, chance: 1.25 },//64
    { itemId: 1422057, chance: 0.375 },//77
    { itemId: 1432012, chance: 1.75 },//43
    { itemId: 1432040, chance: 1.25 },//64
    { itemId: 1432075, chance: 0.375 },//77
    { itemId: 1442024, chance: 1.75 },//43
    { itemId: 1442051, chance: 1.25 },//64
    { itemId: 1442104, chance: 0.375 },//77
    { itemId: 1452016, chance: 2 },//35
    { itemId: 1452022, chance: 1.75 },//43
    { itemId: 1452045, chance: 1.25 },//64
    { itemId: 1452100, chance: 0.375 },//77
    { itemId: 1462014, chance: 2 },//35
    { itemId: 1462019, chance: 1.75 },//43
    { itemId: 1462040, chance: 1.25 },//64
    { itemId: 1462085, chance: 0.375 },//77
    { itemId: 1472030, chance: 2 },//35
    { itemId: 1472032, chance: 1.75 },//43
    { itemId: 1472055, chance: 1.25 },//64
    { itemId: 1472111, chance: 0.375 },//77
    { itemId: 1482020, chance: 2 },//35
    { itemId: 1482021, chance: 1.75 },//43
    { itemId: 1482022, chance: 1.25 },//64
    { itemId: 1482073, chance: 0.375 },//77
    { itemId: 1492020, chance: 2 },//35
    { itemId: 1492021, chance: 1.75 },//43
    { itemId: 1492022, chance: 1.25 },//64
    { itemId: 1492073, chance: 0.375 },//77
    { itemId: 2070011, chance: 0.125 },//77

];

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
    if (status == 0) {

        for (var i = 0; i < reward.length; i++) {
            prob += reward[i].chance;
        }
       
    }


    switch (status) {
        case 0:
            var allPrizes = reward
            var probabilitiesObj = calculateProbabilities(allPrizes, prob);

            var msg = "這裡可以使用 #i" + useItem + ":# #b#t" + useItem + ":# #kx#b " + -useQty + " #k來進行楓葉武器抽獎！\r\n";
            msg += "#k目前可以抽取到的道具如下：\r\n"
            for (var i = 0; i < reward.length; i++) {
                var prize = reward[i];
                var key = prize.itemId;
                if (probabilitiesObj[key] !== undefined) {
                    msg += '#i' + key + ':# ';
                }
            }
            msg += "\r\n#b#L2#我要進行楓葉武器抽獎#l\r\n";
            if(cm.getPlayer().isGM()){
                msg += "#n#r#L1#我想查看轉蛋獎勵#l#n\r\n";
            }
            cm.sendNext(msg);
            break;
            //cm.sendSimple("敬請期待");
            //cm.dispose();
            return;
        case 1:
            sel = selection;
            grandPrizePoolStr = getGrandPrizePoolStr(reward, prob);
            if (sel == 1) {
                var msg = '這是#r所有獎項#k！\r\n\r\n' + grandPrizePoolStr;
                cm.sendSimple(msg);
                cm.dispose();
                return;
            } else if (sel == 2){
                if (!cm.haveItem(useItem, -useQty)) {
                    cm.sendSimple("你的#b#i" + useItem + ":##t" + useItem + "##k好像不太夠！");
                    cm.dispose();
                    return;
                }
                if (!cm.canHold()) {
                    cm.sendSimple("你的背包好像滿了！");
                    cm.dispose();
                    return;
                }
                var gain = false;
                var item;
                var rareness = 0;

                // 實現機率抽獎的邏輯
                var prize = drawPrize(reward);
                item = prize.itemId;

                //cm.gainLimitGachaponItem(item, 1, rareness);
                cm.gainItem(item, 1, true);
                cm.sendSimple("恭喜你獲得了#b#i" + item + ":##t" + item + "##k！");
                gain = true;

                if (gain) {
                    cm.gainItem(useItem, useQty);
                }
                cm.dispose();
            }
    }
}

function getGrandPrizePoolStr(reward, prob) {
    var result = '';
    var allPrizes = reward
    var probabilitiesObj = calculateProbabilities(allPrizes, prob);
    var totalChance = 0;
    for (var i = 0; i < reward.length; i++) {
        var prize = reward[i];
        var key = prize.itemId;
        if (probabilitiesObj[key] !== undefined) {
            result += '#i' + key + ':#  #t' + key + ':# - #r' + probabilitiesObj[key].toFixed(3) + '%#k\r\n';
            totalChance = totalChance + probabilitiesObj[key]
        }
    }
    result += "\r\n 機率總和為 " + totalChance + " %";
    return result;
}

function calculateProbabilities(prizes, prob) {
    var totalChance = 0;
    var probabilities = {};

    // 計算所有獎品的總機率
    for (var i = 0; i < prizes.length; i++) {
        totalChance += prizes[i].chance;
    }

    // 計算每個獎品的機率
    for (var i = 0; i < prizes.length; i++) {
        var chance = prizes[i].chance;
        var percentage = (chance / totalChance) * prob;
        probabilities[prizes[i].itemId] = percentage;
    }

    return probabilities;
}

function drawPrize(prizes) {
    var totalProb = 0;
    for (var i = 0; i < prizes.length; i++) {
        totalProb += prizes[i].chance;
    }

    if (totalProb >= 100) {
        totalProb = 100;
    }

    var randomNum = Math.random() * 100;

    for (var i = 0; i < prizes.length; i++) {
        if (randomNum < prizes[i].chance) {
            return prizes[i];
        }
        randomNum -= prizes[i].chance;
    }

    return null; // 如果沒有獎品被抽中，返回普通獎品
}