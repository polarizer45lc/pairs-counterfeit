$(document).on('turbolinks:load', function(){

  $('.btn-modal').on('click', function(e){
    $('#overlay').fadeIn();
    var id = $(this).data('id');
    $('.js-modal[data-id='+ id +']').fadeIn();
    e.preventDefault();
  });

  $('.close, #overlay').on('click', function(){
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
  });
});

$(function () {
  $("[data-toggle=popover]").popover()
})
