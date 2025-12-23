/*
鬧鬼宅邸 觸發-美伊德 (229010000)
 **/
var status = -1;
var map = 749050300;
var prob = 25;
var 鑰匙 = 4001337;
var 碎片 = 2022255;
var max_pumpkin = 2450;
var 持有 = 4039950;
var is持有 = false;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (mode == 0 && status == 0) {
            if (!is持有) {
                cm.dispose();
                return;
            }
            mode = 1;
            status = -1;
        }
        if (mode == 1) {
            status++;
        } else {
            cm.dispose();
            return;
        }
        if (status == 0) {
            max_pumpkin = 4900;
            if (cm.getPlayer().getParty() != null) {
                cm.sendOk("感受到了渾沌的靈壓，請先退出組隊後再進行解夢。");
                cm.dispose();
                return;
            }
            if (cm.getMapId() != map) {
                if (cm.haveItem(持有, 1) && !is持有) {
                    is持有 = true;
                    cm.sendYesNo("您身上持有 #i" + 持有 + ":# 請問是否消耗此道具？\r\n#r#e消耗後將必定進入噩夢");
                } else {
                    is持有 = false;
                    cm.sendYesNo("蒐集到解夢鑰匙了嗎？讓我來幫你解夢吧！看看你在萬聖節會出現什麼樣的夢，解夢鑰匙就由我來拿走吧！");
                }
            } else {
                cm.sendSimple("#r※目前南瓜有異常睡翻了，下次重啟我們會強迫他起床。#k\r\n巨大的南瓜正在睡覺呢！如果給它一些南瓜碎片去的話，它就會慢慢的醒過來\r\n#b#L1#我想要捐南瓜碎片\r\n" +
                    "#b#L2#查看南瓜甦醒進度");//
            }
        } else if (status == 1) {
            if (cm.getMapId() != map) {
                if (cm.haveItem(鑰匙, 1)) {
                    if (calculate(prob, 100) && !is持有) {
                        cm.gainItem(鑰匙, -1);
                        cm.warp(map);
                        cm.sendNext("夢裡面的南瓜正在睡覺呢！如果你帶一些南瓜碎片去的話，它就會慢慢的醒過來...說不定還會給你什麼意想不到的禮物呢！哈哈！");
                        cm.dispose();
                    } else {
                        if (is持有) {
                            cm.gainItem(持有, -1);
                        }
                        cm.gainItem(鑰匙, -1);
                        cm.sendNext("哦不！可怕的噩夢就要開始了，你夢見了鬼娃恰吉正在開始破壞萬聖節派對，並搶走孩子們的糖果！好好教訓他們，並把他們趕出去吧！")
                    }
                } else {
                    cm.sendOk("你的身上並沒有 #b #i" + 鑰匙 + ":##t" + 鑰匙 + "#。");
                    cm.dispose();
                    return;
                }
            } else {
                if (selection == 1) {
                    cm.sendGetNumber("那麼您要捐獻幾個 #b#i" + 碎片 + ":##t" + 碎片 + "##k 呢？ \r\n", 0, 0, max_pumpkin);
                } else if (selection == 2) {
                    cm.sendNext("來，請看。 因大家的踴躍南瓜慢慢動起來了。 \r\n#B" + cm.getPumpKinPercentage() + "#");
                    cm.safeDispose();
                }
            }
        } else if (status == 2) {
            if (cm.getMapId() != map) {
                var warpMap = cm.getNewMap(749050301);
                warpMap.resetFully();
                cm.getPlayer().changeMap(warpMap, warpMap.getPortal(0));
                cm.dispose();
                return;
            } else {
                var num = selection;
                if (!cm.haveItem(碎片, num) || num == 0) {
                    cm.sendOk("欺騙南瓜會被嚕毛咬的！");
                } else if (cm.gainPumpKin(num)) {
                    cm.gainItem(碎片, -num);
                    cm.sendOk("我不會忘記您的大恩大德的！！");
                } else {
                    cm.sendOk("此萬聖節南瓜已經達到極限值！");
                }
            }
            cm.dispose();
        }
    }
}

function calculate(prob, total) {
	if(prob < Math.floor(Math.random() * total)) return true;
	return false;
}