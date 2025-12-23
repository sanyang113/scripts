var status = -1;
var selects = ['[贊助]點數兌換', '[贊助]贊助連結', '[贊助]當日滿額', '[贊助]限時搶購','[贊助]熱門商品'];

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
            var msg = "  #fUI/UIWindow/9DDesign/Menu/top/捐獻專區#\r\n";	//取得LOGO
            msg += "    #fUI/UIWindow/9DDesign/Menu/Float/3#   " + formatDigits(cm.getPlayer().getDonate()) + "\r\n\r\n";  //贊助積分
            msg += "#L1##fUI/UIWindow/9DDesign/Menu/捐獻專區/1##l";
            msg += "#L0##fUI/UIWindow/9DDesign/Menu/捐獻專區/0##l";
            //msg += "#L2##fUI/UIWindow/9DDesign/Menu/捐獻專區/2##l";
            // msg += "#L3##fUI/UIWindow/9DDesign/Menu/捐獻專區/3##l";
            msg += "#L4##fUI/UIWindow/9DDesign/Menu/捐獻專區/6##l";
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

function formatDigits(digits) {
    var digitsArray = digits.toString().split('');

    var result = digitsArray.map(function(digit) {
        return '#fUI/UIWindow/9DDesign/Menu/Float/Number/' + digit + '#';
    }).join('');

    return result;
}