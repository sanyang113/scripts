
var status;

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode, type, selection){
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	var mapId = cm.getMapId();
	if (mapId == 103000890) { 
	    cm.warp(103000000, "mid00");
	    cm.removeAll(4001007);
	    cm.removeAll(4001008);
	    cm.dispose();
	} else {
	    var outText;
	    if (mapId == 103000805) {
			outText = "你確定要離開地圖？？";
	    } else {
			outText = "一旦你離開地圖，你將不得不重新啟動整個任務，如果你想再次嘗試。你還是要離開這個地圖？";
	    }
	    if (status == 0) {
		cm.sendYesNo(outText);
	    } else if (mode == 1) {
			if(mapId == 103000805) {
				cm.addCountPartyQuest(9100000);
            }
			cm.warp(103000890, "st00"); // Warp player
			cm.dispose();
	    }
	}
    }
}

function log() {
    var event = "超級綠水靈組隊:";
    // 計算這週的週一日期
    var d = new Date(); // 今天的日期
    var dayOfWeek = d.getDay(); // 取得今天是星期幾 (0=星期日, 1=星期一, ..., 6=星期六)
    
    // 計算差距，回退到週一
    var diffToMonday = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek; // 週日特例處理 (-6 天回到週一)
    d.setDate(d.getDate() + diffToMonday); // 回退到本週的週一
    
    // 取得週一的年、月、日
    var year = d.getFullYear();
    var month = d.getMonth() + 1; // 月份從0開始
    var day = d.getDate();
    
    var daytime = "日期:" + year + "年" + month + "月" + day + "日";
    
    return event + daytime;
}
