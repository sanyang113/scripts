load('nashorn:mozilla_compat.js');
importPackage(Packages.server.speedrun);

var status = -1;
var sel = -1;
var showRanks = 5;

var squads = ['tak','fish','trk','scartar','zak','horntail','ud','tk']
var squadNames = ['拉圖斯','海怒斯','克雷賽爾','娃娃獅王與泰勒熊','殘暴炎魔','闇黑龍王','黑道長老','天皇蟾蜍']

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
            var msg = "您想要查看哪一個排名？\r\n\r\n";
            for(var i = 0; i < squads.length; i++) {
                msg += "#L" + i + "##b" + squadNames[i] + "#l\r\n";
            }
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            var oneSquadSpeedRun = SquadSpeedRun.getInstance().getOneSquadSpeedRun(squads[selection]);
            if(oneSquadSpeedRun == null) {
                cm.sendOk("未定義的副本");
                cm.dispose();
                return;
            }
            var msg = squadNames[selection] + " 的挑戰名單如下：\r\n\r\n";
            var teams = oneSquadSpeedRun.getTopTeams(showRanks);

            if(teams == null || teams.length == 0) {
                cm.sendOk("目前沒有排行");
                cm.dispose();
                return;
            }
            
            for(var i = 0; i < teams.length; i++) {
                var team = teams[i];
                msg += "第" + (i+1) + "名：\r\n"
                msg += "隊長：" + team.getLeaderName() + "\r\n";
                var memberNames = "";
                var members = team.getMemberNames();
                for(var j = 0; j < members.length; j++) {
                    memberNames += members[j]
                    if(j < members.length - 1) memberNames += "、";
                }
                msg += "隊伍名單：" + memberNames + "\r\n";
                msg += "花費時間：" + createTime(team.battletime) + "\r\n";
                msg += "================================================\r\n\r\n";
            }
            cm.sendOk(msg);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

function createTime(time) {
    var totalSeconds = Math.floor(time / 1000);
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var result = "";
    if (minutes > 0) {
        result += minutes + "分";
    }
    result += seconds + "秒";

    return result;
}