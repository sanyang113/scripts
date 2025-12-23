//X防具魔
function start(equip) {
    equip.setWatk(equip.getMatk() + 7);
    return true;
}
function handleExecute(equip) {
    if(equip.getUpgradeSlots() < 1) {
        return false;
    }else if(!(equip.getItemId() >= 1000000 && equip.getItemId() <= 1009999 || equip.getItemId() >= 1040000 && equip.getItemId() <= 1109999)){
        cm.getPlayer().dropMessage(6, "僅能使用在防具上");
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