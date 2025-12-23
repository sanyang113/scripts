var status = -1;

var gainItem = 4030002;

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
            var msg = "以下可能是您想了解的資訊，不妨看看吧！\r\n\r\n";
            msg += "#L1##b如何參與世界王討伐#l#k\r\n";
            msg += "#L2##b世界王活動可以拿到什麼#l#k\r\n";
            msg += "#L3##b深入了解詳細資訊#l#k\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            if(selection == 1) {
                var msg = "世界王會在每天晚上的 #e#r9點#k#n 舉行，\r\n";
                msg += "會於活動開始前 #e#r15#k#n 分鐘廣播通知玩家，\r\n並且在指定的村莊進行生成。\r\n\r\n";
                msg += "世界王 #e#b不會有致命的傷害 #k#n，也可以#e#b輕易的擊中#k#n，\r\n所以小萌新們也不用擔心會死亡，可以開心的一同參與~\r\n";
                cm.sendOk(msg);
                cm.dispose();
                return;
            } else if(selection == 2) {
                var msg = "世界王擊殺後並不會直接產生掉落物，\r\n會依照每個人的輸出占比而獲得相對應的#b#i" + gainItem + ":##k\r\n\r\n";
                msg += "任何有參與挑戰的玩家都有機會成為幸運兒，可以獲得額外的#b#i" + gainItem + ":##k\r\n\r\n";
                msg += "擊殺世界王的玩家也可以獲得大量的#b#i" + gainItem + ":##k唷！\r\n\r\n";
                msg += "#b#i" + gainItem + ":##k可以在 #b選單#k - #b活動專區#k - #b世界BOSS#k 兌換獎勵唷！";
                cm.sendOk(msg);
                cm.dispose();
                return;
            } else if(selection == 3) {
                var msg = "世界王的血量#d#e會根據前一天的討伐時間長短而進行變動#k#n，因此當玩家整體戰力提升後會跟著自動增加，\r\n\r\n";
                msg += "當世界王在#r#e 15 #k#n分鐘後尚未被擊殺時則會進入強制清算，\r\n但不用擔心沒有相對應的獎勵唷！\r\n玩家仍可以獲得該輸出占比的獎勵\r\n\rn";
                msg += "世界王的討伐資訊可以透過點選NPC後進行查看唷！"
                cm.sendOk(msg);
                cm.dispose();
                return;
            }
        default:
            cm.dispose();
            return;
    }
}