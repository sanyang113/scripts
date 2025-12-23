var status = -1;
var useItem = 5220043;

var GachItem = [
	[2370002, 10],
	[2370003, 10],
	[2370004, 10],
	[2370001, 10],
	[2370000, 20],	
];

var BoxItems = [
	[2370000, 2370001, 2370002, 2370003, 2370004, 2370005, 2370006, 2370007, 2370008, 2370009, 2370010, 2370011, 2370012, 2370004, 2370003, 2370002],	
];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
		cm.dispose();
		return ;
    }
    if (status == 0) {
		cm.sendSimple("你好，我是山羊谷的經驗值轉蛋機，要來試試手氣嗎？\r\n\r\n"+
			          "#r#L1#我要進行轉蛋#l\r\n\r\n"+
					  "#b#L2#查看獎勵內容#l");
	}else if(status == 1) {
		if(selection == 1){
			if (cm.getPlayer().getLevel() < 10) {
				cm.sendOk("10等以上玩家才可以使用經驗值轉蛋機系統喔！");
				cm.dispose();
			} else if (cm.haveItem(useItem, 1)  ) {
				var str = "";
				str += "您身上只要有 #b#i" + useItem + ":##t" + useItem + "##k 就可以進行轉蛋。\r\n可獲得的部份珍貴物品預覽如下：";
				for(var i = 0 ; i < GachItem.length ; i++){
					if ( i % 5 == 0 ){
						str += "\r\n";
					}
					str += "#i"+GachItem[i]+":#\t";
				}
				cm.sendYesNo(str);
			} else {
				cm.sendOk("不好意思!您沒有#b#i" + useItem + ":##t" + useItem + "##k。");
				cm.safeDispose();
			}
		}else if(selection == 2){
			var msg = "#r 所有寶箱獎勵內容如下：\r\n\r\n";
			
			for(var i = 0; i< BoxItems.length;i++){
				msg += "#b#i"+BoxItems[i][0]+":#";
				for(var j = 1; j < BoxItems[i].length; j++){
					msg += "#i"+BoxItems[i][j]+":# ";
				}
				msg += "\r\n";
			}
			cm.sendOk(msg);
			cm.dispose();
		}
    } else if (status == 2) {
		if(!cm.canHold()) {
			cm.sendOk("您的背包空間不足");
			cm.dispose();
			return;
		}

		var item;
		var gain = false;
		for(var i = 0 ; i < GachItem.length ; i++){
			var GItem = GachItem[i];
			if (Math.floor(Math.random() * GItem[1]) == 0) {
				item = cm.gainGachaponItem(GItem[0], 2);
				gain = true;
				break;
			}
		}
		if(!gain){
			var itemList = new Array(2370005, 2370006, 2370007, 2370008, 2370009, 2370010, 2370011, 2370012);
			item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 2);
		}
		if (item != -1) {
			cm.gainItem(useItem, -1);
			cm.sendOk("您已獲得 #b#i" + item + ":##t" + item + "##k * 2 個。");
		} else {
			cm.sendOk("您的背包空間不足");
		}
		cm.safeDispose();
	}
}
