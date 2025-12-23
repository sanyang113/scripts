/*by.吳貳 NPC對話*/
var status = -1;
var message = ["您好，羅密歐與茱麗葉組隊任務#b僅開放羅密歐部分#k，請前往羅密歐所在地進行組隊任務。"]; //最後一個是點確認 其他都是下一頁
function start() {
	action(1,0,0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		return;
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			cm.dispose();
			return;
		}
		if (status == (message.length -1)) {
			cm.sendOk(message[status]);
			cm.dispose();
			return;
		} else if (status < (message.length -1) && status != -1) {
			cm.sendNext(message[status]);
		} else {
			cm.dispose();
			return;
		}
	}
}