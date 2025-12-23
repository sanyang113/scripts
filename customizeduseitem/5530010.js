var box = 5530010;
var prize = [
    [2435040,  1],
    [3018900,  1],
    [1902442,  1],
    [5220040, 10],
    [4030002,  3],
]
function start() {
            for(var i = 0; i < prize.length; i++) {
            cm.gainItem(prize[i][0], prize[i][1]);
            }
            cm.worldMessageYellowItem(box, "Facebook推廣","開啟了Facebook推廣禮包(中秋)，大家一起來推廣吧！");
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