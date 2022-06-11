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

      breakpoint: 770,
      settings: {
        slidesToShow: 2
      }
    },

    {

      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }

  ]
});

$('.projects_gallery').slick({ 
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.projects_menu_slider'
    });

    $('.projects_menu_slider').slick({ 
        slidesToShow: 5, 
        asNavFor: '.projects_gallery',
        variableWidth: false,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 400,
            settings: {
              variableWidth: true
            }
          }
      ]
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
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      speed: 10,
      arrows: false,
      asNavFor: '.reviews_slider',
      focusOnSelect: true,
      responsive: [
    {
      breakpoint: 497,
      settings: {
        slidesToShow: 5,
        speed: 200
      }
    }
  ]
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
        top = $(id).offset().top - 150;
        $('body,html').animate({ scrollTop: top}, 500);
})

$(".link_to_section").on("click", function (event) {
    event.preventDefault();
    $('.header_menu').toggleClass('phone_menu_active');
    var id  = $(this).attr('href'),
    top = $(id).offset().top - 150;
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

const form = document.getElementById('form_block');
const modal = document.getElementsByClassName('modal')[0];
const modalWrap = document.getElementsByClassName('modal__wrap')[0];

form.addEventListener('submit', event => {
  event.preventDefault();
  const title = document.getElementsByClassName('modal__title')[0];
  const content = document.getElementsByClassName('modal__content')[0];
  title.textContent = "Confirm";
  content.textContent = "Thank you for choosing us!";
  modal.style.transform = 'scale(1)';
  modalWrap.classList.add('modal__wrap-active');
})

const closeBtns = document.getElementsByClassName('modal_close');

for (let i = 0; i < closeBtns.length;i++) {
  closeBtns[i].addEventListener('click', event => {
    modal.style.transform = 'scale(0)';
    modalWrap.classList.remove('modal__wrap-active');
  })
}
    
});