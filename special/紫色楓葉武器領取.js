var medalItem = 1142750;
var status = -1;
var items = [
    1302212,1302227,1312114,1312116,1322154,1322162,1332186,1332193,1372131,1372139,1382160,
    1382168,1402145,1402151,1412102,1412104,1422105,1422107,1432135,1432138,1442173,1442182,
    1452165,1452170,1462156,1462159,1472177,1472179,1482138,1482140,1492138,1492152
]

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

    switch(status) {
        case 0:
            var msg = "若您有#b#i" + medalItem + ":##t" + medalItem + "##k的話，可以領取以下物品唷！";
            for(var i = 0; i < items.length; i++) {
                msg += "\r\n#L" + i + "##b#i" + items[i] + ":##t" + items[i] + "##k";
            }
            cm.sendNext(msg);
            break;
        case 1:
            if(!cm.haveItem(medalItem, 1)) {
                cm.sendOk("很抱歉，您沒有#b#i" + medalItem + ":##t" + medalItem + "##k唷，或是請先將勳章卸下裝備欄位！");
                cm.dispose();
                return;
            }
            cm.gainItem(items[selection], 1);
            cm.sendOk("幫您兌換囉，請收下！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}