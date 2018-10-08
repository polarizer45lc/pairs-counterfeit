$(document).on("turbolinks:load", function(){

  function buildHTML(){
    var html = `
      <div class=".box__search-form">
        test
      </div>
      `
  }

  $("#btn_search-form").click(function(){
    $("body").append(html);
  })

})
