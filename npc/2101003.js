
/* 	Ardin
	Ariant	
*/


function start() {
    if(cm.getQuestStatus(3933) == 1){
        cm.warp(926000000, 0);
        cm.spawnMobOnMap(9100013, 1, 57, 275, 926000000);
        cm.dispose();
        return;
    }else
    cm.sendNext ("嘿嘿，不要嘗試麻煩任何人。我想我和您沒有任何聯繫的關係。");

}

function action() {
    cm.dispose()
}