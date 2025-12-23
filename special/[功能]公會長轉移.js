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
            var msg = "欲轉移公會長請將欲轉移對象加入至您的隊伍內，並提升至副會長。\r\n";
            msg += "若確定要進行轉移，請輸入『我要轉移』\r\n";
            msg += "#r#e※功能仍在測試中，若有異常請回報GM進行處理！！！";
            cm.sendGetText(msg);
            break;
        case 1:
            if(cm.getText() != "我要轉移") {
                cm.sendOk("驗證失敗，請重新再試一次");
                cm.dispose();
                return;
            }
            if(cm.getParty() == null) {
                cm.sendOk("欲轉移會長請先建立組隊，確認您與轉移對象都在同一張地圖上");
                cm.dispose();
                return;
            }
            var party = cm.getParty().getMembers();
            if(party == null) {
                cm.sendOk("很抱歉，您所在的隊伍不存在");
                cm.dispose();
                return;
            }

            if(!cm.allMembersHere()) {
                cm.sendSimple("請確認隊員是否到齊！")
                cm.dispose();
                return;
            }

            if(party.size() != 2) {
                cm.sendOk("很抱歉，您的隊伍必須有兩個人，您與欲轉移的對象");
                cm.dispose();
                return;
            }

            var it = party.iterator();
            var partner = null;
            while (it.hasNext()) {
                var cPlayer = it.next();
                var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if(cm.getPlayer().getId() != cPlayer.getId()) {
                    partner = ccPlayer;
                }
            }

            if(partner == null) {
                cm.sendOk("發生未知錯誤，請聯繫GM");
                cm.dispose();
                return;
            }

            var result = cm.getPlayer().changeGuildLeader(partner);
            if(result != null) {
                cm.sendOk(result);
                cm.dispose();
                return;
            }

            cm.getPlayer().fakeRelog();
            partner.fakeRelog();
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}