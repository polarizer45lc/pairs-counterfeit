$(function(){
  $('.btn-modal').on('click', function(e){
    e.preventDefault();
    $('#overlay').fadeIn();
    $('#modal').fadeIn();
  });

  $('.close').on('click', function(){
    $('#overlay').fadeOut();
    $('#modal').fadeOut();
  });
  return false;
});



// $(function(){
//   var fix    = $("#modal");             //メニューオブジェクトを格納
//   var fixTop = fix.offset().top;             //メニューの縦座標を格納
//   $(window).scroll(function () {             //スクロールが発生したら開始
//     if($(window).scrollTop() >= fixTop) {    //スクロール時の縦座標がメニューの縦座標以上なら…
//       fix.css("position","fixed");           //メニューに position:fixed 付与
//       fix.css("top","50px");                    //メニューに top:0 付与
//     } else {
//       fix.css("position","");                //メニューの position を空に
//       fix.css("top","");                     //メニューの top を空に
//     }
//   });
// });
