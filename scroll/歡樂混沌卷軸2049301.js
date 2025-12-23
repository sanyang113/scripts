//歡樂的混沌卷軸

var attr = 2;
var attk = 1;
var magicattk = 2;
var hpandmp = 5;

function start(equip) {
    
    if(equip.getStr() > 0) {
        equip.setStr(equip.getStr()+getRandomChange(0, attr));
    }

    if(equip.getDex() > 0) {
        equip.setDex(equip.getDex()+getRandomChange(0, attr));
    }

    if(equip.getInt() > 0) {
        equip.setInt(equip.getInt()+getRandomChange(0, attr));
    }

    if(equip.getLuk() > 0) {
        equip.setLuk(equip.getLuk()+getRandomChange(0, attr));
    }

    if(equip.getWatk() > 0) {
        equip.setWatk(equip.getWatk()+getRandomChange(0,attk));
    }

    if(equip.getWdef() > 0) {
        equip.setWdef(equip.getWdef()+getRandomChange(0, attr));
    }

    if(equip.getMatk() > 0) {
        equip.setMatk(equip.getMatk()+getRandomChange(0,magicattk));
    }

    if(equip.getMdef() > 0) {
        equip.setMdef(equip.getMdef()+getRandomChange(0, attr));
    }

    if(equip.getAcc() > 0) {
        equip.setAcc(equip.getAcc()+getRandomChange(0, attr));
    }

    if(equip.getAvoid() > 0) {
        equip.setAvoid(equip.getAvoid()+getRandomChange(0, attr));
    }

    if(equip.getSpeed() > 0) {
        equip.setSpeed(equip.getSpeed()+getRandomChange(0, attr));
    }

    if(equip.getJump() > 0) {
        equip.setJump(equip.getJump()+getRandomChange(0, attr));
    }
    
    if(equip.getHp() > 0) {
        equip.setHp(equip.getHp()+getRandomChange(0, hpandmp));
    }

    if(equip.getMp() > 0) {
        equip.setMp(equip.getMp()+getRandomChange(0, hpandmp));
    }
}

function getRandomChange(min, max) {
    return ss.getRandomInt(min, max);
}