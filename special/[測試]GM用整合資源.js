var status = -1;
var selects = [
    "[功能]忍耐挑戰", "[功能]加密貨幣斗內","[功能]聯絡GM","[功能]自動化技能-入口","[功能]世界王入口","[功能]萬能貓頭鷹","[功能]一番賞抽獎","[功能]惡作劇入口","[測試]練習用","[倉庫]技能書倉庫入口","[GM活動]紅綠燈通關",
    "[功能]狀態查詢", "[功能]戰地查詢", "[倉庫]勳章倉庫", "[倉庫]裝備倉庫", "[倉庫]坐騎倉庫", "[測試]練習用", "[功能]當日滿額查詢",
    "[測試]道具顯示", "[功能]遠征速通排名","[功能]反外掛偵測", "[測試]燃燒測試", "[測試]封包攻擊檢核", "[GM活動]紅綠燈通關","[功能]技能點數增加", "[測試]傷害字型顯示", "[功能]傷害字型顯示GM",
    "[功能]傷害字型顯示"
];


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
            var msg = "請選擇\r\n";
            for(var i = 0; i < selects.length; i++) {
                msg += "\r\n#L" + i + "#" + selects[i];
            }
            cm.sendNext(msg);
            break;
        case 1:
            cm.dispose();    
            cm.openNpc(cm.getNpc(),selects[selection]);
            return;
        default:
            cm.dispose();
            return;
    } 
}