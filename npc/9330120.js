var status = -1;
var prob = 0;
var normalChance = 100;
var isNormalprizes = false;

// 最大獎 有限量
//這裡的限量資料想改去limitedgachapon取得 flag = 1 的 count 是 maxcount - currentcount
var topPrizeCount = [];


// 特別獎
var secPrizes = [
    { itemId: 2049201, chance: 0.8 },
    { itemId: 2049304, chance: 0.8 },
    { itemId: 2340000, chance: 0.8 },
];

// 新品
var topClothesPrizes = [

    ///1/14新增
    { itemId: 1902506, chance: 1.5 },
    { itemId: 1902515, chance: 1.5 },
    { itemId: 1902550, chance: 1.5 },
    { itemId: 1902552, chance: 1.5 },
    { itemId: 1902554, chance: 1.5 },
    { itemId: 1902556, chance: 1.5 },
    { itemId: 1902563, chance: 1.5 },
    { itemId: 1902585, chance: 1.5 },
    { itemId: 1902584, chance: 1.5 },
    { itemId: 1902592, chance: 1.5 },
    { itemId: 1902601, chance: 1.5 },
    { itemId: 1902637, chance: 1.5 },
    { itemId: 1902663, chance: 1.5 },
    { itemId: 1902680, chance: 1.5 },
    { itemId: 1902687, chance: 1.5 },

    //椅子
    { itemId: 3010590, chance: 1.5 },
    { itemId: 3015302, chance: 1.5 },
    { itemId: 3015327, chance: 1.5 },
    { itemId: 3015468, chance: 1.5 },
    { itemId: 3015472, chance: 1.5 },
    { itemId: 3015447, chance: 1.5 },
    { itemId: 3015474, chance: 1.5 },
    { itemId: 3015517, chance: 1.5 },
    { itemId: 3015633, chance: 1.5 },
    { itemId: 3015640, chance: 1.5 },
    { itemId: 3015644, chance: 1.5 },
    { itemId: 3015645, chance: 1.5 },
    { itemId: 3015646, chance: 1.5 },
    { itemId: 3015652, chance: 1.5 },
    { itemId: 3015790, chance: 1.5 },
    { itemId: 3015792, chance: 1.5 },

   

];

var generalClothesPrizes = [

     //12/10新增 //1/14往下擺的
    //椅子
    { itemId: 3015788, chance: 0.5 },
    { itemId: 3018360, chance: 0.5 },
    { itemId: 3015972, chance: 0.5 },
    { itemId: 3018659, chance: 0.5 },
    { itemId: 3018229, chance: 0.5 },
    { itemId: 3015753, chance: 0.5 },
    { itemId: 3018942, chance: 0.5 },
    { itemId: 3018921, chance: 0.5 },
    { itemId: 3018733, chance: 0.5 },
    { itemId: 3018773, chance: 0.5 },
    { itemId: 3018402, chance: 0.5 },
    { itemId: 3018695, chance: 0.5 },

    { itemId: 3018736, chance: 0.8 },
    { itemId: 3018683, chance: 0.8 },
    { itemId: 3012055, chance: 0.8 },
    { itemId: 3018651, chance: 0.8 },
    { itemId: 3015434, chance: 0.8 },
    { itemId: 3018635, chance: 0.8 },
    { itemId: 3015612, chance: 0.8 },
    { itemId: 3015042, chance: 0.8 },


    //12/10往下擺的
    { itemId: 3018286, chance: 0.35 },
    { itemId: 3018283, chance: 0.35 },
    { itemId: 3018266, chance: 0.35 },
    { itemId: 3018248, chance: 0.35 },
    { itemId: 3018265, chance: 0.35 },
    { itemId: 3018245, chance: 0.35 },
    { itemId: 3019107, chance: 0.35 },
    { itemId: 3019108, chance: 0.35 },
    { itemId: 3019014, chance: 0.35 },
    { itemId: 3019008, chance: 0.35 },
    { itemId: 3018236, chance: 0.5 },
    { itemId: 3018230, chance: 0.5 },
    { itemId: 3018222, chance: 0.5 },
    { itemId: 3018213, chance: 0.5 },
    { itemId: 3019000, chance: 0.5 },
    { itemId: 3018212, chance: 0.5 },
    { itemId: 3018179, chance: 0.5 },
    { itemId: 3019099, chance: 0.5 },
    { itemId: 3019098, chance: 0.5 },
    { itemId: 3019125, chance: 0.5 },
    { itemId: 3019045, chance: 0.5 },
    { itemId: 3019016, chance: 0.5 },
    { itemId: 3019015, chance: 0.5 },
    { itemId: 3019007, chance: 0.5 },
    { itemId: 3018998, chance: 0.5 },


    //12/10關掉的(之前的)

    // { itemId: 3018778, chance: 0.35 },
    // { itemId: 3018808, chance: 0.35 },
    // { itemId: 3018812, chance: 0.35 },
    // { itemId: 3018663, chance: 0.35 },
    // { itemId: 3018664, chance: 0.35 },
    // { itemId: 3018616, chance: 0.35 },
    // { itemId: 3018438, chance: 0.35 },
    // { itemId: 3018440, chance: 0.35 },
    // { itemId: 3018362, chance: 0.35 },
    // { itemId: 3018378, chance: 0.35 },
    // { itemId: 3018355, chance: 0.35 },
    // { itemId: 3018354, chance: 0.35 },
    // { itemId: 3018340, chance: 0.35 },
    // { itemId: 3018378, chance: 0.35 },
    // { itemId: 3018337, chance: 0.35 },
    // { itemId: 3018285, chance: 0.35 },
    // { itemId: 3018272, chance: 0.35 },
    // { itemId: 3018338, chance: 0.35 },
    // { itemId: 3018323, chance: 0.35 },
    // { itemId: 3018325, chance: 0.35 },
    // { itemId: 3018315, chance: 0.35 },
    // { itemId: 3018270, chance: 0.35 },
    // { itemId: 3018258, chance: 0.35 },
    // { itemId: 3018232, chance: 0.35 },
    // { itemId: 3018173, chance: 0.35 },
    // { itemId: 3018153, chance: 0.35 },
    // { itemId: 3018135, chance: 0.35 },
    // { itemId: 3018065, chance: 0.35 },
    // { itemId: 3018076, chance: 0.35 },
    // { itemId: 3018060, chance: 0.35 },
    // { itemId: 3018020, chance: 0.35 },
    // { itemId: 3018003, chance: 0.35 },
    // { itemId: 3015973, chance: 0.35 },

    //坐騎大獎//12/10新增 //1/14往下擺的
    { itemId: 1902442, chance: 0.8 },
    { itemId: 1902845, chance: 0.8 },
    // { itemId: 1902725, chance: 0.5 },
    // { itemId: 1902726, chance: 0.5 },
    { itemId: 1902232, chance: 0.8 },
    { itemId: 1902614, chance: 0.8 },
    { itemId: 1902632, chance: 0.8 },
    
    { itemId: 1902557, chance: 0.8 },
    { itemId: 1902498, chance: 0.8 },
    { itemId: 1902444, chance: 0.8 },
    { itemId: 1902430, chance: 0.8 },
    { itemId: 1902361, chance: 0.8 },
    { itemId: 1902375, chance: 0.8 },
    { itemId: 1902482, chance: 0.8 },
    { itemId: 1902555, chance: 0.8 },
    { itemId: 1902560, chance: 0.8 },
    { itemId: 1902785, chance: 0.8 },
    { itemId: 1902688, chance: 0.8 },
    { itemId: 1902392, chance: 0.8},

    //坐騎 12/10往下擺的
    { itemId: 1902649, chance: 0.35 },
    { itemId: 1902641, chance: 0.35 },
    // { itemId: 1902725, chance: 0.5 },
    // { itemId: 1902726, chance: 0.5 },
    { itemId: 1902772, chance: 0.35 },
    { itemId: 1902771, chance: 0.35 },
    { itemId: 1902814, chance: 0.35 },
    
    { itemId: 1902646, chance: 0.5 },
    { itemId: 1902642, chance: 0.5 },
    { itemId: 1902640, chance: 0.5 },
    { itemId: 1902639, chance: 0.5 },
    { itemId: 1902676, chance: 0.5 },
    { itemId: 1902682, chance: 0.5 },
    { itemId: 1902709, chance: 0.5 },
    { itemId: 1902750, chance: 0.5 },

    //坐騎
    // { itemId: 1902828, chance: 0.45 },
    // { itemId: 1902581, chance: 0.45 },
    // { itemId: 1902613, chance: 0.45 },
    // { itemId: 1902786, chance: 0.45 },
    // { itemId: 1902812, chance: 0.45 },
    // { itemId: 1902781, chance: 0.45 },
    // { itemId: 1902782, chance: 0.45 },

    //坐騎
    // { itemId: 1902333, chance: 0.45 },
    // { itemId: 1902524, chance: 0.45 },
    // { itemId: 1902453, chance: 0.45 },
    // { itemId: 1902445, chance: 0.45 },

    //椅子
    // { itemId: 3018906, chance: 0.45 },
    // { itemId: 3018891, chance: 0.45 },
    // { itemId: 3018951, chance: 0.45 },
    // { itemId: 3018952, chance: 0.45 },
    // { itemId: 3018939, chance: 0.45 },
    // { itemId: 3018938, chance: 0.45 },
    // { itemId: 3018763, chance: 0.45 },
    // { itemId: 3018811, chance: 0.45 },
    // { itemId: 3018596, chance: 0.45 },
    // { itemId: 3018581, chance: 0.45 },
    // { itemId: 3018469, chance: 0.45 },
    // { itemId: 3018460, chance: 0.45 },
    // { itemId: 3018437, chance: 0.45 },
    // { itemId: 3018401, chance: 0.45 },
    // { itemId: 3018343, chance: 0.45 },
    // { itemId: 3018342, chance: 0.45 },
    // { itemId: 3018341, chance: 0.45 },
    // { itemId: 3018250, chance: 0.45 },
    // { itemId: 3018221, chance: 0.45 },
    // { itemId: 3018184, chance: 0.45 },
    // { itemId: 3018127, chance: 0.45 },
    // { itemId: 3018134, chance: 0.45 },
    // { itemId: 3018071, chance: 0.45 },
    // { itemId: 3018057, chance: 0.45 },
    // { itemId: 3018054, chance: 0.45 },
    // { itemId: 3018044, chance: 0.45 },
    // { itemId: 3018023, chance: 0.45 },
    // { itemId: 3018004, chance: 0.45 },
    // { itemId: 3018009, chance: 0.45 },
    // { itemId: 3015968, chance: 0.45 },
    // { itemId: 3015969, chance: 0.45 },
    // { itemId: 3015967, chance: 0.45 },

    //坐騎
    // { itemId: 1902794, chance: 0.35 },
    // { itemId: 1902795, chance: 0.35 },
    // { itemId: 1902797, chance: 0.35 },
    // { itemId: 1902846, chance: 0.35 },
    // { itemId: 1902866, chance: 0.35 },
    // { itemId: 1902475, chance: 0.35 },
    // { itemId: 1902474, chance: 0.35 },
    // { itemId: 1902470, chance: 0.35 },
    // { itemId: 1902511, chance: 0.35 },
    // { itemId: 1902516, chance: 0.35 },
    // { itemId: 1902535, chance: 0.35 },
    // { itemId: 1902558, chance: 0.35 },
    // { itemId: 1902561, chance: 0.35 },
    // { itemId: 1902578, chance: 0.35 },
    // { itemId: 1902582, chance: 0.35 },
    // { itemId: 1902623, chance: 0.35 },
    // { itemId: 1902669, chance: 0.35 },
    // { itemId: 1902674, chance: 0.35 },
    // { itemId: 1902675, chance: 0.35 },
    // { itemId: 1902685, chance: 0.35 },
    // { itemId: 1902723, chance: 0.35 },
    // { itemId: 1902754, chance: 0.35 },
    // { itemId: 1902788, chance: 0.35 },
    // { itemId: 1902388, chance: 0.35 },
    // { itemId: 1902804, chance: 0.35 },
];

// 普通獎: 時裝兌換券
var normalprizes = 4032878;

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
    //玩家每次開始對話時都load一次最大獎限量名單
    if (status == 0) {
        var topPrizes = cm.getTopPrizes();
        topPrizeCount = [];
        prob = 0;

        for (var i = 0; i < topPrizes.length; i++) {
            var chance = 0.1; // 默認機率
            // 根據type設置chance
            switch (topPrizes[i].mid) {
                case 'font':
                    chance = 0.4;
                    break;
                case 'chair':
                    chance = 1;
                    break;
                case 'pet':
                    chance = 0.5;
                    break;
                // 其他類型可以繼續添加
            }
            topPrizeCount.push({ itemId: topPrizes[i].left, chance: chance, count: topPrizes[i].right });
            // prob += chance; // 累加總機率
        }

        
        
        for (var i = 0; i < topPrizeCount.length; i++) {
            prob += topPrizeCount[i].chance;
        }
        for (var i = 0; i < secPrizes.length; i++) {
            prob += secPrizes[i].chance;
        }
        for (var i = 0; i < topClothesPrizes.length; i++) {
            prob += topClothesPrizes[i].chance;
        }
        for (var i = 0; i < generalClothesPrizes.length; i++) {
            prob += generalClothesPrizes[i].chance;
        }
        normalChance -= prob;
    }


    switch (status) {
        case 0:
            var msg = "喵歐~我是限定轉蛋機！如果你有#i5220044:##r#t5220044#的話，我可以給你神秘的好東西喔！#b \n(只有30級以上的玩家可以交換！)";
            msg += "#b#L2#我要進行轉蛋#l#n#r#L1#我想查看轉蛋獎勵#l#n";
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            grandPrizePoolStr = getGrandPrizePoolStr(topPrizeCount, secPrizes, topClothesPrizes, generalClothesPrizes, prob);
            if (sel == 1) {
                var msg = '這是#r限量大獎#k喵！\r\n\r\n' + grandPrizePoolStr;
                msg += "\r\n===普通獎品如下===\r\n\r\n";
                msg += '#i' + normalprizes + ':#  #t' + normalprizes + '# x3 - #r' + normalChance + '%#k\r\n';
                cm.sendSimple(msg);
                cm.dispose();
                return;
            } else {
                if (cm.getPlayer().getLevel() < 30) {
                    cm.sendSimple("姆．．．你的等級還沒有到30等呀！");
                    cm.dispose();
                    return;
                }
                if (!cm.haveItem(5220044, 1)) {
                    cm.sendSimple("咦！你沒有朕最喜歡的#b#i5220044:##t5220044##k呀！");
                    cm.dispose();
                    return;
                }
                if (!cm.canHold()) {
                    cm.sendSimple("你身上的空間不夠放收藏品了呢！");
                    cm.dispose();
                    return;
                }
                var gain = false;
                var item;
                var rareness = 0;

                // 實現機率抽獎的邏輯
                var allPrizes = topPrizeCount.concat(secPrizes).concat(generalClothesPrizes).concat(topClothesPrizes);
                var prize = drawPrize(allPrizes);
                if (!prize) {
                    // 如果沒有抽到特定獎品，則發放普通獎
                    prize = { itemId: normalprizes, chance: 0 };
                    isNormalprizes = true;
                }
                item = prize.itemId;

                for (var i = 0; i < topPrizeCount.length; i++) {
                    if (topPrizeCount[i].itemId === item) {
                        rareness = 1;
                        //抽到限定大獎 需要去更改limitedgachapon裡面的資料 currentcout++ (這是被抽出來的數) 如果maxcount - currentcount = 0 的話 flag要改成-1
                        cm.updatePrizeCount(item);
                        break;
                    }
                }
                if (rareness === 0) {
                    for (var i = 0; i < secPrizes.length; i++) {
                        if (secPrizes[i].itemId === item) {
                            rareness = 2;
                            break;
                        }
                    }
                }
                if (rareness === 0) {
                    for (var i = 0; i < topClothesPrizes.length; i++) {
                        if (topClothesPrizes[i].itemId === item) {
                            rareness = 3;
                            break;
                        }
                    }
                }
                if (rareness === 0) {
                    for (var i = 0; i < generalClothesPrizes.length; i++) {
                        if (generalClothesPrizes[i].itemId === item) {
                            rareness = 4;
                            break;
                        }
                    }
                }

                if(isNormalprizes){
                    cm.gainItem(normalprizes, 3);
                }else{
                    cm.gainLimitGachaponItem(item, 1, rareness);
                }

                cm.sendSimple("恭喜你獲得了#b#i" + item + ":##t" + item + "##k！");
                gain = true;

                if (gain) {
                    cm.gainItem(5220044, -1); // 移除限定轉蛋券
                    cm.gainItem(4032879, 5); 
                }

                cm.dispose();
            }
        default:
            cm.dispose();
    }
}

function getGrandPrizePoolStr(topPrizeCount, secPrizes, topClothesPrizes, generalClothesPrizes, prob) {
    var result = '';
    var allPrizes = topPrizeCount.concat(secPrizes).concat(generalClothesPrizes).concat(topClothesPrizes);
    var probabilitiesObj = calculateProbabilities(allPrizes, prob);

    // 處理有剩餘數量的獎項
    for (var i = 0; i < topPrizeCount.length; i++) {
        var prize = topPrizeCount[i];
        var key = prize.itemId;
        var countStr = " #b(剩餘#r " + prize.count + " #b個)#k";
        result += '#i' + key + ':#  #t' + key + '# - #r' + probabilitiesObj[key].toFixed(2) + '%#k' + countStr + '\r\n';
    }

    // 處理沒有剩餘數量限制的獎項
    result += "\r\n=======#r特別獎#k如下=======\r\n\r\n";
    for (var i = 0; i < secPrizes.length; i++) {
        var prize = secPrizes[i];
        var key = prize.itemId;
        if (probabilitiesObj[key] !== undefined) {
            result += '#i' + key + ':#  #t' + key + '# - #r' + probabilitiesObj[key].toFixed(2) + '%#k\r\n';
        }
    }

    result += "\r\n==========#r新品#k===========\r\n\r\n";
    for (var i = 0; i < topClothesPrizes.length; i++) {
        var prize = topClothesPrizes[i];
        var key = prize.itemId;
        if (probabilitiesObj[key] !== undefined) {
            result += '#i' + key + ':#  #t' + key + '# - #r' + probabilitiesObj[key].toFixed(2) + '%#k\r\n';
        }
    }

    result += "\r\n=======其他坐騎/椅子========\r\n\r\n";
    for (var i = 0; i < generalClothesPrizes.length; i++) {
        var prize = generalClothesPrizes[i];
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