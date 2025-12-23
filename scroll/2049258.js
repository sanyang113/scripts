var tier = ["T3","T4","T5","T6","T7"];
var weights = [70, 18, 8, 3, 1];
var selectedNumbers = {};
var results = [];
var roundWeight = [80, 20];
var roundsMin = 4;
var roundsMax = 5;
var addMap = {};
var name = "永恆輪迴星火";

function start(equip) {
    
    select(equip);

    equip.setSparkData(null);

    for(var i = 0; i < results.length; i++) {
        var myMap = equip.getSpark(results[i].Tx, results[i].number);
        for(key in myMap) {
            key = String(key);
            if (!addMap.hasOwnProperty(key)) {
                addMap[key] = 0;
            }
            addMap[key] += myMap[key];
        }
        cm.getPlayer().dropMessage(6, cm.getPlayer().sendSparkMessage(results[i].Tx, results[i].number));
    }
    var j = 0;
    for(key in addMap) {
        equip.putSparkData(j, key, addMap[key]);
        j++;
    }
    for(var i = 0; i < results.length; i++) {
        if(results[i].Tx >= "T5") {
            cm.getPlayer().worldMessageYellowItem(equip, "輪迴星火", " 使用了" + name + "點出稀有詞綴 " + cm.getPlayer().sendSparkMessage(results[i].Tx, results[i].number));
        }
    }
    return true;
}

function select(equip) {
    var totalWeight = 0;
    for(var i = 0; i < weights.length; i++) {
        totalWeight += weights[i];
    }

    var rounds = getRandomRound();

    for(var i = 0; i < rounds; i++) {
        while(true) {
            var randomValue = Math.floor(Math.random() * totalWeight);
            var cumulativeWeight = 0;
            var chosenKey = null;

            for (var k = 0; k < weights.length; k++) {
                cumulativeWeight += weights[k];
                if (randomValue < cumulativeWeight) {
                    chosenKey = tier[k];
                    break;
                }
            }

            var selected = Math.floor(Math.random() * equip.getSparkLength(chosenKey));

            if (!selectedNumbers[selected]) {
                selectedNumbers[selected] = true;
                results.push({ round: i + 1, Tx: chosenKey, number: selected });
                break;
            }
        }
    }
}

function getRandomRound() {

    var totalWeight = roundWeight.reduce(function(sum, weight) {
        return sum + weight;
    }, 0);


    var randomValue = Math.random() * totalWeight;


    var cumulativeWeight = 0;
    for (var i = 0; i < roundWeight.length; i++) {
        cumulativeWeight += roundWeight[i];
        if (randomValue < cumulativeWeight) {
            return roundsMin + i;
        }
    }


    return roundsMax;
}

function handleExecute(equip) {
    return true;
}

// return false代表強制不使用祝福卷軸，可防呆/也可強制某卷軸不能使用WS，刪除function或預設為return true(會使用祝福)
function handleWhiteScroll(equip) {
    return false;
}

// return false的話不會消耗捲次(會排除消耗捲次判定)
function handleUpgradeSlot(equip) {
    return false;
}