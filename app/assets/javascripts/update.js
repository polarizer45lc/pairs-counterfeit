
$(function(){
  function profAppear(profile){
    var html = `
               <dd aria-hidden="false" class="detail_item_value" data-content_div_id= ${それぞれの参照カラムに合わせたid} data-toggle="popover" data-original-title title>
               ${それぞれの参照カラムに合わせたバリュー値}
               </dd>`
  }
  $('#profile_update').on('click',function(e){
  	var referense_column = $('#blood_type').attr('id');
    console.log(referense_column)
    var profvalue = $('#blood_type').text();
  	console.log(profvalue);
  	var user_id = $('#blood_type').data('user-id');
  	$.ajax({
  	  url:'/users/' + user_id + '/user_edit',
  	  type:'GET',
  	  data:{referense_column: referense_column, profvalue: profvalue},
      dataType: 'json',
  	  //ajax通信エラー
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        console.log("ajax通信に失敗しました");
      },
      //ajax通信成功
      success : function(response) {
        console.log("ajax通信に成功しました");
      }
  	});
    .done(function(profile){
      var item = profAppear(profile);

    })
  })
})

$(function(){
  $(document).on('click','.button_tweet',function(e){
  	var referense_column = $(this).siblings('.popup_title').attr('id');
    console.log(referense_column)
    var profvalue = $(this).siblings('table').find('.select_custom').text();
  	console.log(profvalue);
  	var user_id = $('.title_a').data('user-id');
    console.log(user_id)
    var elem = $('[data-content_div_id="brother"]')
    console.log(elem.text())
  	$.ajax({
  	  url:'/users/' + user_id + '/user_edit',
  	  type:'POST',
  	  data:{referense_column: referense_column, profvalue: profvalue},
      dataType: 'json',
  	  //ajax通信エラー
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        console.log("ajax通信に失敗しました");
      },
      //ajax通信成功
      success : function(response) {
        console.log("ajax通信に成功しました");
      }
  	})
    .done(function(json){
    $('[data-content_div_id='+ referense_column +']').text(json.referense_column)
    })
    .fail(function(json){
      alert('error')
    })
  })
})

