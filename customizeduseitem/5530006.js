var box = 5530006;

var prize = [
    [4030002, 10],
    [2450107, 50],
    [4030127, 50],
    [2450105, 200],
]
function start() {
            for(var i = 0; i < prize.length; i++) {
            cm.gainItem(prize[i][0], prize[i][1]);
            }
            cm.worldMessageYellowItem(box, "事前登入","開啟了公會長獎勵寶箱，大家一起加入我們公會吧！");
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