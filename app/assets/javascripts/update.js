$(function(){
  $(document).on('click','.button_profile',function(e){
  	var referense_column = $(this).siblings('.popup_title').attr('id');
    console.log(referense_column)
    var profvalue = $(this).siblings('table').find('.select_custom').text();
  	console.log(profvalue);
  	var user_id = $('.title_a').data('user-id');
    console.log(user_id)
    var elem = $('[data-content_div_id='+ referense_column +']')
    if(referense_column == 'height' || referense_column == 'annual_income'){
      profvalue = parseFloat(profvalue)
    }
  	$.ajax({
  	  url:'/users/' + user_id + '/user_edit',
  	  type:'POST',
  	  data:{referense_column: referense_column, profvalue: profvalue},
      dataType: 'json'
  	})
    .done(function(json){
    if(referense_column == 'height'){
      $('[data-content_div_id='+ referense_column +']').text(json.referense_column + 'cm')
    }
    else if(referense_column == 'annual_income'){
      $('[data-content_div_id='+ referense_column +']').text(json.referense_column + '万円')
    }
    else{
      $('[data-content_div_id='+ referense_column +']').text(json.referense_column)
    }
    })
    .fail(function(json){
      alert('error')
    })
  })
})

