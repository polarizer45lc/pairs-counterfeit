$(function(){
  var cloneCount = 2
  $(document).on("click", '.add_form_btn', function(e){
  e.preventDefault();
  var hoge = $(this).siblings('table');
  // console.log(hoge);
  var referense_column = $(this).siblings('table').attr('id');
  // console.log(referense_column)
  var add_form = $(this).prev().prev('table').clone(true).attr('id', 'language' + cloneCount++ );
  $(this).before(add_form);
  $(this).before(remove_btn);
  // console.log(add_form.prev().prop("tagName"))
  if ( add_form.prev().prop("tagName") == 'SPAN'){
    add_form.prev().css('visibility','hidden')
  }
  if($('.languages').length >= 4 ){   //表示テーブルが三つあるなら追加ボタンを隠す(modalの仕様上、表示されていない時も１としてカウントされているので４と記述)
    $('.add_form_btn').hide()
  }
  });
  var remove_btn = `
                    <span><a class="remove_form_btn">×</a>
                    <br></span>`

　$(document).on("click", '.remove_form_btn', function(e){
  cloneCount = cloneCount - 1
  // console.log($(this).parent().prev().prev().prop("tagName"))
  if ($(this).parent().prev().prev().prop("tagName") == 'SPAN'){
    $(this).parent().prev().prev().css('visibility', 'visible')
  }
  $(this).parent().prev().remove()
  $(this).parent().remove()
  if($('.languages').length <= 3 ){
    $('.add_form_btn').show()
  }
　})
})