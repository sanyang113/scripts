var name = "金勾海賊王"; //組隊任務名稱
var sel = -1;
var status = -1;

var minLevel = 55;
var maxLevel = 250;

var minPartySize = 3;
var maxPartySize = 6;

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
            var msg = "這裡是 #b" + name + "#k 組隊任務\r\n\r\n";
            msg += "等級限制：#r" + minLevel + " #k以上\r\n"
            msg += "時間限制：#r20 #k分鐘\r\n"
            msg += "人數限制：#r3~6#k 人\r\n"
            msg += "\r\n#L0#我要進行#b " + name + "#k";
            msg += "\r\n#L1#我要尋找#b " + name + "#k 夥伴";
            msg += "\r\n#L2#我要兌換#b " + name + "#k 特殊獎勵";
            cm.sendNext(msg);
            return;
        case 1:
            sel = selection;
            if(sel == 0) {
                cm.sendYesNo("確定要入場嗎?");
            } else if(sel == 1) {
                cm.sendOk("您要尋找哪些跟你一起玩的夥伴呢？\r\n\r\n#b#L0#我要尋找速刷場夥伴。\r\n#L1#我要尋找歡樂場夥伴。");
            } else if(sel == 2) {
                cm.dispose();
                cm.openNpc(cm.getNpc(),"[組隊]金勾海賊王獎勵");
            }
            return;
        case 2:
            if(sel == 0) {
                cm.removeAll(4001117);
                cm.removeAll(4001120);
                cm.removeAll(4001121);
                cm.removeAll(4001122);
                if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
                    cm.sendOk("請找隊長來找我。");
                } else {
                    var party = cm.getPlayer().getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var size = 0;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                        if (ccPlayer == null || ccPlayer.getLevel() < minLevel || ccPlayer.getLevel() > maxLevel) {
                            next = false;
                            break;
                        }
                        size += (ccPlayer.isGM() ? 6 : 1);
                    }
                    if (next && size >= minPartySize) {
                        if(checkMap()) {
                            var em = cm.getEventManager("Pirate");
                            if (em == null) {
                                cm.sendOk("找不到腳本，請聯繫GM！！");
                            } else {
                                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                            }
                        } else {
                            cm.sendOk("目前有人在打囉～");
                        }
                    }else {
                        cm.sendOk("需要" + minPartySize + "個人，等級必須是" + minLevel + "到" + maxLevel + "級");
                    }
                }
                cm.dispose();
                return;
            } else if(sel == 1) {
                if (cm.getPlayer().isPartyMessage()) {
                    cm.getPlayer().setPartyMessage();
                    cm.sendOk(Message(selection));
                } else {
                    cm.sendOk("廣播冷卻時間剩餘:" + cm.getPlayer().getPartyMessage() + " 秒。");
                }
                cm.dispose();
                return;
            }
        default:
            cm.dispose();
            return;
    }

    
}

function Message(type) {
    cm.YellowMessage(cm.getPlayer().getName() + " : 【" + name + "組隊任務】(Lv." + minLevel + " ~ Lv." + maxLevel + ") 徵求" + (type == 0 ? "【速刷場】小夥伴，快來一起玩吧！" : "【歡樂場】小夥伴，快來一起玩吧！"));
    var field = [
        ["喊話內容:",
            "我們在 【" + cm.getPlayer().getClient().getChannel() + "】 頻道的 " + name + " 組隊任務(Lv." + minLevel + " ~ Lv." + maxLevel + ")，缺" + (type == 0 ? "【速刷場】小夥伴，快來一起玩吧！":"【歡樂場】小夥伴，快來一起玩吧！")]
    ];
    cm.sendPartyDiscordMessage("玩家『" + cm.getPlayer().getName() + "』在『" + cm.getPlayer().getClient().getChannel() + "頻』的『" + name + "組隊任務(Lv." + minLevel + " ~ Lv." + maxLevel + ")』尋求夥伴，快一起來玩吧！");
    return "已經幫您開廣了，也同步發送到Discord群尋找組隊小夥伴囉！希望你們玩的開心！";
}

function checkMap() {
    var map = [925100000, 925100100, 925100200, 925100201, 925100202, 925100300, 925100301, 925100302, 925100400, 925100400, 925100500];
    for(var i = 0 ; i < map.length; i++) {
        if(cm.getPlayerCount(map[i]))
            return false;
    }
    return true;
}
