var prize = [
    [2450106, 5],
    [5121014, 2],
    [5220040, 1],
    [5041000, 2],
]
function start() {
            for(var i = 0; i < prize.length; i++) {
            cm.gainItem(prize[i][0], prize[i][1]);
            }
            cm.worldMessageYellowItem(5530004, "每日推廣","開啟了每日推廣獎勵箱(Facebook)，大家一起來推廣吧！");
            return;
}

function check() {
        var check = [];
        for (var i = 0; i < prize.length; i++) {
            check.push([prize[i][0], prize[i][1]]);
        }
        if(!cm.canHold(check)) {
            cm.getPlayer().dropMessage("請確認背包空間是否足夠！");
            return false;
        }else{
            return true;
        }

}

function checkUse() {
    return true;
}