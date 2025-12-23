var pop = 2;

function enter(pi) {
    if (pi.haveItem(4031870)) {
        pi.warp(922020300, 0);
        return true;
    } else {
        pi.playerMessage(5, "請點造型物開啟遠征");
    }
}