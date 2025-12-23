//扣除幸運，轉移能力至隨機其他三能力

//能力轉移失敗機率
var failedProb = 25;

function start(equip) {

    //若為0則不可使用
    if(equip.getLuk() == 0) {
        return;
    }
    
    var minus = 1;

    equip.setLuk(equip.getLuk() - minus);

    var chance = getRandomChange(1,100);

    var move = getRandomChange(1,3);

    if(chance > failedProb) {
        switch(move) {
            case 1:
                equip.setStr(equip.getStr() + minus);
                cm.getPlayer().dropMessage(6,"成功將1點幸運轉移至1點力量了！");
                break;
            case 2:
                equip.setDex(equip.getDex() + minus);
                cm.getPlayer().dropMessage(6,"成功將1點幸運轉移至1點敏捷了！");
                break;
            case 3:
                equip.setInt(equip.getInt() + minus);
                cm.getPlayer().dropMessage(6,"成功將1點幸運轉移至1點智力了！");
                break;
        }
    } else {
        cm.getPlayer().dropMessage(6,"卷軸發出的光芒，轉移的能力隨著光芒灰飛煙滅了...");
    }
}

function getRandomChange(min, max) {
    return ss.getRandomInt(min, max);
}