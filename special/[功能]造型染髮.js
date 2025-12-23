var status = -1;
var beauty = 0;
var hair_Colo_new;
var useItem = 5220042;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
	    status++;
    }

    if (status == 0) {
	    cm.sendSimple("嗨，我是山羊谷的美髮師，我可以免費幫你弄好看的頭髮。\r\n #L1#我想要染髮#l");
    } else if (status == 1) {
        if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;

            var j = 0;
            for (var i = 0; i < 8; i++) {
                if(cm.isHair(currenthaircolo + i)) {
                    hair_Colo_new[j] = currenthaircolo + i; 
                }
                j++;
            }
            cm.askAvatar("選擇你喜歡的髮色！", hair_Colo_new);
        }
    } else if (status == 2){
        cm.setHair(hair_Colo_new[selection]);
		cm.sendOk("享受你新的髮色！");
	    cm.safeDispose();
    }
}