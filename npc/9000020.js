/*
 NPC Name: 		Spinel
 Map(s): 		Victoria Road : Henesys (100000000), Victoria Road : Ellinia (101000000), Victoria Road : Perion (102000000), Victoria Road : Kerning City (103000000), Victoria Road : Lith Harbor (104000000), Orbis : Orbis (200000000), Ludibrium : Ludibrium (220000000), Leafre : Leafre (240000000), Zipangu : Mushroom Shrine (800000000)
 Description: 		World Tour Guide
 */

/* global cm */

var status = -1;
var cost, sel;
var savedMap;
var back;
var paymentRate;

var maps = [   
 	{
        id: '740000000',
        name: '#r[NEW]#b福爾摩沙的西門町',
        cost: 3000
    },
    {
        id: '701000000',
        name: '#r[NEW]#b東方神州的上海',
        cost: 3000
    },
    {
        id: '800000000',
        name: '#r[NEW]#b日本的古代神社',
        cost: 3000
    },
    {
        id: '500000000',
        name: '#r[NEW]#b泰國的水上市場',
        cost: 3000
    },	
    {
        id: '742000000',
        name: '#r[NEW]#b福爾摩沙的101大道',
        cost: 3000
    },	
    {
        id: '501000000',
        name: '#r[NEW]#b黃金寺廟',
        cost: 3000
    },
    {
        id: '540000000',
        name: '#r[NEW]#b中心商務區',
        cost: 3000
    },	
    {
        id: '541000000',
        name: '#r[NEW]#b駁船碼頭城',
        cost: 3000
    },	
    {
        id: '702000000',
        name: '#r[NEW]#b少林寺',
        cost: 3000
    }	
];

function start() {
    savedMap = cm.getSavedLocation("WORLDTOUR");
    if (savedMap > 0 && savedMap != cm.getPlayer().getMapId()) {
        cm.sendSimple("旅行愉快嗎？\r\n#b#L0#想要去別的地方旅行嗎？#l \n\r #L100#想要結束旅行，回到 #m" + savedMap + "#。#l");
    } else {
        cm.sendNext("如果對疲憊的生活厭倦了，何不去旅行呢？不僅可以感受新的文化，還能學到很多知識！向您推薦在我們楓之谷旅行社準備的#b世界旅行#k，擔心會有很大開銷嗎？請不必擔心。我們的#b楓之谷世界旅行#k只需#b3000楓幣#k就可以。");
    }
}

function action(mode, type, selection) {
    if (selection == 100) {
        cm.warp(savedMap);
        cm.clearSavedLocation("WORLDTOUR");
        cm.dispose();
        return;
    }

    if (cm.getJob() == 0) {
        paymentRate = 0.1;
    } else {
        paymentRate = 1;
    }

    if (mode == -1) {
        cm.dispose();
    }
    if ((status <= 2 && mode == 0) || (status == 4 && mode == 1)) {
        cm.dispose();
        return;
    }

    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        var stringBuilder = "";
        stringBuilder += "要前往哪裡呢？\r\n";
        for (var i = 0; i < maps.length; i++) {
            cost = maps[i].cost * paymentRate;
            var displaycost = parseThousandValueToString(cost);
            stringBuilder += " #b#L" + i + "##m" + maps[i].id + "# (3000 楓幣)#l \r\n";
        }
        cm.sendSimple(stringBuilder);
    } else if (status == 1) {
        sel = selection;
        cost = maps[sel].cost * paymentRate;
        var displaycost = parseThousandValueToString(cost);
        cm.sendYesNo("您確定要前往 #b#m" + maps[sel].id + "##k 嗎？ 到那邊需要 #b3000 楓幣#k。確定現在要去嗎？");
    } else if (status == 2) {
		if (cm.getMeso() < 3000) {
            cm.sendOk("很抱歉，您的楓幣不足。");
        } else {
		cm.saveLocation("WORLDTOUR");
        cm.gainMeso(-3000);
        cm.warp(maps[sel].id);
        cm.dispose();
        return;
		}
    }
}

function parseThousandValueToString(value) {
    if(value.toString().length > 3) {
        return Math.floor((cost / 3000)).toString() + "," + padRight((cost % 3000).toString(), 3);
    } else {
        return value.toString();
    }
}

function padLeft(str, length) {
    if (str.length >= length)
        return str;
    else
        return padLeft("0" + str, length);
}

function padRight(str, length) {
    if (str.length >= length)
        return str;
    else
        return padRight(str + "0", length);
}