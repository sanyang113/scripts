//混沌卷軸

var attr = 10;
var fixAttr = -5;
var etc = 10;
var fixEtc = -5;
var attk = 8;
var fixAttk = -4;
var magicattk = 12;
var fixMagicattk = -6;
var hpandmp = 40;
var fixHpandmp = -20;

function start(equip) {
    if(equip.getStr() > 0) {
        equip.setStr(equip.getStr()+cm.getRandom(0, attr)+fixAttr);
    }

    if(equip.getDex() > 0) {
        equip.setDex(equip.getDex()+cm.getRandom(0, attr)+fixAttr);
    }

    if(equip.getInt() > 0) {
        equip.setInt(equip.getInt()+cm.getRandom(0, attr)+fixAttr);
    }

    if(equip.getLuk() > 0) {
        equip.setLuk(equip.getLuk()+cm.getRandom(0, attr)+fixAttr);
    }

    if(equip.getWatk() > 0) {
        equip.setWatk(equip.getWatk()+cm.getRandom(0, attk)+fixAttk);
    }

    if(equip.getWdef() > 0) {
        equip.setWdef(equip.getWdef()+cm.getRandom(0, etc)+fixEtc);
    }

    if(equip.getMatk() > 0) {
        equip.setMatk(equip.getMatk()+cm.getRandom(0, magicattk)+fixMagicattk);
    }

    if(equip.getMdef() > 0) {
        equip.setMdef(equip.getMdef()+cm.getRandom(0, etc)+fixEtc);
    }

    if(equip.getAcc() > 0) {
        equip.setAcc(equip.getAcc()+cm.getRandom(0, etc)+fixEtc);
    }

    if(equip.getAvoid() > 0) {
        equip.setAvoid(equip.getAvoid()+cm.getRandom(0, etc)+fixEtc);
    }

    if(equip.getSpeed() > 0) {
        equip.setSpeed(equip.getSpeed()+cm.getRandom(0, etc)+fixEtc);
    }

    if(equip.getJump() > 0) {
        equip.setJump(equip.getJump()+cm.getRandom(0, etc)+fixEtc);
    }
    
    if(equip.getHp() > 0) {
        equip.setHp(equip.getHp()+cm.getRandom(0, hpandmp)+fixHpandmp);
    }

    if(equip.getMp() > 0) {
        equip.setMp(equip.getMp()+cm.getRandom(0, hpandmp)+fixHpandmp);
    }

    return true;
}
/*
    return true 代表通過檢核(除捲次判定不跑其他檢核)
    return false 代表未通過檢核(退出不執行衝捲)
    刪除function則套用基本卷軸規則
    !!需注意寵物卷軸等部分 仍需判斷 cm.isCash(equip.getItemId()) 來判斷寵物裝備是否可以衝
*/
function handleExecute(equip) {
    if(equip.getUpgradeSlots() < 1) {
        return false;
    }return true;
}

// return false代表強制不使用祝福卷軸，可防呆/也可強制某卷軸不能使用WS，刪除function或預設為return true(會使用祝福)
function handleWhiteScroll(equip) {
    return true;
}

// return false的話不會消耗捲次(會排除消耗捲次判定)
function handleUpgradeSlot(equip) {
    return true;
}