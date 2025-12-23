/* Author: aaroncsn(MapleSea Like)(Incomplete)
	NPC Name: 		Parwen
	Map(s): 		Hidden Street: Authorized Person Only(261020401)
	Description: 		Unknown
*/

function start(){
	if (cm.getQuestStatus(3320) == 1) {
		cm.warp(926120200, 0);
        cm.dispose();
	}else{
		cm.sendNext("You're not ready for this yet.");
		cm.dispose();
	}
}