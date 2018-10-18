$(document).attr('turbolinks:load', function(){
  $(function(){
    $("#user_sex_1").on("click", function(){
      $(".sex_choise1").css("color","black");
      $(".sex_choise2").css("color","#cbced0")
    });
    $("#user_sex_2").on("click", function(){
      $(".sex_choise2").css("color","black");
      $(".sex_choise1").css("color","#cbced0");
    });
  });
});













  // if($("#user_sex_1").on('click')){
  //   $("input:radio_button[class= 'radio2']").attr({'disabled':false});
  // }else{
  //   ($("#user_sex_2").on('click'))
  //     $("input:radio_button[class= 'radio1']").attr({'disabled':false});
  // }
