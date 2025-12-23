var status = -1;
var selects = ["裝備","消耗","裝飾","其他","特殊","全部"];

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
            var msg = "請選擇您要排序的欄位\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "\r\n#L" + i + "##b" + selects[i];
            }
            cm.sendNext(msg);
            break;
        case 1:
            if(selection != 5) {
                cm.executeItemGather(selection + 1);
            } else {
                for(var i = 1; i <= 5; i++) {
                    cm.executeItemGather(i);
                }
            }
                cm.sendOk("幫您排序完畢了！");
                cm.dispose();
                return;
        default:
            cm.dispose();
            return;
    }
}