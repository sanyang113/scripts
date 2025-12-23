var status = -1;
var sel = -1;
var selType = -1;
var scrollType = [
    ["    頭盔    ",0],
    ["    臉部    ",1],
    ["    眼部    ",2],
    ["    耳環    ",3],
    ["    上衣    ",4],
    ["    套服    ",5],
    ["    褲裙    ",6],
    ["    鞋子    ",7],
    ["    手套    ",8],
    ["    盾牌    ",9],
    ["    披風    ",10],
    ["    戒指    ",11],
    ["    項鍊    ",12],
    ["    腰帶    ",13],
    ["   單手劍   ",30],
    ["   單手斧   ",31],
    ["   單手棍   ",32],
    ["    短劍    ",33],
    ["    短杖    ",37],
    ["    長杖    ",38],
    ["   雙手劍   ",40],
    ["   雙手斧   ",41],
    ["   雙手棍   ",42],
    ["     槍     ",43],
    ["     矛     ",44],
    ["     弓     ",45],
    ["     弩     ",46],
    ["    拳套    ",47],
    ["    指虎    ",48],
    ["    火槍    ",49],
    ["   附魔石   ",92],
    ["  混沌卷軸  ",93],
    [" 能力轉移卷 ",94],
    ["  寵物卷軸  ",80],
    ["  白衣卷軸  ",90],
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
            var msg = "請選擇想取出的卷軸項目：\r\n\r\n";
            var separate = 0;
            for(var i = 0; i < scrollType.length; i++) {
                msg += "#L" + i + "##b#e" + scrollType[i][0];
                separate++;
                if(separate == 3) {
                    msg += "\r\n\r\n";
                    separate = 0;
                }
            }
            cm.sendNext(msg);
            break;
        case 1:
            if(selection != -1) {
                selType = selection;
            }
            var msg = "請選擇想取出的卷軸：\r\n";
            var input = 20400 + scrollType[selType][1];
            var msg2 = cm.getScrollStorage().SearchItems(cm.getPlayer(), input);
            if (msg2 == null) {
                cm.sendOk("您沒有可以領取的道具。");
                cm.dispose();
                return;
            }
            var msg3 = "\r\n\r\n===============功能選單================";
            msg3 += "\r\n#L999##b我要一鍵領取此類卷軸";
            cm.sendNext(msg + msg2 + msg3);
            break;
        case 2:
            sel = selection;
            if(sel == 999) {
                cm.sendYesNo("您確定要一鍵取出嗎？");
                break;
            }
            cm.sendGetNumber("請輸入您想領出的數量", 1, 1, 100);
            break;
        case 3:
            if(sel == 999) {
                var input = 20400 + scrollType[selType][1];
                var ret = cm.getScrollStorage().RemoveAll(cm.getPlayer(), input);
                cm.sendOk(ret);
                cm.dispose();
                return;
            }

            if(!cm.haveSpace(2)) {
                cm.sendOk("提出卷軸請確認背包其他欄位是否有一格以上空間");
                cm.dispose();
                return;
            }

            var msg = cm.getScrollStorage().RemoveItem(cm.getPlayer(), sel, selection);
            if (msg != null) {
                cm.sendOk(msg);
                cm.dispose();
                return;
            }
            cm.sendOk("道具領取完成。");
            status = 0;
            break;
        default:
            cm.dispose();
            return;
    }
}