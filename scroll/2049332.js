//榮耀防具物
function start(equip) {
    var WatkRandom = cm.getRandom(1, 100);
    var WatkRise = 0;
          if(WatkRandom >=   1 && WatkRandom <=   1){WatkRise = 5
    }else if(WatkRandom >=   2 && WatkRandom <=   3){WatkRise = 6
    }else if(WatkRandom >=   4 && WatkRandom <=   7){WatkRise = 7
    }else if(WatkRandom >=   8 && WatkRandom <=  13){WatkRise = 8
    }else if(WatkRandom >=  14 && WatkRandom <=  44){WatkRise = 9
    }else if(WatkRandom >=  45 && WatkRandom <=  72){WatkRise = 10
    }else if(WatkRandom >=  73 && WatkRandom <=  85){WatkRise = 11
    }else if(WatkRandom >=  86 && WatkRandom <=  92){WatkRise = 12
    }else if(WatkRandom >=  93 && WatkRandom <=  97){WatkRise = 13
    }else if(WatkRandom >=  98 && WatkRandom <=  99){WatkRise = 14
    }else if(WatkRandom >= 100 && WatkRandom <= 100){WatkRise = 15
    }
    equip.setWatk(equip.getWatk() + WatkRise);
    cm.getPlayer().dropMessage(6, "物理攻擊力提升了" + WatkRise + "點");
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