$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1000,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../img/ico/prev.png" alt="lft"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../img/ico/next.png" alt="lft"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
