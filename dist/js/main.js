function changeView(e){body.animate({scrollTop:e},600)}function wrapperScroll(e,i){siteWrapper.animate({scrollTop:e},i)}var body=$("html, body"),win=$(window),winHeight=win.height(),winWidth=win.width(),slideContainer=$(".slide-container"),header=$("header"),beeCont=$(".three-container"),popup=$(".popup"),sections=$(".sections"),siteWrapper=$(".site-wrapper"),audio=new Audio("audio/za-sajt.mp3");!function(){setTimeout(function(){body.animate({scrollTop:0},100)},500),$(".svg-circle").css({top:winHeight-winHeight/3.2+130}),setTimeout(function(){beeCont.css({opacity:"1"})},2e3),popup.hide().css({top:slideContainer.offset().top-50}),$(".navbar-plus").hide()}();
var headerNavbar=$(".header-navbar"),navbar=$(".navbar-ul"),navbarLi=navbar.find("li"),headerIcon=$(".header-icons").find("a"),cubeMask=$(".cube-mask"),aboutMe=$(".about-me"),whatIdo=$(".what-i-do"),references=$(".references"),contact=$(".contact"),crs=$(".contact-right-side"),upButton=$(".rot-2").find(".rot-2-animation");navbarLi.hover(function(s){var e=$(this);e.data("section"),e.offset().top-25;e.hasClass("active-hover")&&(e.addClass("li-hover"),setTimeout(function(){e.removeClass("li-hover")},1e3))},function(){$(this).removeClass("li-hover"),navbar.removeClass("ul-color-change")}),navbarLi.click(function(s){var e=$(this),o=$(this).data("section");"svg"===o&&(cv=win.offset().top),upButton.hide(),setTimeout(function(){cv=slideContainer.offset().top,changeView(cv)},500),navbarLi.each(function(s){setTimeout(function(){navbarLi.eq(s).css({transform:"rotateZ(90deg) translate(300px,-500px)"})},150*(s+1))}),setTimeout(function(){navbar.addClass("ul-rotate"),upButton.addClass("up-visible")},600),setTimeout(function(){body.addClass("body-overflow"),e.addClass("new-hover").addClass("li-active").removeClass("active-hover").siblings("li").addClass("new-hover").removeClass("li-active").removeClass("active-hover"),header.css({"background-position":"-40% 50%"}),navbar.find(".navbar-plus").show(150),beeCont.css({opacity:"0"}),navbar.css({"min-height":"800px"})},1200),setTimeout(function(){slideContainer.css({opacity:"1"}),scrollPoint=navbarLi.offset().top-20,win.scroll(function(){win.scrollTop()<scrollPoint?win.scrollTop(scrollPoint):""}).scroll(),upButton.show()},2e3),"about-me"===o?(cubeMask.css({transform:"rotateY(0deg)",transition:"transform 1.5s, background-position 1s 1.5s"}),crs.removeClass("right-side-show"),body.css({"background-size":"95%"})):"what-i-do"===o?(cubeMask.css({transform:"rotateY(180deg)","background-position":"0% 20%",transition:"transform 1.5s, background-position 1.5s"}),crs.removeClass("right-side-show"),body.css({"background-size":"95%"})):"references"===o?(cubeMask.css({transform:"rotateX(-90deg)","background-position":"0% 20%",transition:"transform 1.5s, background-position 1.5s 1.5s"}),crs.removeClass("right-side-show"),body.css({"background-size":"95%"})):"contact"===o&&(cubeMask.css({transform:"rotateX(90deg) rotateZ(45deg)","background-position":"300% 5%",transition:"transform 1.5s, background-position 1.5s 1.5s"}),crs.addClass("right-side-show"),body.css({})),s.preventDefault()}),upButton.click(function(s){var e=navbarLi;cv=headerNavbar.offset().top,setTimeout(function(){changeView(cv)},200),setTimeout(function(){navbar.removeClass("ul-rotate"),upButton.removeClass("up-visible"),navbarLi.each(function(s){setTimeout(function(){navbarLi.eq(s).css({transform:"rotateZ(0deg) translate(0px, 0px)"})},150*(s+1))}),$("section").removeClass("section-show"),slideContainer.css({opacity:"0"})},600),setTimeout(function(){scrollPoint=headerNavbar.offset().top,win.scroll(function(){win.scrollTop()<scrollPoint?win.scrollTop(scrollPoint):""}).scroll(),body.removeClass("body-overflow"),e.removeClass("li-active").removeClass("new-hover").addClass("active-hover").siblings("li").removeClass("new-hover").removeClass("li-active").addClass("active-hover"),header.css({"background-position":"-1% 50%"}),navbar.find(".navbar-plus").hide(150),navbar.css({"min-height":"50px"}),beeCont.css({opacity:"1"})},250),s.preventDefault()});var svgContainer=$(".svg-circle"),dragger=svgContainer.find("div");dragger.mousedown(function(){dragger.addClass("mouse-active")}).mouseup(function(){dragger.removeClass("mouse-active")}),dragger.mouseenter(function(s){cv=navbarLi.offset().top-20,changeView(cv)}),svgContainer.mousemove(function(s){var e=s.clientX-690,o=s.clientY-305;dragger.hasClass("mouse-active")&&(slideContainer.css({transform:"rotateY("+2.5*e+"deg) rotateX("+2.5*o+"deg)"}),dragger.css({transform:"translateX("+e+"px) translateY("+o+"px)"})),(-70>=e||e>=70||-70>=o||o>=70)&&dragger.removeClass("mouse-active").css({transform:"translateX(0px) translateY(0px)"})}),$(document).on("click",".navbar-plus",function(s){var e=$(this),o=e.find("a");o.html("Off"===o.text()?"On":"Off"),slideContainer.css({transform:"rotateY(0deg) rotateX(0deg)"}),svgContainer.css({top:slideContainer.offset().top-40}).toggleClass("svg-circle-show"),$(".header-rotate-div").slideToggle(500),sections.toggleClass("sections-transparent"),slideContainer.toggleClass("slide-container-overflow"),setTimeout(function(){siteWrapper.toggleClass("site-wrapper-3d"),sections.toggleClass("sections-backface"),dragger.css({transition:"0s"})},500),s.preventDefault()}),$(".header-buttons").find("a").click(function(s){alert("Under Construction")});var newNav=$(".small-nav").find("ul");newNav.find("li").click(function(){var s=$(this),e=s.data("go");"about"===e?(scroll=aboutMe.offset().top-65,speed=400):"what"===e?(scroll=whatIdo.offset().top-65,speed=800):"port"===e?(scroll=references.offset().top-65,speed=1200):"contact"===e&&(scroll=contact.offset().top-65,speed=1600),wrapperScroll(scroll,speed)});
function randomBee(){var e=Math.floor(350*Math.random()+1),t=Math.floor(450*Math.random()+1),n=Math.floor(550*Math.random()+1);beeOne.css({transform:"translateX("+e+"px) translateY("+t+"px)"}),beeTwo.css({transform:"translateX("+2*e+"px) translateY("+n/2+"px)"}),beeThree.css({transform:"translateX("+1.5*t+"px) translateY("+2*e+"px)"}),beeFour.css({transform:"translateX("+(n-200)+"px) translateY("+(e+150)+"px)"})}var beeOne=beeCont.find(".bee-1"),beeTwo=beeCont.find(".bee-2"),beeThree=beeCont.find(".bee-3"),beeFour=beeCont.find(".bee-4"),headerText=$(".header-text"),more=$(".more-bees").find("ul"),backImage="url(../img/header/brlja5.svg)",newInt=setInterval(function(e){randomBee()},3e3);$(document).mousemove(function(e){var t=e.clientX,n=e.clientY;$(".bees").css({transform:"translateY("+n/10+"px) translateX("+t/15+"px)"})}),beeCont.find("div").click(function(){var e=25,t=$(this);t.css({background:"orange"}),header.css({"background-position":"-65% 50%"}),beeCont.find("div").unbind("click"),headerNavbar.find("li").unbind("click"),headerNavbar.find("a").unbind("click"),setTimeout(function(){header.css({"background-image":backImage})},500),setTimeout(function(){header.css({"background-position":"-1% 50%"})},1e3),setTimeout(function(){header.find(".header-buttons").find("a").css({animation:"header-buttons 5.5s infinite"})},1450);setInterval(function(){t.css({width:e++,height:e++}),beeCont.addClass("unrotate")},125);setTimeout(function(){var e=setInterval(function(){more.append('<li class="ajmo"><a href="#"></a></li>');var t=more.find("li:odd"),n=more.find("li:even"),a=more.find("li");a.each(function(e){setTimeout(function(){t.eq(e).css({transform:"translateX("+Math.floor(1200*Math.random())+"px) translateY("+Math.floor(850*Math.random())+"px)"}),n.eq(e).css({transform:"translateX("+Math.floor(-800*Math.random())+"px) translateY("+Math.floor(850*Math.random())+"px)"})},50*(e+1))}),setTimeout(function(){clearInterval(e)},19e3)},500)},2e3),setTimeout(function(){audio.play(),t.css({animation:"music-bee 11s infinite",transition:"all 1s"}),clearInterval(newInt);setInterval(function(e){randomBee()},4250)},3e3),setTimeout(function(){body.css("cursor","none"),$("a").css("cursor","none"),$("li").css("cursor","none"),t.siblings().remove(),headerNavbar.find("nav").addClass("nav-fall"),headerText.addClass("hide-header-text")},7500),setTimeout(function(){headerText.css({color:"#109F94"}),headerText.addClass("shiver-header-text")},13500),setTimeout(function(){$(".rot-1").css({transform:"scale(0)"}),$(".rot-2").css({transform:"scale(0)"})},10500),setTimeout(function(){$(".novo-div").css({left:"-30%",width:"200vh",height:"200vh"})},11e3),setTimeout(function(){$(".header-buttons").css({transform:"scale(0)"})},15e3),setTimeout(function(){var e=95;setInterval(function(t){body.css({"background-size":e--})},100);var t=50;setInterval(function(){header.css({"background-position":"-1%"+t+"%"}),t+=1.5},2500)},19e3),setTimeout(function(){headerText.removeClass("shiver-header-text")},22e3)});
var containers=$(".containers"),showHide=$(".show-hide"),aboutMeMe=$(".about-me-text").find(".me"),imageBack=$(".image-background"),imageMe="url(../img/about-me/site-4.jpg)",imageSite="url(../img/about-me/site-4.jpg)",imageThree="url(../img/about-me/03.jpg)",imageFour="url(../img/about-me/four.jpg)";showHide.find(".slide-para").slideUp(),$(".hidden-fa").slideUp(),showHide.find("a").on("click",function(e){var i=$(this),a=$(this).data("about"),s=i.find(".shown-fa"),n=i.find(".hidden-fa"),o=i.parent("div").siblings("div");$(".about-me-images");i.addClass("border-animation-minus").find("h2").addClass("text-move-1"),setTimeout(function(){i.siblings(".slide-para").slideDown(),o.children("a").removeClass("border-animation-minus").find("h2").removeClass("text-move-1"),o.children(".slide-para").slideUp(),n.slideDown(),s.slideUp(),o.children("a").find(".hidden-fa").slideUp(),o.children("a").find(".shown-fa").slideDown()},1e3),setTimeout(function(){i.addClass("border-animation-plus"),o.children("a").removeClass("border-animation-plus"),imageBack.css({"background-position":"50% -500px"})},550),setTimeout(function(){"me"===a?imageBack.css({"background-image":imageMe}):"site"===a?imageBack.css({"background-image":imageSite}):"three"===a?imageBack.css({"background-image":imageThree}):"four"===a&&imageBack.css({"background-image":imageFour})},750),setTimeout(function(){imageBack.css({"background-position":"50% 10%"})},1500),e.preventDefault()}),$(".me").find("a").trigger("click");
function imageClick(){var i=$(this),e=(i.data("tech"),i.find("img")),s=i.find("a"),a=i.siblings(".image-mask"),o=i.find(".hidden-tech");winWidth>=775&&(i.addClass("mask-on"),s.addClass("after-before-remove"),setTimeout(function(){e.addClass("image-jump")},250),setTimeout(function(){e.removeClass("image-jump"),s.removeClass("after-before-remove")},800),s.css({visibility:"hidden"}),a.removeClass("mask-on"),a.find("a").css({visibility:"visible"}),a.find(".hidden-tech").removeClass("show-tech"),setTimeout(function(){o.addClass("show-tech"),showAll.show().addClass("see-all-boop")},350)),event.preventDefault()}function handler(i){first?(imageMask.removeClass("mask-on"),hiddenContent.removeClass("show-tech"),readMore.css({visibility:"visible"}),image.css({opacity:"1"}),imageMask.on("click",imageClick)):(imageMask.addClass("mask-on"),hiddenContent.addClass("show-tech"),readMore.css({visibility:"hidden"}),image.css({opacity:"0"}),imageMask.off("click",imageClick)),first=!first,i.preventDefault()}var whatImages=$(".what-i-do-images"),imageMask=whatImages.find(".image-mask"),image=imageMask.find("img"),hiddenContent=imageMask.find(".hidden-tech"),readMore=imageMask.find("a"),showAll=$(".see-all"),jebise=$(".what-i-do-container").find("a"),otherTools=$(".other-tools");showAll.hide(),jebise.click(function(i){i.preventDefault()}),imageMask.on("click",imageClick),showAll.bind("click",handler);var first=!0;otherTools.find("i").hover(function(){$(this).siblings("span").toggleClass("icon-color")}),otherTools.find("i").click(function(){var i=$(this).siblings("span");i.each(function(e){setTimeout(function(){i.eq(e).toggleClass("icon-rotate")},300*(e+1))})});
function dominesIn(e){e.each(function(s){setTimeout(function(){e.eq(s).addClass("port-mask-text-show")},150*(s+1))})}function dominesOut(e){e.each(function(s){setTimeout(function(){e.eq(s).removeClass("port-mask-text-show")},150*(s+1))})}var refContainer=$(".references-container"),portMaskSpan=$(".port-mask").find("span"),refImageCont=$(".references-image-container"),refImage=refImageCont.find(".port-mask-image"),p1=$(".p1"),p2=$(".p2"),p3=$(".p3"),viewMore=refImage.find(".button"),sectionOne=$(".site-1"),sectionTwo=$(".site-2"),sectionThree=$(".site-3"),closeBtn=$(".close-port");refImage.hover(function(){$(this).toggleClass("port-mask-hover")}),viewMore.click(function(s){var a=$(this),t=a.parent(".port-mask-image"),i=(t.siblings(".port-mask-text"),t.parent().siblings().children(".port-mask-image"));winWidth>=775&&(a.css({opacity:"0"}),cv=refContainer.offset().top,changeView(cv),portMaskSpan.addClass("span-down"),t.css({"background-attachment":"fixed"}).addClass("image-remove-p"),a.hasClass("site-1-buttons")?(t.addClass("image-1-left"),p2.addClass("image-scale"),setTimeout(function(){p3.addClass("image-scale")},500)):a.hasClass("site-2-buttons")?(refImage.addClass("image-scale"),t.addClass("image-2-left"),setTimeout(function(){t.removeClass("image-scale")},500)):a.hasClass("site-3-buttons")&&(t.addClass("image-3-left"),setTimeout(function(){p2.addClass("image-3-other")},150),setTimeout(function(){p1.addClass("image-3-other-2")},400)),setTimeout(function(){t.addClass("button-switch"),i.addClass("image-no-display"),t.hasClass("p1")?e=sectionOne:t.hasClass("p2")?e=sectionTwo:e=sectionThree,dominesIn(e)},1550)),s.preventDefault()}),closeBtn.click(function(s){var a=$(this),t=a.parent(".port-mask-image"),i=(t.siblings(".port-mask-text"),t.parent().siblings().children(".port-mask-image"));t.hasClass("p1")?e=sectionOne:t.hasClass("p2")?e=sectionTwo:e=sectionThree,dominesOut(e),a.css({opacity:"0"}),a.hasClass("site-1-buttons")?(t.removeClass("image-1-left").addClass("image-resize"),p2.removeClass("image-scale"),p3.removeClass("image-scale")):a.hasClass("site-2-buttons")?(t.addClass("image-resize").removeClass("image-2-left"),refImage.removeClass("image-scale")):a.hasClass("site-3-buttons")&&(t.addClass("image-resize").removeClass("image-3-left"),setTimeout(function(){p2.removeClass("image-3-other")},250),setTimeout(function(){p1.removeClass("image-3-other-2")},500)),setTimeout(function(){t.removeClass("button-switch").removeClass("image-resize"),i.removeClass("image-no-display"),refImage.removeClass("image-remove-p"),viewMore.css({opacity:"1"}),a.css({opacity:"1"}),t.css({"background-attachment":"scroll"})},1500),setTimeout(function(){portMaskSpan.removeClass("span-down")},1750),s.preventDefault()});
var activeHbutton=$(".hidden-header-button");activeHbutton.click(function(t){$(this).toggleClass("active-h-button"),siteWrapper.toggleClass("overflow-visible")}),siteWrapper.scroll(function(){var t=$(this).scrollTop();activeHbutton.hasClass("active-h-button")&&750>t&&aboutMe.css({transform:"rotateZ("+t/15+"deg) rotateY("+t/10+"deg)"})});