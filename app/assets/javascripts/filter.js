$(function(){
  $(".filterTrigger").click(function(e){
    e.preventDefault();
    if(!document.getElementById("filter")){
      $("body").append("<div id=\"filter\"></div>");
    }else{
      $("#filter").show();
    }
    $("#filter").click(function(){
      $(this).hide();
    });
  });
});
