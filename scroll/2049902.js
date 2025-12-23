function start(equip) {
    equip.setSharpEyeCritical(100);
    return true;
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