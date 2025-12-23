var status = -1;
var sel = -1;
var selItem = -1;
var selHp = -1;
var maxHp = 99999;

var items = [
    2000004, 2000005, 2002021, 2002022, 2002023, 2002025, 2022015,
    2012005, 2002029,
    2000000, 2000001, 2000002,
    2022003, 
    2001000, 2020028, 2001001, 
    2020012, 2020013,  
    2010000, 2010001, 2010002, 
    2020001, 2020002, 2020003, 2020004, 2020005, 2020006, 2020007, 2020008, 2022018,
    2000007, 2000008, 2000009,

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
            var msg = "我是山羊谷自動補血小幫手";
                msg += "\r\n每次觸發使用藥劑僅會使用#r#e 1個 #k#n"
                msg += "\r\n若使用太小瓶的藥水與強大的怪物作戰可能有死亡的風險"
            msg += "\r\n================================================";
            var itemid = cm.getPlayer().getHpHelper();
            var hpTrigger = cm.getPlayer().getHpHelperTrigger();
            if(itemid == -1||itemid == 0) {
                msg += "\r\n#b目前暫無使用自動補血#k";
            } else {
                msg += "\r\n目前使用的藥劑為:#b#i" + itemid + ":##t" + itemid + "##k"
                msg += "\r\n觸發自動補血血量#b: " + hpTrigger + " HP#k";
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
            } else if(sel == 2) {
                cm.cancelHpHelper();
                cm.sendOk("已經幫您取消自動補血囉！");
                cm.dispose();
                return;
            } else if(sel == 3) {
                cm.cancelPetPotion(1);
                cm.sendOk("幫您取消寵物自動補血囉！");
                cm.dispose();
                return;
            }
        case 2:
            selItem = items[selection];
            var msg = "請輸入觸發補血的血量(請輸入1~" + maxHp + "之間):";
            cm.sendGetNumber(msg, 1, 1, maxHp);
            break;
        case 3:
            selHp = selection;
            cm.setHpHelper(selItem, selHp);
            cm.sendOk("已經幫您設定完成囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

