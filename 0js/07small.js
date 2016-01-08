var activeHbutton = $('.hidden-header-button');

activeHbutton.click(function(event) {
	$(this).toggleClass('active-h-button');
	siteWrapper.toggleClass('overflow-visible');
});

siteWrapper.scroll(function() {
	var thisPosition = $(this).scrollTop(),
		smallWin = 775;

	if (thisPosition > winHeight / 2) {
		header.css({
			'background-position': '5%' + (thisPosition / 8) + '%'
		});	
	}
	if (activeHbutton.hasClass('active-h-button')) {
		if (thisPosition < 750) {
			aboutMe.css({
				transform: 'rotateZ(' + (thisPosition / 15) + 'deg) rotateY(' + (thisPosition / 10) + 'deg)'
			});
		}
	}
});

