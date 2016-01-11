// ABOUT ME

// About Me Variables plus Start

var containers = $('.containers'),
	showHide = $('.show-hide'),
	aboutMeMe = $('.about-me-text').find('.me'),
	imageBack = $('.image-background'),
	imageMe = 'url(../dist/img/about-me/four.jpg)',
	imageSite = 'url(../dist/img/about-me/site-4.jpg)',
	imageThree = 'url(../dist/img/about-me/033.jpg)',
	imageFour = 'url(../dist/img/about-me/four.jpg)';

showHide.find('.slide-para').slideUp();

// Change About (click)

$('.hidden-fa').slideUp();

showHide.find('a').on('click', function(event) {
	var thisAcontainer = $(this),
		dataAbout = $(this).data('about'),
		shownI = thisAcontainer.find('.shown-fa'),
		hiddenI = thisAcontainer.find('.hidden-fa'),
		goUp = thisAcontainer.parent('div').siblings('div'),
		imageCont = $('.about-me-images');

	thisAcontainer
	.addClass('border-animation-minus')
	.find('h2').addClass('text-move-1');
	setTimeout(function() {
		thisAcontainer.siblings('.slide-para').slideDown();
		goUp.children('a').removeClass('border-animation-minus')
		.find('h2').removeClass('text-move-1');
		goUp.children('.slide-para').slideUp();
		hiddenI.slideDown();
		shownI.slideUp();
		goUp.children('a').find('.hidden-fa').slideUp();
		goUp.children('a').find('.shown-fa').slideDown();
	}, 1000);	
	setTimeout(function() {
		thisAcontainer.addClass('border-animation-plus');
		goUp.children('a').removeClass('border-animation-plus');
		imageBack.css({
			'background-position': '50% -500px'
		});
	}, 550);

// Target About

	setTimeout(function() {
		if (dataAbout === 'me') {
			imageBack.css({
				'background-image': imageMe
			});
		} else if (dataAbout === 'site') {
			imageBack.css({
				'background-image': imageSite
			});
		} else if (dataAbout === 'three') {
			imageBack.css({
				'background-image': imageThree
			});
		} else if (dataAbout === 'four') {
			imageBack.css({
				'background-image': imageFour
			});
		}
	}, 750);
	setTimeout(function() {
		imageBack.css({
			'background-position': '50% 10%'
		});
	}, 1500);
});

$('.unclickable').click(function(event) {
	return false;
});

// About Me Trigger

$('.me').find('a').trigger('click');

// -------------------------------- //
