var status = -1;

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
            var msg = "我可以幫您設置臨時二段跳，可以在自由市場內、各地村莊地圖使用二段跳，以及捉迷藏活動期間，此功能會開放到所有地圖(除遠征及組隊任務)，您想要學習嗎？";
            msg += "\r\n#r#e※二段跳會放到鍵盤F12位置上，玩家可以點開並移動至想要的位置，若因在非指定地圖使用而消失，或不小心移除可以再點擊我領取技能唷！";
            cm.sendYesNo(msg);
            break;
        case 1:
            var eim = cm.getEventInstance();
            if(eim != null) {
                cm.sendOk("目前所謂位置無法使用此功能");
                cm.dispose();
                return;
            }
            var result = cm.getDoubleJumpCustom();
            if(result) {
                cm.sendOk("幫您設定完成囉");
            } else {
                cm.sendOk("技能設置有一分鐘冷卻時間唷，請稍候");
            }
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}