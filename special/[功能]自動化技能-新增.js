var status = -1;
var sel = -1;

var all = {
    100 : [1001003],
    110 : [1101004, 1101005, 1101006, 1101007],
    111 : [1111002],
    112 : [1121000, 1121002],
    120 : [1201004, 1201005, 1201007],
    121 : [1211003, 1211004, 1211005, 1211006, 1211007, 1211008],
    122 : [1221000, 1221002, 1221003, 1221004],
    130 : [1301004, 1301005, 1301006, 1301007],
    131 : [1311008],
    132 : [1321000, 1321002, 1321007],
    200 : [2001002, 2001003],
    210 : [2101001],
    211 : [2111005],
    212 : [2121000, 2121002],
    220 : [2201001],
    221 : [2211005],
    222 : [2221000, 2221002],
    230 : [2301003, 2301004],
    231 : [2311003],
    232 : [2321000, 2321002],
    300 : [3001003],
    310 : [3101002, 3101004],
    312 : [3121000, 3121002, 3121007],
    320 : [3201002, 3201004],
    322 : [3221000, 3221002, 3221006],
    410 : [4101003, 4101004],
    411 : [4111001, 4111002],
    412 : [4121000, 4121006],
    420 : [4201002, 4201003],
    421 : [4211003, 4211005],
    422 : [4221000],
    510 : [5101006],
    512 : [5121000, 5121009],
    520 : [5201003],
    522 : [5221000],
    1100 : [11001001],
    1110 : [11101001, 11101002, 11101003],
    1111 : [11111001, 11111007],
    1200 : [12001001, 12001002],
    1210 : [12101000, 12101004, 12101005],
    1300 : [13001002],
    1310 : [13101001, 13101002, 13101003],
    1410 : [14101002, 14101003],
    1411 : [14111000],
    1510 : [15101002, 15101006],
    1511 : [15111005, 15111006],
    2100 : [21001003],
    2110 : [21101003],
    2111 : [21111001, 21111005],
    2112 : [21121000, 21121003],
}

function start() {
    return action(1,0,0);
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
            var expireStatus = cm.purchaseAutoSkillStatus();
            var expiredDate = cm.getPurchaseAutoSkillDate();
            var msg = "歡迎使用自動技能施放系統\r\n" + (expireStatus == 2 ? "#r#e已購買永久功能#k#n" : "#r#e到期日:" + expiredDate + "#k#n");
            msg += "\r\n您可以選擇以下的技能\r\n\r\n";
            var job = cm.getPlayer().getJob();
            var jobs = getJobs(job);
            var append = "";
            for(var i = 0; i < jobs.length; i++) {
                var currentJob = jobs[i];
                var currentSkills = all[currentJob] || [];
                for(var j = 0; j < currentSkills.length; j++) {
                    var skill = currentSkills[j];
                    append += "#b#L" + skill + "##s" + skill + "# #q" + skill + "#\r\n";
                }
            }
            if(append == "") {
                cm.sendOk("目前暫無可自動施放的技能唷！");
                cm.dispose();
                return;
            }

            cm.sendOk(msg + append);
            break;
        case 1:
            sel = selection;
            var msg = "確定要把 #b#s" + sel + "##q" + sel + "##k 加入到自動施放嗎？";
            cm.sendYesNo(msg);
            break;
        case 2:
            var result = cm.canAutoSkill(sel);
            if(result) {
                cm.sendOk("您已經加入過該技能囉");
                cm.dispose();
            }

            var skills = cm.getAutoSkills();
            if(skills >= 3) {
                cm.sendOk("很抱歉，您已經放入三個技能了");
                cm.dispose();
            }

            cm.insertAutoSkill(sel);
            cm.sendOk("幫您加入技能自動施放囉");
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

function getJobs(job) {
    var result = [];

    var a = Math.floor(job / 100);
    var b = Math.floor((job % 100) / 10);
    var c = job % 10;

    var mother = a * 100;
    result.push(mother);

    for (var i = 0; i <= c; i++) {
        var num = a * 100 + b * 10 + i;
        if (num !== mother) {
            result.push(num);
        }
    }

    return result;
}