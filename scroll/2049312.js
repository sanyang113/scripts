//X武器物
function start(equip) {
    equip.setStr(equip.getStr() + 10);
    equip.setDex(equip.getDex() + 10);
    equip.setInt(equip.getInt() + 10);
    equip.setLuk(equip.getLuk() + 10);
    equip.setWatk(equip.getWatk() + 12);
    return true;
}
function handleExecute(equip) {
    if(equip.getUpgradeSlots() < 1) {
        return false;
    }else if(!(equip.getItemId() >= 1300000 && equip.getItemId() <= 1339999 || equip.getItemId() >= 1350000 && equip.getItemId() <= 1499999)){
        cm.getPlayer().dropMessage(6, "僅能使用在武器上");
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