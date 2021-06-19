$('.phone-carousel').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 980,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 641,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 541,
      settings: {
        arrows: false,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
      }
    },
    {
      breakpoint: 361,
      settings: {
        arrows: false,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
      }
    },
    {
      breakpoint: 280,
      settings: {
        arrows: false,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
      }
    },
  ]
});