var status = -1;
var requiredLevel = 160;
var eventName = "PinkBeanBattle";
var squadName = "PinkBean";
var triggerMap = 270050000;
var maxSize = 12;
var minSize = 6;
var maxCount = 2;

function start() {

    if (cm.getMapId() == triggerMap) {
        var em = cm.getEventManager(eventName);

        if (em == null) {
            cm.sendOk("腳本出錯，請聯繫管理員.");
            cm.dispose();
            return;
        }

        if(cm.getPlayer().getLevel() < requiredLevel) {
            cm.sendOk("很抱歉，挑戰需要達到" + requiredLevel + "等唷!");
            cm.dispose();
            return;
        }
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var squadAvailability = cm.getSquadAvailability(squadName);

            if(cm.getBossLog(eventName) >= maxCount) {
                cm.sendOk("遠征次數已經達到上限次數了");
                cm.dispose();
                return;
            }

            if (squadAvailability == -1) {
                status = 0;
                cm.sendYesNo("你想成為遠征隊長嗎？");
            } else if (squadAvailability == 1) {
                var type = cm.isSquadLeader(squadName);
                if (type == -1) {
                    cm.sendOk("遠征隊已經註銷.請重新發起.");
                    cm.dispose();
                } else if (type == 0) {
                    var memberType = cm.isSquadMember(squadName);
                    if (memberType == 2) {
                        cm.sendOk("你被加入制裁名單，不能進行遠征任務.");
                        cm.dispose();
                    } else if (memberType == -1) {
                        cm.sendOk("遠征隊已經註銷，請重新發起。");
                        cm.dispose();
                    } else {
                        status = 1;
                        cm.sendSimple("你想幹什麼? \r\n#b#L0#查看遠征隊#l \r\n#b#L1#加入遠征隊#l \r\n#b#L2#離開遠征隊#l");
                    }
                } else { // Is leader
                    status = 2;
                    cm.sendSimple("你想做什麼?遠征隊長。 \r\n#b#L0#查看遠征隊#l\r\n#r#L3#開始遠征任務#l");
                    // TODO viewing!
                }
            } else {
                cm.sendOk("遠征任務已經開始");
                cm.safeDispose();
            }
        } else {
            var eim = cm.getDisconnected(eventName);
            if (eim == null) {
                var squd = cm.getSquad(squadName);
                cm.sendOk("遠征任務已經開始");
                cm.safeDispose();
            } else {
                cm.sendOk("遠征任務已經開始了");
                cm.dispose();
                return;
            }
        }
    } else {
        status = 3;
        cm.sendNext("你想退出遠征隊嗎?");
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad(squadName, 5, " 已經成為遠征隊長。如果你想參加遠征任務請在5分鐘內加入遠征隊。")) {
                cm.sendOk("你已經成為遠征隊長，請在5分鐘內整理好你的遠征隊伍，並開始遠征任務。");
            } else {
                cm.sendOk("未知錯誤。成為遠征隊長失敗");
            }
        }
        cm.dispose();
        break;
    case 1:
        if (selection == 0) {
            if (!cm.getSquadList(squadName, 0)) {
                cm.sendOk("由於未知的錯誤，對遠征隊的要求被拒絕。");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember(squadName, true, maxSize);
            if (ba == 2) {
                cm.sendOk("遠征隊人數已經滿了");
            } else if (ba == 1) {
                cm.sendOk("加入遠征隊成功");
            } else {
                cm.sendOk("你已經加入遠征隊了.");
            }
        } else { // withdraw
            var baa = cm.addMember(squadName, false, maxSize);
            if (baa == 1) {
                cm.sendOk("退出遠征隊成功");
            } else {
                cm.sendOk("你還沒有加入遠征隊.");
            }
        }
        cm.dispose();
        return;
    case 2:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList(squadName, 0, maxSize)) {
                    cm.sendOk("由於未知的錯誤，對遠征隊的要求被拒絕。");
                }
                cm.dispose();
            } else if (selection == 3) { // get insode
                if (cm.getSquad(squadName) != null) {
                    var dd = cm.getEventManager(eventName);
                    var result = dd.startInstance(cm.getSquad(squadName), cm.getMap(), -1, eventName, minSize);
                    if(result == -1) {
                        cm.sendOk("遠征狀態已結束，請重新申請");
                    } else if(result == -2) {
                        cm.sendOk("隊伍成員沒到齊");
                    } else if(result == -3) {
                        cm.sendOk("隊伍成員人數不足，須達到" + minSize + "名成員");
                    } else if(result == -4) {
                        cm.sendOk("發生其他異常，請聯繫GM");
                    }
                } else {
                    cm.sendOk("由於未知的錯誤，對遠征隊的要求被拒絕。");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 3:
        cm.warp(triggerMap, 0);
        cm.dispose();
        break;
    }
}