var status = -1;

var selects = [
    "[倉庫]命運卡兌換","[倉庫]命運卡兌換(所有)","[倉庫]命運卡存入倉庫","[倉庫]命運卡取出","[倉庫]命運卡全部存入","[倉庫]命運卡煉製","[倉庫]技能書換命運卡"
]

var selectShow = [
    "命運卡兌換","命運卡兌換(所有)","命運卡存入倉庫","命運卡取出","命運卡全部存入","命運卡煉製","技能書換命運卡"
]

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

    switch(status) {
        case 0:
            var msg = "您想要做什麼呢？";
            for(var i = 0; i < selects.length; i++) {
                msg += "\r\n#b#L" + i + "#" + selectShow[i] + "#l";
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(cm.getNpc(),selects[selection]);
            return;
    }
}