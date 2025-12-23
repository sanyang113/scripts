var status = -1;
function start() {
    var msg = "    #fUI/UIWindow/9DDesign/Menu/logo#\r\n\r\n";
    msg += "    #b@expfix/經驗修復    #r- 將目前角色經驗值歸零#k\r\n\r\n";
    msg += "    #b@tsmega/關閉廣播    #r- 將廣播進行關閉或開啟#k\r\n\r\n";
    msg += "    #b@EA                 #r- 人物解卡#k\r\n\r\n";
    msg += "    #b@mob                #r- 查看附近怪物血量#k\r\n\r\n";
    msg += "    #b@sell/販賣道具      #r- 用指令販賣道具#k\r\n";
    msg += "#d   - 參數 <裝備|消耗|裝飾|其他|特殊> <開始> <結束>#k\r\n";
    msg += "#d   - 例如要販賣消耗第73~96格 輸入 @sell 消耗 73 96#k\r\n\r\n"
    msg += "    #b@cslot/清除道具     #r- 用指令清除道具#k\r\n"
    msg += "#d   - 參數 <裝備|消耗|裝飾|其他|特殊> <開始> <結束>#k\r\n";
    msg += "#d   - 例如要清除消耗第73~96格 輸入 @cslot 消耗 73 96#k\r\n\r\n"
    msg += "    #b@dice               #r- 擲骰子(1~6點隨機)#k\r\n\r\n";
    msg += "    #b@dice3              #r- 擲3骰子(3~18點隨機)#k\r\n\r\n";
    msg += "    #b@pickone/隨機選人   #r- 隨機選擇地圖上的一個人#k\r\n\r\n";
    msg += "    #b@GSmega/轉蛋廣播    #r- 將轉蛋廣播進行關閉或開啟#k\r\n\r\n";
    msg += "    #b@buyback/商店買回   #r- 將誤賣掉的裝備類型道具買回#k\r\n\r\n";
    msg += "    #b@dcback/斷線回傳    #r- 在副本中斷線時進行回傳#k\r\n";
    msg += "#d  - 備註: 若遠征副本因無人而結束或離線時角色\r\n"
    msg += "          為死亡狀態則不得回傳#k\r\n\r\n"
    msg += "    #b@ds/傷害字型        #r- 列出並使用已持有的傷害字型#k\r\n\r\n";
    msg += "    #b@itemdrop/物品掉落  #r- 查詢道具會從哪隻身上掉落#k\r\n";
    msg += "#d  - 備註: 若該道具不會由怪物中掉落則會顯示查無道具#k\r\n\r\n";
    msg += "    #b@bosshp             #r- 查看地圖上BOSS的生命#k\r\n\r\n";
    msg += "    #b@BossCD             #r- 查看地圖上BOSS的重生時間#k\r\n\r\n";
    msg += "    #b@HideAtk            #r- 開關其他玩家的攻擊動畫及傷害#k\r\n\r\n";
    msg += "    #b@FM/回自由          #r- 回到自由#k\r\n";
    msg += "#d  - 備註: 副本及部分地圖無法使用為正常現象#k\r\n\r\n";
    msg += "    #b@PinkBeanHelp       #r- 皮卡啾副本才可使用#k\r\n";
    msg += "#d  - 備註: 此功能為方便異常時自解而開放，請勿濫用#k\r\n\r\n";
    msg += "    #b@dpm/傷害測試       #r- 自由市場使用，測試一分鐘傷害#k\r\n\r\n";
    msg += "    #b@ExpInfo/經驗分析   #r- 計算目前經驗值取得效率#k\r\n\r\n";
    msg += "    #b@mobdrop/怪物掉落   #r- 可查詢特定怪物會掉落的掉落物#k\r\n\r\n";
    msg += "    #b@GDrop/當前區域掉落 #r- 查詢地圖區域掉落#k\r\n";
    msg += "#d  - 備註: 全域掉落物不受到任何加倍影響#k\r\n\r\n";
    msg += "    #b@MapDrop/地圖掉落   #r- 查地圖上的怪物掉落物#k\r\n\r\n";
    msg += "    #b@Hp/補血輔助        #r- 可以用來設定自動補血的功能#k\r\n";
    msg += "#d  - 備註: 若在特定地圖、武陵道場、身上有魅惑等狀態#k\r\n";
    msg += "#d          #d則仍不會自動補血#k\r\n\r\n";
    msg += "    #b@Mp/補魔輔助        #r- 可以用來設定自動補魔的功能#k\r\n";
    msg += "#d  - 備註: 若在特定地圖、武陵道場、身上有魅惑等狀態#k\r\n";
    msg += "#d          #d則仍不會自動補魔#k\r\n\r\n";
    msg += "    #b@ED/掉落物排除      #r- 設定掉落物排除#k\r\n";
    msg += "#d  - 備註: 設定後就不會打到特定道具，此設定對BOSS為無效#k\r\n\r\n";
    msg += "    #b@blacklist/黑名單   #r- 設定黑名單#k\r\n";
    msg += "#d  - 備註: 設定黑名單後會看不到該玩家的#k\r\n";
    msg += "#d          對話、密語、廣播等項目#k\r\n\r\n";
    msg += "    #b@healaffected/治癒影響 #r- 關閉後不會被治癒術影響#k\r\n\r\n";
    msg += "    #b@atkaffected/攻擊影響 #r- 關閉後不會被AD/AP Buff影響#k\r\n\r\n";
    msg += "    #b@temppassword/臨時密碼  #r- 設定臨時密碼供其他人登入#k\r\n";
    msg += "#d  - 參數 <臨時密碼> <數字0~3>#k\r\n";
    msg += "#d  - 備註: 若設定為0代表只能被登入過一次後即失效#k\r\n";
    msg += "#d          ，若為1~3則為該臨時密碼之有效時間(小時)#k\r\n";
    msg += "#d          本服不鼓勵大家隨意借出帳號密碼!!#k\r\n\r\n";
    msg += "    #b@gohome/回家      #r- 懶人指令，等同消耗回家卷軸回家#k\r\n\r\n";
    msg += "    #b@pee            #r- 當提示出現，必須輸入的防腳本指令#k\r\n";
    msg += "#d  - 備註: 若打怪跳出提醒使用此指令時，#k\r\n";
    msg += "#d          必須在累積值滿之前使用(防腳本)#k\r\n\r\n";
    msg += "    #b@AP/自動撿寶      #r- 開關人物自動撿寶功能#k\r\n";
    msg += "#d  - 備註: 人物必須在20秒內有擊殺怪物才生效#k\r\n\r\n";
    msg += "    #b@SP/人物顯示      #r- 開關人物顯示#k\r\n";
    msg += "#d  - 備註: 活動地圖會無效#k\r\n\r\n";
    msg += "    #b@MR/取得地圖倍率  #r- 顯示當前地圖怪物數量倍率#k\r\n";
    cm.sendOk(msg);
	cm.dispose();
	return;
}
function action(mode, type, selection) {
	
}