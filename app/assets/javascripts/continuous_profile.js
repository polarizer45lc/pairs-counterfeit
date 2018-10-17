$(function(){
  var cloneCount = 2
  $(document).on("click", '.add_form_btn2', function(e){
  e.preventDefault();
  var hoge = $(this).siblings('table');
  var referense_column = $(this).prev().prev().find('td').attr('select_form_id');
  var add_form = $(this).prev().prev().clone(true).attr('id', 'language' + cloneCount++ );
  $(this).before(add_form);
  $(this).before(remove_btn);
  if ( add_form.prev().prop("tagName") == 'SPAN'){
    add_form.prev().css('visibility','hidden')
  }
  if($('td[select_form_id=' + referense_column + ']').length >= 4 ){   //表示テーブルが三つあるなら追加ボタンを隠す(modalの仕様上、表示されていない時も１としてカウントされているので４と記述)
     $('.add_form_btn2').hide()
  }
   });
  var remove_btn = `
                    <span><a class="remove_form_btn2">×</a>
                    <br/></span>`

　$(document).on("click", '.remove_form_btn2', function(e){
  cloneCount = cloneCount - 1
  var referense_column = $(this).parent().siblings('table').find('td').attr('select_form_id');
  // console.log($(this).parent().prev().prev().prop("tagName"))
  if ($(this).parent().prev().prev().prop("tagName") == 'SPAN'){
    $(this).parent().prev().prev().css('visibility', 'visible')
  }
  $(this).parent().prev().remove()
  $(this).parent().remove()
  if($('td[select_form_id=' + referense_column + ']').length <= 3 ){
    $('.add_form_btn2').show()
  }
　})
})