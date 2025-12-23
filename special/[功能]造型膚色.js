var status = 0;
var useType = -1;

var skin = [
    [0,1,2,3,4,6,7,8,9,10,11],
    [12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],
    [48,49,51,52,54,55,56,57,58,59,60,61,62,63,64,65,66,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83],
    [84,85,87,88,90,91,92,93,94,95,96,97,98,99,100,101,102,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119]
]

function start() {
    var msg = "嗨！您是否有想要膚色呢？就像我的健康皮膚。我可以隨意換成想要的膚色唷\r\n";
    msg += "#L0#我想選擇#b經典造型#k#l\r\n";
    msg += "#L1#我想選擇#b人族造型#k#l\r\n";
    msg += "#L2#我想選擇#b妖精造型#k#l\r\n";
    msg += "#L3#我想選擇#b哥布林造型#k#l\r\n";
    cm.sendSimple(msg);
}

function action(mode, type, selection) {
    if (mode < 1)
        cm.dispose();
    else {
        status++;
        if (status == 1) {
            useType = selection;
            var useSkin = skin[useType];
            cm.sendStyle("選一個想要的膚色", useSkin);
        } else {
            var useSkin = skin[useType];
            cm.setSkin(useSkin[selection]);
            cm.sendOk("真美呀！享受你的新膚色吧!");
            cm.dispose();
        }
    }
}