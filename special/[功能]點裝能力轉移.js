var status = -1;
var item1 = -1;
var item2 = -1;

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
            var msg = "請選擇您想要移轉的裝備";
            var data = cm.selectEquipmentCashAll();
            if(data == null) {
                cm.sendOk("使用此功能可以將您身上具有能力值的點裝進行移轉唷！");
                cm.dispose();
                return;
            }
            cm.sendNext(msg + "\r\n" + data);
            break;
        case 1:
            var pos = selection;
            item1 = cm.getItem(1, pos);
            var data = cm.selectEquipmentCash(item1.getItemId(), pos);
            if(data == null) {
                cm.sendOk("您身上未具有可移轉的目標裝備");
                cm.dispose();
                return;
            }
            cm.sendNext("請選擇欲移轉的裝備\r\n\r\n" + data);
            break;
        case 2:
            var pos = selection;
            item2 = cm.getItem(1, pos);
            var msg = "您要將#b#i" + item1.getItemId() + ":##t" + item1.getItemId() + "##k 的能力值\r\n";
            msg += "移轉到 #b#i" + item2.getItemId() + ":##t" + item2.getItemId() + "##k嗎？";
            msg += "\r\n以下為轉移後結果 => #b#i" + item2.getItemId() + ":##t" + item2.getItemId() + "##k\r\n";
            if(item1.getStr() != 0) msg += "力量: +" + item1.getStr() + "\r\n";
            if(item1.getDex() != 0) msg += "敏捷: +" + item1.getDex() + "\r\n";
            if(item1.getInt() != 0) msg += "智力: +" + item1.getInt() + "\r\n";
            if(item1.getLuk() != 0) msg += "幸運: +" + item1.getLuk() + "\r\n";
            if(item1.getWatk() != 0) msg += "攻擊力: +" + item1.getWatk() + "\r\n";
            if(item1.getMatk() != 0) msg += "魔法攻擊力: +" + item1.getMatk() + "\r\n";
            if(item1.getHp() != 0) msg += "HP: +" + item1.getHp() + "\r\n";
            if(item1.getMp() != 0) msg += "MP: +" + item1.getMp() + "\r\n";
            if(item1.getAcc() != 0) msg += "命中率: +" + item1.getAcc() + "\r\n";
            if(item1.getAvoid() != 0) msg += "迴避率: +" + item1.getAvoid() + "\r\n";
            if(item1.getSpeed() != 0) msg += "移動速度: +" + item1.getSpeed() + "\r\n";
            if(item1.getJump() != 0) msg += "跳躍力: +" + item1.getJump() + "\r\n";
            if(item1.getWdef() != 0) msg += "防禦力: +" + item1.getWdef() + "\r\n";
            if(item1.getMdef() != 0) msg += "魔法防禦力: +" + item1.getMdef() + "\r\n";
            msg += "==========================================\r\n";
            msg += "以下為轉移後結果 => #b#i" + item1.getItemId() + ":##t" + item1.getItemId() + "##k\r\n";
            if(item2.getStr() != 0) msg += "力量: +" + item2.getStr() + "\r\n";
            if(item2.getDex() != 0) msg += "敏捷: +" + item2.getDex() + "\r\n";
            if(item2.getInt() != 0) msg += "智力: +" + item2.getInt() + "\r\n";
            if(item2.getLuk() != 0) msg += "幸運: +" + item2.getLuk() + "\r\n";
            if(item2.getWatk() != 0) msg += "攻擊力: +" + item2.getWatk() + "\r\n";
            if(item2.getMatk() != 0) msg += "魔法攻擊力: +" + item2.getMatk() + "\r\n";
            if(item2.getHp() != 0) msg += "HP: +" + item2.getHp() + "\r\n";
            if(item2.getMp() != 0) msg += "MP: +" + item2.getMp() + "\r\n";
            if(item2.getAcc() != 0) msg += "命中率: +" + item2.getAcc() + "\r\n";
            if(item2.getAvoid() != 0) msg += "迴避率: +" + item2.getAvoid() + "\r\n";
            if(item2.getSpeed() != 0) msg += "移動速度: +" + item2.getSpeed() + "\r\n";
            if(item2.getJump() != 0) msg += "跳躍力: +" + item2.getJump() + "\r\n";
            if(item2.getWdef() != 0) msg += "防禦力: +" + item2.getWdef() + "\r\n";
            if(item2.getMdef() != 0) msg += "魔法防禦力: +" + item2.getMdef() + "\r\n";

            cm.sendYesNo(msg);
            break;
        case 3:
            /*
                //這邊可以寫消耗成本檢核
                if(!cm.haveItem(2250002, 1)) {
                    cm.sendOk("請確認身上是否有轉移材料");
                    cm.dispose();
                    return;
                }
            */
                //這邊可以寫額外檢核項目，某某道具不可以使用轉移
                if(item1.getItemId() >= 1145000 && item1.getItemId() <=1145023 || item1.getItemId() == 1122060 || item1.getItemId() == 1122059  || item1.getItemId() == 1132308 ||
                   item2.getItemId() >= 1145000 && item2.getItemId() <=1145023 || item2.getItemId() == 1122060 || item2.getItemId() == 1122059  || item2.getItemId() == 1132308){
                    cm.sendOk("很抱歉，此道具無法使用轉移");
                    cm.dispose();
                    return;
                }

           
            var result = cm.transferCashAbility(item1, item2);
            if(result != null) {
                cm.sendOk(result);
                cm.dispose();
                return;
            }
            /*
                轉移完成扣除消耗成本
                cm.gainItem(2250002, -1);
            */
            cm.sendOk("轉移完成囉");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}