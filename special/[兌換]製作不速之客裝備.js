//不速之客製作
var status = -1;
var useItem = 4030002;
var select = -1;
var qty = -1;

var rewards = [
    [1302143, 1, 3],
    [1312058, 1, 3],
    [1322086, 1, 3],
    [1332116, 1, 3],
    [1372074, 1, 3],
    [1382095, 1, 3],
    [1402086, 1, 3],
    [1412058, 1, 3],
    [1422059, 1, 3],
    [1432077, 1, 3],
    [1442107, 1, 3],
    [1452102, 1, 3],
    [1462087, 1, 3],
    [1472113, 1, 3],
    [1482075, 1, 3],
    [1492075, 1, 3],
    
    [1302144, 1, 10],
    [1312059, 1, 10],
    [1322087, 1, 10],
    [1332117, 1, 10],
    [1372075, 1, 10],
    [1382096, 1, 10],
    [1402087, 1, 10],
    [1412059, 1, 10],
    [1422060, 1, 10],
    [1432078, 1, 10],
    [1442108, 1, 10],
    [1452103, 1, 10],
    [1462088, 1, 10],
    [1472114, 1, 10],
    [1482076, 1, 10],
    [1492076, 1, 10],

    [1302145, 1, 20],
    [1312060, 1, 20],
    [1322088, 1, 20],
    [1332118, 1, 20],
    [1372076, 1, 20],
    [1382097, 1, 20],
    [1402088, 1, 20],
    [1412060, 1, 20],
    [1422061, 1, 20],
    [1432079, 1, 20],
    [1442109, 1, 20],
    [1452104, 1, 20],
    [1462089, 1, 20],
    [1472115, 1, 20],
    [1482077, 1, 20],
    [1492077, 1, 20],

    [1032080, 1, 10],
    [1032081, 1, 20],
    [1032082, 1, 30],

    [1112435, 1, 15],
    [1112436, 1, 25],
    [1112437, 1, 35],

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
            var msg = "你想要製作什麼呢？\r\n"
            msg += "製作出來的#b不速之客#k裝備素質為#r隨機浮動#k\r\n"
            for (var i = 0; i < rewards.length; i++) {
                msg += "#L" + i + "#使用#r"
                if(rewards[i][2]<=9){
                    msg += " "
                }
                msg += rewards[i][2] + "#k個#i" + useItem + ":# #k製作 #b#i" + rewards[i][0] + ":##t" + rewards[i][0]  +":##k\r\n";
            }
            cm.sendOk(msg);
            break;
        case 1:
            select = selection;
            var item = rewards[select][0];
            if(Math.floor(item / 1000000) == 1) {
                cm.sendYesNo("確定要製作#b#i" + item + ":##t" + item + "##k嗎？");
                break;
            }
            var msg = "製作#b#i" + item + ":##t" + item + "##k，要製作幾個呢？";
            cm.sendGetNumber(msg, 1, 1, 100);
            break;
        case 2:
            if(selection == -1) {
                qty = 1;
            } else {
                qty = selection;
            }
            var useAmount = rewards[select][2] * qty;
            if (!cm.haveItem(useItem, useAmount)){
                cm.sendOk("你的#i" + useItem + ":##t" + useItem + "#好像不夠...");
                cm.dispose();
                return;
            }
            if (!cm.canHold(rewards[select][0], (rewards[select][1] * qty))) {
                cm.sendOk("包包已經塞不下了。"+qty);
                cm.dispose();
                return;
            }
            cm.gainItem(useItem, -useAmount);
            cm.gainItem(rewards[select][0], (rewards[select][1] * qty), true);
            cm.sendOk("#b#i" + rewards[select][0] + ":##t" + rewards[select][0]  +"##r x" + (rewards[select][1] * qty) + "個#k，收下吧！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}