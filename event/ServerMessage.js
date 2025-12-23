/*
修改by宗達 20160403 12:48
*/

var Message = new Array(
    "如果遇到不能點技能/能力值/不能進傳點/不能點NPC,請在對話框打@ea就可以了",
    "/找人 玩家名字 可以用來找人喔",
	"禁止開外掛，遊戲愉快！！",
	"關於伺服器指令可以使用@help",
    "如有bug請回報GM",
    "使用@hp可取代寵物補血技能，效果更好唷！",
    "使用@mp可取代寵物補魔技能，效果更好唷！",
    "可以前往自由市場挖掘更多好用的NPC",
    "山羊谷修改密碼可點選官方Line-修改密碼進行遊戲密碼的重設"
);

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 300000);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    em.broadcastYellowMsg("[山羊谷 公告]" + Message[Math.floor(Math.random() * Message.length)]);
}

