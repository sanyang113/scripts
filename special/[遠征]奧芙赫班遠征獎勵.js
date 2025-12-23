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
            var items = cm.searchMob(9400289);
            var msg = "#b奧芙赫班遠征#k 可取得獎勵如下:\r\n\r\n";
                //for(var i = 0; i < items.length; i++) {
                //    if(items[i][0] != 0) {
                //        if(items[i][1]==0){msg += "#b#i" + items[i][0] + ":#"}
                //    }
                //}
                
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>=4030002 && items[i][0]<4030002){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]==2040037){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]<1300000){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>=1300000 && items[i][0]<2000000){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>=2450500 && items[i][0]<2450600){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]==2340001 || items[i][0]==2049204){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]==2340000 || items[i][0]==2049100){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]==2049252){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>=2450000 && items[i][0]<2450500||items[i][1]==0 && items[i][0]>=2330000 && items[i][0]<2340000||items[i][1]==0 && items[i][0]>=2070000 && items[i][0]<2080000){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]==4030002){msg += "#b#i" + items[i][0] + ":#"}}}                        
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0) {
                        if(items[i][1]==0 && items[i][0]>4030002){msg += "#b#i" + items[i][0] + ":#"}}}
                for(var i = 0; i < items.length; i++) {
                    if(items[i][0] != 0&& items[i][0] != 2340000) {
                        if (items[i][1]==0 && items[i][0]>=2000000 && items[i][0]<2040000

                        ){msg += "#b#i" + items[i][0] + ":#"}}}
            cm.sendOk(msg);
            cm.dispose();
            return;
    }
}