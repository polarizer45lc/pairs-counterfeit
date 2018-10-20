$(document).on('turbolinks:load', function(){
    var submit_button = $('#pairs_submit');
    submit_button.prop('disabled', true);

  $("#check_mark").on("click", function(){
  if ($(this).hasClass("check_on")){
        $(this).removeClass("check_on");
        submit_button.removeClass("submit_on").prop('disabled', true);
  } else {
        $(this).addClass("check_on");
        submit_button.addClass("submit_on").prop('disabled', false);
         }
  });
});


  // function buildHTML(){

  //   var html = `
  //               <img class="check_mark_on" src="/assets/mark-on.png" alt="mark-on">`

  //   return html;
  // }

  // function returnHTML(){

  //   var html = `
  //               <img class="check_mark_off" src="/assets/mark-off.png" alt="mark-off">`

  //   return html;
  // }
  // $(document).on('click', ".check_mark_off", function(e)
  //   {
  //     $(".check_mark_off").remove();
  //       var html = buildHTML(e);
  //       $(".mark_box").append(html)
  //       e.preventDefault();
  //   });
  // $(document).on('click', ".check_mark_on", function(e)
  //   {
  //     $(".check_mark_on").remove();
  //       var html = returnHTML(e);
  //       $(".mark_box").append(html)
  //       e.preventDefault();
  //   });







