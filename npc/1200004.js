/* Dawnveil
    To Rien
	Puro
    Made by Daenerys
*/
function start() {
    cm.sendYesNo("你想要去瑞恩島必須支付#b 80 楓幣#k 到那邊約一分鐘.");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("等你考慮好再來找我吧!");
	cm.dispose();
	} else {
    if(cm.getPlayer().getMeso() >= 80) {
	cm.gainMeso(-80);
	cm.warpBack(200090060,140020300,80);
    }
    cm.dispose();
}
}

//傳送
var status = -1;
var sel = -1;
var qty = -1;

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
            var msg = "#k旅客你好，歡迎來到通往瑞恩島的碼頭。你希望怎麼去瑞恩島呢?\r\n";
    		msg += "#b#L1#我要搭船去瑞恩島#l\r\n";
    		msg += "#L2#我想直接到瑞恩島#l";
            cm.sendSimple(msg);
            break;
        case 1:
            sel = selection;
            if (sel ==1){
                if(cm.getPlayer().getMeso() >= 80) {
	            cm.gainMeso(-80);
	            cm.warpBack(200090060,140020300,80);
                cm.dispose();
                return;
            }else {
                cm.sendSimple("你的錢好像不夠...");
                cm.dispose();
                return;
            }}else if(sel ==2){
                if (cm.getPlayer().getMeso() >= 80) {
                    cm.gainMeso(-80);
                    cm.warp(140020300, 0);
                    cm.dispose();
                    return;
                }else {
                    cm.sendSimple("你的錢好像不夠...");
                    cm.dispose();
                    return;
                }
            }
    }
}