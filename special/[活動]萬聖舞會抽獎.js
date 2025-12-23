//萬聖活動
var status = -1;
var useItem = 4030002;
var useQty = -300;
var prob = 0;

var reward = [
    { itemId: 1022150, chance: 60 },
    { itemId: 1022151, chance: 30 },
    { itemId: 1022152, chance: 8.8 },

    { itemId: 2435603, chance: 0.2 },
    { itemId: 2435627, chance: 0.2 },
    { itemId: 3018461, chance: 0.2 },
    { itemId: 3018462, chance: 0.2 },
    { itemId: 3018593, chance: 0.2 },
    { itemId: 1902669, chance: 0.2 },
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

            var msg = "這裡可以使用 #i" + useItem + ":# #b#t" + useItem + ":# #kx#b " + -useQty + " #k來抽獎！\r\n";
            msg += "#k可以抽取到的道具如下：\r\n"
            for (var i = 0; i < reward.length; i++) {
                var prize = reward[i];
                var key = prize.itemId;
                if (probabilitiesObj[key] !== undefined) {
                    msg += '#i' + key + ':# ';
                }
            }
            msg += "\r\n#b#L2#我要進行期間限定活動抽獎#l\r\n";
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