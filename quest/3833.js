var status = -1;

function start(mode, type, selection) {
		qm.forceStartQuest();
		qm.dispose();
}
function end(mode, type, selection) {
	var count = qm.getItemCount(4000294)
	if(count>= 1000){
		qm.gainExp(54000);
		qm.gainItem(4000294,-1000);
		qm.gainItem(2000005,50);
		qm.gainItem(2040501,1);
		qm.sendOk("蒐集了這麼多百年人參，真是辛苦你了");
		qm.forceCompleteQuest();
		qm.dispose();
	}else if(count< 1000 && count>= 800){
		qm.gainExp(54000);
		qm.gainItem(4000294,-count);
		qm.gainItem(2000004,50);
		qm.gainItem(2040500,1);
		qm.forceCompleteQuest();
		qm.dispose();
	}else if(count< 800 && count>= 600){
		qm.gainExp(54000);
		qm.gainItem(4000294,-count);
		qm.gainItem(2020013,60);
		qm.sendOk("謝謝你幫我蒐集百年人參");
		qm.forceCompleteQuest();
		qm.dispose();
	}else if(count< 600 && count>= 500){
		qm.gainExp(51000);
		qm.gainItem(4000294,-count);
		qm.gainItem(2020013,50);
		qm.sendOk("謝謝你幫我蒐集百年人參");
		qm.forceCompleteQuest();
		qm.dispose();
	}else if(count< 500 && count>= 400){
		qm.gainExp(51000);
		qm.gainItem(4000294,-count);
		qm.gainItem(2020012,40);
		qm.sendOk("你真的有認真蒐集百年人參嗎?");
		qm.forceCompleteQuest();
		qm.dispose();
	}else if(count< 400 && count>= 200){
		qm.gainExp(48000);
		qm.gainItem(4000294,-count);
		qm.gainItem(2001001,30);
		qm.sendOk("你真的有認真蒐集百年人參嗎?");
		qm.forceCompleteQuest();
		qm.dispose();
	}else if(count< 200 && count>= 100){
		qm.gainExp(45000);
		qm.gainItem(4000294,-count);
		qm.gainItem(2022003,20);
		qm.sendOk("你真的有認真蒐集百年人參嗎?");
		qm.forceCompleteQuest();
		qm.dispose();
	}else if(count< 100 && count>= 50){
		qm.gainExp(10000);
		qm.gainItem(4000294,-count);
		qm.gainItem(2000002,10);
		qm.sendOk("你真的有認真蒐集百年人參嗎?");
		qm.forceCompleteQuest();
		qm.dispose();
	}else if(count< 50 && count>= 1){
		qm.gainExp(10);
		qm.gainItem(4000294,-count);
		qm.gainItem(2000000,1);
		qm.sendOk("你真的有認真蒐集嗎?");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
