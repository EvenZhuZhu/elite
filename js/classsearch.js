/**
 * Created by 前端-张瑞康 on 2017/11/27.
 */
(function () {
  //底部导航点击变色功能
  $(".nav>li").click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
  })
  
})();
