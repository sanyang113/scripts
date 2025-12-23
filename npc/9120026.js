
/*
Crysta; - Kamuma (Neo Tokyo Teleporter)
 */
var special = false;
var warpMap = -1;


function start() {
    switch (cm.getMapId()) {
        case 800040000:
            cm.warp(802000100, 0);
            cm.dispose();
            break;
            //cm.sendOk("未來東京尚未開放，敬請期待");
            //cm.dispose();
            //return;
        case 802000211:
            if (cm.getQuestStatus(4686) == 2) {
                var damages = cm.getTotalDamage();
                if(damages != null && damages.length != 0) {
                    var msg = "總輸出排行如下：\r\n";
                    for(var i = 0; i < damages.length; i++) {
                        msg += "\r\n"+damages[i];
                    }
                }
                cm.sendOk(msg);
                special = true;
                warpMap = 802000212;
                // cm.warp(802000212, 0);
            } else {
                cm.showEffect(false, "quest/party/clear");
                cm.playSound(false, "Party1/Clear");
                cm.forceCompleteQuest(4686);
                cm.dispose();
            }
            break;
        case 802000313:
            if (cm.getQuestStatus(4689) == 2) {
                //cm.gainItem(4032181, 50);
                cm.warp(802000312, 0);
            } else {
                cm.showEffect(false, "quest/party/clear");
                cm.playSound(false, "Party1/Clear");
                cm.forceCompleteQuest(4689);
            }
            cm.dispose();
            break;
        case 802000411:
            if (cm.getQuestStatus(4693) == 2) {
                var damages = cm.getTotalDamage();
                if(damages != null && damages.length != 0) {
                    var msg = "總輸出排行如下：\r\n";
                    for(var i = 0; i < damages.length; i++) {
                        msg += "\r\n"+damages[i];
                    }
                }
                cm.sendOk(msg);
                special = true;
                warpMap = 802000412;
                // cm.warp(802000412, 0);
            } else {
                cm.showEffect(false, "quest/party/clear");
                cm.playSound(false, "Party1/Clear");
                cm.forceCompleteQuest(4693);
                cm.dispose();
            }
            break;
        case 802000611:
            if (cm.getQuestStatus(4696) == 2) {
                var damages = cm.getTotalDamage();
                if(damages != null && damages.length != 0) {
                    var msg = "總輸出排行如下：\r\n";
                    for(var i = 0; i < damages.length; i++) {
                        msg += "\r\n"+damages[i];
                    }
                }
                cm.sendOk(msg);
                special = true;
                warpMap = 802000612;
                // cm.warp(802000612, 0);
            } else {
                cm.showEffect(false, "quest/party/clear");
                cm.playSound(false, "Party1/Clear");
                cm.forceCompleteQuest(4696);
                cm.dispose();
            }
            break;
        case 802000111:
            if (cm.getQuestStatus(4698) == 2) {
                var damages = cm.getTotalDamage();
                if(damages != null && damages.length != 0) {
                    var msg = "總輸出排行如下：\r\n";
                    for(var i = 0; i < damages.length; i++) {
                        msg += "\r\n"+damages[i];
                    }
                }
                cm.sendOk(msg);
                special = true;
                warpMap = 802000112;
                // cm.warp(802000112, 0);
            } else {
                cm.showEffect(false, "quest/party/clear");
                cm.playSound(false, "Party1/Clear");
                cm.forceCompleteQuest(4698);
                cm.dispose();
            }
            break;
        case 802000711:
            if (cm.getQuestStatus(50003) == 2) {
                var damages = cm.getTotalDamage();
                if(damages != null && damages.length != 0) {
                    var msg = "總輸出排行如下：\r\n";
                    for(var i = 0; i < damages.length; i++) {
                        msg += "\r\n"+damages[i];
                    }
                }
                cm.sendOk(msg);
                special = true;
                warpMap = 802000712;
                // cm.warp(802000712, 0);
            } else {
                cm.showEffect(false, "quest/party/clear");
                cm.playSound(false, "Party1/Clear");
                cm.forceCompleteQuest(50003);
                cm.dispose();
            }
            break;
        case 802000821:
            if (cm.getQuestStatus(50014) == 2) {
                var damages = cm.getTotalDamage();
                if(damages != null && damages.length != 0) {
                    var msg = "總輸出排行如下：\r\n";
                    for(var i = 0; i < damages.length; i++) {
                        msg += "\r\n"+damages[i];
                    }
                }
                cm.sendOk(msg);
                special = true;
                warpMap = 802000820;
                // cm.warp(802000820, 0);
            } else {
                cm.showEffect(false, "quest/party/clear");
                cm.playSound(false, "Party1/Clear");
                cm.forceCompleteQuest(50014);
                cm.dispose();
            }
            break;
        case 802000803:
            if (cm.getQuestStatus(50015) == 2) {
                var damages = cm.getTotalDamage();
                if(damages != null && damages.length != 0) {
                    var msg = "總輸出排行如下：\r\n";
                    for(var i = 0; i < damages.length; i++) {
                        msg += "\r\n"+damages[i];
                    }
                }
                cm.sendOk(msg);
                special = true;
                warpMap = 802000800;
                // cm.warp(802000800, 0);
            } else {
                cm.showEffect(false, "quest/party/clear");
                cm.playSound(false, "Party1/Clear");
                cm.forceCompleteQuest(50015);
                cm.dispose();
            }
            break;
        default:
            cm.sendSimple("嗨~ 我是水晶，需要我幫忙？ \r #b#L0##m802000200##l \r #L1##m802000300##l \r #L2##m802000500##l \r #L3##m802000600##l \r #L5##m802000700##l  \r #L7##m802000820##l \r #L6#讓我好好考慮一下。#l");
            break;
    }
}
function action(mode, type, selection) {
    if(special) {
        //cm.gainItem(4032181, 100);
        cm.warp(warpMap);
        cm.dispose();
        return;
    }


    if (selection != 6) {
        var questid = true,
            mapid = 0,
            portal = 0;
        switch (selection) {
            case 0:
                questid = cm.getQuestStatus(4682) == 2;
                mapid = 802000200;
                portal = 2;
                break;
            case 1:
                questid = cm.getQuestStatus(4687) == 2;
                mapid = 802000300;
                portal = 0;
                break;
            case 2:
                questid = cm.getQuestStatus(4690) == 2;
                mapid = 802000500;
                portal = 0;
                break;
            case 3:
                questid = cm.getQuestStatus(4694) == 2;
                mapid = 802000600;
                portal = 0;
                break;
            case 5:
                questid = cm.getQuestStatus(50001) == 2;
                mapid = 802000700;
                portal = 0;
                break;
            case 7:
                questid = cm.getQuestStatus(50012) == 2;
                mapid = 802000820;
                portal = 0;
                break;
        }
        if (questid && mapid > 0) {
            cm.warp(mapid, portal);
        } else {
            cm.sendOk("我不認為您可以穿越過這個強大的力量。");
        }
    }
    cm.dispose();
}