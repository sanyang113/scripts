var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

	var damages = cm.getTotalDamage();
	if(damages != null && damages.length != 0) {
		var msg = "總輸出排行如下：\r\n";
		for(var i = 0; i < damages.length; i++) {
			msg += "\r\n"+damages[i];
		}
	}
	cm.sendOk(msg);
	cm.dispose();
	return;
}