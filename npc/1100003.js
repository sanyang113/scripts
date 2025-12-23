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
            var msg = "#k旅客你好，歡迎來到前往魔法森林的碼頭。你希望怎麼去魔法森林呢?\r\n";
    		msg += "#b#L1#我要搭船去魔法森林#l\r\n";
    		msg += "#L2#我想直接到魔法森林#l";
            cm.sendSimple(msg);
            break;
        case 1:
            sel = selection;
            if (sel ==1){
                if(cm.getPlayer().getMeso() >= 500) {
                    cm.gainMeso(-500);
                    cm.warpBack(200090051,101000400,80);
                    cm.dispose();
                    return;
                }else {
                    cm.sendSimple("你的錢好像不夠...");
                    cm.dispose();
                    return;
                }
            }else if(sel ==2){
                if (cm.getPlayer().getMeso() >= 500) {
                    cm.gainMeso(-500);
                    cm.warp(101000400, 0);
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