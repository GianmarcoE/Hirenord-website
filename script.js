/* global $ */

/* eslint-env jquery */

$(document).ready(function() {
    
    /* sticky */
    
    $('.js--section-features').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px'
	});
    
    /*main scroll*/
    
    $('.js-scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });
    
     $('.js-scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
    
    $('.js-scroll-to-industries').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-industries').offset().top},1000);
    });
    
    $('.js-scroll-to-steps').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-steps').offset().top},1000);
    });
    
    $('.js-scroll-to-form').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top},1000);
    });
    
    
    /*navigation scroll*/
    
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* animation on scroll */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
/* mobile nav */

    $('.js--nav-icon, .js--main-nav a, .logo-small').click(function(element) {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        var clicked = element.target.className;
        
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo-small')
            return;
        
        if ($(window).width() < 768) {
            nav.slideToggle(200);
        }
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('icon-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
    $(window).resize(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        if ($(window).width() > 767) {
            nav.css("display", "block");
            icon.addClass('icon-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

});