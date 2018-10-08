$(document).on("turbolinks:load", function(){

  var html = `
    <div class="box__search-form">
      test
    </div>`

  $("#btn_search-form").click(function(e){
    e.preventDefault();
    $("body").append(html);

    $("#filter").click(function(){
      $(".box__serch-form").remove();
    });
  });

});
