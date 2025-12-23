var status = -1;

function start() {
    action(1, 0, 0);
}
  
function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;

    switch (status) {
        case 0:
            var player = cm.getPlayer();
            var sp = player.getRemainingSp();

            // 等級限制
            if (player.getLevel() < 150) {
                cm.sendOk("等級150以上才可以使用技能點數增加券！");
                cm.dispose();
                return;
            }

            // 四轉判斷：職業代碼尾數為 2
            if (player.getJob() % 10 != 2) {
                cm.sendOk("四轉後才可以使用技能點數增加券！");
                cm.dispose();
                return;
            }

            // SP 上限檢查
            if (sp >= 100) {
                cm.sendOk("SP 超過 100 無法使用技能點數增加券。");
                cm.dispose();
                return;
            }
            if(!cm.haveItem(2450138, 1)) {
                cm.sendOk("為什麼你可以點進來");
                cm.dispose();
                return;
            }
            // 增加 SP
            var addSp = 1;
            var newSp = sp + addSp;
            player.setRemainingSp(newSp);
            player.updateSingleStat(Packages.client.MapleStat.AVAILABLESP, newSp);
            cm.gainItem(2450138, -1);
            cm.getPlayer().dropMessage("幫您增加了 1點SP，您現在的SP為 " + newSp +"。");
            cm.dispose();
            return;
    }
}
