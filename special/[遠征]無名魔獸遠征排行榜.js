load('nashorn:mozilla_compat.js');
importPackage(Packages.server.speedrun);

var status = -1;
var sel = -1;
var showRanks = 5;

var squads = ['vergamot','dunas','nibergen_squad','nmm_squad','dunas2','core_blaze','aufheben']
var squadNames = ['貝魯加墨特','杜那斯','尼貝龍根','無名魔獸','強化杜那斯','普雷茲首腦','奧芙赫班']

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
            selection = 3;
            var oneSquadSpeedRun = SquadSpeedRun.getInstance().getOneSquadSpeedRun(squads[selection]);
            if(oneSquadSpeedRun == null) {
                cm.sendOk("未定義的副本");
                cm.dispose();
                return;
            }
            var msg = "#b" +squadNames[selection] + "遠征 #k的排行榜如下：\r\n\r\n";
            var teams = oneSquadSpeedRun.getTopTeams(showRanks);

            if(teams == null || teams.length == 0) {
                cm.sendOk("目前沒有排行");
                cm.dispose();
                return;
            }
            
            for(var i = 0; i < teams.length; i++) {
                var team = teams[i];
                msg += "#r#e【No." + (i+1) + "】#k#n\r\n"
                msg += "隊長：#b#e" + team.getLeaderName() + "#k#n\r\n";
                var memberNames = "";
                var members = team.getMemberNames();
                for(var j = 0; j < members.length; j++) {
                    if(j == 3||j == 6||j == 9){memberNames += "\r\n     "}
                    memberNames += members[j]
                    if(j < members.length - 1) memberNames += "#k#n、#b#e";
                }
                msg += "隊伍：#b#e" + memberNames + "#k#n\r\n";
                msg += "通關時間：#b#e" + createTime(team.battletime) + "#k#n\r\n";
                msg += "------------------------------------------------------\r\n";
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
    var millisecond = time % 1000
    var result = "";
    if (minutes > 0) {
        result += minutes + "分";
    }
    result += seconds + "秒";
    result += millisecond
    return result;
}