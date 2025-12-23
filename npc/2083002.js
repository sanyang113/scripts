
/*
	Crystal of Roots - Leafre Cave of life
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status < 1 && mode == 0) {
            cm.sendOk("好，需要的時候再來找我。");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
			switch (cm.getMapId()) {
				case 240060000:
				case 240060100:
				case 240060200:
					var msg = "\r\n獎勵條件：#r1.1億#k 總傷害\r\n";
					msg += "\r\n總輸出排行如下：\r\n";
					var damages = cm.getTotalDamage();
					for(var i = 0; i < damages.length; i++) {
						msg += "\r\n"+damages[i];
					}

					cm.sendYesNo("你想離開這裡到 #m240050400# 嗎?" + msg);
					break;
				default:
					cm.sendYesNo("你想離開這裡到 #m240050000# 嗎?");
					break;
			}
        } else if (status == 1) {
			switch (cm.getMapId()) {
				case 240060000:
				case 240060100:
				case 240060200:
					cm.warp(240050400, 0);
					cm.dispose();
					break;
				default:
				    cm.removeAll(4001087);
					cm.removeAll(4001088);
					cm.removeAll(4001089);
					cm.removeAll(4001090);
					cm.removeAll(4001091);
					cm.removeAll(4001092);
					cm.removeAll(4001093);
				    cm.warp(240050000, 0);
					cm.dispose();
					break;
				
			}
        }
    }
}