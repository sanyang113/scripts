var status = -1;
var sel = -1;
var OutMaps = [85010001,85010003,85010006,85020001,85020004,85030001,85030004,85030008, 85040000, 85050000, 85060001];
//var OutMaps = [85040000, 85050000]
var prizes = {
    85040000: [[1, 1, 4000019, 10],],
    85050000: [[1, 1, 4000000, 10],],
    85010001: [[1, 5, 4030002,  4],],
    85010003: [[1, 5, 4030002,  4],],
    85010006: [[1, 5, 4030002, 10],],
    85020001: [[1, 5, 4030002,  4],],
    85020004: [[1, 5, 4030002,  7],],
    85030001: [[1, 5, 4030002,  4],],
    85030004: [[1, 5, 4030002,  6],],
    85030008: [[1, 5, 4030002, 10],],
    85040000: [[1, 5, 4030002,  1],],
    85050000: [[1, 5, 4030002,  5],],
    85060001: [[1, 5, 4030002,  5],],
};

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
            var msg = "您要查看哪一個忍耐的獎勵呢？#b\r\n";
            for (var s = 0; s < OutMaps.length; s++) {
                msg += "#L" + s + "##m" + OutMaps[s] + "#\r\n";
            }
            cm.sendSimple(msg); // ⬅ 這裡要用 sendSimple
            break;

        case 1:
            var sel = selection;
            var mapId = OutMaps[sel];
            var msg = "以下是#b #m" + mapId + "# #k的排行榜獎勵\r\n\r\n";

            if (prizes[mapId] != null) {
                for (var i = 0; i < prizes[mapId].length; i++) {
                    var prize = prizes[mapId][i];
                    var startRank = prize[0];
                    var endRank = prize[1];
                    var itemId = prize[2];
                    var count = prize[3];
                    msg += "#b排名 #r";
                    if(startRank == endRank){msg +="  " + startRank + "  #k：#b#i" + itemId + ":# #t" + itemId + ":# #kx #b" + count + "#k\r\n"
                    }else{
                        msg += startRank + " ~";
                        if(endRank<=9){msg += " "}
                        msg += endRank + "#k：#b#i" + itemId + ":# #t" + itemId + ":# #kx #b" + count + "#k\r\n";
                        }
                }
            } else {
                msg += "暫無獎勵資料。";
            }
        cm.sendNext(msg);
        cm.dispose();
        return;
    default:
        cm.dispose();
    }
}