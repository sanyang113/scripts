function action(mode, type, selection) {
  if (cm.getQuestStatus(3311) == 1) {
    cm.sendNext("完成任務。");
  	cm.forceCompleteQuest(3311);
  	cm.gainExp(65000);
    cm.dispose();
    } else {
      cm.sendNext("看起來是普通的書桌");
  	  cm.dispose();
    }   
}

