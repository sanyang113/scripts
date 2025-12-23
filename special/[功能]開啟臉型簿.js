var status = -1;

var savedFaces = -1;

var useFace = -1;

var sel = -1;

function start() {
    return action(1,0,0);
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
            var msg = "以下是您儲存的臉型";
            savedFaces = cm.loadFace();         
            if(savedFaces.length == 0) {
                cm.sendOk("您尚未儲存任何臉型唷！");
                cm.dispose();
                return;
            }
            for(var i = 0; i < savedFaces.length; i++) {
                msg += "\r\n#L" + i + "##b#z" + savedFaces[i] + "#(" + savedFaces[i] + ")";
            }
            cm.sendNext(msg);
            break;
        case 1:
            useFace = savedFaces[selection];
            var msg = "您選擇了#b#z" + useFace + "#(" + useFace + ")\r\n";
            msg += "\r\n#b#L1##b我要使用該臉型";
            msg += "\r\n#b#L2##b我要刪除該臉型";

            cm.sendNext(msg);
            break;
        case 2:
            if(selection == 1) {
                cm.askAvatar("選擇一個喜歡的臉型吧！", useFace);
                break;
            }else if(selection == 2) {
                cm.removeFace(useFace);
                cm.sendOk("幫您移除該臉型紀錄囉！");
                cm.dispose();
                return;
            }
        case 3:
            cm.setFace(useFace);
            cm.sendOk("幫您換好臉型囉！");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}