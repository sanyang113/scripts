function action(mode, type, selection) {
    var em = cm.getEventManager("Romeo");
    if (em == null) {
	cm.sendOk("Please try again later.");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 261000011:
	    cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("您的隊長必須也在這個地圖。");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 71|| ccPlayer.getLevel() > 200) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && (cm.getPlayer().isGM() || size == 4)) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
		} else {
			cm.sendOk("你們隊伍的4名成員全員都必須在等級70以上。");
		}
	    }
	    break;
	case 926100000:
	    cm.sendOk("你可以嘗試在這裡進行調查。查看圖書館中的文件，直到你發現實驗室的入口。");
	    break;
	case 926100001:
	    cm.sendOk("請消滅所有的怪物！我會緊緊跟在你身後。");
	    break;
	case 926100100:
	    cm.sendOk("這些燒杯有漏洞。 我們要將這可疑液體淋在燒杯的邊緣，這樣我們才能繼續裝滿它。");
	    break;
	case 926100200:
	    if (cm.haveItem(4001130,1)) {
			cm.sendOk("哦！這是我寫的信！ 謝謝你！");
			cm.gainItem(4001130,-1);
			if(em.getProperty("stage").equals("0")) {
				em.setProperty("stage", "1");
			}
	    } else if (cm.haveItem(4001134,1)) {
			cm.gainItem(4001134,-1);
			cm.sendOk("謝謝你！現在請找出蒙特鳩的實驗資料來給我！");
			em.setProperty("stage4", "1");
	    } else if (em.getProperty("stage4") != null && em.getProperty("stage4").equals("1") && cm.haveItem(4001135,1)) {
			cm.gainItem(4001135,-1);
			cm.sendOk("謝謝你！請繼續前往下一關吧！");
			em.setProperty("stage4", "2");
			cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
	    } else {
	    	cm.sendOk("我們必須停止卡帕萊特和蒙特鳩之間的衝突！ 首先找到卡帕萊特文件，然後是蒙特鳩文件！");
	    }
	    break;
	case 926100300:
	    cm.sendOk("我們必須爬到每個成員實驗室的頂端。");
	    break;
	case 926100400:
	    cm.sendOk("等你準備好了，我們就一起去拯救我的愛人....");
	    break;
	case 926100401:
	    cm.warpParty(926100500); //urete
	    break;
    }
    cm.dispose();
}