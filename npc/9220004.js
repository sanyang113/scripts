//聖誕活動
var status = -1;
var useItem = 4030002;
var useQty = -1;
var prob = 0;

var reward = [
    { itemId: 1012015, chance: 5 },
    { itemId: 1012017, chance: 5 },
    { itemId: 1012300, chance: 10 },
    { itemId: 1012348, chance: 10 },
    { itemId: 1002728, chance: 10 },
    { itemId: 2040110, chance: 9 },
    { itemId: 2040111, chance: 9 },
    { itemId: 2040112, chance: 9 },
    { itemId: 2040113, chance: 9 },
    { itemId: 2040114, chance: 7 },
    { itemId: 2040116, chance: 7 },
    { itemId: 2040023, chance: 10 },
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
            cm.sendSimple("#b#L1#我要開啟白色禮物盒#l\r\n#L5#我要領取魔法手套#l\r\n#L6#我要領取一組巨型雪球(消耗欄要空一格喔)#l");
            break;
        case 1:
        if (selection == 5) {
            cm.gainItem(1472063, 1);
            cm.dispose();
        } else if (selection == 6) {
            cm.gainItem(2060006, 800);
            cm.dispose();
        } else if (selection == 1){
            var allPrizes = reward
            var probabilitiesObj = calculateProbabilities(allPrizes, prob);

            var msg = "開啟 #i" + useItem + ":# #b#t" + useItem + ":# #k有機會取得以下道具！\r\n";
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
        }
            //cm.sendSimple("敬請期待");
            //cm.dispose();
            //return;
        case 2:
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
                if(cm.getPlayer().getAccountOnly(log()) >= 5) {
                    cm.sendOk("每天最多只能兌換5次，不要太貪心唷");
                    cm.dispose();
                    return;
                }
                if(!cm.canHold()) {
                    cm.sendOk("請確認背包空間是否足夠");
                    cm.dispose();
                    return;
                }
                if(!cm.getPlayer().setAccountOnly(log())) {
                    cm.sendOk("發生系統異常，請聯繫GM！");
                    cm.dispose();
                    return;
                }
                var item;

                // 實現機率抽獎的邏輯
                var prize = drawPrize(reward);
                item = prize.itemId;
                if (item >= 1010000 && item <2000000|| item == 2040023|| item == 2040114){
                    var gainItem = cm.gainItem(item, 1, true);
                    cm.worldMessageYellowItem(gainItem, "聖誕節活動","被他從白色禮物盒開出來了，大家恭喜他吧！");
                }else{
                    cm.gainItem(item, 1, true);
                }
                cm.sendSimple("恭喜你獲得了#b#i" + item + ":##t" + item + "##k！");
                cm.gainItem(useItem, useQty);
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

function log() {
    var event = "聖誕白色禮物";
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var daytime = "日期:" + year + "年" + month + "月" + day + "日";
    return event + daytime;
}