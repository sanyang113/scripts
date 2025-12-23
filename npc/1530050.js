var status = -1;
var selects = ["首捐禮包", "點數兌換", "滿額禮包", '禮包專區', '斗內連結', '簽到通行證', '當日滿額', '椅子兌換', '傷害字型兌換', '強化卯咪永恆墜飾','紫色楓葉武器領取','特殊經驗掉寶兌換'];
// var selects = ["首捐禮包", "點數兌換", "滿額禮包", '禮包專區', '斗內連結', '簽到通行證', '當日滿額', '椅子兌換', '傷害字型兌換', '強化卯咪永恆墜飾'];
//var selects = ["首捐禮包", "點數兌換", "累積捐獻", "每月捐獻","排行獎勵"];

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

    if(cm.checkTempStatus()) {
        cm.sendOk("臨時密碼無法使用此功能唷！");
        cm.dispose();
        return;
    }
    

    switch(status) {
        case 0:
            var msg = "本喵是負責幫喵咪天皇收捐獻罐罐積分的偉大代理喵喵！捐獻相關的項目都可以跟本喵說！";
            var playerName = cm.getPlayer().getName();
            msg += "\r\n\r\n#e        #b" + playerName + "#k目前擁有的捐獻罐罐： " + cm.getPlayer().getDonate();
            msg += "\r\n#e        #b" + playerName + "#k目前累積的捐獻罐罐： " + cm.getPlayer().getTotalDonate();
            msg += "#n\r\n";
            var count = 0;
            for(var i = 0; i < selects.length; i++) {
                var append = selects[i];
                if (append.length < 8) {
                    var missingLength = 8 - append.length;
                    for (var j = 0; j < missingLength; j++) {
                        append += '  ';
                    }
                }
                msg += "#L" + i + "##i5240035##b" + append;
                count++;
                if(count >= 2) {
                    msg += "\r\n";
                    count = 0;
                }
                
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(), selects[selection]);
            break;
        default:
            cm.dispose();
    }
}