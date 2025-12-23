var status = -1;

//入場地圖
var Maps = [85010000, 85010002, 85010004, 85020000, 85020002, 85030000, 85030003, 85030006, 85040000, 85050000, 85060000];
//忍耐地圖
var isMap = [
	[85010000, 85010001],
	[85010002, 85010003],
	[85010004,85010005,85010006],
	[85020000,85020001],
	[85020002,85020003,85020004],
	[85030000,85030001],
	[85030003,85030004],
	[85030006,85030007,85030008],
	[85040000],
	[85050000],
	[85060000,85060001],
];
//跳完忍耐後可以離開+進排行榜的地圖
var OutMaps = [85010001,85010003,85010006,85020001,85020004,85030001,85030004,85030008, 85040000, 85050000, 85060001];
var inst = false;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	//var transfer = false
	//if(!transfer) {
    //    cm.getPlayer().dropMessage(1, "冒險者您好，忍耐任務暫不開放，敬請期待9/19開服日！！");
	//		cm.dispose();
	//		return;
    //}

    if (mode == 1)
		status++;
    else
		status--;
        if(mode == 0){
		cm.sendOk("#d祝您有美好的一天！");
		cm.dispose();
	}

	if (status == 0){
		for(var i = 0; i< OutMaps.length; i++){
			if(cm.getChar().getMapId() == OutMaps[i]){
				inst = true;
				break;
			}
		}
		if(!inst || cm.getPeteniceStart() == 0){
			var str = "我是忍耐任務小幫手，我可以幫你做忍耐任務的訓練。\r\n";
				str += "你想要做什麼呢？\r\n";
				str += "#b#L1#傳送至忍耐練習地圖#l\r\n";
				str += "#b#L2#查看伺服器忍耐排行榜#l\r\n";
				str += "#b#L3#查看忍耐排行榜獎勵#l\r\n";
				str += "#b#L4#查看伺服器上周忍耐排行榜#l\r\n";
			cm.sendSimple(str);
		}else{
			cm.setPeteniceEnd();
			var total = cm.getPeteniceTotalTime();
			var totalModify = total / 1000;
			cm.setListPetencie(cm.getChar().getMapId(), total);
			cm.ExceedMapFirstPeteniceRankTime(cm.getChar().getMapId(), cm.getPeteniceTotalTime(), "[忍耐通知] "+cm.getChar().getName()+" : 我刷新了 ["+cm.getPlayer().getMap().getMapName()+"] 的忍耐排行，打敗了各路忍耐高手。完成時間:["+totalModify+"]秒");
			cm.updateMapRankSort(cm.getChar().getMapId());
			cm.setRankChar();
			cm.PeteniceTimeClear();	
			cm.warp(910000200,0);
			cm.sendOk("#r恭喜您完成忍耐！此次完成時間:["+totalModify+"]秒。");
			cm.dispose();
			return;
		}
	}else if(status == 1){
		if(selection == 1){
			str = "#r你想要訓練哪一個忍耐任務呢？#b\r\n"
			for(var s = 0; s< Maps.length; s++){
				str += "#L"+s+"##m"+Maps[s]+"#\r\n";
			}
			cm.sendSimple(str);
		}else if(selection == 2){
			str = "#r  [忍耐任務訓練排行榜]#b\r\n"
            str += "  #e#r排行榜重製時間為每周日 晚上 23:59\r\n\r\n#n#b";
			for(var s = 0; s< OutMaps.length; s++){
				str += "#L"+(s+100)+"##m"+OutMaps[s]+"#排行榜\r\n";
			}
			cm.sendSimple(str);
		}else if(selection == 3){
			cm.dispose();
    		cm.openNpc(cm.getNpc(),"[功能]忍耐排行獎勵");
		} else if(selection == 4) {
			str = "#r  [上週忍耐任務訓練排行榜]#b\r\n\r\n"
			for(var s = 0; s< OutMaps.length; s++){
				str += "#L"+(s+200)+"##m"+OutMaps[s]+"#排行榜\r\n";
			}
			cm.sendSimple(str);
		}
	}else if(status == 2){
		if(selection >= 100 && selection < 200){
			var rankstr;
			if(cm.getPeteniceMapRank(OutMaps[(selection-100)]) != -1) {
				var modifyTime = cm.getPeteniceMapRankTotal(OutMaps[(selection-100)]) / 1000;
				rankstr = "  #b個人";
				//排行:#r#e"+(cm.getPeteniceMapRank(OutMaps[(selection-100)]))+"#b#n名 
				rankstr += "完成時間:#r#e"+modifyTime+"#b#n 秒\r\n\r\n";
			}else{
				rankstr = "#d  您尚未完成此忍耐#b\r\n\r\n";
			}
			str = "#r  [#m"+OutMaps[(selection-100)]+"#忍耐排行]\r\n\r\n";
			str += rankstr;
			var ListPetenice = cm.getPeteniceRank(OutMaps[(selection-100)]);
			if(ListPetenice != null){
				for(var s  = 0 ; s < ListPetenice.size(); s++){
					if(s < 100){//顯示排行人數
						if(s != null){
							var modifyTime2 = ListPetenice.get(s).getTotalTime() / 1000;
							str += "#b#n  "+(s+1)+".#d#e"+ListPetenice.get(s).getName()+" #n#b完成時間:#d#e"+modifyTime2+"#b#n 秒\r\n";
						}else{
							break;
						}
					}else{
						break;
					}
				}
			}
			
			cm.sendOk(str);
			cm.dispose();
		}else if (selection >= 200) {
			var rankstr;
			if(cm.getPeteniceMapRankHistory(OutMaps[(selection-200)]) != -1) {
				var modifyTime = cm.getPeteniceMapRankTotalHistory(OutMaps[(selection-200)]) / 1000;
				rankstr = "  #b個人";
				rankstr += "完成時間:#r#e"+modifyTime+"#b#n 秒\r\n\r\n";
			}else{
				rankstr = "#d  您尚未完成此忍耐#b\r\n\r\n";
			}
			str = "#r  [#m"+OutMaps[(selection-200)]+"#忍耐排行]\r\n\r\n";
			str += rankstr;
			var ListPetenice = cm.getPeteniceRankHistory(OutMaps[(selection-200)]);
			if(ListPetenice != null){
				for(var s  = 0 ; s < ListPetenice.size(); s++){
					if(s < 100){//顯示排行人數
						if(s != null){
							var modifyTime2 = ListPetenice.get(s).getTotalTime() / 1000;
							str += "#b#n  "+(s+1)+".#d#e"+ListPetenice.get(s).getName()+" #n#b完成時間:#d#e"+modifyTime2+"#b#n 秒\r\n";
						}else{
							break;
						}
					}else{
						break;
					}
				}
			}
			cm.sendOk(str);
			cm.dispose();
		}else{
			cm.warp(Maps[selection], 0);
			cm.setPeteniceStart();
			cm.startPeteniceTime(isMap[selection],3600);
			cm.dispose();
		}
	}
}

