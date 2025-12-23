//扣除力量，轉移能力至隨機其他三能力

//有 10% 機率轉移能力消失
var failedProb = 10

function start(equip) {

    //若力量為0則不可使用
    if(equip.getStr() == 0) {
        return;
    }
    
    var minus = Math.min(Math.floor(Math.random() * getRandomChange(1,4)),equip.getStr());

    equip.setStr(equip.getStr() - minus);

    var chance = getRandomChange(1,100);

    var move = getRandomChange(1,3);

    if(chance > failedProb) {
        switch(move) {
            case 1:
                equip.setDex(equip.getDex() + minus);
                break;
            case 2:
                equip.setInt(equip.getInt() + minus);
                break;
            case 3:
                equip.setLuk(equip.getLuk() + minus);
                break;
        }
    }
}

function getRandomChange(min, max) {
    return ss.getRandomInt(min, max);
}