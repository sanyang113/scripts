//釣魚獎勵
var status = -1;
var select = -1;
var qty = -1;

var rewards = [

    [2060008, 2450300, 100, 1],
    [2060009, 2450301, 100, 1],
    [2060010, 2450302, 100, 1],
    [2061006, 2450305, 100, 1],
    [2061007, 2450306, 100, 1],
    [2061008, 2450307, 100, 1],
    //消耗道具, 取得道具, 消耗數量, 取得數量
]

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
            var msg = "你想要兌換什麼呢？\r\n";
            for (var i = 0; i < rewards.length; i++) {
                msg += "#L" + i + "#使用 #r" + rewards[i][2] + "#k個#i" + rewards[i][0] + ":# #k兌換 #b#i" + rewards[i][1] + ":##k x" + rewards[i][3] + "個 #d#e(背包持有#c" + rewards[i][0] + "#個)#k#n#l\r\n";
            }
            cm.sendOk(msg);
            break;
        case 1:
            select = selection;
            var item = rewards[select][1];
            if(Math.floor(item / 1000000) == 1) {
                cm.sendYesNo("確定要兌換#b#i" + item + ":##t" + item + "##k嗎？");
                break;
            }
            var msg = "兌換#b#i" + item + ":##t" + item + ":##k x #b" + rewards[select][3] + "#k，要兌換幾個呢？";
            cm.sendGetNumber(msg, 1, 1, 100000);
            break;
        case 2:
            if(selection == -1) {
                qty = 1;
            } else {
                qty = selection;
            }
            var useAmount = rewards[select][2] * qty;
            if (!cm.haveItem(rewards[select][0], useAmount)){
                cm.sendOk("你的#i" + rewards[select][0] + ":##b#t" + rewards[select][0] + ":##k好像不夠...");
                cm.dispose();
                return;
            }
            if (!cm.canHold(rewards[select][1], (rewards[select][3] * qty))) {
                cm.sendOk("包包已經塞不下了..."+qty);
                cm.dispose();
                return;
            }
            cm.gainItem(rewards[select][0], -useAmount);
            cm.gainItem(rewards[select][1], (rewards[select][3] * qty));
            cm.sendOk("#b#i" + rewards[select][1] + ":##t" + rewards[select][1]  +"##k x #r" + (rewards[select][3] * qty) + "#k個，收下吧！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}