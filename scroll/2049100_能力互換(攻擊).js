//隨機攻擊 - 魔攻切轉 1AD=2AP

//有 2% 機率轉移能力消失
var failedProb = 2

function start(equip) {

    var watk = equip.getWatk();
    var matk = equip.getMatk();
    if(watk == 0 && matk < 2) return;

    var chance = getRandomChange(1,100);

    var plus = 0;
    if(chance > failedProb) {
        plus = 1;
    }

    //move = 1則AP轉AD / move = 2則AP轉AD
    var move = getRandomChange(1,2);
    if(watk == 0) {
        move = 1;
    }
    if(matk == 0) {
        move = 2;
    }

    switch(chance) {
        case 1:
            equip.setWatk(equip.getWatk() + plus);
            equip.setMatk(equip.getMatk() - 2);
            break;
        case 2:
            equip.setWatk(equip.getWatk() - 1);
            equip.setMatk(equip.setMatk() + plus*2);
            break;
    }

}

function getRandomChange(min, max) {
    return ss.getRandomInt(min, max);
}