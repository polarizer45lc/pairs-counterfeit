$(function(){
  var cloneCount = 2
  $(document).on('click','.add_form_btn3',function(e){
  	var referense_column1 = $(this).prev().prev().attr('id')
  	console.log(referense_column1)
  	var add_form = $(this).prev().prev().clone(true).attr('id', 'hobby' + cloneCount++ )
  	$(this).before(add_form)
  	$(this).before(remove_btn);
  	if ( add_form.prev().prop("tagName") == 'SPAN'){
    add_form.prev().css('visibility','hidden')
    }
    if($('textarea[class=for_hobby]').length >= 4 ){   //表示テーブルが三つあるなら追加ボタンを隠す(modalの仕様上、表示されていない時も１としてカウントされているので４と記述)
     $('.add_form_btn3').hide()
    }
  })
  var remove_btn = `
                    <span><a class="remove_form_btn3">×</a>
                    <br/></span>`

  $(document).on('click', '.remove_form_btn3', function(e){
    cloneCount = cloneCount - 1
    if ($(this).parent().prev().prev().prop("tagName") == 'SPAN'){
    $(this).parent().prev().prev().css('visibility', 'visible')
    }
    $(this).parent().prev().remove()
    $(this).parent().remove()
    if($('textarea[class=for_hobby]').length <= 3 ){
    $('.add_form_btn3').show()
    }
  })
})