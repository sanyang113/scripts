//究極飾品魔
function start(equip) {
    equip.setWatk(equip.getMatk() + 9);
    return true;
}
function handleExecute(equip) {
    if(equip.getUpgradeSlots() < 1) {
        return false;
    }else if(!(equip.getItemId() >= 1010000 && equip.getItemId() <= 1039999 || equip.getItemId() >= 1110000 && equip.getItemId() <= 1149999 || 
    equip.getItemId() >= 1340000 && equip.getItemId() <= 1349999)){
        cm.getPlayer().dropMessage(6, "僅能使用在飾品上");
        return false;
    }
return true;
}

// return false代表強制不使用祝福卷軸，可防呆/也可強制某卷軸不能使用WS，刪除function或預設為return true(會使用祝福)
function handleWhiteScroll(equip) {
    return true;
}

// return false的話不會消耗捲次(會排除消耗捲次判定)
function handleUpgradeSlot(equip) {
    return true;
}