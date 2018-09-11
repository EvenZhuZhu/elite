/**
 * Created by 前端-张瑞康 on 2017/11/27.
 */
(function () {
  //右上角提示板点击事件
  $(".right").click(function () {
    $(".tishi").toggle();
  });
  
  //综合 人气 删选 点击变色功能
  var $lis = $(".zhrqsx .list li");
  function render() {
    for (var i = 0; i < $lis.length; i++) {
      $lis.eq(i).click(function () {
        $(this).addClass('active').siblings("li").removeClass("active");
      })
    }
  }
  render();
  
  //点击人气更换背景图片
  $(".zhrqsx .list li.t3").click(function () {
    if( $(this).hasClass("t3-1")){
      $(this).removeClass("t3-1");
    }else {
      $(this).addClass("t3-1");
    }
  })
  
})();