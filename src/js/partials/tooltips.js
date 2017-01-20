/**
 * Created by luzhin.dm on 19.01.2017.
 */
var tooltips = function() {
	var id = 'tt';
	var top = 3;
	var left = 3;
	var maxwidth = 300;
	var speed = 8;
	var timer = 10;
	var endalpha = 95;
	var alpha = 0;
	var tt, t,/*c,b*/h;
	var ie = document.all ? true : false;
	return {
		show: function(e,v,w) {
			var t = getEventTarget(e);
			addEvent(t, 'mouseout', this.hide);
			t.style.cursor = 'help';

			if (tt == null) {
				tt = document.createElement('div');
				tt.setAttribute('id', id);
				document.body.appendChild(tt);
				tt.style.opacity = 0;
				if(ie) tt.style.filter = 'alpha(opacity = 0)';
			}

			tt.style.display = 'block';
			tt.innerHTML = v;
			tt.style.width = w ? w + 'px' : 'auto';

			if (tt.offsetWidth > maxwidth) {
				tt.style.width = maxwidth + 'px';
			}

			h = parseInt(tt.offsetHeight) + top;
			clearInterval(tt.timer);

			tt.timer = setInterval(function(){
				_tt.fade(1)
			},timer);
			dd = getOffset(t);
			tt.style.top = (dd.top - h + 4) + "px";
			tt.style.left = (dd.left + 13) + "px";
		},

		pos: function(e) {
			var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
			var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
			tt.style.top = (u - h) + 'px';
			tt.style.left = (l + left) + 'px';
		},

		fade: function(d) {
			var a = alpha;
			if ((a != endalpha && d == 1) || (a != 0 && d == -1)) {
				var i = speed;
				if (endalpha - a < speed && d == 1) {
					i = endalpha - a;
				} else if (alpha < speed && d == -1) {
					i = a;
				}

				alpha = a + (i * d);
				tt.style.opacity = alpha * .01;

				if(ie)tt.style.filter = 'alpha(opacity = " + alpha + ")';
			} else {
				clearInterval(tt.timer);
				if (d == -1) {
					tt.style.display = none;
				}
			}
		},
		hide: function (e) {
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){
				_tt.fade(-1)
			},timer);
		}
	}
}();

