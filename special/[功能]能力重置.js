var status = -1;
var sel = -1;
var transfer = -1;
var useItem = 5050000;
var qty = -1;
var abilities = [
    "力量","敏捷","智慧","幸運"
]

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
            var msg = "使用#b#i" + useItem + ":##t" + useItem + "##k 可以幫您重置能力值，請先選擇想要『降低』的屬性";
            for(var i = 0; i < abilities.length; i++) {
                msg += "\r\n#L" + i + "##b" + abilities[i];
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var msg = "請選擇要將能力『增加』到哪個屬性上";
            for(var i = 0; i < abilities.length; i++) {
                if(sel != i) {
                    msg += "\r\n#L" + i + "##b" + abilities[i];
                }
            }
            cm.sendNext(msg);
            break;
        case 2:
            transfer = selection;
            var msg = "將『" + abilities[sel] + "』轉移到『" + abilities[transfer] + "』，您要轉移多少點呢？";
            msg += "#r#e※被扣除的屬性不得低於4以下#k#n";
            cm.sendGetNumber(msg, 1, 1, 1000);
            break;
        case 3:
            qty = selection;
            var msg = "您確定要將『" + abilities[sel] + "』轉移到『" + abilities[transfer] + "』，並總共轉移" + qty + "點，您確定嗎？";
            cm.sendYesNo(msg);
            break;
        case 4:
            if(!cm.haveItem(useItem, qty)) {
                cm.sendOk("很抱歉，您沒有足夠的#b#i" + useItem + ":##t" + useItem + "##k");
                cm.dispose();
                return;
            }
            var removeAbility = -1;
            if(sel == 0) {
                removeAbility = cm.getPlayer().getStr();
            } else if(sel == 1) {
                removeAbility = cm.getPlayer().getDex();
            } else if(sel == 2) {
                removeAbility = cm.getPlayer().getInt();
            } else if(sel == 3) {
                removeAbility = cm.getPlayer().getLuk();
            } else {
                cm.sendOk("發生異常，請連續GM");
                cm.dispose();
                return;
            }

            if(removeAbility - qty < 4) {
                cm.sendOk("很抱歉，您不能將『" + abilities[sel] + "』扣除至4以下！");
                cm.dispose();
                return;
            }

            cm.gainItem(useItem, -qty);
            setAbility(sel, -qty);
            setAbility(transfer, qty);
            cm.getPlayer().getStat().recalcLocalStats();
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

function setAbility(selects, change) {
    if(selects == 0) {
        cm.getPlayer().setStr(cm.getPlayer().getStr() + change);
    } else if(selects == 1) {
        cm.getPlayer().setDex(cm.getPlayer().getDex() + change);
    } else if(selects == 2) {
        cm.getPlayer().setInt(cm.getPlayer().getInt() + change);
    } else if(selects == 3) {
        cm.getPlayer().setLuk(cm.getPlayer().getLuk() + change);
    }
}