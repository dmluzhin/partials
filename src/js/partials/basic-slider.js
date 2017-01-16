var slider = {
	slides: ['../images/jpg/slider/1.jpg', '../images/jpg/slider/2.jpg', '../images/jpg/slider/3.jpg'], //Объявляем массив с изображениями
	frame: 0, //Начальный кадр - нулевой элемент массива
	set: function(image) { //Устанавливается фон для слайдера
		document.getElementById("src").style.backgroundImage = "url("+image+")";
	},
	init: function() { //Запускаем слайдер с начальной картинкой
		this.set(this.slides[this.frame]);
	},
	left: function() {
		this.frame--;
		if(this.frame < 0) this.frame = this.slides.length - 1;
		this.set(this.slides[this.frame]);
	},
	right: function () {
		this.frame++;
		if(this.frame == this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);
	}
};
window.onload = function() {
	slider.init();
	setInterval(function() {
		slider.right();
	},5000);
};