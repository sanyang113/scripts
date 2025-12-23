//救世寵物物
function start(equip) {
    var WatkRandom = cm.getRandom(1, 100);
    var WatkRise = 0;
          if(WatkRandom >=  1 && WatkRandom <=  35){WatkRise = 10
    }else if(WatkRandom >= 36 && WatkRandom <=  65){WatkRise = 11
    }else if(WatkRandom >= 66 && WatkRandom <=  80){WatkRise = 12
    }else if(WatkRandom >= 81 && WatkRandom <=  88){WatkRise = 13
    }else if(WatkRandom >= 89 && WatkRandom <=  95){WatkRise = 14
    }else if(WatkRandom >= 96 && WatkRandom <= 100){WatkRise = 15
    }
    equip.setWatk(equip.getWatk() + WatkRise);
    cm.getPlayer().dropMessage(6, "物理攻擊力提升了" + WatkRise + "點");
    return true;
}
function handleExecute(equip) {
    if(equip.getUpgradeSlots() < 1) {
        return false;
    }else if(!(equip.getItemId() >= 1800000 && equip.getItemId() <= 1809999)){
        cm.getPlayer().dropMessage(6, "僅能使用在寵物裝備上");
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