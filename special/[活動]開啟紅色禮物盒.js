//聖誕活動
var status = -1;
var useItem = 4030002;
var useQty = -1;
var prob = 0;

var reward = [

    { itemId: 1902237, chance: 0.25 },
    { itemId: 1902238, chance: 0.25 },
    { itemId: 1902239, chance: 0.25 },
    { itemId: 1902240, chance: 0.25 },
    { itemId: 1902241, chance: 0.25 },
    { itemId: 1902689, chance: 0.25 },
    { itemId: 1902485, chance: 0.25 },
    { itemId: 1902481, chance: 0.25 },
    { itemId: 1902375, chance: 0.25 },
    { itemId: 1902800, chance: 0.25 },
    { itemId: 1902801, chance: 0.25 },
    { itemId: 1902805, chance: 0.25 },
    { itemId: 1902806, chance: 0.25 },
    { itemId: 1902632, chance: 0.25 },
    { itemId: 1902044, chance: 0.25 },
    { itemId: 1902413, chance: 0.25 },
    { itemId: 1902365, chance: 0.25 },
    { itemId: 1902482, chance: 0.25 },
    { itemId: 1902498, chance: 0.25 },
    { itemId: 1902501, chance: 0.25 },
    { itemId: 2435376, chance: 0.25 },
    { itemId: 2435007, chance: 0.25 },
    { itemId: 2435258, chance: 0.25 },
    { itemId: 2435376, chance: 0.25 },
    { itemId: 2435062, chance: 0.25 },
    { itemId: 2435456, chance: 0.25 },
    { itemId: 2435720, chance: 0.25 },
    { itemId: 3015420, chance: 0.25 },
    { itemId: 3015006, chance: 0.25 },
    { itemId: 3019392, chance: 0.25 },
    { itemId: 3018969, chance: 0.25 },
    { itemId: 3015675, chance: 0.25 },
    { itemId: 3018021, chance: 0.25 },
    { itemId: 3018247, chance: 0.25 },
    { itemId: 3010584, chance: 0.25 },
    { itemId: 3015007, chance: 0.25 },
    { itemId: 3018229, chance: 0.25 },
    { itemId: 3018453, chance: 0.25 },
    { itemId: 3012055, chance: 0.25 },
    { itemId: 3018635, chance: 0.25 },
    { itemId: 3018008, chance: 0.25 },
    { itemId: 3015764, chance: 0.25 },
    { itemId: 3015370, chance: 0.25 },
    { itemId: 3015371, chance: 0.25 },
    { itemId: 3015372, chance: 0.25 },
    { itemId: 3010767, chance: 0.25 },
    { itemId: 3018659, chance: 0.25 },
    { itemId: 3019244, chance: 0.25 },
    { itemId: 3018651, chance: 0.25 },
    { itemId: 3015434, chance: 0.25 },
    { itemId: 5220040, chance: 2 },
    { itemId: 2049251, chance: 10 },
    { itemId: 4030002, chance: 3 },
    { itemId: 2049100, chance: 3 },
    { itemId: 5121014, chance: 20 },
    { itemId: 5530001, chance: 5 },
    { itemId: 2049203, chance: 5 },
    { itemId: 2000200, chance: 12 },
    { itemId: 2000201, chance: 12 },
    { itemId: 2000210, chance: 7.75 },
    { itemId: 2000211, chance: 7.75 },

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

            var msg = "開啟 #i" + useItem + ":# #b#t" + useItem + ":# #k有機會取得以下道具！\r\n\r\n";
            for (var i = 0; i < reward.length; i++) {
                var prize = reward[i];
                var key = prize.itemId;
                if (probabilitiesObj[key] !== undefined) {
                    msg += '#i' + key + ':# ';
                }
            }
            msg += "\r\n#b#L2#幫我打開他！#l\r\n";
            if(cm.getPlayer().isGM()){
                msg += "#n#r#L1#我想查看轉蛋獎勵#l#n\r\n";
            }
            cm.sendNext(msg);
            break;
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
                if(!cm.canHold()) {
                    cm.sendOk("請確認背包空間是否足夠");
                    cm.dispose();
                    return;
                }
                var item;

                // 實現機率抽獎的邏輯
                var prize = drawPrize(reward);
                item = prize.itemId;
                if (item >= 3000000 && item <4000000||item >= 1900000 && item <1930000||item >= 2435000 && item <2436000||item == 5220040||item == 4030002||item == 2049100||item == 2049203){
                    var gainItem = cm.gainItem(item, 1, true);
                    cm.worldMessageYellowItem(gainItem, "聖誕節活動","被他從紅色禮物盒開出來了，大家恭喜他吧！");
                }else{
                    cm.gainItem(item, 1, true);
                }
                cm.sendSimple("恭喜你獲得了#b#i" + item + ":##t" + item + "##k！");
                cm.gainItem(useItem, useQty);
                status = -1;
                return;
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