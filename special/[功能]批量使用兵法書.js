var status = -1;
var sel = -1;
var num = -1;
var level = -1;

var items = [
    [2370000, 100000],
    [2370001, 50000],
    [2370002, 30000],
    [2370003, 20000],
    [2370004, 10000],
    [2370005, 5000],
    [2370006, 3000],
    [2370007, 2000],
    [2370008, 1000],
    [2370009, 500],
    [2370010, 300],
    [2370011, 200],
    [2370012, 100],

    [2370013, 100000],
    [2370014, 50000],
    [2370015, 30000],
    [2370016, 20000],
    [2370017, 10000],
    [2370018, 5000],
    [2370019, 3000],
    [2370020, 2000],
    [2370021, 1000],
    [2370022, 500],
    [2370023, 300],
    [2370024, 200],
    [2370025, 100],
]

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            level = cm.getPlayer().getLevel();
            if(level < 10) {
                cm.sendOk("使用此功能等級必須達到10等以上唷！");
                cm.dispose();
                return;
            }

            var msg = "您想要批量使用兵法書嗎，請選擇想使用的兵法書\r\n\r\n";
            for(var i = 0; i < items.length; i++) {
                msg += "#L" + i + "##b#i" + items[i][0] + ":##t" + items[i][0] + "##k\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var msg = "您選擇了#b#i" + items[sel][0] + ":##t" + items[sel][0] + "##k，請輸入您想使用的數量";
            cm.sendGetNumber(msg, 1, 1, 1000);
            break;
        case 2:
            if(level < 10) {
                cm.sendOk("使用此功能等級必須達到10等以上唷！");
                cm.dispose();
                return;
            }

            num = selection;
            if(!cm.haveItem(items[sel][0], num)) {
                cm.sendOk("很抱歉，您沒有足夠的#b#i" + items[sel][0] + ":##t" + items[sel][0] + "##k唷！");
                cm.dispose();
                return;
            }
            var rate = 2;
            if(level < 120) rate = 3;
            if(level < 70) rate = 4; 

            cm.gainItem(items[sel][0], -num);
            cm.gainExp(items[sel][1] * num * rate);
            cm.sendOk("幫您兌換完畢囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}