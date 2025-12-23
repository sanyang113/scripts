//遠征
var status = -1;
var maxCount = 7;
var maxAdd = 7;
var resetDay = 1; //1=週一 7=週日

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) status++;
    else { cm.dispose(); return; }

    switch (status) {
        case 0:
            var bossList = [
                { showName: "拉圖斯遠征",          minLevel: 100, eventNameE: "TimeKing",            event: "拉圖斯擴充" },
                { showName: "海怒斯遠征",          minLevel: 100, eventNameE: "FishKing",            event: "海怒斯擴充" },
                { showName: "殘暴炎魔遠征",        minLevel: 120, eventNameE: "ZakumBattle",         event: "殘暴炎魔擴充" },
                { showName: "娃娃獅王與泰勒熊遠征", minLevel: 120, eventNameE: "ScarTarBattle",       event: "娃娃獅王與泰勒熊擴充" },
                { showName: "克雷塞爾遠征",        minLevel: 120, eventNameE: "TreeKing",            event: "克雷塞爾擴充" },
                { showName: "闇黑龍王遠征",        minLevel: 150, eventNameE: "HorntailBattle",      event: "闇黑龍王擴充" },
                { showName: "黑道長老遠征",        minLevel: 150, eventNameE: "UnderWorld",          event: "黑道長老擴充" },
                { showName: "天皇蟾蜍遠征",        minLevel: 150, eventNameE: "ToadKing",            event: "天皇蟾蜍擴充" },
                { showName: "貝魯加墨特遠征",      minLevel: 150, eventNameE: "Vergamot",            event: "貝魯加墨特擴充" },
                { showName: "杜那斯遠征",          minLevel: 150, eventNameE: "Dunas",               event: "杜那斯擴充" },
                { showName: "尼貝龍根遠征",        minLevel: 150, eventNameE: "Nibergen",            event: "尼貝龍根擴充" },
                { showName: "無名魔獸遠征",        minLevel: 150, eventNameE: "NamelessMagicMonster",event: "無名魔獸擴充" },
                { showName: "強化杜那斯遠征",      minLevel: 150, eventNameE: "Dunas2",              event: "強化杜那斯擴充" },
                { showName: "普雷茲首腦遠征",      minLevel: 150, eventNameE: "CoreBlaze",           event: "普雷茲首腦擴充" },
                { showName: "奧芙赫班遠征",        minLevel: 150, eventNameE: "Aufhaven",            event: "奧芙赫班擴充" },
            ];

            var lv = cm.getPlayer().getLevel();
            var msg = "以下為您本週的遠征記錄\r\n\r\n";

            for (var i = 0; i < bossList.length; i++) {
                var b = bossList[i];
                if (i>=8&&i<=13){
                    maxCount = 3;
                    maxAdd = 3;
                } if (i==14){
                    maxCount = 0;
                    maxAdd = 6;
                }
                var add = cm.getPlayer().getCharacterOnly(b.event + log());
                var count = maxCount + add - cm.getBossLogWeek(b.eventNameE, resetDay);

                msg += "#b" + b.showName + "#k\r\n";

                if (lv < b.minLevel) {
                    msg += "挑戰 #b" + b.showName + "#k 需要 #r等級" + b.minLevel + "#k 以上\r\n\r\n";
                } else {
                    msg += "本週剩餘挑戰次數 #b";
                    if (count <= 9) msg += " ";
                    msg += count + "#k 次，本週剩餘擴充次數 #b" + (maxAdd - add) + "#k 次\r\n\r\n";
                }
            }

            cm.sendOk(msg);
            cm.dispose();
            return;
    }
}

function log() {
    var d = new Date();
    var dayOfWeek = d.getDay();
    var diffToMonday = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek;
    d.setDate(d.getDate() + diffToMonday);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    return year + "年" + month + "月" + day + "日";
}
