$(document).ready(function(){

  //開啟手機選單
  $(".menu").click(function(){
      $(".mb_menu").fadeToggle();
      $(this).toggleClass("active");
  });

  //卡片slider
  if (typeof window.Swiper === 'function') { //prevent js error in pricing page
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      spaceBetween: 24,
      slidesPerView: 1,
      /* loop: true, */
      /* autoplay: {
        delay: 5000,
      }, */
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      },
      
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      // Navigation arrows
      /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },*/
      
    });
  }

  //回到頂端
  $(".top").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });

  //開啟問答
  $("#headingOne").click(function(){
    $("#collapseOne").slideToggle();
    $(this).toggleClass("active");
  });

  $("#headingTwo").click(function(){
    $("#collapseTwo").slideToggle();
    $(this).toggleClass("active");
  });

  $("#headingThree").click(function(){
    $("#collapseThree").slideToggle();
    $(this).toggleClass("active");
  });

  $("#headingFour").click(function(){
    $("#collapseFour").slideToggle();
    $(this).toggleClass("active");
  });

  $("#headingFive").click(function(){
    $("#collapseFive").slideToggle();
    $(this).toggleClass("active");
  });

  $(".col_btn").click(function(){
    $(this).toggleClass("collapsed");
  });

});