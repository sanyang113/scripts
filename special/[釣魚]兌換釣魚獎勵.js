//釣魚獎勵
var status = -1;
var select = -1;
var qty = -1;

var rewards = [

    [4030002, 2002024, 2,  1],
    [4030002, 2002025, 1,  1],
    [4031627, 2002024, 2,  1],
    [4031627, 2002025, 1,  1],
    [4031628, 2002024, 2,  1],
    [4031628, 2002025, 1,  1],
    [4031630, 2002024, 2,  1],
    [4031630, 2002025, 1,  1],
    [4031631, 2002024, 2,  1],
    [4031631, 2002025, 1,  1],
    
    [4030002, 5072000, 150,  1],
    [4031627, 5073000, 150,  1],
    [4031628, 5074000, 150,  1],
    [4031630, 5076000, 300,  1],
    [4031631, 5077000, 400,  1],

    [4030002, 5050000, 100,  1],
    [4031627, 5050001, 100,  1],
    [4031628, 5050002, 200,  1],
    [4031630, 5050003, 300,  1],
    [4031631, 5050004, 1000,  1],

    [4030002, 5060001, 50,  1],
    [4031627, 5130000, 1000,  1],



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