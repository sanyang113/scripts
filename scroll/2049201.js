//武器 盾牌 手套 項鍊槌子
function start(equip) {

    var currentViciousHammer = equip.getViciousHammer();

    var rate = getRate(currentViciousHammer);

    var choose = Math.floor(Math.random() * 100);
    if(choose < rate) {
        equip.setViciousHammer(equip.getViciousHammer() + 1);
        equip.setMaxUpgradeSlots(equip.getMaxUpgradeSlots() + 1);
        equip.setUpgradeSlots(equip.getUpgradeSlots() + 1);
        cm.getPlayer().dropMessage(6,"道具發光了，產生了神奇的效果");
        return true;
    } else {
        cm.getPlayer().dropMessage(6,"道具發光了，但似乎沒產生任何效果");
        return false;
    }
}

function getRate(viciousHammer) {
    switch(viciousHammer) {
        case 0:
            return 50;
        case 1:
            return 30;
        case 2:
            return 15;
    }
            return false;
}

function handleExecute(equip) {
    if(!(equip.getItemId() >= 1080000 && equip.getItemId() <= 1099999 || equip.getItemId() >= 1300000 && equip.getItemId() <= 1339999 ||
         equip.getItemId() >= 1350000 && equip.getItemId() <= 1499999 || equip.getItemId() >= 1120000 && equip.getItemId() <= 1129999)){
    cm.getPlayer().dropMessage(6, "僅能使用在武器、盾牌、手套、項鍊上");
    return false;
    }else if(equip.getMaxUpgradeSlots() == 0){
    cm.getPlayer().dropMessage(6, "基礎卷軸數為0的裝備無法使用黃金鐵鎚");
    return false;
    }else if(equip.getViciousHammer()<3){
    return true;
    }else if(equip.getViciousHammer() >= 3){
    cm.getPlayer().dropMessage(6, "一件裝備最多僅能使用3次黃金鐵鎚");
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