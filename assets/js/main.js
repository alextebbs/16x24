$(document).ready(function () {
  $(".page-carousel").carouFredSel({
    items: {
      visible: {
        min: 1,
        max: 6
      },
      width: 125,
    },
    direction   : "left",
    responsive  : true,
    scroll: {
      items       : 1,
      easing      : "swing",
      duration    : 500,
      pauseOnHover: true
    },
    next: {
      button    : '.page-carousel-next'
    },
    prev: {
      button    : '.page-carousel-prev'
    }
  });

  $('.info-icon').on('click', function(e) {
    e.preventDefault();
    $('.info').toggleClass('is-active');
  });
});

