function enter(pi) {  
    var em = pi.getEventManager("Romeo");
     //pi.playerMessage(5, "stage6_" + (((pi.getMapId() % 10) | 0) - 1) + "_" + (pi.getPortal().getName().substring(2, 3)) + "_" + (pi.getPortal().getName().substring(3, 4)) + "");
     //pi.playerMessage(5, em.getProperty("stage6_" + (((pi.getMapId() % 10) | 0) - 1) + "_" + (pi.getPortal().getName().substring(2, 3)) + "_" + (pi.getPortal().getName().substring(3, 4)) + ""));
     if ((em != null && em.getProperty("stage6_" + (((pi.getMapId() % 10) | 0) - 1) + "_" + (pi.getPortal().getName().substring(2, 3)) + "_" + (pi.getPortal().getName().substring(3, 4)) + "").equals("1"))) {
     //pi.getPlayer().dropMessage(1, portal(pi.getPortal().getId()) + "");
     pi.PQ_Up(portal(pi.getPortal().getId()));
     } else {
     pi.PQ_Up(13);
     }
 }
 function portal(p) {
     var re = parseInt((((p + 1) / 4) - 1));
     return (re == 6 ? 7 : re == 7 ? 6 : re);
 } 