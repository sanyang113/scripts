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
            var items = cm.searchMob(9400266);
            var msg = "#b杜那斯遠征#k 可取得獎勵如下:\r\n\r\n";
                //for(var i = 0; i < items.length; i++) {
                //    if(items[i][0] != 0) {
                //        if(items[i][1]==0){msg += "#b#i" + items[i][0] + ":#"}
                //    }
                //}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>=2450409 && items[i][0]<2450415){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]==4032181){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>=4020010 && items[i][0]<4020013){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>=4032166 && items[i][0]<4032169){msg += "#b#i" + items[i][0] + ":#"}}}

            cm.sendOk(msg);
            cm.dispose();
            return;
    }
}