var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var makeQty = 1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;

    if (status == 0) {
        if (cm.isQuestActive(3821)) {
            cm.forceCompleteQuest(3821);
            cm.sendNext("任務完成。");
            cm.dispose();
            return;
        }
        var selStr = "我是個多才多藝的人。跟我說說你想要什麼東西。 #b";
        var options = ["製藥", "製造卷軸"];
        for (var i = 0; i < options.length; i++) {
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }
        cm.sendSimple(selStr);

    } else if (status == 1) {
        selectedType = selection;
        var selStr = "你想要什麼？#b";
        var items;

        if (selectedType == 0) { // 製藥
            items = ["#t2022145#", "#t2022146#", "#t2022147#", "#t2022148#", "#t2022149#", "#t2022150#", "#t2050004#", "#t4031554##k"];
        } else if (selectedType == 1) { // 製造卷軸
            items = [
                "#t2043000#", "#t2043100#", "#t2043200#", "#t2043300#",
                "#t2043700#", "#t2043800#", "#t2044000#", "#t2044100#",
                "#t2044200#", "#t2044300#", "#t2044400#", "#t2044500#",
                "#t2044600#", "#t2044700#", "#t2044800#", "#t2044900##k"
            ];
        } else {
            cm.dispose();
            return;
        }

        for (var i = 0; i < items.length; i++) {
            selStr += "\r\n#L" + i + "# " + items[i] + "#l";
        }
        cm.sendSimple(selStr);

    } else if (status == 2) {
        selectedItem = selection;

        if (selectedType == 0) { // 製藥
            var itemSet = [2022145, 2022146, 2022147, 2022148, 2022149, 2022150, 2050004, 4031554];
            var matSet = [
                [2022116],
                [2022116],
                [4000281, 4000293],
                [4000276, 2002005],
                [4000292, 4000288],
                [4000295],
                [2022131, 2022132],
                [4000286, 4000287, 4000293]
            ];
            var matQtySet = [
                [3],
                [3],
                [10, 10],
                [20, 1],
                [20, 20],
                [10],
                [1, 1],
                [20, 20, 20]
            ];
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];

        } else if (selectedType == 1) { // 製造卷軸
            var itemSet = [
                2043000, 2043100, 2043200, 2043300,
                2043700, 2043800, 2044000, 2044100,
                2044200, 2044300, 2044400, 2044500,
                2044600, 2044700, 2044800, 2044900
            ];
            item = itemSet[selectedItem];
            mats = [4001124, 4010001];
            matQty = [100, 10];
        }

        var prompt = "你想要製作 #t" + item + "#。\r\n請輸入你想製作的數量：";
        cm.sendGetNumber(prompt, 1, 1, 100); // 預設 1，最少 1，最多 100

    } else if (status == 3) {
        makeQty = selection;

        var prompt = "你想要製作 #r" + makeQty + " 個#k #t" + item + "#。\r\n所需材料如下：#b";
        for (var i = 0; i < mats.length; i++) {
            prompt += "\r\n#i" + mats[i] + "# " + (matQty[i] * makeQty) + " #t" + mats[i] + "#";
        }
        cm.sendYesNo(prompt);

    } else if (status == 4) {
        var complete = true;

        // 檢查材料是否足夠
        for (var i = 0; i < mats.length; i++) {
            if (!cm.haveItem(mats[i], matQty[i] * makeQty)) {
                complete = false;
                break;
            }
        }

        if (!complete) {
            cm.sendOk("你好像沒有足夠的材料。");
            cm.dispose();
            return;
        }

        if (!cm.canHold(item, makeQty)) {
            cm.sendOk("請確認你的背包是否有足夠的空間。");
            cm.dispose();
            return;
        }

        // 扣除材料
        for (var i = 0; i < mats.length; i++) {
            cm.gainItem(mats[i], -matQty[i] * makeQty);
        }

        cm.gainItem(item, makeQty);
        cm.sendOk("製作完成！你獲得了 #b" + makeQty + " 個#k #t" + item + "#。");
        cm.dispose();
    }
}
