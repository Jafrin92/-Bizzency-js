// preloader
setTimeout(function () {
  $(".preloader").fadeOut();
}, 3000);

// menu
let mainMenu = $(".main_menu").offset().top;

$(window).scroll(function () {
  let ScrollWin = $(window).scrollTop();
  if (ScrollWin > mainMenu) {
    $(".main_menu").addClass("menu_fixed");
  } else {
    $(".main_menu").removeClass("menu_fixed");
  }
  //scroll
  if (ScrollWin > 4100) {
    $(".scroll").fadeIn(1000);
  } else {
    $(".scroll").fadeOut(1000);
  }
});
//scroll
$(".scroll").on("click", function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

//Search
$(".search").click(function () {
  $(".pop_up").show();
});

$(".close").click(function () {
  $(".pop_up").hide();
});

//plugin add
$(function ($) {
  //banner js
  $("#banner").slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    speed: 3000,
  });
  //services js
  $(".services_sliders").slick({
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    speed: 3000,
  });
  //portfolio js
  $(".portfolio_sliders").slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 3000,
  });
  //testimonial js
  $(".testimonial_sliders").slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 2,
    autoplaySpeed: 3000,
    speed: 3000,
  });
  //portfolio js
  $(".latest_blogs_sliders").slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 3000,
  });
  //Banner video
  new VenoBox({
    selector: ".icon_play",
    autoplay: true,
  });
  //Filckr Stream js
  new VenoBox({
    selector: ".filckr",
    spinner: "swing",
  });
  //Wow js
  new WOW().init();

  //skill bar
  $(".photoshop_bar").LineProgressbar({
    percentage: 90,
    fillBackgroundColor: "#2a4896",
    radius: "20px",
    height: "10px",
  });
  $(".illustrator_bar").LineProgressbar({
    percentage: 85,
    fillBackgroundColor: "#5d3b15",
    radius: "20px",
    height: "10px",
  });
  $(".dreamweaver_bar").LineProgressbar({
    percentage: 75,
    fillBackgroundColor: "#344a1f",
    radius: "20px",
    height: "10px",
  });
  $(".after_bar").LineProgressbar({
    percentage: 80,
    fillBackgroundColor: "#392960",
    radius: "20px",
    height: "10px",
  });
});
