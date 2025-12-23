var status = -1;
var sel = -1;
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
            var list = cm.findDamageSkinList().toArray();
            var msg = "#L999##r我想提取傷害字型#l\r\n\r\n";
            msg += "#b以下是您所擁有的傷害字型，請選擇並使用";
            msg += "\r\n\r\n#L0##i2435000##t2435000#";
            for(var i = 0; i < list.length; i++) {
                var skin = list[i];
                var item = 2435000 + skin;
                msg += "\r\n#L" + skin + "##i" + item + "##t" + item + "#";
            }
            cm.sendOk(msg);
            break;
        case 1:
            sel = selection;
            if (sel == 999){
                    cm.dispose();
                    cm.openNpc(cm.getNpc(),"[功能]傷害字型提取");
                    return;
            }else
            cm.setDamageSkin(selection);  
            var item = 2435000+selection;
            if(item != 2435000) {
                cm.sendOk("已為您套用傷害字型 #b#i" + item + "##t" + item + "##k了！");
            } else {
                cm.sendOk("已為您套用傷害字型 #b#i" + 2435000 + "##t" + 2435000 + "##k了！");
            }
            cm.dispose();
            return;
    }
}