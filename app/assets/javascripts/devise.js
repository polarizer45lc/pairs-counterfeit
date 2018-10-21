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
