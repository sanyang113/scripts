var box = 5530016;
var prize = [
    [1902769,   1],
    [2435493,   1],
    [5220040,  10],
]
function start() {
            for(var i = 0; i < prize.length; i++) {
            cm.gainItem(prize[i][0], prize[i][1]);
            }
            cm.worldMessageYellowItem(box, "萬聖限定推廣","開啟了萬聖推廣驚喜禮盒，你是一個真正的推廣大師！");
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