(function () {
  //左上角点击回退事件
  $(".return_button").click(function () {
    // window.history.back();
    window.history.go(-1);
  });
  
  //右上角提示板点击事件
  $(".news").click(function () {
    $(".tishi").toggle();
  });
  
  //商品详情和品牌寓意切换功能
  $(".detail-h").click(function () {
    $(this).addClass("active").siblings(".moral-h").removeClass("active");
    $(".detail-c").show().siblings(".moral-c").hide();
  });
  
  $(".moral-h").click(function () {
    $(this).addClass("active").siblings(".detail-h").removeClass("active");
    $(".moral-c").show().siblings(".detail-c").hide();
  });
})();



