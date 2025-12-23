var status = -1;
var sel = -1;
var selItem = -1;
var selMp = -1;
var maxMp = 99999;

var items = [
    2000004, 2000005, 2002020, 2002022, 2002023, 2002024, 2022015,
    2012006, 2002029,
    2000003, 2000006,
    2022000,
    2001000, 2020028,  2001002,
    2020014, 2020015,
    2010003, 2010004,
    2020000, 2020002,
    2020009, 2020010, 
    2000010, 2000011, 
]

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else if (mode === 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            var msg = "我是山羊谷自動補魔小幫手";
                msg += "\r\n每次觸發使用藥劑僅會使用#r#e 1個 #k#n"
                msg += "\r\n若使用太小瓶的藥水與強大的怪物作戰可能有死亡的風險"
            msg += "\r\n================================================";
            var itemid = cm.getPlayer().getMpHelper();
            var mpTrigger = cm.getPlayer().getMpHelperTrigger();
            if(itemid == -1||itemid == 0) {
                msg += "\r\n#b目前暫無使用自動補魔#k";
            } else {
                msg += "\r\n目前使用的藥劑為:#b#i" + itemid + ":##t" + itemid + "##k"
                msg += "\r\n觸發自動補魔魔量#b: " + mpTrigger + " MP#k";
            }
            msg += "\r\n================================================";
            msg += "\r\n#L1##b我要設定自動藥劑使用\r\n#L2#我要取消自動藥劑使用\r\n#L3#我要取消寵物自動藥劑使用(換頻生效)";
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            if(sel == 1) {
                var msg = "請問您要使用什麼藥劑呢？\r\n";
                for(var i = 0; i < items.length; i++) {
                    msg += "\r\n#L" + i + "##b#i" + items[i] + ":##t" + items[i] + "#";
                }
                cm.sendNext(msg);
                break;
            } else if(sel == 2){
                cm.cancelMpHelper();
                cm.sendOk("已經幫您取消自動補魔囉！");
                cm.dispose();
                return;
            } else if(sel == 3) {
                cm.cancelPetPotion(2);
                cm.sendOk("幫您取消寵物自動補魔囉！");
                cm.dispose();
                return;
            }
        case 2:
            selItem = items[selection];
            var msg = "請輸入觸發補魔的魔量(請輸入1~" + maxMp + "之間):";
            cm.sendGetNumber(msg, 1, 1, maxMp);
            break;
        case 3:
            selMp = selection;
            cm.setMpHelper(selItem, selMp);
            cm.sendOk("已經幫您設定完成囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}