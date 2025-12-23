var status = -1;
var eventName = "[遠征]娃娃獅王與泰勒熊";
var showName = "娃娃獅王與泰勒熊遠征";
var minLevel = 120;
var maxLevel = 250;
var time = 40;
var need = "1200萬";

var eventNameE = "ScarTarBattle";
var event = "娃娃獅王與泰勒熊擴充";
var useQty = 2;

var maxSize = 12;
var minSize = 2;
var useItem = 4030127;
var maxCount = 7;
var maxAdd = 7;
var resetDay = 1; //1=週一 7=週日

function log() {
    
    // 計算這週的週一日期
    var d = new Date(); // 今天的日期
    var dayOfWeek = d.getDay(); // 取得今天是星期幾 (0=星期日, 1=星期一, ..., 6=星期六)
    
    // 計算差距，回退到週一
    var diffToMonday = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek; // 週日特例處理 (-6 天回到週一)
    d.setDate(d.getDate() + diffToMonday); // 回退到本週的週一
    
    // 取得週一的年、月、日
    var year = d.getFullYear();
    var month = d.getMonth() + 1; // 月份從0開始
    var day = d.getDate();
    var daytime = year + "年" + month + "月" + day + "日";
    
    return event + daytime;
}


function start() {
    action(1, 0, 0);
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
            if(cm.getPlayer().getMapId() == 551030200) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), eventName);
                return;
            }
            var add = cm.getPlayer().getCharacterOnly(log());
            var count = (maxCount + add - cm.getBossLogWeek(eventNameE, resetDay));
            var msg = "這裡是#b" + showName + "#k#d#e\r\n(遠征重製時間為每周日晚上23:59)#n#k\r\n\r\n";
            msg += "等級限制：#r" + minLevel + " #k以上\r\n"
            msg += "時間限制：#r" + time + " #k分鐘\r\n"
            msg += "人數限制：#r" + minSize + "~"+ maxSize + "#k 人\r\n"
            msg += "獎勵條件：#r" + need + "#k 總傷害\r\n";
            msg += "#r(主教系列職業需求0.5倍)#k \r\n";
            msg += "#r(大魔導士、烈焰巫師系列職業需求0.75倍)#k \r\n\r\n";
            msg += "每週可挑戰次數    #b" + maxCount + "#k 次，每週可擴充次數#b   " + maxAdd + "#k 次\r\n";
            msg += "本週剩餘挑戰次數 #b" 
            if(count<=9){msg +=" "}
            msg += (count) + "#k 次，本週剩餘擴充次數 #b" + (maxAdd - add) + "#k 次\r\n"
            msg += "\r\n#L0#我要進行#b " + showName + "#k";
            msg += "\r\n#L2#我要擴充#b " + showName + "#k 次數";
            msg += "\r\n#L1#我要尋找#b " + showName + "#k 夥伴";
            msg += "\r\n#L3#我要查詢#b " + showName + "#k 可取得獎勵";
            msg += "\r\n#L4#我要查詢#b " + showName + "#k 排行榜";

            cm.sendNext(msg);
            break;
        case 1:
            var add = cm.getPlayer().getCharacterOnly(log());
            if(selection == 0) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), eventName);
                return;
            } else if(selection == 1) {
                if (cm.getPlayer().isPartyMessage()) {
                    cm.getPlayer().setPartyMessage();
                    cm.sendOk(Message(selection));
                } else {
                    cm.sendOk("廣播冷卻時間剩餘:" + cm.getPlayer().getPartyMessage() + " 秒。");
                }
                cm.dispose();
                return;
            } else if(selection == 2) {
                if((maxAdd - add)==0){
                    cm.sendOk("你的 #b" + showName + " #k已經沒有可擴充次數了！");
                    cm.dispose();
                    return;
                }
                var msg = "擴充 #b" + showName + " #k每次需要消耗#b " + useQty + " #k個 #i" + useItem + ":#\r\n";
                msg += "你想擴充幾次呢？#d(還可以擴充#r " + (maxAdd - add) + "#d 次)#k\r\n"
                cm.sendGetNumber(msg, 1, 1, (maxAdd - add));
                break;
            } else if(selection == 3) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[遠征]"+ showName + "獎勵");
                return;
            } else if(selection == 4) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[遠征]" +showName + "排行榜");
                return;
            }
        case 2:
            var sel = selection;
            var qty = useQty * sel;
            if (!cm.haveItem(useItem, qty)){
                cm.sendOk("你的 #b#i" + useItem + ":##t" + useItem + "# #k好像不太夠！");
                cm.dispose();
                return;
            }else
            cm.gainItem(useItem, -qty);
            for (var i = 0; i < sel; i++) {
                cm.getPlayer().setCharacterOnly(log())
            }
            cm.sendOk("已經幫你擴充了 #b" + sel +" #k次 #b" + showName);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

function Message() {
    cm.YellowMessage(cm.getPlayer().getName() + " : 【" + showName + "】(Lv." + minLevel + " ~ Lv." + maxLevel + ") 徵求小夥伴們！！");
    var field = [
        ["喊話內容:",
            "我們在 【" + cm.getPlayer().getClient().getChannel() + "】 頻道的 " + showName + " (Lv." + minLevel + " ~ Lv." + maxLevel + ")，缺夥伴，快來一起玩吧！"]
    ];
    cm.sendPartyDiscordMessage("玩家『" + cm.getPlayer().getName() + "』在『" + cm.getPlayer().getClient().getChannel() + "頻』的『" + showName + "(Lv." + minLevel + " ~ Lv." + maxLevel + ")』尋求夥伴，快一起來玩吧！");
    return "已經幫您開廣了，也同步發送到Discord群尋找組隊小夥伴囉！希望你們玩的開心！";
}