var name = "高級星力強化卷軸"
var mapping = {
    "0":[100, 0],
    "1":[90, 25],
    "2":[80, 25],
    "3":[70, 25],
    "4":[60, 25],
    "5":[55, 25],
    "6":[50, 25],
    "7":[45, 25],
    "8":[40, 25],
    "9":[35, 25],
    "10":[25, 25],
    "11":[25, 25],
    "12":[25, 25],
    "13":[25, 25],
    "14":[25, 25],
    "15":[15, 25],
    "16":[15, 25],
    "17":[15, 25],
    "18":[15, 25],
    "19":[15, 25],
}

function start(equip) {
    if (cm.haveItem(2340001, 1)){
        mapping = {
            "0":[100, 0],
            "1":[90,  0],
            "2":[80,  0],
            "3":[70,  0],
            "4":[60,  0],
            "5":[55,  0],
            "6":[50,  0],
            "7":[45,  0],
            "8":[40,  0],
            "9":[35,  0],
            "10":[25, 0],
            "11":[25, 0],
            "12":[25, 0],
            "13":[25, 0],
            "14":[25, 0],
            "15":[15, 0],
            "16":[15, 0],
            "17":[15, 0],
            "18":[15, 0],
            "19":[15, 0],
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
    if(equip.getStarAbility() < 20){
    return true;
    }else{
    cm.getPlayer().dropMessage(6, "此卷軸最多只能強化至20星");
    return false;
    }
}

function handleWhiteScroll(equip) {
    return false;
}

function handleUpgradeSlot(equip) {
    return false;
}