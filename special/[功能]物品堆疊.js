var status = -1;

var items = [
    5072000,5073000,5074000,5076000,5077000,5560000,5561000,5040000,5041000,
    5121014,5220040,5230000,5050000,5050001,5050002,5050003,
    5050004,5060001,5520000,5130000,5350000,
];

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
            var msg = "透過此功能可將同一項目進行堆疊，目前可堆疊的物品如下方所示：\r\n";
            for(var i = 0; i < items.length; i++) {
                msg += "#i" + items[i] + "# ";
            }
            msg += "\r\n#r#e※請注意，堆疊後數量無法再次拆開，若有要部份放置分身的物品請勿進行堆疊#k#n";
            msg += "\r\n====================================================="
            msg += "\r\n請選擇您想堆疊的項目：\r\n";
            var description = "";
            for(var i = 0; i < items.length; i++) {
                if(cm.canStackItem(items[i])) {
                    description += "#L" + i + "##i" + items[i] + "##l";
                }
            }
            if(description == "") {
                cm.sendOk("很抱歉，您目前沒有可堆疊的物品");
                cm.dispose();
                return;
            }
            description += "\r\n#L9999##b我要堆疊所有物品";
            cm.sendNext(msg + description);
            break;
        case 1:
            if(selection == 9999) {
                for(var i = 0; i < items.length; i++) {
                    if(cm.canStackItem(items[i])) {
                        var item = items[i];
                        cm.stackItem(item);
                    }
                }
                cm.sendOk("所有物品已經堆疊完畢囉！");
                cm.dispose();
                return;
            }
            var item = items[selection];
            cm.stackItem(item);
            cm.sendOk("堆疊完畢");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}