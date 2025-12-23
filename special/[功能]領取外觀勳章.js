//造型領取
var status = -1;
var sel = -1;
var items = [1146705,1146686,1143307,1146730,1142398,1142973,1142975,];
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
			var msg = "您想要領取哪一個外觀勳章呢\r\n";
            for (var i = 0; i < items.length; i++) {
                msg += "#L" + i + "##k#b#i" + items[i] + ":##t" + items[i] + ":##k#l\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            if (cm.haveItem(items[sel], 1)) {
					cm.sendOk("你已經擁有#b #i" + items[sel] + ":##t" + items[sel] + ":# 了");
					cm.dispose();
					return;
				}
            cm.gainItem(items[sel], 1);
            cm.sendOk("給了你 #b#i" + items[sel] + ":# #t" + items[sel]  +"##k！\r\n");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}