/*修復女神 向上通道瞬移 by.吳貳*/
var ret = [9, 13, 17, 21];
function enter(pi) {
 try { 
    var em = pi.getEventManager("OrbisPQ");
	if (em != null && em.getProperty("stage6_" + (pi.getPortal().getName().substring(2, 5)) + "") == "1") {
	pi.PQ_Up(portal(pi.getPortal().getId()));
	} else {
	pi.PQ_Up(retPortal(portal(pi.getPortal().getId()))); 
    }
 } catch (e) {
    pi.getPlayer().dropMessage(5, "Error: " + e);
 }
}
function portal(p) { 
	return parseInt((p / 4));//防止小數點
}
function retPortal(p) { 
for (var i = 0; i < ret.length; i++) {
	if (p > ret[i] && ((p - ret[i]) <= 4)) {
		return ret[i];
	}
} 
return 22;
}