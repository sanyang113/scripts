var name = "星力強化卷軸"
var mapping = {
    "0":[60, 0],
    "1":[50, 40],
    "2":[40, 40],
    "3":[35, 40],
    "4":[30, 40],
    "5":[20, 40],
    "6":[20, 40],
    "7":[20, 40],
    "8":[20, 40],
    "9":[20, 40],
}

function start(equip) {
    if (cm.haveItem(2340001, 1)){
        mapping = {
            "0":[60, 0],
            "1":[50, 0],
            "2":[40, 0],
            "3":[35, 0],
            "4":[30, 0],
            "5":[20, 0],
            "6":[20, 0],
            "7":[20, 0],
            "8":[20, 0],
            "9":[20, 0],
        }
        cm.gainItem(2340001,-1)
    }
    var level = equip.getStarAbility();

    var info = mapping[level];

    var random1 = Math.floor(Math.random() * 100);
    
    if(info[0] > random1) {
        cm.getPlayer().dropMessage(6,"裝備升級成功，目前裝備星力為" + (level + 1) + "星");
        equip.setStarAbility(level + 1);
        if(level >= 4){
        cm.getPlayer().worldMessageYellowItem(equip, "星力強化", " 使用了" + name + "將裝備強化到了" + (level + 1) + "星，大家恭喜他吧");
        }
        return true;
    } else {
        var random2 = Math.floor(Math.random() * 100);
        if(info[1] > random2) {
            cm.getPlayer().dropMessage(6,"裝備升級失敗，裝備降級了，目前裝備星力為" + (level - 1) + "星");
            equip.setStarAbility(level - 1);
        } else {
            cm.getPlayer().dropMessage(6,"裝備升級失敗，裝備沒有任何變化");
        }

    }
    return false;
}

function getRandomChange(min, max) {
    return ss.getRandomInt(min, max);
}

function handleExecute(equip) {
    if (equip.getItemId() < 1010000 ||
        equip.getItemId() >= 1040000 && equip.getItemId() < 1110000 ||
        equip.getItemId() >= 1140000 && equip.getItemId() < 1160000 ||
        equip.getItemId() >= 1170000
    ){
        cm.getPlayer().dropMessage(6, "此卷軸僅能使用在飾品上");
        return false;
    }
    if(equip.getStarAbility() < 10){
    return true;
    }else{
    cm.getPlayer().dropMessage(6, "此卷軸最多只能強化至10星");
    return false;
    }
}

function handleWhiteScroll(equip) {
    return false;
}

function handleUpgradeSlot(equip) {
    return false;
}