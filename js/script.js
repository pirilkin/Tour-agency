$(document).ready(function () {
  
  $('.article-slider').slick({
    dots: false,
    autoplay : true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    slidesToShow: 1,
  
    prevArrow: '<button class="left-slider__prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="left-slider__next"><i class="fa fa-angle-right"></i></button>',
  });
  
  $('.third-main__top-slider').slick({
    dots: false,
    autoplay : true,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button class="main-slider__prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="main-slider__next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '0px',
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          // centerPadding: '0px',
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 576,
        settings: {
            arrows: false,
        //   arrows: false,
        //   centerMode: true,
          // centerPadding: '0px',
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '0px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 280,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '0px',
          slidesToShow: 2,
        }
      }
    ]
  });
});
