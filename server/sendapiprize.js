// name discordid lineid api
// accountname charactername accountid
function start() {
    var gtop = settings.create("GTOP_VOTE", "accountname");//GTOP投票
    gtop.addPrize(5530011, 1);

    var fb_promote = settings.create("FB_PROMOTE", "accountid");//FB每日推廣
    fb_promote.addPrize(5530004, 1);
}