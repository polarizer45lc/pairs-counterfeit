$(function(){
  var user_id = $('.title_a').data('user-id');
  $(document).on('click','.button_profile_character',function(){
    var checked_items = $('input[class="character"]:checked').map(function(){
      return $(this).attr('id')
    }).get();
    console.log(checked_items)
    $.ajax({
      url:'/users/'+ user_id + '/character_update',
      type: 'POST',
      data: {user_id: user_id, checked_items : checked_items},
      dataType: 'json'
    })
    .done(function(json){
      console.log(json.character_arry)
      $('[data-content_div_id=character]').text(json.character_arry)
    })
  })
})

// 現時点での問題
// 入力した値しか表示されない
// 解決案
// 保存済みの値に対してはチェックボックスをcheckedにすべき

