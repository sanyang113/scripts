var status = -1;
var sel = -1;
var prizes = [
    [85010001, 1, 5, 4030002,  2],
    [85010003, 1, 5, 4030002,  2],
    [85010006, 1, 5, 4030002,  5],
    [85020001, 1, 5, 4030002,  2],
    [85020004, 1, 5, 4030002,  3],
    [85030001, 1, 5, 4030002,  2],
    [85030004, 1, 5, 4030002,  3],
    [85030008, 1, 5, 4030002,  5],
    [85040000, 1, 5, 4030002,  1],
    [85050000, 1, 5, 4030002,  3],
    [85060001, 1, 5, 4030002,  3],
];

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            var msg = "  以下為各忍耐排行榜的獎勵\r\n";
            msg += "  #e#r發放時間為每周日 晚上 23:59\r\n\r\n#n#b";
            for (var i = 0; i < prizes.length; i++) {
                var mapId     = prizes[i][0];
                var startRank = prizes[i][1];
                var endRank   = prizes[i][2];
                var itemId    = prizes[i][3];
                var count     = prizes[i][4];

                // 如果是單一名次 (ex: 1 ~ 1)，顯示「第1名」
                if (startRank == endRank) {
                    msg += "  地圖 #m" + mapId + "##k\r\n  第#r " + startRank + " #k名 → #b#i" + itemId + "# #z" + itemId + "# #kx #b" + count + "\r\n\r\n";
                } else {
                    msg += "  地圖 #m" + mapId + "##k\r\n  第#r " + startRank + " ~ " + endRank + " #k名 → #b#i" + itemId + "# #z" + itemId + "# #kx #b" + count + "\r\n\r\n";
                }
            }
            cm.sendNext(msg);
            break;
        default:
            cm.dispose();
            break;
    }
}