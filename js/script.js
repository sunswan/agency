// console.clear();
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    adaptiveHeight: true,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
    verticalSwiping: true,
    speed: 1000,
    easing: `ease`,
    infinite: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }

      }
    ]
  });

});


$(function () {
  $('.menu-btn').click(function () {
    $('#navy').slideToggle("500, linear");
    $('body').toggleClass('overlay');
  });
});