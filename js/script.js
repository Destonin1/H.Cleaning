$(document).ready(function(){

$('.titles_slider_wrap').slick({ 
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    speed: 1500,
    autoplay: true,
  	autoplaySpeed: 5000
  });

$('.services_slider').slick({ 
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      },

      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      },

      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.projects_gallery').slick({ 
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.projects_menu_slider' // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию)
    });

    $('.projects_menu_slider').slick({ 
        slidesToShow: 5, 
        asNavFor: '.projects_gallery',
        variableWidth: true,
        focusOnSelect: true 
    });

$('.reviews_slider').slick({ 
    arrows: true,
    dots: false,
    nextArrow: '<button class="next1"></button>',
    prevArrow: '<button class="prev1"></button>',
    asNavFor: '.reviews_slider_navigation'
    });

    $('.reviews_slider_navigation').slick({
    	centerMode: true,
    	centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 10,
        arrows: false,
        asNavFor: '.reviews_slider',
        focusOnSelect: true 
    });

	$('.reviews_slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
		var slide = currentSlide + 1;
		$('.slide_numder').text('0' + slide);
	});
 
 
	$('.scroll_up').click(function() {
		$('body,html').animate({scrollTop:0},400);
	});

$('.menu_btn').click(function() {
  $('.header_menu').toggleClass('header_menu_active');
 });

$('.header_menu').click(function() {
	$(this).toggleClass('header_menu_active');
 });

$(".header_menu").on("click","a", function (event) {
        event.preventDefault();
        $('.header_menu').toggleClass('phone_menu_active');
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 80;
        $('body,html').animate({ scrollTop: top}, 500);
  })

$(window).scroll(function(){
	if ($(this).scrollTop() > 84 ){
		$('.header_menu_row').addClass("fixed");
		} 
	else {
		$('.header_menu_row.fixed').removeClass("fixed");
	}
});
    
});