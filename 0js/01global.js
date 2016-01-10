// GLOBAL

//Global Variables

var body = $('html, body'),
	win = $(window),
	winHeight = win.height(),
	winWidth = win.width(),
	slideContainer = $('.slide-container'),
	header = $('header'),
	beeCont = $('.three-container'),
	popup = $('.popup'),
	sections = $('.sections'),
	siteWrapper = $('.site-wrapper'),
	audio = new Audio('audio/za-sajt.mp3');

// Start Function

(function() {

	// To Top
	setTimeout(function() {
		body.animate({
			scrollTop: 0
		}, 100);
	}, 500);

	// SVG Height
	$('.svg-circle').css({
		top: (winHeight - winHeight / 3.2) + 130
	});

	// Bees
	setTimeout(function() {
		beeCont.css({
			opacity: '1'
		});
	}, 2000);

	// Popup
	popup
	.hide()
	.css({
		top: slideContainer.offset().top - 50
	});

	// Hide navbar-plus
	$('.navbar-plus').hide();

	// Chrome Detect
	$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());	
})();

// Scroll Animation Functions

function changeView(cv) {
	body.animate({
		scrollTop: cv
	}, 600);
}

function wrapperScroll(scroll, speed) {
	siteWrapper.animate({
		scrollTop: scroll
	}, speed);
}

// Contact hrefs prevent

$('.phone, .mail').click(function(event) {
	return false;
});

// - resiti risponsivnes

// - srediti animaciju malo
// - srediti malo tekstove

// -------------------------------- //
