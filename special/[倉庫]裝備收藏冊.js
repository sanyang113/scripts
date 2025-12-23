var status = -1;
var sel = -1;
var ownItem = -1;
var haveCurrItem = -1;
var typeSel = -1;
var removeAll = false;
var withdraw = true;
var inventorytype = -1;

// var selects = ["110等武器","永恆武器","幸福白色武器","航海師武器","110等防具","120等防具","佩沙里洛防具","航海師防具","初階飾品","四大月戒","初階勳章","中階勳章","高階勳章","35楓葉武器","43楓葉武器","64楓葉武器","77楓葉武器","耀羽組合","中階飾品","160等盾牌","神秘冥界幽靈防具"];

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
            var msg = "目前你所擁有的蒐藏積分為：" + cm.getCollectPoint();
            msg += "\r\n增加總能力值為:" + cm.getCollectAbility();
            msg += "\r\n您要開啟哪個蒐藏冊呢？\r\n";

            var entrySet = cm.showCollectList(withdraw).entrySet().iterator();
            while (entrySet.hasNext()) {
                var entry = entrySet.next();
                var key = entry.getKey();
                var value = entry.getValue();
                var ownCount = cm.getCollectStatus(key);
                var totalCount = cm.showAllCollectItems(key).length;
                msg += "\r\n#L" + key + "##b" + value.name + "(" + ownCount + "/" + totalCount + ")" + (ownCount == totalCount ? "#r#e(已完成)#k#n" : "") + "#k";
            }
            cm.sendNext(msg);
            break;
        case 1:
            if(selection != -1) {
                typeSel = selection;
            }
            var msg = "以下是您的" + cm.showCollectName(typeSel) + "\r\n";
            var allItems = cm.showAllCollectItems(typeSel);
            var onePoint = cm.showItemPoint(typeSel);
            var collectlist = cm.showCollectList(withdraw).get(typeSel);
            inventorytype = collectlist.inventorytype;
            ownItem = cm.showOwnCollectItemList(typeSel, inventorytype);
            var done = false;
            if(ownItem.length == allItems.length) {
                done = true;
            }
            msg += "該項目完成進度(" + ownItem.length + "/" + allItems.length +")\r\n";
            msg += "蒐藏一件裝備獲得分數：" + onePoint + "分\r\n";
            if(cm.collectBonus(typeSel) != 0) {
                msg += "蒐集全部項目額外獎勵：" + cm.collectBonus(typeSel)+"分" + (done ? "(已完成)":"") + "\r\n";
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
            var msg = "";
            if(haveCurrItem) {
                msg = "您確定要領出#b#i" + sel + ":##t" + sel + "#嗎？";
                cm.sendYesNo(msg);
            } else {
                var msg = cm.selectCollectItem(sel, inventorytype);
                if(msg == null) {
                    cm.sendOk("很抱歉，您身上沒有#b#i" + sel + ":##t" + sel + "#唷！");
                    status = 0;
                    break;
                }
                cm.sendNext("#r請選擇您要存入的道具：#b\r\n\r\n" + msg);
            }
            break;
        case 3:
            if(removeAll) {
                var allItems = cm.showAllCollectItems(typeSel);
                var count = 0;
                for(var i = 0; i < allItems.length; i++) {
                    if(!checkHaveItem(allItems[i])) {
                        count += cm.collectFirst(allItems[i], typeSel, inventorytype);
                    }
                }
                if(count > 0) {
                    cm.reloadCollectAbility();
                    cm.sendOk("已存入全部可儲存道具，共計:" + count + "件");
                } else {
                    cm.sendOk("很抱歉，目前沒有可存入之裝備");
                }
                status = 0;
                break;
            }
            if(!haveCurrItem) {
                var msg = cm.addCollectItem(selection, typeSel, inventorytype);
                cm.reloadCollectAbility();
                cm.sendOk(msg);
                status = 0;
            } else {
                var msg = cm.removeCollectItem(sel, typeSel);
                cm.reloadCollectAbility();
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