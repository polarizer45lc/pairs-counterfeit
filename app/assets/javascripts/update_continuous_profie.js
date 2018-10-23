$(function(){
  $(document).on('click','.button_profile2',function(e){
  var user_id = $('.title_a').data('user-id');
  console.log(user_id);
  var insertion_item = $(this).siblings('.popup_title').attr('id')
  var selects_name = $(this).siblings('table').find('td').attr('select_form_id');
  var referense_column1 = $(this).siblings('table').attr('id')
  var profvalue1 = $(this).siblings('table[id='+referense_column1+']').find('.select_custom').text()
  console.log(referense_column1)
  console.log(profvalue1)
  $.ajax({
  	url:'/users/' + user_id + '/continuous_user_edit',
  	type:'POST',
  	dataType:'json',
  	data:{referense_column1: referense_column1 ,profvalue1: profvalue1 }
  })
  .done(function(json){
  $('[data-content_div_id='+ insertion_item +']').text(json.referense_column1)
  })
  .fail(function(json){
  	alert('error')
  })

  if($('td[select_form_id=' + selects_name + ']').length == 3 ){
  var referense_dom2 = $(this).prev().prev().prev()
  var referense_column2 = referense_dom2.attr('id')
  var profvalue2 = referense_dom2.find('.select_custom').text()
  console.log(referense_column2)
  console.log(profvalue2)
  $.ajax({
  	url:'/users/'+ user_id +'/continuous_user_edit',
  	type:'POST',
  	dataType:'json',
  	data:{referense_column1: referense_column1, profvalue1: profvalue1, referense_column2: referense_column2, profvalue2: profvalue2}
  })
  .done(function(json){
  $('[data-content_div_id='+ insertion_item +']').text(json.referense_column1 + json.referense_column2)
  })
  .fail(function(json){
  	alert('error')
  })
  }

  if($('td[select_form_id=' + selects_name + ']').length == 4){    //可読性・拡張性優先のためif/elseでなくifを二つ作りました。
  var referense_dom2 = $(this).prev().prev().prev().prev().prev()
  var referense_column2 = referense_dom2.attr('id')
  var profvalue2 = referense_dom2.find('.select_custom').text()
  var referense_dom3 = $(this).prev().prev().prev()
  var referense_column3 = referense_dom3.attr('id')
  var profvalue3 = referense_dom3.find('.select_custom').text()
  console.log(referense_column2)
  console.log(profvalue2)
  console.log(referense_column3)
  console.log(profvalue3)
  $.ajax({
  	url:'/users/' + user_id + '/continuous_user_edit',
  	type: 'POST',
  	dataType:'json',
  	data:{referense_column1: referense_column1, profvalue1: profvalue1, referense_column2: referense_column2, profvalue2: profvalue2, referense_column3: referense_column3, profvalue3: profvalue3}
  })
  .done(function(json){
  $('[data-content_div_id='+ insertion_item +']').text(json.referense_column1 + json.referense_column2 + json.referense_column3)
  })
  .fail(function(json){
  	alert('error')
  })
  }
  })
})