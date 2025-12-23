var status = -1;

var ClearText = "";
var ClearUp = 0;
var ClearTitle = Array("裝備", "消耗", "裝飾", "其他", "特殊");
var slot = Array();
var startnum = 0;
var endnum = 0;

var selects = -1;

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
    
    var msg = "  #fUI/UIWindow/9DDesign/Menu/top/販賣道具#\r\n";	//取得LOGO
    switch(status) {
        case 0:
            for(var i = 0; i < 2; i++) {
                msg += "#L" + i + "##fUI/UIWindow/9DDesign/Menu/販賣道具/" + i + "##l";
            }
            cm.sendNext(msg);
            break;
        case 1:
            if(selection == 0) {
                cm.dispose();
                cm.openNpc(cm.getNpc(),"[功能]販賣道具");
            } else {
                cm.dispose();
                cm.openNpc(cm.getNpc(),"[功能]買回道具");
            }
            break;
        default:
            cm.dispose();
            return;
    }
}



function Sell(mode, type, selection) {
    switch(status) {
        case 1:
            ClearText = "";
            for (var i = 0; i < ClearTitle.length; i++) {
                ClearText += "\r\n#b#L" + i + "#" + ClearTitle[i] + "#l#k";
            }
            cm.sendSimple("選擇販賣的道具種類!!" + ClearText);
            break;
        case 2:
            ClearText = ClearTitle[selection];
            switch (ClearText) {
            case '裝備':
                ClearUp = 1;
                break;
            case '消耗':
                ClearUp = 2;
                break;
            case '裝飾':
                ClearUp = 3;
                break;
            case '其他':
                ClearUp = 4;
                break;
            case '特殊':
                ClearUp = 5;
                break;
            }
            var avail = "";
            var dd = 0;
            for (var i = 0; i <= 96; i++) {
                if (cm.getInventory(ClearUp).getItem(i) != null) {
                    var itemId = cm.getInventory(ClearUp).getItem(i).getItemId();
                    if (itemId == null) {
                        i++; //防止下一步錯誤
                    }
                    avail += "#L" + Math.abs(i) + "##i" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##z" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##l\r\n";
                } else {
                    dd++;
                }
                slot.push(i);
            }
            if (dd == 97) {
                cm.sendNext(ClearText + "沒有任何道具可以販賣!");
                cm.dispose();
                return;
            }
            cm.sendSimple("想要從哪裡開始販賣呢??\r\n#b" + avail);
            break;
        case 3:
            startnum = selection;
            var avail = "";
            for (var i = startnum; i <= 96; i++) {
                if (cm.getInventory(ClearUp).getItem(i) != null) {
                    avail += "#L" + Math.abs(i) + "##i" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##z" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##l\r\n";
                }
                slot.push(i);
            }
            cm.sendSimple("想要從哪裡結束販賣呢??\r\n#b" + avail);
            break;
        case 4:
            endnum = selection;
            cm.dispose();
            cm.processCommand("@sell " + ClearText + " " + startnum + " " + endnum);
            break;
        default:
            cm.dispose();
            return;
    }
}

function NSell(mode, type, selection) {

    switch(status) {
        case 2:
            var avail = "";
            var dd = 0;
            ClearUp = 1;
            for (var i = 0; i < 96; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
                    var itemId = cm.getInventory(ClearUp).getItem(i).getItemId();
                    if (itemId == null) {
                        i++; //防止下一步錯誤
                    }
                    avail += "#L" + Math.abs(i) + "##i" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##z" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##l\r\n";
                } else {
                    dd++;
                }
                slot.push(i);
            }
            if (dd == 96) {
                cm.sendNext(ClearText + "沒有任何道具可以販賣!");
                cm.dispose();
                return;
            }
            cm.sendSimple("想要從哪裡開始販賣呢??\r\n#b" + avail);
            break;
        case 3:
            startnum = selection;
            var avail = "";
            for (var i = startnum; i < 96; i++) {
                if (cm.getInventory(ClearUp).getItem(i) != null) {
                    avail += "#L" + Math.abs(i) + "##i" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##z" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##l\r\n";
                }
                slot.push(i);
            }
            cm.sendSimple("想要從哪裡結束販賣呢??\r\n#b" + avail);
            break;
        case 4:
            endnum = selection;
            cm.dispose();
            cm.processCommand("@nsell " + startnum + " " + endnum);
            break;
        default:
            cm.dispose();
            return;
    }
}