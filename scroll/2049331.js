//榮耀武器魔
function start(equip) {
    var strRandom = cm.getRandom(1, 100);
    var strRise = 0;
    var dexRandom = cm.getRandom(1, 100);
    var dexRise = 0;
    var intRandom = cm.getRandom(1, 100);
    var intRise = 0;
    var lukRandom = cm.getRandom(1, 100);
    var lukRise = 0;
    var MatkRandom = cm.getRandom(1, 100);
    var MatkRise = 0;
          if(strRandom >=   1 && strRandom <=   1){strRise = 10
    }else if(strRandom >=   2 && strRandom <=   3){strRise = 11
    }else if(strRandom >=   4 && strRandom <=   7){strRise = 12
    }else if(strRandom >=   8 && strRandom <=  13){strRise = 13
    }else if(strRandom >=  14 && strRandom <=  44){strRise = 14
    }else if(strRandom >=  45 && strRandom <=  72){strRise = 15
    }else if(strRandom >=  73 && strRandom <=  85){strRise = 16
    }else if(strRandom >=  86 && strRandom <=  92){strRise = 17
    }else if(strRandom >=  93 && strRandom <=  97){strRise = 18
    }else if(strRandom >=  98 && strRandom <=  99){strRise = 19
    }else if(strRandom >= 100 && strRandom <= 100){strRise = 20
    }
          if(dexRandom >=   1 && dexRandom <=   1){dexRise = 10
    }else if(dexRandom >=   2 && dexRandom <=   3){dexRise = 11
    }else if(dexRandom >=   4 && dexRandom <=   7){dexRise = 12
    }else if(dexRandom >=   8 && dexRandom <=  13){dexRise = 13
    }else if(dexRandom >=  14 && dexRandom <=  44){dexRise = 14
    }else if(dexRandom >=  45 && dexRandom <=  72){dexRise = 15
    }else if(dexRandom >=  73 && dexRandom <=  85){dexRise = 16
    }else if(dexRandom >=  86 && dexRandom <=  92){dexRise = 17
    }else if(dexRandom >=  93 && dexRandom <=  97){dexRise = 18
    }else if(dexRandom >=  98 && dexRandom <=  99){dexRise = 19
    }else if(dexRandom >= 100 && dexRandom <= 100){dexRise = 20
    }
          if(intRandom >=   1 && intRandom <=   1){intRise = 10
    }else if(intRandom >=   2 && intRandom <=   3){intRise = 11
    }else if(intRandom >=   4 && intRandom <=   7){intRise = 12
    }else if(intRandom >=   8 && intRandom <=  13){intRise = 13
    }else if(intRandom >=  14 && intRandom <=  44){intRise = 14
    }else if(intRandom >=  45 && intRandom <=  72){intRise = 15
    }else if(intRandom >=  73 && intRandom <=  85){intRise = 16
    }else if(intRandom >=  86 && intRandom <=  92){intRise = 17
    }else if(intRandom >=  93 && intRandom <=  97){intRise = 18
    }else if(intRandom >=  98 && intRandom <=  99){intRise = 19
    }else if(intRandom >= 100 && intRandom <= 100){intRise = 20
    }
          if(lukRandom >=   1 && lukRandom <=   1){lukRise = 10
    }else if(lukRandom >=   2 && lukRandom <=   3){lukRise = 11
    }else if(lukRandom >=   4 && lukRandom <=   7){lukRise = 12
    }else if(lukRandom >=   8 && lukRandom <=  13){lukRise = 13
    }else if(lukRandom >=  14 && lukRandom <=  44){lukRise = 14
    }else if(lukRandom >=  45 && lukRandom <=  72){lukRise = 15
    }else if(lukRandom >=  73 && lukRandom <=  85){lukRise = 16
    }else if(lukRandom >=  86 && lukRandom <=  92){lukRise = 17
    }else if(lukRandom >=  93 && lukRandom <=  97){lukRise = 18
    }else if(lukRandom >=  98 && lukRandom <=  99){lukRise = 19
    }else if(lukRandom >= 100 && lukRandom <= 100){lukRise = 20
    }
          if(MatkRandom >=   1 && MatkRandom <=   1){MatkRise = 10
    }else if(MatkRandom >=   2 && MatkRandom <=   3){MatkRise = 11
    }else if(MatkRandom >=   4 && MatkRandom <=   7){MatkRise = 12
    }else if(MatkRandom >=   8 && MatkRandom <=  13){MatkRise = 13
    }else if(MatkRandom >=  14 && MatkRandom <=  44){MatkRise = 14
    }else if(MatkRandom >=  45 && MatkRandom <=  72){MatkRise = 15
    }else if(MatkRandom >=  73 && MatkRandom <=  85){MatkRise = 16
    }else if(MatkRandom >=  86 && MatkRandom <=  92){MatkRise = 17
    }else if(MatkRandom >=  93 && MatkRandom <=  97){MatkRise = 18
    }else if(MatkRandom >=  98 && MatkRandom <=  99){MatkRise = 19
    }else if(MatkRandom >= 100 && MatkRandom <= 100){MatkRise = 20
    }
    equip.setStr(equip.getStr() + strRise);
    equip.setDex(equip.getDex() + dexRise);
    equip.setInt(equip.getInt() + intRise);
    equip.setLuk(equip.getLuk() + lukRise);
    equip.setMatk(equip.getMatk() + MatkRise);
    cm.getPlayer().dropMessage(6, "力量提升了" + strRise + "點");
    cm.getPlayer().dropMessage(6, "敏捷提升了" + dexRise + "點");
    cm.getPlayer().dropMessage(6, "智力提升了" + intRise + "點");
    cm.getPlayer().dropMessage(6, "幸運提升了" + lukRise + "點");
    cm.getPlayer().dropMessage(6, "魔法攻擊力提升了" + MatkRise + "點");
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