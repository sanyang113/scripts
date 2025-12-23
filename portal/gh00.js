function enter(pi) {
	var returnMap = pi.getSavedLocation("GACHAPON");
   pi.clearSavedLocation("GACHAPON");

   if (returnMap < 0) {
   returnMap = 100000000;
   }
   var target = pi.getMap(returnMap);
   var portal;

   if (portal == null) {
	   portal = target.getPortal(0);
   }
   if (pi.getMapId() != target) {
   pi.getPlayer().changeMap(target, portal);
   }
   
}