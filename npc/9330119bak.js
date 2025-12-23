var status = -1
var all = 100;
var topRand = 8.3;
var firstRand = 11.7;
var gainItems = [];
var useItem = 5220040;
var useGuaranteedItem = 4030002;
var useGuaranteedItemQuantity = 40;

var topPrizes = [
    {itemid: 2450114, quantity: 1, weight: 2,  rareness: 2},
    {itemid: 2340000, quantity: 1, weight: 100, rareness: 2},
    {itemid: 2049200, quantity: 1, weight: 70, rareness: 2},
    {itemid: 2049201, quantity: 1, weight: 14,  rareness: 2},
    {itemid: 2049202, quantity: 1, weight: 24,  rareness: 2},
    {itemid: 2049204, quantity: 1, weight: 74,  rareness: 2},
    {itemid: 2340001, quantity: 1, weight: 40,  rareness: 2},
    {itemid: 2450300, quantity: 1, weight: 2,  rareness: 2},
    {itemid: 2450305, quantity: 1, weight: 2,  rareness: 2},
    {itemid: 2070018, quantity: 1, weight: 2,  rareness: 2},
    {itemid: 2330007, quantity: 1, weight: 2,  rareness: 2},
];

var firstPrizes = [
    {itemid: 2049100, quantity: 1, weight: 20,  rareness: 2},
    {itemid: 2041132, quantity: 1, weight: 10,  rareness: 2},
    {itemid: 2041133, quantity: 1, weight: 10,  rareness: 2},
    {itemid: 2041134, quantity: 1, weight: 10,  rareness: 2},
    {itemid: 2041135, quantity: 1, weight: 2,   rareness: 2},
    {itemid: 2041136, quantity: 1, weight: 10,  rareness: 2},
    {itemid: 2041137, quantity: 1, weight: 10,  rareness: 2},
    {itemid: 2041138, quantity: 1, weight: 10,  rareness: 2},
    {itemid: 2041139, quantity: 1, weight: 2,   rareness: 2},
    {itemid: 4030002, quantity: 1, weight: 120, rareness: 2},

    {itemid: 1902827, quantity: 1, weight: 1, rareness: 2},
    {itemid: 1902041, quantity: 1, weight: 1, rareness: 2},
    {itemid: 1902564, quantity: 1, weight: 1, rareness: 2},
    {itemid: 1902177, quantity: 1, weight: 1, rareness: 2},
    {itemid: 2435670, quantity: 1, weight: 1, rareness: 2},
    {itemid: 2435707, quantity: 1, weight: 1, rareness: 2},
    {itemid: 2435643, quantity: 1, weight: 1, rareness: 2},
    {itemid: 2435556, quantity: 1, weight: 1, rareness: 2},
    {itemid: 2435534, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3018363, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3018085, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3018806, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3010788, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3018535, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3019375, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3018609, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3018185, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3018053, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3018789, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3019150, quantity: 1, weight: 1, rareness: 2},
    {itemid: 3018737, quantity: 1, weight: 1, rareness: 2},

    {itemid: 1032121, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1042231, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1062148, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1072618, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1082401, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1112681, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1122174, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1342074, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1102040, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1102041, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1102042, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1102084, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1102085, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1102086, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1082149, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1082179, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1122019, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1022067, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1112915, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1112922, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1012158, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1012015, quantity: 1, weight: 5, rareness: 2},
    {itemid: 1012017, quantity: 1, weight: 5, rareness: 2},

    {itemid: 1302143, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1312058, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1322086, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1332116, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1372074, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1382095, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1402086, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1412058, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1422059, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1432077, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1442107, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1452102, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1462087, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1472113, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1482075, quantity: 1, weight: 3, rareness: 2},
    {itemid: 1492075, quantity: 1, weight: 3, rareness: 2},
    
    {itemid: 1302144, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1312059, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1322087, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1332117, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1372075, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1382096, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1402087, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1412059, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1422060, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1432078, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1442108, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1452103, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1462088, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1472114, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1482076, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1492076, quantity: 1, weight: 2, rareness: 2},
    
    {itemid: 1302145, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1312060, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1322088, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1332118, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1372076, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1382097, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1402088, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1412060, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1422061, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1432079, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1442109, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1452104, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1462089, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1472115, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1482077, quantity: 1, weight: 2, rareness: 2},
    {itemid: 1492077, quantity: 1, weight: 2, rareness: 2},

    {itemid: 1372035, quantity: 1, weight: 4, rareness: 2},
    {itemid: 1372036, quantity: 1, weight: 4, rareness: 2},
    {itemid: 1372037, quantity: 1, weight: 4, rareness: 2},
    {itemid: 1372038, quantity: 1, weight: 4, rareness: 2},
];

// 小獎若機率增加就多放幾次
var otherPrize = [
    1022047, 1022058, 1022060, 1082145, 1082146, 1082147, 1082148, 1082150, 1082178, 1082515,
    1082175, 1082176, 1082177, 1102000, 1102001, 1102002, 1102003, 1102004, 1012056, 1002563, 
    1002564, 1002931, 1002932, 1002933, 1002934, 1052191, 1052187, 1052188, 1052189, 1052190,
    1022047, 1022058, 1022060, 1082145, 1082146, 1082147, 1082148, 1082150, 1082178, 1082515,
    1082175, 1082176, 1082177, 1102000, 1102001, 1102002, 1102003, 1102004, 1012056, 
    1002931, 1002932, 1002933, 1002934, 1052191, 1052187, 1052188, 1052189, 1052190,
    1022047, 1022058, 1022060, 1082145, 1082146, 1082147, 1082148, 1082150, 1082178, 1082515,
    1082175, 1082176, 1082177, 1102000, 1102001, 1102002, 1102003, 1102004, 1012056, 
    1002931, 1002932, 1002933, 1002934, 1052191, 1052187, 1052188, 1052189, 1052190,
    //1302021,
    //1302024, 1302049, 1302061, 1302080, 1312012, 1312013, 1312014, 1302111, 1302225, 1302160,
    //1302161, 1302162, 1302219, 1322021, 1302222, 1302217, 1322158, 1372134, 1382164, 1302218,
    //1322022, 1322023, 1322024, 1322025, 1322026, 1322027, 1322070, 1332032, 1332030, 1332101, 
    //1372008, 1372017, 1372062, 1382015, 1382038, 1382054, 1382177, 1402014, 1402029, 1402044, 
    //1402147, 1402148, 1402149, 1422030, 1422031, 1422068, 1432013, 1432136, 
    //1432157, 1442018, 1442021, 1442023, 1442039, 1442121, 1452024, 1452054, 1462047, 
    //1472054, 1472065, 1482065, 1322155, 1372135, 1382165, 1302219, 1322156, 1302220, 1322157, 
    //1372136, 1382166, 1452166, 1302221, 1452167, 1302223, 1322159, 
    1302021, 1302024, 1302061, 1302080, 1302111, 1302160, 1302217,
    1302218, 1302219, 1302220, 1302221, 1302222, 1302223, 1302225, 1312012, 1312013,
    1312014, 1322021, 1322022, 1322023, 1322024, 1322025, 1322026, 1322027, 1322070, 1322155,
    1322156, 1322157, 1322158, 1322159, 1332032, 1332101, 1372008, 1372017, 
    1372134, 1372135, 1372136, 1382015, 1382038, 1382054, 1382164, 1382165, 1382166, 
    1402014, 1402029, 1402044, 1402147, 1402148, 1402149, 1422030, 1422031, 1422068,
    1432013, 1432136, 1432157, 1442018, 1442021, 1442023, 1442039, 1442121, 1452024,
    1452166, 1452167, 1462047, 1472054, 

    1302021, 1302024, 1302061, 1302080, 1302111, 1302160, 1302217,
    1302218, 1302219, 1302220, 1302221, 1302222, 1302223, 1302225, 1312012, 1312013,
    1312014, 1322021, 1322022, 1322023, 1322024, 1322025, 1322026, 1322027, 1322070, 1322155,
    1322156, 1322157, 1322158, 1322159, 1332032, 1332101, 1372008, 1372017, 
    1372134, 1372135, 1372136, 1382015, 1382038, 1382054, 1382164, 1382165, 1382166, 
    1402014, 1402029, 1402044, 1402147, 1402148, 1402149, 1422030, 1422031, 1422068,
    1432013, 1432136, 1432157, 1442018, 1442021, 1442023, 1442039, 1442121, 1452024,
    1452166, 1452167, 1462047, 1472054, 

    1302021, 1302024, 1302061, 1302080, 1302111, 1302160, 1302217,
    1302218, 1302219, 1302220, 1302221, 1302222, 1302223, 1302225, 1312012, 1312013,
    1312014, 1322021, 1322022, 1322023, 1322024, 1322025, 1322026, 1322027, 1322070, 1322155,
    1322156, 1322157, 1322158, 1322159, 1332032, 1332101, 1372008, 1372017, 
    1372134, 1372135, 1372136, 1382015, 1382038, 1382054, 1382164, 1382165, 1382166, 
    1402014, 1402029, 1402044, 1402147, 1402148, 1402149, 1422030, 1422031, 1422068,
    1432013, 1432136, 1432157, 1442018, 1442021, 1442023, 1442039, 1442121, 1452024,
    1452166, 1452167, 1462047, 1472054, 

    1302049, 1302161, 1302162, 1332030, 1372062, 1382177, 1452054, 1472065, 1482065,
    //詛咒卷
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,
    2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110, 2450110,

    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,
    2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111, 2450111,

    //菇菇印章
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002,
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002,
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002,
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002,
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002,
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002,
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002,
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
    4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 4030002, 
]

var otherSize = {
    2000001 : 2,
    2000002 : 4,
}

function start() {
    action(1, 0, 0)
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
            var msg = "歡迎使用轉蛋機，希望您能抽到大獎！\r\n"
            msg += "#b#L2#我要進行轉蛋#l#n\r\n";
            msg += "#b#L3#我要進行轉蛋連抽(滿包時會自動停止)#l#n\r\n";
            msg += "#r#L1#查看稀有獎勵#l#n\r\n";
            msg += "#r#L4#查看其他獎勵#l\r\n";
            msg += "#b#L5#使用 菇菇印章 x " + useGuaranteedItemQuantity + "個 抽取轉蛋大獎#l\r\n";
            msg += "#r#L6#查看 菇菇印章 獎勵 #l\r\n";
            msg += "#b#L7#使用 #r花精祝福戒指自選兌換券 #l\r\n";
            msg += "#b#L8#分解 不速之客裝備 #l\r\n";
            msg += "#b#L9#製作 不速之客裝備 #l\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            var ac = cm.getClient().getAccID();
            sel = selection;
            if(sel == 2||sel == 3||sel == 5) {
                if(ac==2298||ac==2299){
                    topRand = (topRand * 0.8);
                    firstRand = (firstRand * 1.1);
                    var topPrizes = [
                        {itemid: 2450114, quantity: 1, weight: 2,  rareness: 2},
                        {itemid: 2340000, quantity: 1, weight: 100, rareness: 2},
                        {itemid: 2049200, quantity: 1, weight: 70, rareness: 2},
                        {itemid: 2049201, quantity: 1, weight: 14,  rareness: 2},
                        {itemid: 2049202, quantity: 1, weight: 24,  rareness: 2},
                        {itemid: 2049204, quantity: 1, weight: 74,  rareness: 2},
                        {itemid: 2340001, quantity: 1, weight: 40,  rareness: 2},
                        {itemid: 2450300, quantity: 1, weight: 2,  rareness: 2},
                        {itemid: 2450305, quantity: 1, weight: 2,  rareness: 2},
                        {itemid: 2070018, quantity: 1, weight: 2,  rareness: 2},
                        {itemid: 2330007, quantity: 1, weight: 2,  rareness: 2},
                    ];
                }
                if(ac==2355||ac==2356||ac==2406||ac==2440||ac==2369||ac==2412||ac==2490||ac==2646||ac==2768||ac==2769||ac==2475||ac==2598||ac==2785||ac==2812
                 ||ac==2361||ac==2479||ac==2504||ac==2934||ac==2435||ac==2477||ac==2476||ac==3199||ac==3044||ac==3333||ac==4150||ac==4288||ac==3968||ac==3986
                 ||ac==3617||ac==3835){
                    topRand = (topRand * 0.85);
                    firstRand = (firstRand * 1.1);
                    topPrizes = [
                        {itemid: 2450114, quantity: 1, weight: 2,  rareness: 2},
                        {itemid: 2340000, quantity: 1, weight: 100, rareness: 2},
                        {itemid: 2049200, quantity: 1, weight: 70, rareness: 2},
                        {itemid: 2049201, quantity: 1, weight: 14,  rareness: 2},
                        {itemid: 2049202, quantity: 1, weight: 24,  rareness: 2},
                        {itemid: 2049204, quantity: 1, weight: 74,  rareness: 2},
                        {itemid: 2340001, quantity: 1, weight: 40,  rareness: 2},
                        {itemid: 2450300, quantity: 1, weight: 2,  rareness: 2},
                        {itemid: 2450305, quantity: 1, weight: 2,  rareness: 2},
                        {itemid: 2070018, quantity: 1, weight: 2,  rareness: 2},
                        {itemid: 2330007, quantity: 1, weight: 2,  rareness: 2},
                    ];
                }
            }
            if(sel == 1) {
                var msg = '這是今天的稀有獎勵！\\n\\n' + showInfo(topPrizes, topRand);
                msg += showInfo(firstPrizes, firstRand);
                cm.sendSimple(msg)
                cm.dispose();
                return;
            } else if(sel == 2 || sel == 5) {
                // if(cm.getPlayer().getLevel() < 30) {
                //     cm.sendSimple("姆．．．你的等級還沒有到30等！")
                //     cm.dispose();
                //     return;
                // }
                if(sel == 2) {
                    if(!cm.haveItem(useItem, 1)) {
                        cm.sendSimple("您的#b#i" + useItem + ":##t" + useItem + "##k好像不太夠...");
                        cm.dispose();
                        return;
                    }
                } else {
                    if(!cm.haveItem(useGuaranteedItem, useGuaranteedItemQuantity)) {
                        cm.sendSimple("您的#b#i" + useGuaranteedItem + ":##t" + useGuaranteedItem + "##k好像不太夠...");
                        cm.dispose();
                        return;
                    }
                }
                if(!cm.canHold()) {
                    cm.sendSimple("請確認背包空間是否足夠！");
                    cm.dispose();
                    return;
                }

                var prop = Math.floor(Math.random() * all);
                var gain = false;
                var item;
                var quantity;

                var guaranteed = false;
                if(sel == 5) guaranteed = true;
                if(prop < topRand || guaranteed) {
                    var totalWeight = calculateTotalWeight(topPrizes);
                    var randsel = Math.floor(Math.random() * totalWeight) + 1;
                    var selItem = pickItem(topPrizes, randsel);
                    quantity = selItem.quantity
                    item = cm.gainGachaponItem(selItem.itemid, quantity, selItem.rareness);
                    gain = true;
                    result = 1;
                } else if(prop < topRand + firstRand){
                    var totalWeight = calculateTotalWeight(firstPrizes);
                    var randsel = Math.floor(Math.random() * totalWeight) + 1;
                    var selItem = pickItem(firstPrizes, randsel);
                    quantity = selItem.quantity
                    item = cm.gainGachaponItem(selItem.itemid, quantity, selItem.rareness);
                    gain = true;
                    result = 2;
                } else {
                    var randsel = Math.floor(Math.random() * otherPrize.length);
                    var selItem = otherPrize[randsel];
                    quantity = otherSize[selItem] || 1;
                    item = cm.gainGachaponItem(selItem, quantity, 4);
                    gain = true;
                    result = 3;
                }
                if(item == -1) {
                    cm.sendSimple("你的包包好像滿了...");
                    cm.dispose();
                    return;
                }
                if(sel == 2) {
                     cm.gainItem(useItem,-1);
                } else {
                    cm.gainItem(useGuaranteedItem,-useGuaranteedItemQuantity);
                }
                switch(result) {
                    case 1:
                    case 2:
                        cm.sendOk("恭喜！獲得" + (result == 1 ? "大獎": "大獎") + "！ #b#i" + item + ":##t" + item +"##k" + (quantity > 1 ? " x " + quantity : "") + "！");
                        break;
                    default:
                        cm.sendOk("恭喜，本次轉蛋獲得了 #b#i" + item + ":##t" + item +"##k"+ (quantity > 1 ? " x " + quantity : "") +"！");
                        break;
                }
                
                cm.dispose();
                return;
            } else if(sel == 3){
                var msg = "請輸入您想抽的數量";
                cm.sendGetNumber(msg, 1, 1, 100);
            } else if(sel == 4){
                var msg = "其他獎勵如下:\r\n";
                msg += showOther(otherPrize);
                cm.sendSimple(msg)
                cm.dispose();
            } else if(sel ==6) {
                var msg = '這是菇菇印章獎勵！\r\n\r\n' + showInfo(topPrizes, all);
                cm.sendSimple(msg)
                cm.dispose();
                return;
            } else if(sel ==7) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[兌換]花精戒指兌換");
                break;
            } else if(sel ==8) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[兌換]分解不速之客裝備");
                break;
            } else if(sel ==9) {
                cm.dispose();
                cm.openNpc(cm.getNpc(), "[兌換]製作不速之客裝備");
                break;
            }
            break;
        case 2:
            var count = selection;
            //if(cm.getPlayer().getLevel() < 30) {
            //    cm.sendSimple("姆．．．你的等級還沒有到30等！")
            //    cm.dispose();
            //    return;
            //}

            for(var i = 0; i < count; i++) {
                var result = startDraw();
                if(!result) break;
            }

            if(gainItems.length == 0) {
                cm.sendOk("您的包包滿了或是沒有轉蛋卷");
                cm.dispose();
                return;
            }

            var msg = "您本次的抽獎結果如下：\r\n";
            for(var i = 0; i < gainItems.length; i++) {
                var itemSet = gainItems[i];
                msg += "#b#i" + itemSet[0] + "##t" + itemSet[0] + "# x" + itemSet[1] + " 個\r\n";
            }

            cm.sendOk(msg);
        default:
            cm.dispose();
    }
}

function startDraw() {
    if(!cm.haveItem(useItem, 1)) {
        return false;
    }
    if(!cm.canHold()) {
        return false;
    }

    var prop = Math.floor(Math.random() * all);
    var gain = false;
    var item;
    var quantity;
    if(prop < topRand) {
        var totalWeight = calculateTotalWeight(topPrizes);
        var randsel = Math.floor(Math.random() * totalWeight) + 1;
        var selItem = pickItem(topPrizes, randsel);
        quantity = selItem.quantity
        item = cm.gainGachaponItem(selItem.itemid, quantity, selItem.rareness);
        gain = true;
        result = 1;
    } else if(prop < topRand + firstRand){
        var totalWeight = calculateTotalWeight(firstPrizes);
        var randsel = Math.floor(Math.random() * totalWeight) + 1;
        var selItem = pickItem(firstPrizes, randsel);
        quantity = selItem.quantity
        item = cm.gainGachaponItem(selItem.itemid, quantity, selItem.rareness);
        gain = true;
        result = 2;
    } else {
        var randsel = Math.floor(Math.random() * otherPrize.length);
        var selItem = otherPrize[randsel];
        quantity = otherSize[selItem] || 1;
        item = cm.gainGachaponItem(selItem, quantity, 4);
        gain = true;
        result = 3;
    }
    if(item == -1) {
        return true;
    }
    gainItems.push([item, quantity]);
    cm.gainItem(useItem,-1);
    return true;
}



function calculateTotalWeight(prizes) {
    var totalWeight = 0;
    for (var i = 0; i < prizes.length; i++) {
        totalWeight += prizes[i].weight;
    }

    return totalWeight;
}

function pickItem(items, randomNum) {
    var sum = 0;
    for (var i = 0; i < items.length; i++) {
        sum += items[i].weight;
        if (randomNum <= sum) {
            return items[i];
        }
    }
}

function showInfo(prizes, totalProp) {
    var totalWeight = calculateTotalWeight(prizes);
    var msg = "";
    for(var i = 0; i < prizes.length; i++) {
        var prize = prizes[i];
        var prop = totalProp / all * prize.weight / totalWeight * 100;
        var roundedProp = parseFloat(prop.toFixed(3));
        msg += "#b#i" + prize.itemid + ":#  #t" + prize.itemid + "##k" + (prize.quantity == 1 ? "":" x "+prize.quantity) + " - #r" + roundedProp + "% #k\r\n";
    }
    return msg;
}

function showOther(prizes) {
    var otherWeight = all - topRand - firstRand;
    var totalCount = prizes.length;
    var prop = parseFloat(otherWeight / all / totalCount * 100);
    var roundedProp = parseFloat(prop.toFixed(3));
    var counts = {};
    for(var i = 0; i < prizes.length; i++) {
        var prize = prizes[i];
        counts[prize] = (counts[prize] || 0) + 1;
    }

    var msg = "";
    for(var key in counts) {
        var roundedProp2 = parseFloat((roundedProp * counts[key]).toFixed(3));
        msg += "#b#i" + key + ":# #t" + key + "##k x" + (otherSize[key] || 1) + " - #r" + roundedProp2 + "% #k\r\n";
    }
    return msg;
}
