var status = -1;
function start() {
	var msg = ""+ "\t   #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n"
                        + "       #b 親愛的： #h \r\n"
                        + " #k\r\r\n"
                        + "#r以下為【山羊谷】玩家指令#k\r\n"
                        + "#b@cslot/清除道具 <*道具欄位> <開始格數> <結束格數>#k \r\n                                      - #r<清除背包道具>#k\r\n"
                        + "#b*道具欄位可使用<裝備│消耗│裝飾│其他│特殊>#k\r\n"
                        + "#d例：@cslot 消耗 2 20 >>清除消耗欄第2至20格道具#k\r\n\r\n"
                        + "#b@ea#k - #r<解除異常+查看當前狀態>#k\r\n"
                        + "#b@Mob#k - #r<查看身邊怪物訊息>#k\r\n"
                        + "#b@Bosshp#k - #r<查看當前地圖BOSS資訊>#k\r\n"
                        + "#b@Bosscd/野王重生#k - #r<查看當前地圖BOSS重生時間>#k\r\n"
                        + "#b@expfix/經驗修復#k - #r<將目前擁有經驗值歸零>#k\r\n"
                        + "#b@Expinfo/經驗分析#k - #r<經驗值效率分析>#k\r\n"
                        + "#b@jhm #k - #r<解除卡精靈商人>#k\r\n"
                        + "#b@dcback/斷線回傳#k - #r<BOSS遠征斷線回圖>#k\r\n"
                        + "#b@save/角色存檔#k - #r<存檔>#k\r\n"
                        + "#b@TSmega/廣播#k - #r<開/關所有廣播>#k\r\n"
                        + "#b@GSmega/轉蛋廣播#k - #r<開/關 轉蛋機廣播>#k\r\n"
                        + "#b@Fm/回自由#k - #r<回自由>#k\r\n"
                        + "#b@BuyBack/商店買回#k - #r<裝備誤賣買回>#k\r\n"
                        + "#b@Dpm/傷害測試#k - #r<召喚傷害測試怪物>#k\r\n"
                        + "#b@HideAtk/隱藏特效#k - #r<屏蔽其他玩家攻擊及技能特效>#k\r\n"
                        + "#b@enchant/附魔#k - #r<查看目前角色附魔狀態>#k\r\n"
                        + "#b@Sell/販賣道具#k - #r<*道具欄位> <開始格數> <結束格數>#k \r\n                                      - #r<販賣背包道具>#k\r\n"
                        + "#b*道具欄位可使用<裝備│消耗│裝飾│其他│特殊>#k\r\n"
                        + "#d例：@Sell 消耗 2 20 >>販賣消耗欄第2至20格道具#k\r\n\r\n"
                        + "#b@mobdrop/怪物掉落#k - #r<查看怪物掉落物資訊>#k\r\n"
                        + "#b@blacklist/黑名單#k - #r<玩家名稱> <設定黑名單>#k\r\n"
                        + "#b@NSell/販賣非附魔裝備#k - #r<開始格數><結束隔數>#k\r\n"
                        + "#b@spawnboss/召喚野王 - #r<在指定地圖上召換小BOSS>\r\n"
                        + "#b@ed/掉落物排除 - #r<設定排除掉落物>\r\n"
                        + "#b@hphelper/補血輔助 - #r<設定自動藥劑補血>\r\n"
                        + "#b@pickone/隨機選人 - #r<選取地圖上的一個人並顯示>\r\n"
                        + "#b@itemdrop/物品掉落 - #r<尋找物品掉落來源>\r\n"
                        + "#b@mapdrop/地圖掉落 - #r<尋找地圖上怪物的掉落物>\r\n"
                        + "#b@atkaffected/攻擊影響  -#r<開關能被激勵.精神強化影響>\r\n"
                        + "#b@healaffected/治癒影響  -#r<開關能被治癒術治癒>\r\n"
                        + "#b@damageskin/傷害字型 - #r<選擇已套用的傷害字型>\r\n"
                        + "#b@temppassword/臨時密碼 - #r<臨時密碼><持續時間:0~3>\r\n"

    cm.sendOk(msg);
	cm.dispose();
	return;
}
function action(mode, type, selection) {
	
}