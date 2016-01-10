// HEADER AND NAVBAR

// Navbar + Header Variables

var headerNavbar = $('.header-navbar'),
	navbar = $('.navbar-ul'),
	navbarLi = navbar.find('li'),
	headerIcon = $('.header-icons').find('a'),
	cubeMask = $('.cube-mask'),
	aboutMe = $('.about-me'),
	whatIdo = $('.what-i-do'),
	references = $('.references'),
	contact = $('.contact'),
	crs = $('.contact-right-side'),
	upButton = $('.rot-2').find('.rot-2-animation');

// Navbar Icons and Background Animation (hover)

navbarLi.hover(function(e) {
	var thisLi = $(this),
		dataSec = thisLi.data('section'),
		thisPosition = thisLi.offset().top - 25;

	if (thisLi.hasClass('active-hover')) {
		thisLi.addClass('li-hover');
		setTimeout(function() {
			thisLi.removeClass('li-hover');
		}, 1000);
	}
}, function() {
	$(this).removeClass('li-hover');
	navbar.removeClass('ul-color-change');
});

// Navbar Reposition (click)

navbarLi.click(function(event) {
	var thisLi = $(this),
		dataSec = $(this).data('section');

		if (dataSec === 'svg') {
			cv = win.offset().top;
		}
		upButton.hide();
	setTimeout(function() {
		cv = slideContainer.offset().top;
		changeView(cv);
	}, 500);
	navbarLi.each(function(i) {
		setTimeout(function() {
			navbarLi.eq(i).css({
				transform: 'rotateZ(90deg) translate(300px,' + (-800 + 300) + 'px)' 
			});
		}, 150 * (i+1));
	});
	setTimeout(function() {
		navbar.addClass('ul-rotate');
		upButton.addClass('up-visible');
	}, 600);
	setTimeout(function() {
		body.addClass('body-overflow');
		thisLi
		.addClass('new-hover')
		.addClass('li-active')
		.removeClass('active-hover')
		.siblings('li')
		.addClass('new-hover')
		.removeClass('li-active')
		.removeClass('active-hover');
		header.css({
			'background-position': '-40% 50%'
		});
		beeCont.css({
			opacity: '0'
		});
		navbar.css({
			'min-height': '800px'
		});
	}, 1200);
	setTimeout(function() {
		slideContainer.css({
			opacity: '1'
		});
		scrollPoint = navbarLi.offset().top - 20;
		win.scroll(function() {
	        win.scrollTop() < scrollPoint ? win.scrollTop(scrollPoint) : ''; /*????*/
	    }).scroll();
	    upButton.show();
	}, 2000);

// Target Section

	function navPlus() {
		setTimeout(function() {
			navbar.find('.navbar-plus').show(150);
		}, 1200);
	}

	if (dataSec === 'about-me') {
		cubeMask.css({
			transform: 'rotateY(0deg)',
			'transition': 'transform 1.5s, background-position 1s 1.5s'
		});
		crs.removeClass('right-side-show');
		body.css({
			'background-size': '95%'
		});
		navPlus();
	} else if (dataSec === 'what-i-do') {
		cubeMask.css({
			transform: 'rotateY(180deg)',
			'background-position': '0% 20%',
			'transition': 'transform 1.5s, background-position 1.5s'
		});
		crs.removeClass('right-side-show');
		body.css({
			'background-size': '95%'
		});
		navPlus();
	} else if (dataSec === 'references') {
		cubeMask.css({
			transform: 'rotateX(-90deg)',
			'background-position': '0% 20%',
			'transition': 'transform 1.5s, background-position 1.5s 1.5s'
		});
		crs.removeClass('right-side-show');
		body.css({
			'background-size': '95%'
		});
		navPlus();
	} else if (dataSec === 'contact') {
		cubeMask.css({
			transform: 'rotateX(90deg) rotateZ(45deg)',
			'background-position': '300% 5%',
			'transition': 'transform 1.5s, background-position 1.5s 1.5s'
		});
		crs.addClass('right-side-show');
		body.css({
			// 'background-size': '65%'
		});
		setTimeout(function() {
			navbar.find('.navbar-plus').hide(150);
		}, 1200);
	}
	event.preventDefault();
});

// Back To Top (click)

upButton.click(function(event) {
	var thisLi = navbarLi;

	cv = headerNavbar.offset().top;
	setTimeout(function() {
		changeView(cv);
	}, 200);
	setTimeout(function() {
		navbar.removeClass('ul-rotate');
		upButton.removeClass('up-visible');
		navbarLi.each(function(i) {
			setTimeout(function() {
				navbarLi.eq(i).css({
					transform: 'rotateZ(0deg) translate(0px, 0px)' 
				});
			}, 150 * (i+1));
		});
		$('section').removeClass('section-show');
		slideContainer.css({
			opacity: '0'
		});
	}, 600);
	setTimeout(function() {
		scrollPoint = headerNavbar.offset().top;
	    win.scroll(function() {
	        win.scrollTop() < scrollPoint ? win.scrollTop(scrollPoint) : ''; /*????*/
	    }).scroll();
		body.removeClass('body-overflow');
		thisLi
		.removeClass('li-active')
		.removeClass('new-hover')
		.addClass('active-hover')
		.siblings('li')
		.removeClass('new-hover')
		.removeClass('li-active')
		.addClass('active-hover');
		header.css({
			'background-position': '-1% 50%'
		});
		navbar.find('.navbar-plus').hide(150);
		navbar.css({
			'min-height': '50px'
		});
		beeCont.css({
			opacity: '1'
		});
	}, 250);
	event.preventDefault();
});

// Moving Slide Container (move)

var svgContainer = $('.svg-circle'),
	dragger = svgContainer.find('div');

dragger
.mousedown(function() {
	dragger.addClass('mouse-active');
})
.mouseup(function() {
	dragger.removeClass('mouse-active');
});

dragger.mouseenter(function(event) {
	cv = navbarLi.offset().top - 20;
	changeView(cv);
});

svgContainer.mousemove(function(e) {
	var mouseX = e.clientX - 690,
		mouseY = e.clientY - 305;

	if (dragger.hasClass('mouse-active')) {
		slideContainer.css({
			transform: 'rotateY(' + (mouseX * 2.5) + 'deg) rotateX(' + (mouseY * 2.5) + 'deg)'
		});
		dragger.css({
			transform: 'translateX(' + mouseX + 'px) translateY(' + mouseY + 'px)'
		});
	}
	if (mouseX <= -70 || mouseX >= 70 || mouseY <= -70 || mouseY >= 70 ) {
		dragger
		.removeClass('mouse-active')
		.css({
			transform: 'translateX(0px) translateY(0px)'
		});
	}
});

// New Li (click)

$(document).on('click', '.navbar-plus', function(event) {
	var newLi = $(this),
		newText = newLi.find('a');

	newText.html((newText).text() === 'Off' ? 'On' : 'Off');
	slideContainer.css({
		transform: 'rotateY(0deg) rotateX(0deg)'
	});
	svgContainer
	.css({
		top: slideContainer.offset().top - 40
	})
	.toggleClass('svg-circle-show');
	$('.header-rotate-div').slideToggle(500);
	sections.toggleClass('sections-transparent');
	slideContainer.toggleClass('slide-container-overflow');
	setTimeout(function() {
		siteWrapper.toggleClass('site-wrapper-3d');
		sections.toggleClass('sections-backface');
		dragger.css({
			transition: '0s'
		});
	}, 500);
	event.preventDefault();
});

// Work In Progress (click)

$('.header-buttons').find('a').click(function(event) {
	alert('Under Construction');
});

// New Navbar

var newNav = $('.small-nav').find('ul');

newNav.find('li').click(function() {
	var thisLi = $(this),
		thisGoto = thisLi.data('go');

	// if (winWidth <= 450) {
	// 	if (thisGoto === 'about') {
	// 		cv = aboutMe.offset().top - 65;
	// 		speed = 600;
	// 	} else if (thisGoto === 'what') {
	// 		cv = whatIdo.offset().top - 65;
	// 		speed = 800;
	// 	} else if (thisGoto === 'port') {
	// 		cv = references.offset().top - 65;
	// 		speed = 1200;
	// 	} else if (thisGoto === 'contact') {
	// 		cv = contact.offset().top - 65;
	// 		speed = 1400;
	// 	}
	// }

	
	  // if (winWidth > 100) {
		if (thisGoto === 'about') {
			scroll = 655;
			speed = 600;
		} else if (thisGoto === 'what') {
			scroll = 1460;
			speed = 800;
		} else if (thisGoto === 'port') {
			scroll = 2295;
			speed = 1200;
		} else if (thisGoto === 'contact') {
			scroll = 3295;
			speed = 1400;
		}
	// }
	// changeView(cv);
	wrapperScroll(scroll, speed);
});

// -------------------------------- //
