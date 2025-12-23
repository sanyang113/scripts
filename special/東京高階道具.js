var status = -1;
var sel = -1;
var chooseItem = -1;

var items1 = [
    [1302108,1302059],
    [1312040,1312031],
    [1322066,1322052],
    [1332082,1332050],
    [1372047,1372032],
    [1382063,1382036],
    [1402054,1402036],
    [1412036,1412026],
    [1422040,1422028],
    [1432051,1432038],
    [1442072,1442045],
    [1452063,1452044],
    [1462057,1462039],
    [1472078,1472051],
    [1482036,1482013],
    
];

var items2 = [
    [1302109,1302059],
    [1312041,1312031],
    [1322067,1322052],
    [1332083,1332049],
    [1372048,1372032],
    [1382064,1382036],
    [1402055,1402036],
    [1412037,1412026],
    [1422041,1422028],
    [1432052,1432038],
    [1442073,1442045],
    [1452064,1452044],
    [1462058,1462039],
    [1472079,1472051],
    [1482035,1482013],
    [1492031,1492013]
];

var requireItems1 = [
    [4032167,1],
    [4032171,1],
    [4032181,3000],
    [2250002,7]
];

var requireItems2 = [
    [4032168,1],
    [4032170,1],
    [4032181,3500],
    [2250002,7]
];

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
            var msg = "請問您要製作什麼裝備呢?\r\n";
            msg += "#b\r\n#L1#我要製作星之劍#l";
            msg += "#b\r\n#L2#我要製作焰之劍#l";
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            if(selection == 1) {
                var msg = "您要製作什麼呢？\r\n";
                for(var i = 0; i < items1.length; i++) {
                    msg += "\r\n#b#L" + i + "##i" + items1[i][0] + ":##t" + items1[i][0] + "#";
                }
            }else if(selection == 2) {
                var msg = "您要製作什麼呢？\r\n";
                for(var i = 0; i < items2.length; i++) {
                    msg += "\r\n#b#L" + i + "##i" + items2[i][0] + ":##t" + items2[i][0] + "#";
                }
            } else {
                cm.dispose();
                return;
            }
            cm.sendNext(msg);
            break;
        case 2:
            chooseItem = selection;
            if(sel == 1) {
                var msg = "#r#e製作裝備會有機率增加額外0~2卷軸次數以及附魔詞綴#k#n";
                msg += "\r\n製作#b#i" + items1[chooseItem] + ":##t" + items1[chooseItem] + "# 需要以下道具\r\n";
                msg += "\r\n#b#i" + items1[chooseItem][1] + ":##t" + items1[chooseItem][1] + "# x1";
                for(var i = 0; i < requireItems1.length; i++) {
                    msg += "\r\n#b#i" + requireItems1[i][0] + ":##t" + requireItems1[i][0] + "# x" + requireItems1[i][1];
                }
                msg += "\r\n\r\n#e您確定要製作嗎？";
                cm.sendYesNo(msg);
                break;
            }else if(sel == 2) {
                var msg = "製作#b#i" + items2[chooseItem] + ":##t" + items2[chooseItem] + "# 需要以下道具\r\n";
                msg += "\r\n#b#i" + items2[chooseItem][1] + ":##t" + items2[chooseItem][1] + "# x1";
                for(var i = 0; i < requireItems2.length; i++) {
                    msg += "\r\n#b#i" + requireItems2[i][0] + ":##t" + requireItems2[i][0] + "# x" + requireItems2[i][1];
                }
                msg += "\r\n您確定要製作嗎？";
                cm.sendYesNo(msg);
                break;
            }
            break;
        case 3:
            if(sel == 1) {
                var canMake = true;
                for(var i = 0; i < requireItems1.length; i++) {
                    if(!cm.haveItem(requireItems1[i][0],requireItems1[i][1])) {
                        canMake = false;
                    }
                }
                if(!cm.haveItem(items1[chooseItem][1])) {
                    canMake = false;
                }

                if(!canMake) {
                    cm.sendOk("很抱歉，您的材料不足！");
                    cm.dispose();
                    return;
                }
                if(!cm.canHold(items1[chooseItem][0])) {
                    cm.sendOk("很抱歉，您背包的空間不足！");
                    cm.dispose();
                    return;
                }

                var result = cm.makeTokyoEquip(items1[chooseItem][0]);

                if(!result) {
                    cm.sendOk("製作道具出現異常，請聯繫GM");
                    cm.dispose();
                    return;
                }

                for(var i = 0; i < requireItems1.length; i++) {
                    cm.gainItem(requireItems1[i][0],- requireItems1[i][1]);
                }
                cm.gainItem(items1[chooseItem][1],-1);
                cm.sendOk("製作完囉，請您收好");
                cm.dispose();
                return;
            } else if(sel == 2) {
                var canMake = true;
                for(var i = 0; i < requireItems2.length; i++) {
                    if(!cm.haveItem(requireItems2[i][0],requireItems2[i][1])) {
                        canMake = false;
                    }
                }
                if(!cm.haveItem(items2[chooseItem][1])) {
                    canMake = false;
                }

                if(!canMake) {
                    cm.sendOk("很抱歉，您的材料不足！");
                    cm.dispose();
                    return;
                }
                if(!cm.canHold(items2[chooseItem][0])) {
                    cm.sendOk("很抱歉，您背包的空間不足！");
                    cm.dispose();
                    return;
                }

                var result = cm.makeTokyoEquip(items2[chooseItem][0]);

                if(!result) {
                    cm.sendOk("製作道具出現異常，請聯繫GM");
                    cm.dispose();
                    return;
                }

                for(var i = 0; i < requireItems2.length; i++) {
                    cm.gainItem(requireItems2[i][0],- requireItems2[i][1]);
                }
                cm.gainItem(items2[chooseItem][1],-1);
                cm.sendOk("製作完囉，請您收好");
                cm.dispose();
                return;
            }
        default:
            cm.dispose();
            return;
    }
}