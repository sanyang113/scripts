var attr = 5;
var attk = 3;
var magicattk = 6;
var hpandmp = 10;
var status = 0;

function start(equip) {

    status = addOrMinus();
    
    if(equip.getStr() > 0) {
        equip.setStr(equip.getStr()+getRandomChange(attr));
    }

    if(equip.getDex() > 0) {
        equip.setDex(equip.getDex()+getRandomChange(attr));
    }

    if(equip.getInt() > 0) {
        equip.setInt(equip.getInt()+getRandomChange(attr));
    }

    if(equip.getStr() > 0) {
        equip.setStr(equip.getStr()+getRandomChange(attr));
    }

    if(equip.getLuk() > 0) {
        equip.setLuk(equip.getLuk()+getRandomChange(attr));
    }

    if(equip.getWatk() > 0) {
        equip.setWatk(equip.getWatk()+getRandomChange(attk));
    }

    if(equip.getWdef() > 0) {
        equip.setWdef(equip.getWdef()+getRandomChange(attr));
    }

    if(equip.getMatk() > 0) {
        equip.setMatk(equip.getMatk()+getRandomChange(magicattk));
    }

    if(equip.getMdef() > 0) {
        equip.setMdef(equip.getMdef()+getRandomChange(attr));
    }

    if(equip.getAcc() > 0) {
        equip.setAcc(equip.getAcc()+getRandomChange(attr));
    }

    if(equip.getAvoid() > 0) {
        equip.setAvoid(equip.getAvoid()+getRandomChange(attr));
    }

    if(equip.getSpeed() > 0) {
        equip.setSpeed(equip.getSpeed()+getRandomChange(attr));
    }

    if(equip.getJump() > 0) {
        equip.setJump(equip.getJump()+getRandomChange(attr));
    }
    
    if(equip.getHp() > 0) {
        equip.setHp(equip.getHp()+getRandomChange(hpandmp));
    }

    if(equip.getMp() > 0) {
        equip.setMp(equip.getMp()+getRandomChange(hpandmp));
    }
}

function addOrMinus() {
    if(ss.getRandomBoolean()) return 1;
    return -1;
}

function getRandomChange(input) {
    return ss.getRandomInt(input+1)*status;
}