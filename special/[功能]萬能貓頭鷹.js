var status = -1;
var minPrice = 1;
var maxPrice = 2147483647;
var equipPart = -101;
var keyWord = "";
var minLevel = 0;
var maxLevel = 250;
var reqJob = -1;
var attribute = null;
var attributeValue = null;

var priceType;
var levelType;
var selType = -1;

var maxFreeSearch = 10;
var useItem = 5230000;
var minPlayerFreeSearchLevel = 30;

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

    if(status == 0) {
        switch(selType) {
            case 1:
                if(selection == 999) {
                    equipPart = -101;
                    break;
                }
                equipPart = selection;
                break;
            case 2:
                if(priceType == 2) {
                    maxPrice = selection;
                } else {
                    minPrice = selection;
                }
                break;
            case 3:
                keyWord = cm.getText();
                break;
            case 4:
                if(levelType == 2) {
                    maxLevel = selection;
                } else {
                    minLevel = selection;
                }
                break;
            case 5:
                if(selection == 6) {
                    reqJob = -1;
                    break;
                }
                reqJob = selection;
                break;
            case 6:
                attributeValue = selection;
                break;
        }
    }

    switch(status) {
        case 0:
            var msg = "歡迎使用萬能貓頭鷹系統\r\n使用 #b#i" + useItem + ":##t"+ useItem +"##k 可以道具搜尋唷\r\n\r\n";
            if(cm.getPlayer().getLevel() >= minPlayerFreeSearchLevel) {
                msg += "您今天剩餘的免費查詢剩餘次數#r#e (" + (maxFreeSearch - cm.getPlayer().getAccountOnly(log())) + "/" + maxFreeSearch + ")#k#n\r\n\r\n";
            } else {
                msg += "等級達到 #r#eLv." + minPlayerFreeSearchLevel + "#k#n 可以使用每日 #r#e" + maxFreeSearch + "#k#n 次的免費搜尋\r\n\r\n";
            }
            msg += "#L1##b  選擇裝備類型  #k#e[ " + getEquipPart() + "#k ]#l#k#n\r\n";
            msg += "#L3##b  關鍵字查詢 #k#e [ " + (keyWord == "" ? "請填入" : keyWord) + " ]#k#n#l\r\n";
            msg += "#L4##b  裝備等級區間 #k#e [ " + (minLevel == null ? "" : minLevel) + " ~ " + (maxLevel == null ? "" : maxLevel) + " ]#k#n#l\r\n";
            msg += "#L5##b  裝備職業選擇 #k#e [ " + getReqJob() + " ]#k#n#l\r\n";
            msg += "#L2##b  價格設定 #k#e [ " + (minPrice == null ? "" : minPrice) + " ~ " + (maxPrice == null ? "" : maxPrice) + " ] #k#n#l\r\n";
            msg += "#L6##b  詳細搜尋 #k#e [ " + getAttribute() + (attribute != null ? " 搜尋最小值:" + attributeValue : "") + " ]#k#n#l\r\n\r\n";
            msg += "#L7##d#e《 送出查詢 》#l\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            if(selection == 7) {
                if((cm.getPlayer().getLevel() < minPlayerFreeSearchLevel || cm.getPlayer().getAccountOnly(log()) >= maxFreeSearch) && !cm.haveItem(useItem)) {
                    cm.sendOk("很抱歉，您的免費搜尋次數已經用光，\r\n請購買#b#i" + useItem + ":##t" + useItem + "##k唷！");
                    cm.dispose();
                    return;
                }
                var step1 = cm.initAuctionList(keyWord);
                var step2 = cm.filterByPart(step1, 100 + equipPart);
                var step3 = cm.filterByLevel(step2, minLevel, maxLevel);
                var step4 = cm.filterByReqJob(step3, reqJob);
                if(step4.length > 1000) {
                    cm.sendOk("請縮小查詢範圍");
                    cm.dispose();
                    return;
                }
                var step5 = cm.searchMerchants(step4);
                var step6 = cm.filterByPrice(step5, minPrice, maxPrice);
                var step7 = cm.filterByAttribute(step6, attribute, attributeValue);
                if(step7.size() == 0) {
                    cm.sendOk("查無物品");
                    cm.dispose();
                    return;
                }
                if(cm.getPlayer().getLevel() < minPlayerFreeSearchLevel || cm.getPlayer().getAccountOnly(log()) >= maxFreeSearch) {
                    cm.gainItem(useItem, -1);
                } else {
                    cm.getPlayer().setAccountOnly(log());
                    cm.getPlayer().dropMessage(6,"消耗了免費查詢次數進行道具搜尋！");
                }


                cm.sendAuctionSearchRequest(step7);
                cm.dispose();
                return;
            }
            selType = selection;
            switch(selection) {
                case 1:
                    var msg = "請選擇裝備類型\r\n\r\n";
                    msg += "#L999##b全部#l\r\n\r\n";
                    msg += "#L0##b帽子#l   ";
                    msg += "#L1##b臉飾#l   ";
                    msg += "#L2##b眼飾#l   ";
                    msg += "#L3##b耳環#l   ";
                    msg += "#L4##b上衣#l\r\n";
                    msg += "#L5##b套服#l   ";
                    msg += "#L6##b褲裙#l   ";
                    msg += "#L7##b鞋子#l   ";
                    msg += "#L8##b手套#l   ";
                    msg += "#L9##b盾牌#l\r\n";
                    msg += "#L10##b披風#l   ";
                    msg += "#L11##b戒指#l   ";
                    msg += "#L12##b項鍊#l   ";
                    msg += "#L13##b腰帶#l   ";
                    msg += "#L14##b勳章#l\r\n\r\n";
                    msg += "#L30##b單手劍#l ";
                    msg += "#L31##b單手斧#l ";
                    msg += "#L32##b單手棍#l ";
                    msg += "#L33##b短劍#l   ";
                    msg += "#L34##b肩膀#l\r\n";
                    msg += "#L37##b短杖#l   ";
                    msg += "#L38##b長杖#l   ";
                    msg += "#L40##b雙手劍#l ";
                    msg += "#L41##b雙手斧#l ";
                    msg += "#L42##b雙手棍#l\r\n";
                    msg += "#L43##b槍#l     ";
                    msg += "#L44##b矛#l     ";
                    msg += "#L45##b弓#l     ";
                    msg += "#L46##b弩#l     ";
                    msg += "#L47##b拳套#l\r\n";
                    msg += "#L48##b指虎#l   ";
                    msg += "#L49##b火槍#l   ";
                    status = -1;
                    cm.sendNext(msg);
                    break;
                case 2:
                    var msg = "請選擇設定價格\r\n\r\n";
                    msg += "#L1#我想設定最低價格\r\n";
                    msg += "#L2#我想設定最高價格\r\n";
                    status = 19;
                    cm.sendNext(msg);
                    break;
                case 3:
                    var msg = "請輸入關鍵字";
                    status = -1;
                    cm.sendGetText(msg);
                    break;
                case 4:
                    var msg = "請設定裝備等級區間\r\n\r\n";
                    msg += "#L1#我想設定最低等級\r\n";
                    msg += "#L2#我想設定最高等級\r\n";
                    status = 39;
                    cm.sendNext(msg);
                    break;
                case 5:
                    var msg = "請選擇裝備職業\r\n\r\n";
                    msg += "#L0##b全職業\r\n";
                    msg += "#L1##b劍士\r\n";
                    msg += "#L2##b法師\r\n";
                    msg += "#L3##b弓箭手\r\n";
                    msg += "#L4##b盜賊\r\n";
                    msg += "#L5##b海盜\r\n";
                    msg += "#L6##b全部\r\n";
                    status = -1;
                    cm.sendNext(msg);
                    break;
                case 6:
                    var msg = "請選擇查詢的屬性\r\n\r\n";
                    msg += "#L1##b力量\r\n";
                    msg += "#L2##b敏捷\r\n";
                    msg += "#L3##b智力\r\n";
                    msg += "#L4##b幸運\r\n";
                    msg += "#L5##b攻擊力\r\n";
                    msg += "#L6##b魔法攻擊力\r\n";
                    msg += "#L7##bHP\r\n";
                    msg += "#L8##bMP\r\n";
                    msg += "#L9##b防禦力\r\n";
                    msg += "#L10##b魔法防禦力\r\n";
                    msg += "#L11##b移動速度\r\n";
                    msg += "#L12##b跳躍力\r\n";
                    msg += "#L13##b命中率\r\n";
                    msg += "#L14##b迴避率\r\n";
                    msg += "#L15##b剩餘捲次\r\n";
                    msg += "#L16##b移除搜尋\r\n";
                    status = 59;
                    cm.sendNext(msg);
                    break;
            }
            break;
        case 20:
            var msg = "請選擇設定價格(" + (selection == 1 ? "最低價" : "最高價") + ")";
            priceType = selection;
            cm.sendGetNumber(msg, 1, 1, 2147483647);
            status = -1;
            break;
        case 40:
            var msg = "請設定等級(" + (selection == 1 ? "最低等": "最高等") + ")";
            levelType = selection;
            cm.sendGetNumber(msg, 0, 0, 200);
            status = -1;
            break;
        case 60:
            if(selection == 16) {
                selType = -1;
                attribute = null;
                attributeValue = null;
                cm.sendNext("已經移除" + getAttribute() + " 了");
                status = -1;
                break;
            }
            setAttribute(selection);
            var msg = "您選擇了設定(" + getAttribute() + ")，請設定最小搜尋範圍值";
            cm.sendGetNumber(msg, 1, 1, 1000);
            status = -1;
            break;
        // case 0:
        //     var msg = "請選擇最低價格";
        //     cm.sendGetNumber(msg, 1, 1, 2147483647);
        //     break;
        // case 1:
        //     minPrice = selection;
        //     var msg = "請輸入關鍵字";
        //     cm.sendGetText(msg);
        //     break;
        // case 2:
        //     var text = cm.getText();
        //     var step1 = cm.initAuctionList(text);
        //     var step2 = cm.searchMerchants(step1);
        //     var step3 = cm.filterByPrice(step2, minPrice, maxPrice);
        //     cm.sendAuctionSearchRequest(step3);
        //     cm.dispose();
        //     return;
        default:
            cm.dispose();
            return;
    }
}

function getEquipPart() {
    switch(equipPart) {
        case 0:
            return "帽子";
        case 1:
            return "臉飾";
        case 2:
            return "眼飾";
        case 3:
            return "耳環";
        case 4:
            return "上衣";
        case 5:
            return "套服";
        case 6:
            return "褲裙";
        case 7:
            return "鞋子";
        case 8:
            return "手套";
        case 9:
            return "盾牌";
        case 10:
            return "披風";
        case 11:
            return "戒指";
        case 12:
            return "項鍊";
        case 13:
            return "腰帶";
        case 14:
            return "勳章";
        case 30:
            return "單手劍";
        case 31:
            return "單手斧";
        case 32:
            return "單手棍";
        case 33:
            return "短劍";
        case 37:
            return "短杖";
        case 38:
            return "長杖";
        case 40:
            return "雙手劍";
        case 41:
            return "雙手斧";
        case 42:
            return "雙手棍";
        case 43:
            return "槍";
        case 44:
            return "矛";
        case 45:
            return "弓";
        case 46:
            return "弩";
        case 47:
            return "拳套";
        case 48:
            return "指虎";
        case 49:
            return "火槍";
    }
    return "全部";
}

function getReqJob() {
    switch(reqJob) {
        case 0:
            return "全職業";
        case 1:
            return "劍士";
        case 2:
            return "法師";
        case 3:
            return "弓箭手";
        case 4:
            return "盜賊";
        case 5:
            return "海盜";
    }
    return "全部";
}

function setAttribute(select) {
    switch(select) {
        case 1:
            attribute = "str";
            break;
        case 2:
            attribute = "dex";
            break;
        case 3:
            attribute = "int";
            break;
        case 4:
            attribute = "luk";
            break;
        case 5:
            attribute = "watk";
            break;
        case 6:
            attribute = "matk";
            break;
        case 7:
            attribute = "hp";
            break;
        case 8:
            attribute = "mp";
            break;
        case 9:
            attribute = "wdef";
            break;
        case 10:
            attribute = "mdef";
            break;
        case 11:
            attribute = "speed";
            break;
        case 12:
            attribute = "jump";
            break;
        case 13:
            attribute = "acc";
            break;
        case 14:
            attribute = "avoid";
            break;
        case 15:
            attribute = "tuc";
            break;
    }
}

function getAttribute() {
    switch(attribute) {
        case "str":
            return "力量";
        case "dex":
            return "敏捷";
        case "int":
            return "智力";
        case "luk":
            return "幸運";
        case "watk":
            return "攻擊力";
        case "matk":
            return "魔法攻擊力";
        case "hp":
            return "HP";
        case "mp":
            return "MP";
        case "wdef":
            return "防禦力";
        case "mdef":
            return "魔法防禦力";
        case "speed":
            return "移動速度";
        case "jump":
            return "跳躍力";
        case "acc":
            return "命中率";
        case "avoid":
            return "迴避率";
        case "tuc":
            return "剩餘捲次";
    }
    return "未選擇";
}

function log() {
    var event = "拍賣免費搜尋:";
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var daytime = "日期:" + year + "年" + month + "月" + day + "日";

    return event + daytime;
}