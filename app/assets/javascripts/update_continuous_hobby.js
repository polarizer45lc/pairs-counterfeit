$(function(){
  $(document).on('click','.button_tweet3',function(e){
  var user_id = $('.title_a').data('user-id');
  var insertion_item = $(this).siblings('.popup_title').attr('id')
  var selects_name = $(this).siblings('textarea').attr('class');
  var referense_column1 = $(this).siblings('textarea').attr('id')
  var pre_profvalue1 = $(this).siblings('textarea[id='+referense_column1+']').val()
  var profvalue1 = pre_profvalue1.replace(/\s+/g, "")
  // console.log(referense_column1)
  // console.log(profvalue1)
  if($('textarea[class=' + selects_name + ']').length == 2 ){
  $.ajax({
    url:'/users/' + user_id + '/continuous_user_edit',
　  type:'POST',
    dataType:'json',
    data:{referense_column1: referense_column1 ,profvalue1: profvalue1 }
    })
  .done(function(json){
    if(json.referense_column1  == '' ){
    $('[data-content_div_id='+ insertion_item +']').text('選択してください')
    }
    else{
    $('[data-content_div_id='+ insertion_item +']').text(json.referense_column1)
    }
  })
  .fail(function(json){
    alert('error')
  })
  }

  if($('textarea[class=' + selects_name + ']').length == 3 ){
  var referense_dom2 = $(this).prev().prev().prev()
  var referense_column2 = referense_dom2.attr('id')
  var pre_profvalue2 = referense_dom2.val()
  var profvalue2 = pre_profvalue2.replace(/\s+/g, "")
  $.ajax({
  	url:'/users/'+ user_id +'/continuous_user_edit',
  	type:'POST',
  	dataType:'json',
  	data:{referense_column1: referense_column1, profvalue1: profvalue1, referense_column2: referense_column2, profvalue2: profvalue2}
  })
  .done(function(json){
    if(json.referense_column1 == '' && json.referense_column2 == ''){
    $('[data-content_div_id='+ insertion_item +']').text('選択してください')
    }
    else{
    $('[data-content_div_id='+ insertion_item +']').text(json.referense_column1 + json.referense_column2)
    }
  })
  .fail(function(json){
    alert('error')
  })
   }

  if($('textarea[class=' + selects_name + ']').length == 4){    //可読性・拡張性優先のためif/elseでなくifを二つ作りました。
  var referense_dom2 = $(this).prev().prev().prev().prev().prev()
  var referense_column2 = referense_dom2.attr('id')
　var pre_profvalue2 = referense_dom2.val()
  var profvalue2 = pre_profvalue2.replace(/\s+/g, "")
  var referense_dom3 = $(this).prev().prev().prev()
  var referense_column3 = referense_dom3.attr('id')
  var pre_profvalue3 = referense_dom3.val()
  var profvalue3 = pre_profvalue3.replace(/\s+/g, "")
  $.ajax({
    url:'/users/' + user_id + '/continuous_user_edit',
    type: 'POST',
   	dataType:'json',
   	data:{referense_column1: referense_column1, profvalue1: profvalue1, referense_column2: referense_column2, profvalue2: profvalue2, referense_column3: referense_column3, profvalue3: profvalue3}
   })
  .done(function(json){
    if( json.referense_column1 == '' && json.referense_column2 == '' && json.referense_column3 == ''){
      $('[data-content_div_id='+ insertion_item +']').text('選択してください')
    }
    else{
    $('[data-content_div_id='+ insertion_item +']').text(json.referense_column1 + json.referense_column2 + json.referense_column3)
    }
  })
  .fail(function(json){
   	alert('error')
  })
   }
  })
})

//三つ出した後にpopupを消すと追加ボタンがない！

