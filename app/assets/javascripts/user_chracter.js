$(function(){
  $(document).on("click", '.for_character', function(e){
  var status = $(this).siblings().prop('checked');
  if (status == true) {
    $(this).siblings().prop('checked',false);
  } else {
    $(this).siblings().prop('checked',true);
  }
  })
})