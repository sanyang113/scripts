var status = -1;
var eventName = "[遠征]天皇蟾蜍遠征"
var name = "天皇蟾蜍";
var minLevel = 150;
var maxLevel = 250;

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

    if(cm.getPlayer().getMapId() == 800040410) {
        switch(status) {
            case 0:
                var damages = cm.getTotalDamage();
                var msg = "";
                if(damages != null && damages.length != 0) {
                    msg += "\r\n====================================";
                    msg += "\r\n總輸出排行如下：\r\n";
                    for(var i = 0; i < damages.length; i++) {
                        msg += "\r\n"+damages[i];
                    }
                }
                cm.sendYesNo("您確定要退出嗎？" + msg);
                break;
            case 1:
                cm.warp(800040401, 0);
                cm.dispose();
                return;
            default:
                cm.dispose();
                return;
        }
    }


    switch(status) {
        case 0:
            var msg = "請問您要做什麼呢？";
            msg += "\r\n#L0#我要進行" + name + "遠征";
            msg += "\r\n#L1#我要尋找" + name + "遠征夥伴";
            cm.sendNext(msg);
            break;
        case 1:
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
            }
        default:
            cm.dispose();
            return;
    }
}

function Message() {
    cm.YellowMessage(cm.getPlayer().getName() + " : 【" + name + "遠征】(Lv." + minLevel + " ~ Lv." + maxLevel + ") 徵求小夥伴們！！");
    var field = [
        ["喊話內容:",
            "我們在 【" + cm.getPlayer().getClient().getChannel() + "】 頻道的 " + name + " 遠征討伐(Lv." + minLevel + " ~ Lv." + maxLevel + ")，缺夥伴，快來一起玩吧！"]
    ];
    cm.sendPartyDiscordMessage("玩家『" + cm.getPlayer().getName() + "』在『" + cm.getPlayer().getClient().getChannel() + "頻』的『" + name + "遠征(Lv." + minLevel + " ~ Lv." + maxLevel + ")』尋求夥伴，快一起來玩吧！");
    return "已經幫您開廣了，也同步發送到Discord群尋找組隊小夥伴囉！希望你們玩的開心！";
}