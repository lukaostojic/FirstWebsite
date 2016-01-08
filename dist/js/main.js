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



// -------------------------------- //

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
			e = win.offset().top;
		}
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
		// scrollPoint = navbarLi.offset().top - 20;
	    // win.scroll(function() {
	    //     win.scrollTop() < scrollPoint ? win.scrollTop(scrollPoint) : ''; /*????*/
	    // }).scroll();
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
		navbar.find('.navbar-plus').show(150);
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
	}, 2000);

// Target Section

	if (dataSec === 'about-me') {
		cubeMask.css({
			transform: 'rotateY(0deg)',
			'transition': 'transform 1.5s, background-position 1s 1.5s'
		});
		crs.removeClass('right-side-show');
		body.css({
			'background-size': '95%'
		});
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
	}
	event.preventDefault();
});

// Back To Top (click)

var backToTop = $('.rot-2');

backToTop.click(function(event) {
	var thisLi = navbarLi;

	cv = headerNavbar.offset().top;
	changeView(cv);
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

// $('.header-buttons').find('a').click(function(event) {
// 	alert('Under Construction');
// });

// New Navbar

var newNav = $('.small-nav').find('ul');

newNav.find('li').click(function() {
	var thisLi = $(this),
		thisGoto = thisLi.data('go');

	if (thisGoto === 'about') {
		scroll = aboutMe.offset().top - 65;
		speed = 400;
	} else if (thisGoto === 'what') {
		scroll = whatIdo.offset().top - 65;
		speed = 800;
	} else if (thisGoto === 'port') {
		scroll = references.offset().top - 65;
		speed = 1200;
	} else if (thisGoto === 'contact') {
		scroll = contact.offset().top - 65;
		speed = 1600;
	}
	wrapperScroll(scroll, speed);
});

// -------------------------------- //

// BEES

// Random Fly

var	beeOne = beeCont.find('.bee-1'),
	beeTwo = beeCont.find('.bee-2'),
	beeThree = beeCont.find('.bee-3'),
	beeFour = beeCont.find('.bee-4'),
	headerText = $('.header-text'),
	more = $('.more-bees').find('ul');
function randomBee() {
	var randomX = Math.floor((Math.random() * 350) + 1),
		randomY = Math.floor((Math.random() * 450) + 1),
		randomZ = Math.floor((Math.random() * 550) + 1);

	beeOne.css({
		transform: 'translateX(' + randomX + 'px) translateY(' + randomY + 'px)'
	});
	beeTwo.css({
		transform: 'translateX(' + randomX * 2 + 'px) translateY(' + randomZ / 2 + 'px)'
	});
	beeThree.css({
		transform: 'translateX(' + randomY * 1.5 + 'px) translateY(' + randomX * 2 + 'px)'
	});
	beeFour.css({
		transform: 'translateX(' + (randomZ  - 200) + 'px) translateY(' + (randomX + 150) + 'px)'
	});
}

var newInt = setInterval(function(i) {
	randomBee();
}, 3000);

// Mouse Move (move)

$(document).mousemove(function(e) {
	var mouseX = e.clientX,
		mouseY = e.clientY;

	$('.bees').css({
		transform: 'translateY(' + mouseY / 10 + 'px) translateX(' + mouseX / 15 + 'px)'
	});
});

// Don't (click)

beeCont.find('div').click(function() {
	var interval = 25,
		thisBee = $(this);

	thisBee.css({
		background: 'orange',
	});
	header.css({
		'background-position': '-65% 50%'
	});
	beeCont.find('div').unbind('click');
	headerNavbar.find('li').unbind('click');
	headerNavbar.find('a').unbind('click');
	setTimeout(function() {
		header.css({
			'background-image': 'url(../img/header/brlja5.svg)'
			 // Promeniti u finalnoj verziji:
			// 'background-image': 'url(../dist/img/header/brlja5.svg)' 
		});
	}, 500);
	setTimeout(function() {
		header.css({
			'background-position': '-1% 50%'
		});
		// audio.play();
	}, 1000);
	setTimeout(function() {
		header.find('.header-buttons').find('a').css({
			animation: 'header-buttons 5.5s infinite'
		});
	}, 1450);
	var secondInt = setInterval(function() {
		thisBee.css({
			width: interval++,
			height: interval++
		});
		beeCont.addClass('unrotate');
	}, 125);

// 0-3

	setTimeout(function() {
		var firstInt = setInterval(function() {
			more.append('<li class="ajmo"><a href="#"></a></li>');
			var moreLiOdd = more.find('li:odd'),
				moreLiEven = more.find('li:even'),
				moreLi = more.find('li');

			moreLi.each(function(i) {
				setTimeout(function() {
					moreLiOdd.eq(i).css({
						transform: 'translateX(' + Math.floor(Math.random() * 1200) + 'px) translateY(' + Math.floor(Math.random() * 850) + 'px)'
					});
					moreLiEven.eq(i).css({
						transform: 'translateX(' + Math.floor(Math.random() * (1200 - 2000)) + 'px) translateY(' + Math.floor(Math.random() * 850) + 'px)'
					});
				}, 50 * (i+1));
				// setInterval(function() {
				// 	moreLi.each(function(index, el) {
				// 		moreLi.remove();
				// 	});
				// }, 10000);
			});

			setTimeout(function() {
				clearInterval(firstInt);
			}, 19000);
		}, 500);
	}, 2000);
	setTimeout(function() {
		audio.play();
		thisBee.css({
			animation: 'music-bee 11s infinite',
			transition: 'all 1s'
		});
		clearInterval(newInt);
		var secondInt = setInterval(function(i) {
			randomBee();
		}, 4250);
		// header.find('.header-buttons').find('a').css({
		// 	animation: 'header-buttons 5.5s infinite'
		// });
	}, 3000);

// 7-10

	setTimeout(function() {
		body.css('cursor', 'none');
		$('a').css('cursor', 'none');
		$('li').css('cursor', 'none');
		thisBee.siblings().remove();
		headerNavbar.find('nav').addClass('nav-fall');
		headerText.addClass('hide-header-text');
	}, 7500);
	setTimeout(function() {
		headerText.css({
			color: '#109F94'
		});
		headerText.addClass('shiver-header-text');
		// $(document).mousemove(function(e) {
		// 	var mouseX = e.clientX,
		// 		mouseY = e.clientY,
		// 		allBees = more.find('li');
				
		// 	allBees.each(function(index, el) {
		// 		allBees.css({
		// 			left: mouseX - 700,
		// 			top: mouseY - 100,
		// 			transform: 'scale(0.25)'
		// 		});
		// 	});
		// });
	}, 13500);

// 10 - 20 +

	setTimeout(function() {
		$('.rot-1').css({
			transform: 'scale(0)'
		});
		$('.rot-2').css({
			transform: 'scale(0)'
		});
	}, 10500);
	setTimeout(function() {
		// $('.header-buttons').css({
		// 	transform: 'scale(0)'
		// });
		// siteWrapper.addClass('site-wrapper-bees');
		$('.novo-div').css({
			left: '-30%',
			width: '200vh',
			height: '200vh'
		});
	}, 11000);
	setTimeout(function() {
		$('.header-buttons').css({
			transform: 'scale(0)'
		});
	}, 15000);
	setTimeout(function() {
		var intervalBody = 95;
		setInterval(function(i) {
			body.css({
				'background-size': intervalBody--
			});
		}, 100);
		var intervalImage = 50;
		setInterval(function() {
			header.css({
				'background-position': '-1%' + intervalImage + '%'
				// 'background-size': intervalImage + '%'
			});
			intervalImage+=1.5;
		}, 2500);
	}, 19000);
	setTimeout(function() {
		headerText.removeClass('shiver-header-text');
	}, 22000);
});

// -------------------------------- //

// ABOUT ME

// About Me Variables plus Start

var containers = $('.containers'),
	showHide = $('.show-hide'),
	aboutMeMe = $('.about-me-text').find('.me'),
	imageBack = $('.image-background'),
	imageMe = 'url(../img/about-me/site-4.jpg)',
	imageSite = 'url(../img/about-me/site-4.jpg)',
	imageThree = 'url(../img/about-me/03.jpg)',
	imageFour = 'url(../img/about-me/four.jpg)';

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
	event.preventDefault();
});

// About Me Trigger

$('.me').find('a').trigger('click');

// -------------------------------- //

// WHAT I DO

// What I Do Variables plus Start

var whatImages = $('.what-i-do-images'),
	imageMask = whatImages.find('.image-mask'),
	image = imageMask.find('img'),
	hiddenContent = imageMask.find('.hidden-tech'),
	readMore = imageMask.find('a'),
	showAll = $('.see-all'),
	jebise = $('.what-i-do-container').find('a'),
	otherTools = $('.other-tools');

showAll.hide();

jebise.click(function(event) {
	event.preventDefault();
});

// Action (click)

imageMask.click(function(event) {
	var thisMask = $(this),
		dataTech = thisMask.data('tech'),
		thisImage = thisMask.find('img'),
		thisReadMore = thisMask.find('a'),
		maskChildren = thisMask.siblings('.image-mask'),
		thisText = thisMask.find('.hidden-tech');

	if (winWidth >= 775) {
		thisMask.addClass('mask-on');
		thisReadMore.addClass('after-before-remove');
		setTimeout(function() {
			thisImage.addClass('image-jump');
		}, 250);
		setTimeout(function() {
			thisImage.removeClass('image-jump');
			thisReadMore.removeClass('after-before-remove');
		}, 800);
		thisReadMore.css({
			visibility: 'hidden'
		});
		maskChildren.removeClass('mask-on');
		maskChildren.find('a').css({
			visibility: 'visible'
		});
		maskChildren.find('.hidden-tech').removeClass('show-tech');
		setTimeout(function() {
			thisText.addClass('show-tech');
			showAll
			.show()
			.addClass('see-all-boop');
		}, 350);
	}
	event.preventDefault();
});

// Show All (click)

showAll.bind('click', handler); 
var first = true;

function handler(e) {
	if (first) {
		imageMask.removeClass('mask-on');
		hiddenContent.removeClass('show-tech');
		readMore.css({
			visibility: 'visible'
		});
		image.css({
			opacity: '1'
		});
	} else {
		imageMask.addClass('mask-on');
		hiddenContent.addClass('show-tech');
		readMore.css({
			visibility: 'hidden'
		});
		image.css({
			opacity: '0'
		});
	}
	first = !first;
	e.preventDefault();
}

// Icon Hover (hover)

otherTools.find('i').hover(function() {
	$(this).siblings('span').toggleClass('icon-color');
});

// Icon Click (click)

otherTools.find('i').click(function() {
	var thisSpan = $(this).siblings('span');
	thisSpan.each(function(i) {
		setTimeout(function() {
			thisSpan.eq(i).toggleClass('icon-rotate');
		}, 300 * (i+1));
	});
});

// -------------------------------- //

// REFERENCES

// References Variables

var refContainer = $('.references-container'),
	portMaskSpan = $('.port-mask').find('span'),
	refImageCont = $('.references-image-container'),
	refImage = refImageCont.find('.port-mask-image'),
	p1 = $('.p1'),
	p2 = $('.p2'),
	p3 = $('.p3'),
	viewMore = refImage.find('.button'),
	sectionOne = $('.site-1'),
	sectionTwo = $('.site-2'),
	sectionThree = $('.site-3'),
	closeBtn = $('.close-port');

// Image Animation (hover)

refImage.hover(function() {
	$(this).toggleClass('port-mask-hover');
});

// Domines Functions

function dominesIn(e) {
	e.each(function(i) {
		setTimeout(function() {
			e.eq(i).addClass('port-mask-text-show');
		}, 150 * (i+1));
	});
}

function dominesOut(e) {
	e.each(function(i) {
		setTimeout(function() {
			e.eq(i).removeClass('port-mask-text-show');
		}, 150 * (i+1));
	});
}

// View More (click)

viewMore.click(function(event) {
	var thisBtn = $(this),
		thisImg = thisBtn.parent('.port-mask-image'),
		thisText = thisImg.siblings('.port-mask-text'),
		goUp = thisImg.parent().siblings().children('.port-mask-image');

	if (winWidth >= 775) {
		thisBtn.css({
			opacity: '0'
		});
		cv = refContainer.offset().top;
		changeView(cv);
		portMaskSpan.addClass('span-down');
		thisImg
		.css({
			'background-attachment': 'fixed'
		})
		.addClass('image-remove-p');
		if (thisBtn.hasClass('site-1-buttons')) {
			thisImg.addClass('image-1-left');
			p2.addClass('image-scale');
			setTimeout(function() {
				p3.addClass('image-scale');
			}, 500);
		} else if (thisBtn.hasClass('site-2-buttons')) {
			refImage.addClass('image-scale');
			thisImg
			.addClass('image-2-left');
			setTimeout(function() {
				thisImg.removeClass('image-scale');
			}, 500);
		} else if (thisBtn.hasClass('site-3-buttons')) {
			thisImg.addClass('image-3-left');
			setTimeout(function() {
				p2.addClass('image-3-other');
			}, 150);
			setTimeout(function() {
				p1.addClass('image-3-other-2');
			}, 400);
		}
		setTimeout(function() {
			thisImg
			.addClass('button-switch');
			goUp.addClass('image-no-display');
			if (thisImg.hasClass('p1')) {
				e = sectionOne;
			} else if (thisImg.hasClass('p2')) {
				e = sectionTwo;
			} else {
				e = sectionThree;
			}
			dominesIn(e);
		}, 1550);
	}
	event.preventDefault();
});

// Close Button (click)

closeBtn.click(function(event) {
	var thisBtn = $(this),
		thisImg = thisBtn.parent('.port-mask-image'),
		thisText = thisImg.siblings('.port-mask-text'),
		goUp = thisImg.parent().siblings().children('.port-mask-image');

	if (thisImg.hasClass('p1')) {
		e = sectionOne;
	} else if (thisImg.hasClass('p2')) {
		e = sectionTwo;
	} else {
		e = sectionThree;
	}
	dominesOut(e);
	thisBtn.css({
		opacity: '0'
	});
	if (thisBtn.hasClass('site-1-buttons')) {
		thisImg
		.removeClass('image-1-left')
		.addClass('image-resize');
		p2.removeClass('image-scale');
		p3.removeClass('image-scale');
	} else if (thisBtn.hasClass('site-2-buttons')) {
		thisImg
		.addClass('image-resize')
		.removeClass('image-2-left');
		refImage.removeClass('image-scale');
	} else if (thisBtn.hasClass('site-3-buttons')) {
		thisImg
		.addClass('image-resize')
		.removeClass('image-3-left');
		setTimeout(function() {
			p2.removeClass('image-3-other');
		}, 250);
		setTimeout(function() {
			p1.removeClass('image-3-other-2');
		}, 500);
	}
	setTimeout(function() {
		thisImg
		.removeClass('button-switch')
		.removeClass('image-resize');
		goUp.removeClass('image-no-display');
		refImage.removeClass('image-remove-p');
		viewMore.css({
			opacity: '1'
		});
		thisBtn.css({
			opacity: '1'
		});
		thisImg.css({
			'background-attachment': 'scroll'
		});
	}, 1500);
	setTimeout(function() {
		portMaskSpan.removeClass('span-down');
	}, 1750);
	event.preventDefault();
});

// -------------------------------- //

var activeHbutton = $('.hidden-header-button');

activeHbutton.click(function(event) {
	$(this).toggleClass('active-h-button');
	siteWrapper.toggleClass('overflow-visible');
});

siteWrapper.scroll(function() {
	var thisPosition = $(this).scrollTop(),
		smallWin = 775;

	// if (thisPosition > winHeight / 2) {
	// 	header.css({
	// 		'background-position': '5%' + (thisPosition / 8) + '%'
	// 	});	
	// }
	if (activeHbutton.hasClass('active-h-button')) {
		if (thisPosition < 750) {
			aboutMe.css({
				transform: 'rotateZ(' + (thisPosition / 15) + 'deg) rotateY(' + (thisPosition / 10) + 'deg)'
			});
		}
	}
});

