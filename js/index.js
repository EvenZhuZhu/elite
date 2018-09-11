(function () {
  //banner轮播功能
  var swiper = new Swiper('.swiper-container', {
    initialSlide: 0,
    direction: 'horizontal',
    autoplay: 2000,
    loop: true,
    pagination: '.swiper-pagination',
    autoplayDisableOnInteraction: false
  });
  
  //底部导航点击变色功能
  $(".nav>li").click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
  })
  
})();



