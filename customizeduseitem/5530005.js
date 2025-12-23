function start() {
        cm.openNpc(9401434, "[功能]萬能貓頭鷹");
}

function check() {
    if (cm.getPlayer().getMap().getId() >= 910000000 && cm.getPlayer().getMap().getId() <= 910000022){
        return true;
    }else{
        cm.getPlayer().dropMessage("只能在自由市場使用");
	    return false;
    }
}

function checkUse() {
    return false;
}