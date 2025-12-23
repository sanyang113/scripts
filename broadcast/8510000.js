function start() {
    eim.setProperty("killed:" + mobid, "true");

    if(eim.getProperty("killed:8510000") == null || eim.getProperty("killed:8510000") == false) return false;
    if(eim.getProperty("killed:8520000") == null || eim.getProperty("killed:8520000") == false) return false;

    return true;
}