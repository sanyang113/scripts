var status = -1;
var sel = -1;
var ownItem = -1;
var haveCurrItem = -1;
var typeSel = -1;
var removeAll = false;

var selects = [
    ["基礎技能書", 2],
    ["突破技能書", 2],
    ["稀有道具", 4],
    ["稀有卷軸", 2],
    ["高階卷軸", 2],
    ["基礎投擲物", 2],
    ["初階投擲物", 2],
    ["中階投擲物", 2],
]
function start() {
    return action(1,0,0);
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

    if(selection == 998) {
        status = 0;
    }

    switch(status) {
        case 0:
            var msg = "目前你所擁有的蒐藏積分為：" + cm.getCollectPoint2();
            msg += "\r\n增加總能力值為:" + cm.getCollectAbility2();
            msg += "\r\n您要開啟哪個蒐藏冊呢？\r\n";
            
            for(var i = 0; i < selects.length; i++) {
                var ownCount = cm.getCollectStatus2(i);
                var totalCount = cm.showAllCollectItems2(i).length;
                msg += "\r\n#L" + i + "##b" + selects[i][0] + "(" + ownCount + "/" + totalCount + ")" + (ownCount == totalCount ? "#r#e(已完成)#k#n" : "") + "#k";
            }

            cm.sendNext(msg);
            break;
        case 1:
            if(selection != -1) {
                typeSel = selection;
            }
            var msg = "以下是您的" + selects[typeSel][0] + "\r\n";
            var allItems = cm.showAllCollectItems2(typeSel);
            var onePoint = cm.showItemPoint2(typeSel);
            ownItem = cm.showOwnCollectItemList2(typeSel);
            var done = false;
            if(ownItem.length == allItems.length) {
                done = true;
            }
            msg += "該項目完成進度(" + ownItem.length + "/" + allItems.length +")\r\n";
            msg += "蒐藏一件道具獲得分數：" + onePoint + "分\r\n";
            if(cm.collectBonus(typeSel) != 0) {
                msg += "蒐集全部項目額外獎勵：" + cm.collectBonus2(typeSel)+"分" + (done ? "(已完成)":"") + "\r\n";
            }

            if(allItems.length == 0) {
                cm.sendOk("目前此收藏尚未開啟...");
                cm.dispose();
                return;
            }
            msg += "========以下為未蒐藏之物品(點選後存入)========\r\n";
            var num = 0;
            for(var i = 0; i < allItems.length; i++) {
                if(!checkHaveItem(allItems[i])) {
                    msg += "#L"+allItems[i]+"##i" + allItems[i] + ":##l"; 
                    num++;
                    if(num == 6) {
                        num = 0;
                        msg += "\r\n";
                    }
                }
            }
            num = 0;
            msg += "\r\n\r\n=========以下為已蒐藏之物品(點選取出)=========\r\n";
            for(var i = 0; i < allItems.length; i++) {
                if(checkHaveItem(allItems[i])) {
                    msg += "#L"+allItems[i]+"##i" + allItems[i] + ":##l"; 
                    num++;
                    if(num == 6) {
                        num = 0;
                        msg += "\r\n";
                    }
                }
            }
            msg += "\r\n\r\n===================功能專區===================\r\n";
            msg += "#L999##b一鍵存入#l\r\n\r\n";
            msg += "#L998##b回到上一頁#l"
            cm.sendNext(msg);
            break;
        case 2:
            sel = selection;
            if(sel == 999) {
                var msg = "您確定要進行一鍵存入嗎？";
                removeAll = true;
                cm.sendYesNo(msg);
                break;
            }
            removeAll = false;
            haveCurrItem = checkHaveItem(sel);
            var msg = ""
            if(haveCurrItem) {
                msg = "您確定要領出#b#i" + sel + ":##t" + sel + "#嗎？";
                cm.sendYesNo(msg);
            } else {
                var msg = cm.selectCollectItem2(sel);
                if(msg == null) {
                    cm.sendOk("很抱歉，您身上沒有#b#i" + sel + ":##t" + sel + "#唷！");
                    status = 0;
                    break;
                }
                cm.sendYesNo("確定要存入#b#i" + sel + ":##t" + sel + "##k嗎？");
            }
            break;
        case 3:
            if(removeAll) {
                var allItems = cm.showAllCollectItems2(typeSel);
                var count = 0;
                for(var i = 0; i < allItems.length; i++) {
                    if(!checkHaveItem(allItems[i])) {
                        count += cm.collectFirst2(allItems[i], typeSel, selects[typeSel][1]);
                    }
                }
                if(count > 0) {
                    cm.sendOk("已存入全部可儲存道具，共計:" + count + "件");
                } else {
                    cm.sendOk("很抱歉，目前沒有可存入之道具");
                }
                status = 0;
                break;
            }
            if(!haveCurrItem) {
                var msg = cm.collectFirst2(sel, typeSel,selects[typeSel][1]);
                cm.sendOk("存入成功");
                status = 0;
            } else {
                var msg = cm.removeCollectItem2(sel, typeSel);
                cm.sendOk(msg);
                status = 0;
            }
            break;
        default:
            cm.dispose();
            return;
    }
}

function checkHaveItem(itemid) {
    if(ownItem == null) return false;
    return ownItem.indexOf(itemid) != -1;
}