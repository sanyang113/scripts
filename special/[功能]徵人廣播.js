var status = -1;
var sel = -1;

var chooseMsg = ["我要徵詢好友","我是流浪的冒險者我想找新公會","我的公會想要收人"];

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

    switch(status) {
        case 0:
            var msg = "咦? 原來是新來的冒險者呀！ 請問您要做什麼事情呢？\r\n";
            for(var i = 0; i < chooseMsg.length; i++) {
                msg += "\r\n#b#L"+ i +"#" + chooseMsg[i];
            }
            cm.sendNext(msg);
            break;
        case 1:
            if (cm.getPlayer().isPartyMessage() || cm.getPlayer().isGM()) {
				cm.getPlayer().setPartyMessage();
                Message(selection)
				cm.sendOk("為您發送訊息了!");
			} else {
				cm.sendOk("廣播冷卻時間剩餘:" + cm.getPlayer().getPartyMessage() + " 秒。");
                cm.dispose();
                return;
			}
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

function Message(type) {
    switch(type) {
        case 0:
            cm.YellowMessage(cm.getPlayer().getName() + " : 我在找一同遊玩的冒險者們，快來加我好友吧！");
            cm.sendHelperDiscordMessage(cm.getPlayer().getName(), "徵友廣播", "我在找一同遊玩的冒險者們，快來加我好友吧！");
            break;
        case 1:
            if(cm.getPlayer().getGuild() == null) {
                cm.YellowMessage(cm.getPlayer().getName() + " : 我是流浪的冒險者我想找新公會，有沒有公會能夠收留我呢！~");
                cm.sendHelperDiscordMessage(cm.getPlayer().getName(), "徵公會廣播", "我是流浪的冒險者我想找新公會，有沒有公會能夠收留我呢！~");
            } else {
                cm.sendOk("很抱歉，您已經有公會了，所以不能尋找公會！");
            }
            break;
        case 2:
            if(cm.getPlayer().getGuild() != null) {
                cm.YellowMessage(cm.getPlayer().getName() + " : 公會：" + cm.getPlayer().getGuild().getName() + "徵人啦！！還沒加入公會的冒險者們快來唷！~");
                cm.sendHelperDiscordMessage(cm.getPlayer().getName(), "公會徵人啦!", "公會：" + cm.getPlayer().getGuild().getName() + "徵人啦！！還沒加入公會的冒險者們快來唷！~");
            } else {
                cm.sendOk("很抱歉，您沒有公會所以不能徵人！");
            }
            break;
    }
}