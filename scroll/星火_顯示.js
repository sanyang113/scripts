function start(equip) {
    var json = equip.getSparkData();
    var data = JSON.parse(json);

    for(var i = 0; i < data.length; i++) {
        var item = data[i];
        for (var key in item) {
            if (item.hasOwnProperty(key)) {
                cm.getPlayer().dropMessage(6,key + "  " + item[key]);
            }
        }
    }
}