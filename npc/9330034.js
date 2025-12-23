var status = -1;
var prob = 0;
var normalChance = 100;
var isNormalprizes = false;



// 最大獎0.4% 56975
var topPrizes = [
    { itemId: 2250002, chance: 0.001 },
    { itemId: 4030002, chance: 0.001 },
    { itemId: 4039504, chance: 0.001 },
    { itemId: 4039505, chance: 0.001 },
    { itemId: 4039517, chance: 0.001 },
    { itemId: 4039518, chance: 0.001 },
    { itemId: 4039532, chance: 0.001 },

    { itemId: 4039516, chance: 0.003 },
    { itemId: 4039501, chance: 0.003 },
    { itemId: 4039507, chance: 0.003 },
    { itemId: 4039508, chance: 0.003 },
    { itemId: 4039509, chance: 0.003 },

    { itemId: 4039506, chance: 0.01 },
    { itemId: 4039510, chance: 0.01 },
    { itemId: 4039514, chance: 0.01 },
    { itemId: 4039515, chance: 0.01 },
    { itemId: 4039500, chance: 0.01 },

    { itemId: 4039519, chance: 0.01 },
    { itemId: 4039520, chance: 0.01 },
    { itemId: 4039527, chance: 0.01 },
    { itemId: 4039528, chance: 0.01 },
    { itemId: 4039530, chance: 0.01 },

    { itemId: 4039522, chance: 0.02 },
    { itemId: 4039523, chance: 0.02 },
    { itemId: 4039524, chance: 0.02 },
    { itemId: 4039526, chance: 0.02 },
    { itemId: 4039521, chance: 0.05 },
    { itemId: 4039525, chance: 0.05 },
    { itemId: 4039529, chance: 0.05 },

    { itemId: 5220040, chance: 0.008 },
    { itemId: 2250001, chance: 0.01 },
    { itemId: 4030002, chance: 0.01 },
    { itemId: 4021009, chance: 0.01 },
    { itemId: 4011007, chance: 0.01 },

];

// 大獎 9.35%
var secPrizes = [

    //龍武 0.9% 9000
    { itemId: 1302059, chance: 0.05 },
    { itemId: 1312031, chance: 0.05 },
    { itemId: 1322052, chance: 0.05 },
    { itemId: 1332049, chance: 0.05 },
    { itemId: 1332050, chance: 0.05 },
    { itemId: 1372032, chance: 0.05 },
    { itemId: 1382036, chance: 0.05 },
    { itemId: 1402036, chance: 0.05 },
    { itemId: 1412026, chance: 0.05 },
    { itemId: 1422028, chance: 0.05 },
    { itemId: 1432038, chance: 0.05 },
    { itemId: 1442045, chance: 0.05 },
    { itemId: 1452044, chance: 0.05 },
    { itemId: 1462039, chance: 0.05 },
    { itemId: 1472051, chance: 0.05 },
    { itemId: 1472052, chance: 0.05 },
    { itemId: 1482013, chance: 0.05 },
    { itemId: 1492013, chance: 0.05 },

    //礦石成品3.3% 39600
    { itemId: 4011000, chance: 0.15 },
    { itemId: 4011001, chance: 0.15 },
    { itemId: 4011002, chance: 0.15 },
    { itemId: 4011003, chance: 0.15 },
    { itemId: 4011004, chance: 0.15 },
    { itemId: 4011005, chance: 0.15 },
    { itemId: 4011006, chance: 0.15 },
    { itemId: 4011008, chance: 0.15 },
    { itemId: 4021000, chance: 0.15 },
    { itemId: 4021001, chance: 0.15 },
    { itemId: 4021002, chance: 0.15 },
    { itemId: 4021003, chance: 0.15 },
    { itemId: 4021004, chance: 0.15 },
    { itemId: 4021005, chance: 0.15 },
    { itemId: 4021006, chance: 0.15 },
    { itemId: 4021007, chance: 0.15 },
    { itemId: 4021008, chance: 0.15 },
    { itemId: 4005000, chance: 0.15 },
    { itemId: 4005001, chance: 0.15 },
    { itemId: 4005002, chance: 0.15 },
    { itemId: 4005003, chance: 0.15 },
    { itemId: 4005004, chance: 0.15 },

    //10%卷軸2.4% 84000
    { itemId: 2043002, chance: 0.15 },
    { itemId: 2043102, chance: 0.15 },
    { itemId: 2043202, chance: 0.15 },
    { itemId: 2043302, chance: 0.15 },
    { itemId: 2043702, chance: 0.15 },
    { itemId: 2043802, chance: 0.15 },
    { itemId: 2044002, chance: 0.15 },
    { itemId: 2044102, chance: 0.15 },
    { itemId: 2044202, chance: 0.15 },
    { itemId: 2044302, chance: 0.15 },
    { itemId: 2044402, chance: 0.15 },
    { itemId: 2044502, chance: 0.15 },
    { itemId: 2044602, chance: 0.15 },
    { itemId: 2044702, chance: 0.15 },
    { itemId: 2044802, chance: 0.15 },
    { itemId: 2044902, chance: 0.15 },

    //60%卷軸2.4% 84000
    { itemId: 2043001, chance: 0.15 },
    { itemId: 2043101, chance: 0.15 },
    { itemId: 2043201, chance: 0.15 },
    { itemId: 2043301, chance: 0.15 },
    { itemId: 2043701, chance: 0.15 },
    { itemId: 2043801, chance: 0.15 },
    { itemId: 2044001, chance: 0.15 },
    { itemId: 2044101, chance: 0.15 },
    { itemId: 2044201, chance: 0.15 },
    { itemId: 2044301, chance: 0.15 },
    { itemId: 2044401, chance: 0.15 },
    { itemId: 2044501, chance: 0.15 },
    { itemId: 2044601, chance: 0.15 },
    { itemId: 2044701, chance: 0.15 },
    { itemId: 2044801, chance: 0.15 },
    { itemId: 2044901, chance: 0.15 },
    //命運卡0.25% 4000
    { itemId: 4039503, chance: 0.25 },
    { itemId: 4039513, chance: 0.10 },

];

// 一般獎
var generalPrizes = [

    //母礦 44% 52000
    { itemId: 4004000, chance: 2 },
    { itemId: 4004001, chance: 2 },
    { itemId: 4004002, chance: 2 },
    { itemId: 4004003, chance: 2 },
    { itemId: 4004004, chance: 2 },
    { itemId: 4010000, chance: 2 },
    { itemId: 4010001, chance: 2 },
    { itemId: 4010002, chance: 2 },
    { itemId: 4010003, chance: 2 },
    { itemId: 4010004, chance: 2 },
    { itemId: 4010005, chance: 2 },
    { itemId: 4010006, chance: 2 },
    { itemId: 4010007, chance: 2 },
    { itemId: 4020000, chance: 2 },
    { itemId: 4020001, chance: 2 },
    { itemId: 4020002, chance: 2 },
    { itemId: 4020003, chance: 2 },
    { itemId: 4020004, chance: 2 },
    { itemId: 4020005, chance: 2 },
    { itemId: 4020006, chance: 2 },
    { itemId: 4020007, chance: 2 },
    { itemId: 4020008, chance: 2 },

    //100等武器1.05% 4700
    { itemId: 1302056, chance: 0.05 },
    { itemId: 1312030, chance: 0.05 },
    { itemId: 1322045, chance: 0.05 },
    { itemId: 1332051, chance: 0.05 },
    { itemId: 1332052, chance: 0.05 },
    { itemId: 1372010, chance: 0.05 },
    { itemId: 1382035, chance: 0.05 },
    { itemId: 1402035, chance: 0.05 },
    { itemId: 1412021, chance: 0.05 },
    { itemId: 1422027, chance: 0.05 },
    { itemId: 1432030, chance: 0.05 },
    { itemId: 1442044, chance: 0.05 },
    { itemId: 1452019, chance: 0.05 },
    { itemId: 1452020, chance: 0.05 },
    { itemId: 1452021, chance: 0.05 },
    { itemId: 1462015, chance: 0.05 },
    { itemId: 1462016, chance: 0.05 },
    { itemId: 1462017, chance: 0.05 },
    { itemId: 1472053, chance: 0.05 },
    { itemId: 1482012, chance: 0.05 },
    { itemId: 1492012, chance: 0.05 },

    //90等武器2.1% 9000
    { itemId: 1302023, chance: 0.1 },
    { itemId: 1312015, chance: 0.1 },
    { itemId: 1322029, chance: 0.1 },
    { itemId: 1332026, chance: 0.1 },
    { itemId: 1332027, chance: 0.1 },
    { itemId: 1372009, chance: 0.1 },
    { itemId: 1382008, chance: 0.1 },
    { itemId: 1402016, chance: 0.1 },
    { itemId: 1412010, chance: 0.1 },
    { itemId: 1422013, chance: 0.1 },
    { itemId: 1432011, chance: 0.1 },
    { itemId: 1442020, chance: 0.1 },
    { itemId: 1452017, chance: 0.1 },
    { itemId: 1452025, chance: 0.1 },
    { itemId: 1452026, chance: 0.1 },
    { itemId: 1462018, chance: 0.1 },
    { itemId: 1462021, chance: 0.1 },
    { itemId: 1462022, chance: 0.1 },
    { itemId: 1472033, chance: 0.1 },
    { itemId: 1482011, chance: 0.1 },
    { itemId: 1492011, chance: 0.1 },

    //80等武器2.1% 8000
    { itemId: 1302018, chance: 0.1 },
    { itemId: 1312011, chance: 0.1 },
    { itemId: 1322028, chance: 0.1 },
    { itemId: 1332022, chance: 0.1 },
    { itemId: 1332023, chance: 0.1 },
    { itemId: 1372016, chance: 0.1 },
    { itemId: 1382010, chance: 0.1 },
    { itemId: 1402015, chance: 0.1 },
    { itemId: 1412009, chance: 0.1 },
    { itemId: 1422012, chance: 0.1 },
    { itemId: 1432010, chance: 0.1 },
    { itemId: 1442019, chance: 0.1 },
    { itemId: 1452012, chance: 0.1 },
    { itemId: 1452013, chance: 0.1 },
    { itemId: 1452014, chance: 0.1 },
    { itemId: 1452015, chance: 0.1 },
    { itemId: 1462010, chance: 0.1 },
    { itemId: 1462011, chance: 0.1 },
    { itemId: 1462012, chance: 0.1 },
    { itemId: 1462013, chance: 0.1 },
    { itemId: 1472031, chance: 0.1 },
    { itemId: 1482010, chance: 0.1 },
    { itemId: 1492010, chance: 0.1 },

    //80~100等帽子4.9% 7000
    { itemId: 1002271, chance: 0.1 },
    { itemId: 1002272, chance: 0.1 },
    { itemId: 1002273, chance: 0.1 },
    { itemId: 1002274, chance: 0.1 },
    { itemId: 1002275, chance: 0.1 },
    { itemId: 1002276, chance: 0.1 },
    { itemId: 1002277, chance: 0.1 },
    { itemId: 1002278, chance: 0.1 },
    { itemId: 1002323, chance: 0.1 },
    { itemId: 1002324, chance: 0.1 },
    { itemId: 1002325, chance: 0.1 },
    { itemId: 1002326, chance: 0.1 },
    { itemId: 1002327, chance: 0.1 },
    { itemId: 1002328, chance: 0.1 },
    { itemId: 1002329, chance: 0.1 },
    { itemId: 1002330, chance: 0.1 },
    { itemId: 1002338, chance: 0.1 },
    { itemId: 1002339, chance: 0.1 },
    { itemId: 1002340, chance: 0.1 },
    { itemId: 1002363, chance: 0.1 },
    { itemId: 1002364, chance: 0.1 },
    { itemId: 1002365, chance: 0.1 },
    { itemId: 1002366, chance: 0.1 },
    { itemId: 1002377, chance: 0.1 },
    { itemId: 1002378, chance: 0.1 },
    { itemId: 1002379, chance: 0.1 },
    { itemId: 1002380, chance: 0.1 },
    { itemId: 1002381, chance: 0.1 },
    { itemId: 1002382, chance: 0.1 },
    { itemId: 1002383, chance: 0.1 },
    { itemId: 1002398, chance: 0.1 },
    { itemId: 1002399, chance: 0.1 },
    { itemId: 1002400, chance: 0.1 },
    { itemId: 1002401, chance: 0.1 },
    { itemId: 1002402, chance: 0.1 },
    { itemId: 1002403, chance: 0.1 },
    { itemId: 1002404, chance: 0.1 },
    { itemId: 1002405, chance: 0.1 },
    { itemId: 1002406, chance: 0.1 },
    { itemId: 1002407, chance: 0.1 },
    { itemId: 1002408, chance: 0.1 },
    { itemId: 1002528, chance: 0.1 },
    { itemId: 1002529, chance: 0.1 },
    { itemId: 1002530, chance: 0.1 },
    { itemId: 1002531, chance: 0.1 },
    { itemId: 1002532, chance: 0.1 },
    { itemId: 1002640, chance: 0.1 },
    { itemId: 1002643, chance: 0.1 },
    { itemId: 1002646, chance: 0.1 },

    //80~100等手套4.4% 11000
    { itemId: 1082109, chance: 0.1 },
    { itemId: 1082110, chance: 0.1 },
    { itemId: 1082111, chance: 0.1 },
    { itemId: 1082112, chance: 0.1 },
    { itemId: 1082114, chance: 0.1 },
    { itemId: 1082115, chance: 0.1 },
    { itemId: 1082116, chance: 0.1 },
    { itemId: 1082117, chance: 0.1 },
    { itemId: 1082118, chance: 0.1 },
    { itemId: 1082119, chance: 0.1 },
    { itemId: 1082120, chance: 0.1 },
    { itemId: 1082121, chance: 0.1 },
    { itemId: 1082122, chance: 0.1 },
    { itemId: 1082123, chance: 0.1 },
    { itemId: 1082125, chance: 0.1 },
    { itemId: 1082126, chance: 0.1 },
    { itemId: 1082127, chance: 0.1 },
    { itemId: 1082128, chance: 0.1 },
    { itemId: 1082129, chance: 0.1 },
    { itemId: 1082130, chance: 0.1 },
    { itemId: 1082131, chance: 0.1 },
    { itemId: 1082132, chance: 0.1 },
    { itemId: 1082133, chance: 0.1 },
    { itemId: 1082134, chance: 0.1 },
    { itemId: 1082135, chance: 0.1 },
    { itemId: 1082136, chance: 0.1 },
    { itemId: 1082137, chance: 0.1 },
    { itemId: 1082138, chance: 0.1 },
    { itemId: 1082139, chance: 0.1 },
    { itemId: 1082140, chance: 0.1 },
    { itemId: 1082141, chance: 0.1 },
    { itemId: 1082142, chance: 0.1 },
    { itemId: 1082143, chance: 0.1 },
    { itemId: 1082144, chance: 0.1 },
    { itemId: 1082151, chance: 0.1 },
    { itemId: 1082152, chance: 0.1 },
    { itemId: 1082153, chance: 0.1 },
    { itemId: 1082154, chance: 0.1 },
    { itemId: 1082158, chance: 0.1 },
    { itemId: 1082159, chance: 0.1 },
    { itemId: 1082160, chance: 0.1 },
    { itemId: 1082207, chance: 0.1 },
    { itemId: 1082210, chance: 0.1 },
    { itemId: 1082213, chance: 0.1 },

    //80~100等鞋子4.4% 11000
    { itemId: 1072172, chance: 0.1 },
    { itemId: 1072173, chance: 0.1 },
    { itemId: 1072174, chance: 0.1 },
    { itemId: 1072177, chance: 0.1 },
    { itemId: 1072178, chance: 0.1 },
    { itemId: 1072179, chance: 0.1 },
    { itemId: 1072182, chance: 0.1 },
    { itemId: 1072183, chance: 0.1 },
    { itemId: 1072184, chance: 0.1 },
    { itemId: 1072185, chance: 0.1 },
    { itemId: 1072192, chance: 0.1 },
    { itemId: 1072193, chance: 0.1 },
    { itemId: 1072194, chance: 0.1 },
    { itemId: 1072195, chance: 0.1 },
    { itemId: 1072196, chance: 0.1 },
    { itemId: 1072197, chance: 0.1 },
    { itemId: 1072198, chance: 0.1 },
    { itemId: 1072203, chance: 0.1 },
    { itemId: 1072204, chance: 0.1 },
    { itemId: 1072205, chance: 0.1 },
    { itemId: 1072206, chance: 0.1 },
    { itemId: 1072207, chance: 0.1 },
    { itemId: 1072208, chance: 0.1 },
    { itemId: 1072209, chance: 0.1 },
    { itemId: 1072210, chance: 0.1 },
    { itemId: 1072211, chance: 0.1 },
    { itemId: 1072212, chance: 0.1 },
    { itemId: 1072213, chance: 0.1 },
    { itemId: 1072214, chance: 0.1 },
    { itemId: 1072215, chance: 0.1 },
    { itemId: 1072216, chance: 0.1 },
    { itemId: 1072220, chance: 0.1 },
    { itemId: 1072221, chance: 0.1 },
    { itemId: 1072222, chance: 0.1 },
    { itemId: 1072223, chance: 0.1 },
    { itemId: 1072224, chance: 0.1 },
    { itemId: 1072225, chance: 0.1 },
    { itemId: 1072226, chance: 0.1 },
    { itemId: 1072227, chance: 0.1 },
    { itemId: 1072228, chance: 0.1 },
    { itemId: 1072229, chance: 0.1 },
    { itemId: 1072312, chance: 0.1 },
    { itemId: 1072315, chance: 0.1 },
    { itemId: 1072318, chance: 0.1 },

    //80~100等盾牌0.9% 2200
    { itemId: 1092023, chance: 0.1 },
    { itemId: 1092024, chance: 0.1 },
    { itemId: 1092025, chance: 0.1 },
    { itemId: 1092026, chance: 0.1 },
    { itemId: 1092027, chance: 0.1 },
    { itemId: 1092028, chance: 0.1 },
    { itemId: 1092036, chance: 0.1 },
    { itemId: 1092037, chance: 0.1 },
    { itemId: 1092038, chance: 0.1 },

    //80~100等上衣2.6% 5000 
    { itemId: 1040108, chance: 0.1 },
    { itemId: 1040109, chance: 0.1 },
    { itemId: 1040110, chance: 0.1 },
    { itemId: 1040111, chance: 0.1 },
    { itemId: 1040112, chance: 0.1 },
    { itemId: 1040113, chance: 0.1 },
    { itemId: 1040115, chance: 0.1 },
    { itemId: 1040116, chance: 0.1 },
    { itemId: 1040117, chance: 0.1 },
    { itemId: 1040118, chance: 0.1 },
    { itemId: 1040120, chance: 0.1 },
    { itemId: 1040121, chance: 0.1 },
    { itemId: 1040122, chance: 0.1 },
    { itemId: 1041105, chance: 0.1 },
    { itemId: 1041106, chance: 0.1 },
    { itemId: 1041107, chance: 0.1 },
    { itemId: 1041115, chance: 0.1 },
    { itemId: 1041116, chance: 0.1 },
    { itemId: 1041117, chance: 0.1 },
    { itemId: 1041118, chance: 0.1 },
    { itemId: 1041119, chance: 0.1 },
    { itemId: 1041120, chance: 0.1 },
    { itemId: 1041121, chance: 0.1 },
    { itemId: 1041122, chance: 0.1 },
    { itemId: 1041123, chance: 0.1 },
    { itemId: 1041124, chance: 0.1 },

    //80~100等褲裙2.6% 5000  
    { itemId: 1060097, chance: 0.1 },
    { itemId: 1060098, chance: 0.1 },
    { itemId: 1060099, chance: 0.1 },
    { itemId: 1060100, chance: 0.1 },
    { itemId: 1060101, chance: 0.1 },
    { itemId: 1060102, chance: 0.1 },
    { itemId: 1060104, chance: 0.1 },
    { itemId: 1060105, chance: 0.1 },
    { itemId: 1060106, chance: 0.1 },
    { itemId: 1060107, chance: 0.1 },
    { itemId: 1060109, chance: 0.1 },
    { itemId: 1060110, chance: 0.1 },
    { itemId: 1060111, chance: 0.1 },
    { itemId: 1061104, chance: 0.1 },
    { itemId: 1061105, chance: 0.1 },
    { itemId: 1061106, chance: 0.1 },
    { itemId: 1061114, chance: 0.1 },
    { itemId: 1061115, chance: 0.1 },
    { itemId: 1061116, chance: 0.1 },
    { itemId: 1061117, chance: 0.1 },
    { itemId: 1061118, chance: 0.1 },
    { itemId: 1061119, chance: 0.1 },
    { itemId: 1061120, chance: 0.1 },
    { itemId: 1061121, chance: 0.1 },
    { itemId: 1061122, chance: 0.1 },
    { itemId: 1061123, chance: 0.1 },

    //80~100等套服6.3% 16000
    { itemId: 1050072, chance: 0.1 },
    { itemId: 1050073, chance: 0.1 },
    { itemId: 1050074, chance: 0.1 },
    { itemId: 1050075, chance: 0.1 },
    { itemId: 1050076, chance: 0.1 },
    { itemId: 1050077, chance: 0.1 },
    { itemId: 1050078, chance: 0.1 },
    { itemId: 1050080, chance: 0.1 },
    { itemId: 1050081, chance: 0.1 },
    { itemId: 1050082, chance: 0.1 },
    { itemId: 1050083, chance: 0.1 },
    { itemId: 1050088, chance: 0.1 },
    { itemId: 1050089, chance: 0.1 },
    { itemId: 1050090, chance: 0.1 },
    { itemId: 1050091, chance: 0.1 },
    { itemId: 1050092, chance: 0.1 },
    { itemId: 1050093, chance: 0.1 },
    { itemId: 1050094, chance: 0.1 },
    { itemId: 1050095, chance: 0.1 },
    { itemId: 1050096, chance: 0.1 },
    { itemId: 1050097, chance: 0.1 },
    { itemId: 1050098, chance: 0.1 },
    { itemId: 1050099, chance: 0.1 },
    { itemId: 1050102, chance: 0.1 },
    { itemId: 1050103, chance: 0.1 },
    { itemId: 1050104, chance: 0.1 },
    { itemId: 1050105, chance: 0.1 },
    { itemId: 1050106, chance: 0.1 },
    { itemId: 1050107, chance: 0.1 },
    { itemId: 1050108, chance: 0.1 },
    { itemId: 1052125, chance: 0.1 },
    { itemId: 1052128, chance: 0.1 },
    { itemId: 1052131, chance: 0.1 },
    { itemId: 1051056, chance: 0.1 },
    { itemId: 1051057, chance: 0.1 },
    { itemId: 1051058, chance: 0.1 },
    { itemId: 1051066, chance: 0.1 },
    { itemId: 1051067, chance: 0.1 },
    { itemId: 1051068, chance: 0.1 },
    { itemId: 1051069, chance: 0.1 },
    { itemId: 1051077, chance: 0.1 },
    { itemId: 1051078, chance: 0.1 },
    { itemId: 1051079, chance: 0.1 },
    { itemId: 1051080, chance: 0.1 },
    { itemId: 1051082, chance: 0.1 },
    { itemId: 1051083, chance: 0.1 },
    { itemId: 1051084, chance: 0.1 },
    { itemId: 1051085, chance: 0.1 },
    { itemId: 1051090, chance: 0.1 },
    { itemId: 1051091, chance: 0.1 },
    { itemId: 1051092, chance: 0.1 },
    { itemId: 1051093, chance: 0.1 },
    { itemId: 1051094, chance: 0.1 },
    { itemId: 1051095, chance: 0.1 },
    { itemId: 1051096, chance: 0.1 },
    { itemId: 1051097, chance: 0.1 },
    { itemId: 1051101, chance: 0.1 },
    { itemId: 1051102, chance: 0.1 },
    { itemId: 1051103, chance: 0.1 },
    { itemId: 1051104, chance: 0.1 },
    { itemId: 1051105, chance: 0.1 },
    { itemId: 1051106, chance: 0.1 },
    { itemId: 1051107, chance: 0.1 },

    //80~100等披風耳環 0.9%
    { itemId: 1102031, chance: 0.1 },
    { itemId: 1102032, chance: 0.1 },
    { itemId: 1102033, chance: 0.1 },
    { itemId: 1102034, chance: 0.1 },
    { itemId: 1102035, chance: 0.1 },
    { itemId: 1032016, chance: 0.1 },
    { itemId: 1032017, chance: 0.1 },
    { itemId: 1032023, chance: 0.1 },
    { itemId: 1032030, chance: 0.1 },

];

// 普通獎
var normalprizes = 4001126;

function start() {
    action(1, 0, 0);
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
    if (status == 0) {
       
        prob = 0;

        for (var i = 0; i < topPrizes.length; i++) {
            prob += topPrizes[i].chance;
        }
        for (var i = 0; i < secPrizes.length; i++) {
            prob += secPrizes[i].chance;
        }
        for (var i = 0; i < generalPrizes.length; i++) {
            prob += generalPrizes[i].chance;
        }

        normalChance -= prob;
    }


    switch (status) {
        case 0:
            var msg = "嗨~我是轉蛋機！如果你有#i5220000:##r#t5220000#的話，我可以給你神秘的好東西喔！#b \n(只有30級以上的玩家可以交換！)\r\n";
            msg += "#b#L2#我要進行轉蛋#l#n#r #b#L3#我要進行10連抽#l#r  #L1#我想查看轉蛋獎勵#l#n";
            cm.sendNext(msg);
            break;
        case 1:
            sel = selection;
            grandPrizePoolStr = getGrandPrizePoolStr(topPrizes, secPrizes, generalPrizes, prob);
            if (sel == 1) {
                var msg = '這是#r所有獎項#k喵！\r\n\r\n' + grandPrizePoolStr;
                msg += "\r\n===其他===\r\n\r\n";
                msg += '#i' + normalprizes + ':#  #t' + normalprizes + '# - #r' + normalChance + '%#k\r\n';
                cm.sendSimple(msg);
                cm.dispose();
                return;
            } else if (sel == 2) {
                if (cm.getPlayer().getLevel() < 30) {
                    cm.sendSimple("姆．．．你的等級還沒有到30等呀！");
                    cm.dispose();
                    return;
                }
                if (!cm.haveItem(5220000, 1)) {
                    cm.sendSimple("咦！你沒有朕最喜歡的#b#i5220000:##t5220000##k呀！");
                    cm.dispose();
                    return;
                }
                item = startSpin()
                if (item == -1) {
                    cm.sendSimple("你身上的空間不夠放收藏品了呢！");
                    cm.dispose
                }
                cm.sendSimple("恭喜你獲得了#b#i" + item + ":##t" + item + "##k！");
                cm.dispose()
            } else if (sel == 3) {
                var spinResult = []
                var responseMessage = "恭喜你獲得了:\\n"
                var stop = false
                if (cm.getPlayer().getLevel() < 30) {
                    cm.sendSimple("姆．．．你的等級還沒有到30等呀！");
                    cm.dispose();
                    return;
                }
                for (var i = 0; i < 10; i++) {
                    if (!cm.haveItem(5220000, 1)) {
                        if (spinResult.length == 0) {
                            cm.sendSimple("咦！你沒有朕最喜歡的#b#i5220000:##t5220000##k呀！");
                            cm.dispose()
                            return
                        }
                        responseMessage += "\\n\\n轉蛋券沒了 所以停下來了..."
                        break
                    }
                    item = startSpin()
                    if (item == -1) {
                        stop = true
                        if (spinResult.length == 0) {
                            cm.sendSimple("你身上的空間不夠放收藏品了呢！");
                            cm.dispose()
                            return
                        }
                    } else {
                        spinResult.push(item)
                        responseMessage += "#v" + item + "#"
                    }
                    if (stop) {
                        responseMessage += "\\n\\n背包滿了 所以停下來了..."
                        break
                    }
                }
                cm.sendSimple(responseMessage);
                cm.dispose()
            }
        default:
            cm.dispose();
    }
}

function getGrandPrizePoolStr(topPrizes, secPrizes, generalPrizes, prob) {
    var result = '';
    var allPrizes = topPrizes.concat(generalPrizes).concat(secPrizes);
    var probabilitiesObj = calculateProbabilities(allPrizes, prob);

    // 處理沒有剩餘數量限制的獎項
    result += "\r\n===#r最大獎#k如下===\r\n\r\n";
    for (var i = 0; i < topPrizes.length; i++) {
        var prize = topPrizes[i];
        var key = prize.itemId;
        if (probabilitiesObj[key] !== undefined) {
            result += '#i' + key + ':#  #t' + key + '# - #r' + probabilitiesObj[key].toFixed(3) + '%#k\r\n';
        }
    }

    result += "\r\n====#r大獎#k如下====\r\n\r\n";
    for (var i = 0; i < secPrizes.length; i++) {
        var prize = secPrizes[i];
        var key = prize.itemId;
        if (probabilitiesObj[key] !== undefined) {
            result += '#i' + key + ':#  #t' + key + '# - #r' + probabilitiesObj[key].toFixed(2) + '%#k\r\n';
        }
    }

    for (var i = 0; i < generalPrizes.length; i++) {
        var prize = generalPrizes[i];
        var key = prize.itemId;
        if (probabilitiesObj[key] !== undefined) {
            result += '#i' + key + ':#  #t' + key + '# - #r' + probabilitiesObj[key].toFixed(2) + '%#k\r\n';
        }
    }

    return result;
}

function calculateProbabilities(prizes, prob) {
    var totalChance = 0;
    var probabilities = {};

    // 計算所有獎品的總機率
    for (var i = 0; i < prizes.length; i++) {
        totalChance += prizes[i].chance;
    }

    // 計算每個獎品的機率
    for (var i = 0; i < prizes.length; i++) {
        var chance = prizes[i].chance;
        var percentage = (chance / totalChance) * prob;
        probabilities[prizes[i].itemId] = percentage;
    }

    return probabilities;
}

function drawPrize(prizes) {
    var totalProb = 0;
    for (var i = 0; i < prizes.length; i++) {
        totalProb += prizes[i].chance;
    }

    if (totalProb >= 100) {
        totalProb = 100;
    }

    var randomNum = Math.random() * 100;

    for (var i = 0; i < prizes.length; i++) {
        if (randomNum < prizes[i].chance) {
            return prizes[i];
        }
        randomNum -= prizes[i].chance;
    }

    return null; // 如果沒有獎品被抽中，返回普通獎品
}

function startSpin() {
    if (!cm.canHold()) {
        return -1
    }
    var gain = false;
    var item;
    var rareness = 0;

    // 實現機率抽獎的邏輯
    var allPrizes = topPrizes.concat(generalPrizes).concat(secPrizes);
    var prize = drawPrize(allPrizes);
    if (!prize) {
        // 如果沒有抽到特定獎品，則發放普通獎
        prize = { itemId: normalprizes, chance: 0 };
        isNormalprizes = true;
    }
    item = prize.itemId;

    if (rareness === 0) {
        for (var i = 0; i < topPrizes.length; i++) {
            if (topPrizes[i].itemId === item) {
                rareness = 11;
                break;
            }
        }
    }
    if (rareness === 0) {
        for (var i = 0; i < secPrizes.length; i++) {
            if (secPrizes[i].itemId === item) {
                rareness = 12;
                break;
            }
        }
    }
    if (rareness === 0) {
        for (var i = 0; i < generalPrizes.length; i++) {
            if (generalPrizes[i].itemId === item) {
                break;
            }
        }
    }
    cm.gainLimitGachaponItem(item, 1, rareness);
    gain = true;

    if (gain) {
        cm.gainItem(5220000, -1); // 移除轉蛋券
    }
    return item
}