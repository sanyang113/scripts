//救世武器物
function start(equip) {
    var strRandom = cm.getRandom(1, 100);
    var strRise = 0;
    var dexRandom = cm.getRandom(1, 100);
    var dexRise = 0;
    var intRandom = cm.getRandom(1, 100);
    var intRise = 0;
    var lukRandom = cm.getRandom(1, 100);
    var lukRise = 0;
    var WatkRandom = cm.getRandom(1, 100);
    var WatkRise = 0;
          if(strRandom >=  1 && strRandom <=  35){strRise = 15
    }else if(strRandom >= 36 && strRandom <=  65){strRise = 16
    }else if(strRandom >= 66 && strRandom <=  80){strRise = 17
    }else if(strRandom >= 81 && strRandom <=  88){strRise = 18
    }else if(strRandom >= 89 && strRandom <=  95){strRise = 19
    }else if(strRandom >= 96 && strRandom <= 100){strRise = 20
    }
          if(dexRandom >=  1 && dexRandom <=  35){dexRise = 15
    }else if(dexRandom >= 36 && dexRandom <=  65){dexRise = 16
    }else if(dexRandom >= 66 && dexRandom <=  80){dexRise = 17
    }else if(dexRandom >= 81 && dexRandom <=  88){dexRise = 18
    }else if(dexRandom >= 89 && dexRandom <=  95){dexRise = 19
    }else if(dexRandom >= 96 && dexRandom <= 100){dexRise = 20
    }
          if(intRandom >=  1 && intRandom <=  35){intRise = 15
    }else if(intRandom >= 36 && intRandom <=  65){intRise = 16
    }else if(intRandom >= 66 && intRandom <=  80){intRise = 17
    }else if(intRandom >= 81 && intRandom <=  88){intRise = 18
    }else if(intRandom >= 89 && intRandom <=  95){intRise = 19
    }else if(intRandom >= 96 && intRandom <= 100){intRise = 20
    }
          if(lukRandom >=  1 && lukRandom <=  35){lukRise = 15
    }else if(lukRandom >= 36 && lukRandom <=  65){lukRise = 16
    }else if(lukRandom >= 66 && lukRandom <=  80){lukRise = 17
    }else if(lukRandom >= 81 && lukRandom <=  88){lukRise = 18
    }else if(lukRandom >= 89 && lukRandom <=  95){lukRise = 19
    }else if(lukRandom >= 96 && lukRandom <= 100){lukRise = 20
    }
          if(WatkRandom >=  1 && WatkRandom <=  35){WatkRise = 15
    }else if(WatkRandom >= 36 && WatkRandom <=  65){WatkRise = 16
    }else if(WatkRandom >= 66 && WatkRandom <=  80){WatkRise = 17
    }else if(WatkRandom >= 81 && WatkRandom <=  88){WatkRise = 18
    }else if(WatkRandom >= 89 && WatkRandom <=  95){WatkRise = 19
    }else if(WatkRandom >= 96 && WatkRandom <= 100){WatkRise = 20
    }
    equip.setStr(equip.getStr() + strRise);
    equip.setDex(equip.getDex() + dexRise);
    equip.setInt(equip.getInt() + intRise);
    equip.setLuk(equip.getLuk() + lukRise);
    equip.setWatk(equip.getWatk() + WatkRise);
    cm.getPlayer().dropMessage(6, "力量提升了" + strRise + "點");
    cm.getPlayer().dropMessage(6, "敏捷提升了" + dexRise + "點");
    cm.getPlayer().dropMessage(6, "智力提升了" + intRise + "點");
    cm.getPlayer().dropMessage(6, "幸運提升了" + lukRise + "點");
    cm.getPlayer().dropMessage(6, "物理攻擊力提升了" + WatkRise + "點");
    return true;
}
function handleExecute(equip) {
    if(equip.getUpgradeSlots() < 1) {
        return false;
    }else if(!(equip.getItemId() >= 1300000 && equip.getItemId() <= 1339999 || equip.getItemId() >= 1350000 && equip.getItemId() <= 1499999)){
        cm.getPlayer().dropMessage(6, "僅能使用在武器上");
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