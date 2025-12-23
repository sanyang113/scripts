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
            // var totalAmt = cm.getMonthDonateAmt("202504");
            // cm.sendOk(totalAmt);
            cm.gainItem(1302999, 1);
            cm.dispose();
            return;
    }
}