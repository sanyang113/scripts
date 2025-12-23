//榮耀防具魔
function start(equip) {
    var MatkRandom = cm.getRandom(1, 100);
    var MatkRise = 0;
          if(MatkRandom >=   1 && MatkRandom <=   1){MatkRise = 5
    }else if(MatkRandom >=   2 && MatkRandom <=   3){MatkRise = 6
    }else if(MatkRandom >=   4 && MatkRandom <=   7){MatkRise = 7
    }else if(MatkRandom >=   8 && MatkRandom <=  13){MatkRise = 8
    }else if(MatkRandom >=  14 && MatkRandom <=  44){MatkRise = 9
    }else if(MatkRandom >=  45 && MatkRandom <=  72){MatkRise = 10
    }else if(MatkRandom >=  73 && MatkRandom <=  85){MatkRise = 11
    }else if(MatkRandom >=  86 && MatkRandom <=  92){MatkRise = 12
    }else if(MatkRandom >=  93 && MatkRandom <=  97){MatkRise = 13
    }else if(MatkRandom >=  98 && MatkRandom <=  99){MatkRise = 14
    }else if(MatkRandom >= 100 && MatkRandom <= 100){MatkRise = 15
    }
    equip.setMatk(equip.getMatk() + MatkRise);
    cm.getPlayer().dropMessage(6, "魔法攻擊力提升了" + MatkRise + "點");
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