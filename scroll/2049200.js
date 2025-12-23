//回真卷軸

function start(equip) {
        equip.getRandomNewItem();
        return true;
}

/*
     return true 代表通過檢核(除捲次判定不跑其他檢核)
     return false 代表未通過檢核(退出不執行衝捲)
     刪除function則套用基本卷軸規則
     !!需注意寵物卷軸等部分 仍需判斷 cm.isCash(equip.getItemId()) 來判斷寵物裝備是否可以衝*/

function handleExecute(equip) {
    if(equip.getMaxUpgradeSlots() == equip.getUpgradeSlots()){
        cm.getPlayer().dropMessage(6, "回真卷軸使用成功，裝備素質已重新調整");
        return true;
    }else{
        cm.getPlayer().dropMessage(6, "僅有未使用過卷軸的裝備才可使用回真卷軸");
        return false;
    }
}

// return false代表強制不使用祝福卷軸，可防呆/也可強制某卷軸不能使用WS，刪除function或預設為return true(會使用祝福)
function handleWhiteScroll(equip) {
    return false;
}

// return false的話不會消耗捲次(會排除消耗捲次判定)
function handleUpgradeSlot(equip) {
    return false;
}