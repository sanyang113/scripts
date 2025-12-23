load('nashorn:mozilla_compat.js');
importPackage(Packages.server);

var current = 0;
var status = -1;

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
            var msg = "目前查看字型：\r\n";
            for(var j = 0; j < 10; j++) {
                var chooseItem = j + current * 10;
                if(MapleItemInformationProvider.getInstance().itemExists(2435000 + chooseItem)) {
                    msg += "#b#i" + (2435000 + chooseItem) + ":##t" + (2435000 + chooseItem) + "#(" + (2435000 + chooseItem) + ")#k\r\n\r\n";
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
                    msg += "#fEffect/BasicEff/NoRed0_" + chooseItem + "/Miss#\r\n";
                }
            }
            current++;
            status--;
            cm.sendOk(msg);
            break;
        default:
            cm.dispose();
            return;
    }
}