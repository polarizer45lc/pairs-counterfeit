$(document).on('turbolinks:load', function(){
  $(document).on('submit', "#btn__zone" ,function(e) {
    $(this).html('<a class="love_btn btn__pink" href="#">いいね済み</a>');
      console.log(this)
    e.preventDefault();
  });
});
