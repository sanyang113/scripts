/* global cm */

var status = -1;

var selects = ["[萬能選單]常用指令","[萬能選單]販賣道具","[萬能選單]外觀設定","[萬能選單]移動相關","[萬能選單]訊息查詢","[萬能選單]開關設定","[萬能選單]能力值相關","[萬能選單]活動專區","[萬能選單]其他功能","[萬能選單]贊助專區"];

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
	
	var msg = "    #fUI/UIWindow/9DDesign/Menu/logo#\r\n\r\n";	//取得LOGO
	switch(status) {
		case 0:
			msg += "    #fUI/UIWindow/9DDesign/Menu/Float/0#   " + formatDigits(cm.getTotalOnline()) + "\r\n\r\n"; //取得線上人數
			msg += "    #fUI/UIWindow/9DDesign/Menu/Float/1#   " + formatDigits(cm.getPotion(1)) + "\r\n\r\n"; // GASH點數
			msg += "    #fUI/UIWindow/9DDesign/Menu/Float/2#   " + formatDigits(cm.getPotion(2)) + "\r\n\r\n"; // 楓葉點數
			msg += "    #fUI/UIWindow/9DDesign/Menu/Float/3#   " + formatDigits(cm.getPlayer().getDonate()) + "\r\n\r\n";  //贊助積分
			// msg += "    #fUI/UIWindow/9DDesign/Menu/Float/4#   " + formatDigits(cm.getPlayer().getTotalDonate()) + "\r\n\r\n";  //累積捐獻
			// msg += "\r\n";
			msg += "#L9##fUI/UIWindow/9DDesign/Menu/9##l";
			for(var i = 0; i <= 8; i++) {
				msg += "#L" + i + "##fUI/UIWindow/9DDesign/Menu/" + i + "##l";
			}
			cm.sendOk(msg);
			break;
		case 1:
			cm.dispose();
			cm.openNpc(cm.getNpc(),selects[selection]);
			return;
		default:
			cm.dispose();
			return;
	}

}

function formatDigits(digits) {
    var digitsArray = digits.toString().split('');

    var result = digitsArray.map(function(digit) {
        return '#fUI/UIWindow/9DDesign/Menu/Float/Number/' + digit + '#';
    }).join('');

    return result;
}
