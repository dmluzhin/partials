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


onload = function() {
	cv = document.querySelector('#cvl'),
			ctx = cv.getContext('2d');

	if (!!ctx) {
		s = 1.5 * Math.PI,
				tc = pct = 0,
				btn = document.querySelector('#lbtn'),
				lnk = document.querySelector('link[rel="icon"]');

		ctx.lineWidth = 2;
		ctx.strokeStyle = 'fuchsia';

		btn.addEventListener('click', function() {
			tc = setInterval(updateLoader, 60);
		});
	}
};

function updateLoader() {
	ctx.clearRect(0, 0, 16, 16);
	ctx.beginPath();
	ctx.arc(8, 8, 6, s, (pct * 2 * Math.PI / 100 + s));
	ctx.stroke();

	lnk.href= cv.toDataURL('image/png');

	if (pct === 100) {
		clearTimeout(tc);
		return;
	}

	pct++;
}