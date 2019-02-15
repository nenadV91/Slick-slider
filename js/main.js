  const slider = $('#slick').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true
  })

  slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
    console.log(currentSlide);
  });