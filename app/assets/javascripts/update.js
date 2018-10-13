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