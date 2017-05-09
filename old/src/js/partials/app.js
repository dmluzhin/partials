function wmopen() {
	var obj = window.showModalDialog("animations.html", ["Firstname", "Lastname"], "dialogWidth: 300px; dialogHeight: 200px; center=yes; status=no");
	if(obj != null) {
		var msg = "Имя: " + obj.first;
		msg += "<br>Фамилия: " + obj.last;
		document.getElementById("div1").innerHTML = msg;
	}
}


$(document).ready(function(){
	$(".button__scale-trigger").on('click', function(){
		TweenMax.from(".animated__scale", .55, {scale:0, delay:.7, ease:Bounce.easeOut});
	});
});