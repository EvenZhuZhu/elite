/**
 * Created by 前端-张瑞康 on 2017/11/27.
 */
(function () {
  //右上角提示板点击事件
  $(".right").click(function () {
    $(".tishi").toggle();
  });
  
  //搜索框点击X删除内容
  $(".cancel").click(function () {
      $("input").val("");
  });
  
  //底部导航点击变色功能
  $(".nav>li").click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
  })
  
})();
