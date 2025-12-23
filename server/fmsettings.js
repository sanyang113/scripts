function start() {
    // 設定指定地圖無法@FM
    map.addForbiddenMaps(
        922010000, 980000000, 109010000, 109020001, 109030001, 109030101, 109030201, 109030301, 109030401, 109040000, 109060001, 109060002, 109060003, 
        109060004, 109060005, 109060006, 109080000, 109080001, 109080002, 109080003, 222020110, 222020111, 222020210, 222020211
    );
    // 設定指定地圖範圍無法@FM
    map.addForbiddenMapRanges(680000210, 680000502);
    map.addForbiddenMapRanges(588000000, 588000011);
    map.addForbiddenMapRanges(103000800, 103000899);
    map.addForbiddenMapRanges( 92201000, 92201999);
    map.addForbiddenMapRanges(130030000, 130030009);
    map.addForbiddenMapRanges(130030000, 130030009);
    map.addForbiddenMapRanges(108010100, 108010501);
    //map.addForbiddenMapRanges(85010000, 85099999);
    
    map.addForbiddenMapRanges(109010000, 109050000);
    map.addForbiddenMapRanges(200090020, 200099999);
    map.addForbiddenMapRanges(109050001, 109090000);
    map.addForbiddenMapRanges(809040000, 809040100);
    map.addForbiddenMapRanges(913000000, 913020300);
    map.addForbiddenMapRanges(925020002, 925033804);
    map.addForbiddenMapRanges(990000000, 999999999);

    // 設定指定地圖@FM回到村莊
    map.addBackToReturnMaps(
        85010000, 85010001, 85010002, 85010003, 85010004, 85010005, 85010006, 85020000, 85020001, 85020002, 85020003, 85020004, 85030000, 85030001, 85030003, 
        85030004, 85030006, 85030007, 85030008, 85040000, 85050000, 85060000, 85060001, 
        802000200,802000300,802000400,802000401,802000600
    );
    // 設定指定地圖範圍@FM回到村莊
    // map.addBackToReturnMapRanges();
}

