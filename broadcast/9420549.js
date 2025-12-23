function start() {
    eim.setProperty("killed:" + mobid, "true");

    if(eim.getProperty("killed:9420549") == null || eim.getProperty("killed:9420549") == false) return false;
    if(eim.getProperty("killed:9420544") == null || eim.getProperty("killed:9420544") == false) return false;

    return true;
}