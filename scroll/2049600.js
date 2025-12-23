var mapping = {
    "0":[100, 0],
    "1":[90, 0],
    "2":[80, 0],
    "3":[70, 0],
    "4":[60, 0],
    "5":[60, 50],
    "6":[60, 50],
    "7":[60, 50],
    "8":[60, 50],
    "9":[60, 50],
    "10":[30, 50],
    "11":[60, 50],
    "12":[60, 50],
    "13":[60, 50],
    "14":[60, 50],
}

function start(equip) {

    var level = equip.getStarAbility();

    var info = mapping[level];

    var random1 = Math.floor(Math.random() * 100);
    
    if(info[0] > random1) {
        cm.getPlayer().dropMessage(6,"物品發光了，裝備升級成功");
        equip.setStarAbility(level + 1);
        return;
    } else {
        var random2 = Math.floor(Math.random() * 100);
        if(info[1] > random2) {
            cm.getPlayer().dropMessage(6,"物品發光了，裝備降級了");
            equip.setStarAbility(level - 1);
        } else {
            cm.getPlayer().dropMessage(6,"物品發光了，但似乎沒有任何變化");
        }
    }


}

function handleExecute(equip) {
    cm.getPlayer().dropMessage(6,"裝備測試中");
    return false;
}