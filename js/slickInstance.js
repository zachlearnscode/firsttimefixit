$(document).ready(function(){
  $('.slider').slick({
    pauseOnHover:true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe:true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});