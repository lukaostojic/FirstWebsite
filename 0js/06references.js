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
