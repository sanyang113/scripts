var status = -1;
var sel = -1;
var useItem = 4310249;
var useAmount = 28;
var giveItem = 1142103;
var redeem = 0;


var items = [
    //披風
    [1102718, 8],
    [1102719, 8],
    [1102720, 8],
    [1102721, 8],
    [1102722, 8],
    //眼部
    [1022181, 25],
    //下面待修正盛12本技能書
    [2290140, 1],
    [2290142, 1],
    [2290144, 1],
    [2290146, 1],
    [2290148, 1],
    [2290150, 1],
    [2290152, 1],
    [2290155, 1],
    [2290156, 1],
    [2290158, 1],
    [2290161, 1],
    [2290162, 1],
    //卷軸
    [2049303, 5],
    [2049304, 1],
    [2340000, 1],
    [2049302, 5],
    [2049301, 5],
    [2049201, 1],
    [2049202, 5]
];

var totalPrizes = [];

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        cm.dispose();
        return;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            redeem = 0;
            var msg = "在AI入侵的世界中我們久魂貓之一族受到了嚴重的迫害，我們需要#b#i" + useItem + ":##t" + useItem + "##k的力量，能喚醒我們的能力";
            msg += "\r\n勇者...若您擁有#b未來東京討伐勳章#k，我能跟您隨機交換一些稀有的寶物";
            msg += "\r\n\r\n #b#L1#我想抽獎！#l";
            msg += "\r\n #L2#我想查看獎勵內容#l";
            msg += "\r\n #L3#我想兌換特別獎勵#l";
            cm.sendNext(msg);
            break;
        case 1:
            var sel = selection;
            if(sel == 1) {
                cm.sendYesNo("您確定要用#b#i" + useItem + ":##t" + useItem + "##k隨機抽一樣獎勵嗎？");
                redeem = 1;
            } else if(sel == 2) {
                var msg = "您可以在本喵這裡隨機抽一樣以下物品：\r\n";
                for(var i = 0; i < items.length; i++) {
                    msg += "\r\n#b#i" + items[i][0] + ":##t" + items[i][0] + "#";
                }
                msg += "\r\n預祝您可以從本喵這抽到想要的物品！";
                cm.sendOk(msg);
                cm.dispose();
                return;
            }
            if(sel == 3) {
                var msg = "這是準備給拯救東京多次的英雄直接兌換的特別內容！\r\n\r\n"
                msg += "\r\n可以使用#b#i" + useItem + "##t" + useItem + "##k x " + useAmount + " #n兌換 #b#i" + giveItem + ":##t" + giveItem + "##k";
                msg += "\r\n\r\n\r\n#r您確定要現在兌換嗎？";
                cm.sendYesNo(msg);
                redeem = 3;
            }
            break;
        case 2:
             if(!cm.canHold()) {
                cm.sendOk("本喵發現您的背包空間不太足夠唷！");
                cm.dispose();
                return;
            }
            if(redeem == 1) {
                if(!cm.haveItem(useItem,1)) {
                    cm.sendOk("您的罐罐... 喔，不對！您沒有#b#i"+useItem+":##t"+useItem+"##k唷！！");
                    cm.dispose();
                    return;
                }
                createTotalPrizes();
                var random = Math.floor(Math.random() * totalPrizes.length);
                var gainItem = totalPrizes[random];

                var response = -1;
                if(isSpecialItem(gainItem)) {
                    response = cm.gainTokyoItem(gainItem,1,1);
                } else {
                    response = cm.gainTokyoItem(gainItem,1,2);
                }

                if(response == -1) {
                    cm.sendOk("發生異常錯誤，請回報給GM");
                    cm.dispose();
                    return;
                }
                cm.gainItem(useItem, -1);

                if(isSpecialItem(gainItem)) {
                    cm.sendOk("本喵今天心情特別的好，這是與您兌換的獎勵#b#i" + gainItem + ":##t" + gainItem + "##k請收下吧！");
                    cm.dispose();
                    return;
                }
                cm.sendOk("這是與您兌換的獎勵#b#i" + gainItem + ":##t" + gainItem + "##k請收下吧！");
                cm.dispose();
                return;
            }
            if(redeem == 3){
                if(!cm.haveItem(useItem,useAmount)) {
                    cm.sendOk("您的罐罐... 喔，不對！您沒有足夠的#b#i"+useItem+":##t"+useItem+"##k唷！！");
                    cm.dispose();
                    return;
                }
                if(!cm.canHold(giveItem,1)) {
                    cm.sendOk("很抱歉，您的背包空間不足，或是已經兌換過#b#i" + giveItem + ":##t" + giveItem + "#了！");
                    cm.dispose();
                    return;
                }
            cm.gainItem(useItem, -useAmount);
            cm.gainItem(giveItem, 1);
            cm.sendOk("#b#i" + giveItem + ":##t" + giveItem + "##k請收下吧！");
            cm.dispose();
            return;
            }
        default:
            cm.dispose();
            return;
    }
}

function createTotalPrizes() {
    for(var i = 0; i < items.length; i++) {
        for(var j = 0; j < items[i][1]; j++) {
            totalPrizes.push(items[i][0]);
        }
    }
}

function isSpecialItem(itemid) {
    switch(itemid) {
        case 2340000:
        case 2049304:
        case 2049201:
        case 2290140:
        case 2290142:
        case 2290144:
        case 2290146:
        case 2290148:
        case 2290150:
        case 2290152:
        case 2290155:
        case 2290156:
        case 2290158:
        case 2290161:
        case 2290162:        
            return true;
    }
    return false;
}