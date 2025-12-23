var status = -1;

function start() {
    action(1,0,0);
}
  
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        cm.dispose();
        return;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0: 
            var damages = cm.getTotalDamage();
            var msg = "";
            if(damages != null && damages.length != 0) {
                msg += "\r\n總輸出排行如下：\r\n";
                for(var i = 0; i < damages.length; i++) {
                    msg += "\r\n"+damages[i];
                }
            }
            if (msg ==""){
                cm.dispose();
                return;
            }
            cm.sendNext(msg);
            cm.dispose();
            return;
    }
}