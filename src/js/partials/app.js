function wmopen() {
	var obj = window.showModalDialog("animations.html", ["Firstname", "Lastname"], "dialogWidth: 300px; dialogHeight: 200px; center=yes; status=no");
	if(obj != null) {
		var msg = "Имя: " + obj.first;
		msg += "<br>Фамилия: " + obj.last;
		document.getElementById("div1").innerHTML = msg;
	}
}
