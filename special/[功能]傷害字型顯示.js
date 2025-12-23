load('nashorn:mozilla_compat.js');
importPackage(Packages.server);

var status = -1;
var keyword = false;

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
            var msg = "請選擇想查看的字型分頁\r\n"
            msg += "#r若不想查看請點選左下方停止對話#k\r\n"
            for(var i = 0; i <= 7; i++) {
                msg += "#L" + i + "# 第 " + (i+1) + " 頁#l#k\r\n";
            }
            msg += "\r\n#L999##b關鍵字搜尋#k\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            if(selection == 999 || keyword) {
                cm.sendGetText("請輸入關鍵字進行搜尋：");
                keyword = true;
                break;
            }
            var page = selection;
            var msg = "請選擇字型\r\n";
            for(var i = 0; i <= 100; i++) {
                var itemNumber = 2435000 + i +(page*100);
                if(MapleItemInformationProvider.getInstance().itemExists(itemNumber)) {
                    msg += "#L" + (i+page*100) + "##b#i" + itemNumber + ":##t" + itemNumber + "##l#k\r\n";
                }
            }
            cm.sendNext(msg);
            break;
        case 2:
            if(keyword) {
                var text = cm.getText();
                var result = cm.searchKeywordBetween(text, 2435000, 2435999);
                if(result.length == 0) {
                    cm.sendOk("沒有匹配的項目唷！");
                    cm.dispose();
                    return;
                }
                var msg = "請選擇以下搜尋結果：\r\n";
                for(var i = 0; i < result.length; i++) {
                    msg += "#L" + result[i] + "##b#i" + result[i] + ":##t" + result[i] + "##l#k\r\n";
                }
                cm.sendNext(msg);
                break;
            }
            var chooseItem = selection;
            var msg = "目前查看字型為 #b#i" + (2435000 + chooseItem) + ":##t" + (2435000 + chooseItem) + "##k\r\n\r\n";
            msg += "沒爆擊字型：\r\n";
            for(var i = 0; i <= 9; i++) {
                msg += "#fEffect/BasicEff/NoRed0_" +  chooseItem + "/"+ i +"#  ";
                if(i == 4) msg += "\r\n";
            }
            msg += "\r\n\r\n有爆擊字型：\r\n";
            for(var i = 0; i <= 9; i++) {
                msg += "#fEffect/BasicEff/NoCri0_" + chooseItem + "/"+ i +"#  ";
                if(i == 4) msg += "\r\n";
            }
            msg += "\r\n\r\n爆擊圖示：\r\n"
            msg += "#fEffect/BasicEff/NoCri1_" + chooseItem + "/effect#";
            msg += "\r\n\r\nMISS圖示：\r\n"
            msg += "#fEffect/BasicEff/NoRed0_" + chooseItem + "/Miss#";
            cm.sendOk(msg);
            status = -1;
            break;
        case 3:
            if(keyword) {
                var chooseItem = selection - 2435000;
                var msg = "目前查看字型為 #b#i" + (2435000 + chooseItem) + ":##t" + (2435000 + chooseItem) + "##k\r\n\r\n";
                msg += "沒爆擊字型：\r\n";
                for(var i = 0; i <= 9; i++) {
                    msg += "#fEffect/BasicEff/NoRed0_" +  chooseItem + "/"+ i +"#  ";
                    if(i == 4) msg += "\r\n";
                }
                msg += "\r\n\r\n有爆擊字型：\r\n";
                for(var i = 0; i <= 9; i++) {
                    msg += "#fEffect/BasicEff/NoCri0_" + chooseItem + "/"+ i +"#  ";
                    if(i == 4) msg += "\r\n";
                }
                msg += "\r\n\r\n爆擊圖示：\r\n"
                msg += "#fEffect/BasicEff/NoCri1_" + chooseItem + "/effect#";
                msg += "\r\n\r\nMISS圖示：\r\n"
                msg += "#fEffect/BasicEff/NoRed0_" + chooseItem + "/Miss#";
                cm.sendOk(msg);
                keyword = false;
                status = -1;
                break;
            }
        default:
            cm.dispose();
            return;
    }
}