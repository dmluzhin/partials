$(document).ready(function(){
	$('.accordion__trigger').on('click',function(e){
		e.preventDefault();

		var $this = $(this),
				item = $this.closest('.accordion__item'),
				list = $this.closest('.accordion__list'),
				items = list.find('.accordion__item'),
				content = item.find('.accordion__content'),
				otherContent = list.find('.accordion__content'),
				duration = 100;

				if(!item.hasClass('active')) {
					items.removeClass('active');
					item.addClass('active');

					otherContent.stop(true, true).slideUp(duration);
					content.stop(true, true).slideDown(duration);
				} else {
					content.stop(true, true).slideUp(duration);
					item.removeClass('active');
				}

	});
});