var status = -1;

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            var items = cm.searchMob(8500002);
            var msg = "#b拉圖斯遠征#k 可取得獎勵如下:\r\n\r\n";
                //for(var i = 0; i < items.length; i++) {
                //    if(items[i][0] != 0) {
                //        if(items[i][1]==0){msg += "#b#i" + items[i][0] + ":#"}
                //    }
                //}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>=2280000 && items[i][0]<2300000){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]<1300000){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>=1300000 && items[i][0]<2000000){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]==2340000){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>=2040000 && items[i][0]<2050000){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>=3000000){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0&& items[i][0] != 2340000) {
                        if (items[i][1]==0 && items[i][0]>=2000000 && items[i][0]<2040000 ||
                            items[i][1]==0 && items[i][0]>=2050000 && items[i][0]<2280000 ||
                            items[i][1]==0 && items[i][0]>=2300000 && items[i][0]<3000000
                        ){msg += "#b#i" + items[i][0] + ":#"}}}
            cm.sendOk(msg);
            cm.dispose();
            return;
    }
}