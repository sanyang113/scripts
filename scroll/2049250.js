function start(equip) {
    var json = equip.getSparkData();
    var data = JSON.parse(json);

    if(data.length == 0) {
        cm.getPlayer().dropMessage(6, "此裝備尚未使用過星火");
    return true;
    }
    cm.getPlayer().dropMessage(6,"星火卷軸的效果如下方:");
    for(var i = 0; i < data.length; i++) {
        var item = data[i];
        for (var key in item) {
            if (item.hasOwnProperty(key)) {
                cm.getPlayer().dropMessage(6,getKey(key) + ": +" + item[key]);
            }
        }
    }
    return true;
}

function getKey(key) {
    switch(key) {
        case "str":
            return "力量";
        case "dex":
            return "敏捷";
        case "int":
            return "智力";
        case "luk":
            return "幸運";
        case "watk":
            return "攻擊力";
        case "matk":
            return "魔法攻擊力";
        case "wdef":
            return "防禦力";
        case "mdef":
            return "魔法防禦力";
        case "hp":
            return "HP";
        case "mp":
            return "MP";
        case "acc":
            return "命中率";
        case "avoid":
            return "迴避率";
        case "speed":
            return "移動速度";
        case "jump":
            return "跳躍力";
    }
    return "undefined- 請聯繫GM";
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