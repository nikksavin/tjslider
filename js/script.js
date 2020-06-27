$('.slider__left').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider__right',
    variableWidth: true,
  });

  $('.slider__right').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    asNavFor: '.slider__left',
    arrows: false
  });