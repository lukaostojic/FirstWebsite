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
