var sessions=document.getElementsByTagName("section");

for (i=0; i<sessions.length; i++) {
	if (sessions[i].className=="vcard session-info") {
		if (!sessions[i].addEventListener) {
			sessions[i].attachEvent("onclick", function () {
				if (window.event.srcElement.className=='vcard session-info') {
					window.event.srcElement.className+=" active";}else{window.event.srcElement.className="vcard session-info";}},false);}else{sessions[i].addEventListener("click",function(){if(this.className=='vcard session-info'){this.className+=" active";}else{this.className="vcard session-info";}},false);}}}