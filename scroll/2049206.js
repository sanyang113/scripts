var mapping = {
    "0":[20, 0],
    "1":[20, 0],
    "2":[20, 0],
    "3":[20, 0],
    "4":[20, 0],
    "5":[20, 0],
    "6":[20, 0],
    "7":[20, 0],
    "8":[20, 0],
    "9":[20, 0],
    "10":[20, 0],
    "11":[20, 0],
    "12":[20, 0],
    "13":[20, 0],
    "14":[20, 0],
    "15":[20, 0],
    "16":[20, 0],
    "17":[20, 0],
    "18":[20, 0],
    "19":[20, 0],
    "20":[20, 0],
    "21":[20, 0],
    "22":[20, 0],
    "23":[20, 0],
    "24":[20, 0],
    "25":[20, 0],
    "26":[20, 0],
    "27":[20, 0],
    "28":[20, 0],
    "29":[20, 0],
}

function start(equip) {

    var level = equip.getStarAbility();

    var info = mapping[level];

    var random1 = Math.floor(Math.random() * 100);
    
    if(info[0] > random1) {
        cm.getPlayer().dropMessage(6,"物品發光了，裝備升級成功");
        equip.setStarAbility(level + 1);
        return true;
    } else {
        var random2 = Math.floor(Math.random() * 100);
        if(info[1] > random2) {
            cm.getPlayer().dropMessage(6,"物品發光了，裝備降級了");
            equip.setStarAbility(level - 1);
        } else {
            cm.getPlayer().dropMessage(6,"物品發光了，但似乎沒有任何變化");
        }
    }
    return false;
}

function getRandomChange(min, max) {
    return ss.getRandomInt(min, max);
}

function handleExecute(equip) {
    if(equip.getStarAbility()<30){
    return true;
    }else{
    cm.getPlayer().dropMessage(6, "最多只能強化至20星");
    return false;
    }
}

function handleWhiteScroll(equip) {
    return false;
}

function handleUpgradeSlot(equip) {
    return false;
}