$(document).ready(function () {
  $(".slider-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,

    // appendDots: ".move",
    prevArrow: ".arrow.fa-arrow-left-long",
    nextArrow: ".arrow.fa-arrow-right-long",
  });
});
