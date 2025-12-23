var box = 5530008;
var prize = [
    [5121014, 10],
    [2450106, 50],
    [2000202, 10],
    [2000203, 10],
]
function start() {
            for(var i = 0; i < prize.length; i++) {
            cm.gainItem(prize[i][0], prize[i][1]);
            }
            cm.worldMessageYellowItem(box, "Discord推廣","開啟了Discord推廣區按讚禮包，大家一起來推廣吧！");
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