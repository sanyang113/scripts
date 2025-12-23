//自定義裝備腳本
function check() {
    if(equip.getItemId() == 1113997 &&chr.getLevel() >= 140) {
        chr.dropMessage(5,"140等級後無法裝備此道具");
        return 1;
    }
    switch(dst) {
        case -31:
        case -32:
        case -39:
        case -40:
            if(chr.getLevel() < 200) {
                chr.dropMessage(5, "等級需要達到200才能配帶");
                return 1;
            }
            return dst;
        case -35:
            if(chr.getCharacterOnly("自定義裝備購買：墜飾") < 1) {
                return -17;
            }
            if(equip.getItemId() == 1122000) {
                return -17;
            }
            return dst;
    }
    return dst;
}

