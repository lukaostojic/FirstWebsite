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
})();

// Scroll Animation Function

function changeView() {
	body.animate({
		scrollTop: e
	}, 600);
}

// Background Move (move)

// $(document).mousemove(function(e) {
// 	var mouseX = e.clientX / 40,
// 		mouseY = e.clientY / 80;

// 	body.css({
// 		'background-position': mouseX + '%' + mouseY + '%'
// 	});
// });

// -------------------------------- //
