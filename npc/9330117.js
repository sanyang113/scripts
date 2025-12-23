
var status = -1;
var useItem = 5220005;
var prob = 0;

var reward = [
    { itemId: 2370000, chance: 2 },
    { itemId: 2370001, chance: 3 },
    { itemId: 2370002, chance: 5 },
	{ itemId: 2370003, chance: 10 },
	{ itemId: 2370004, chance: 10 },
	{ itemId: 2370005, chance: 10 },
	{ itemId: 2370006, chance: 15 },
	{ itemId: 2370007, chance: 15 },
	{ itemId: 2370008, chance: 10 },
	{ itemId: 2370009, chance: 10 },
	{ itemId: 2370010, chance: 10 },
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
            var msg = "我是山羊谷的經驗值轉蛋機，要來試試手氣嗎？\r\n\r\n#b \r\n";
            msg += "#b#L2#我要抽取 #r1#b次轉蛋#l\r\n";
            msg += "#b#L3#我要抽取 #r100#b次轉蛋#l\r\n";
            msg += "#n#r#L1#我想查看轉蛋獎勵#l#n";
            cm.sendNext(msg);
            break;
            //cm.sendSimple("我是山羊谷的經驗值轉蛋機，預計於 9/24 與大家見面！");
            //cm.dispose();
            //return;
        case 1:
            sel = selection;
            grandPrizePoolStr = getGrandPrizePoolStr(reward, prob);
            if (sel == 1) {
                var msg = '這是#r所有獎項#k！\r\n\r\n' + grandPrizePoolStr;
                cm.sendSimple(msg);
                cm.dispose();
                return;
            } else if (sel == 2){
                if (!cm.haveItem(useItem, 1)) {
                    cm.sendSimple("咦！你沒有#b#i"+useItem+":##t"+useItem+"##k呀！");
                    cm.dispose();
                    return;
                }
                if (!cm.canHold()) {
                    cm.sendSimple("你的包包好像滿了...");
                    cm.dispose();
                    return;
                }
                var gain = false;
                var item;
                var rareness = 0;

                // 實現機率抽獎的邏輯
                var prize = drawPrize(reward);
                item = prize.itemId;

                if (rareness === 0) {
                    for (var i = 0; i < reward.length; i++) {
                        if (item == 2370000 || item == 2370001 || item == 2370002 || item == 2370003) {
                            rareness = 19;
                            break;
                        }
                    }
                }

                cm.gainLimitGachaponItem(item, 1, rareness);
                cm.sendSimple("恭喜你獲得了#b#i" + item + ":##t" + item + "##k！");
                gain = true;

                if (gain) {
                    cm.gainItem(useItem, -1);
                }
                cm.dispose();
            } else if (sel == 3){
                if (!cm.haveItem(useItem, 1)) {
                    cm.sendSimple("咦！你沒有#b#i"+useItem+":##t"+useItem+"##k呀！");
                    cm.dispose();
                    return;
                }
                if (!cm.canHold()) {
                    cm.sendSimple("你的包包好像滿了...");
                    cm.dispose();
                    return;
                }

                var gain = false;
                var item;
                var msg = "恭喜您獲得了\r\n"
                for (var j = 0; j < 100; j++) {
                    if(!cm.haveItem(useItem, 1)) {
                    msg += "\r\n轉蛋券沒了，所以轉蛋停下來了";
                    cm.sendSimple(msg);
                    cm.dispose();
                    return;
                }if (!cm.canHold()) {
                    msg += "\r\n包包滿了，所以轉蛋停下來了";
                    cm.sendSimple(msg);
                    cm.dispose();
                    return;
                }

                var rareness = 0;
                var prize = drawPrize(reward);
                item = prize.itemId;
                if (rareness === 0) {
                    for (var i = 0; i < reward.length; i++) {
                        if (item == 2370000 || item == 2370001 || item == 2370002 || item == 2370003) {
                            rareness = 19;
                            break;
                        }
                    }
                }
                msg += "#i" + item + ":#"
                cm.gainItem(useItem, -1);
                cm.gainLimitGachaponItem(item, 1, rareness);
                }

                cm.sendSimple(msg);
                cm.dispose();
            }
    }
}

function getGrandPrizePoolStr(reward, prob) {
    var result = '';
    var allPrizes = reward
    var probabilitiesObj = calculateProbabilities(allPrizes, prob);

    for (var i = 0; i < reward.length; i++) {
        var prize = reward[i];
        var key = prize.itemId;
        if (probabilitiesObj[key] !== undefined) {
            result += '#i' + key + ':#  #t' + key + '# - #r' + probabilitiesObj[key].toFixed(2) + '%#k\r\n';
        }
    }
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