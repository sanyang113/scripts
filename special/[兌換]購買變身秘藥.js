//變身秘藥
var status = -1;
var useMeso = 1000000;
var gainItem = 2210003;
var select = -1;
var qty = -1;

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
            var msg = "其實我這裡偷偷私藏了一些 #b龍族變身秘藥#k ...\r\n";
            msg += "只要 #b1,000,000 楓幣#k ，就可以賣給你。\r\n"
            msg += "怎麼樣，要不要買一瓶呢？"
            cm.sendYesNo(msg);
            break;
        case 1:
            if(useMeso > cm.getPlayer().getMeso()) {
                cm.sendOk("很抱歉，您的楓幣不足唷！");
                cm.dispose();
                return;
            }
            if (!cm.canHold(gainItem, 1)) {
                cm.sendOk("包包已經塞不下了。");
                cm.dispose();
                return;
            }
            cm.gainMeso(-useMeso);
            cm.gainItem(gainItem, 1);
            cm.sendOk("給你了#b#i" + gainItem + ":##t" + gainItem  +"# x #r1個#k");
            cm.dispose();
            return;
        default:
            cm.dispose();
    }
}