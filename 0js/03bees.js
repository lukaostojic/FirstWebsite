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
