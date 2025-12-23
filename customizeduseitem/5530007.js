var box = 5530007;
var prize = [
    [5220040, 10],
    [4030002, 1],
    [5121014, 10],
    [4030127, 30],
    [2450106, 30],
]
function start() {
            for(var i = 0; i < prize.length; i++) {
            cm.gainItem(prize[i][0], prize[i][1]);
            }
            cm.worldMessageYellowItem(box, "事前登入","開啟了公會驚喜寶箱，大家一起加入我們公會吧！");
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