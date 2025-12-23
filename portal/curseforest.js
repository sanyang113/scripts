var data = new Date();
var hour = data.getHours();
var map;

function enter(pi) {
	if(hour < 7) {// 00:00 ~ 6:59
		map = 910100000;
	} else if(hour < 17) {// 07:00 ~ 16:59
		map = 910100001;
	} else if(hour < 24) {// 17:00 ~ 1359
		map = 910100000;
	}
    pi.warp(map, 0); //or 910100001
}