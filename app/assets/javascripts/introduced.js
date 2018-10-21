// ajax通信

$(document).on('turbolinks:load', function(){
  function buildHTML(json){

    var html = `<p class="introduction_title">
                  <span class="title_b">自己紹介文</span>
                  <button class="button_introdution_cancel">キャンセル</button>
                </p>
                <p class="introduction_note">
                  自己紹介文を充実させると、
                  <em>マッチング率10倍UP!</em>
                </p>
                <p class="introduction_note" style="background:#FFFFFF;">
                  <textarea class="user_introduction_edit__text" placeholder="自己紹介" style="width:100%;height:100px;" id="introduction"></textarea>
                </p>
                <div class="introduction_text" style="height:30px;margin:0;">
                  <button class="button_save">保存</button>
                </div>`
    return html;
  }

  function returnHTML(json){

    var html = `<p class="introduction_title">
                  <span class="title_b">自己紹介文</span>
                  <button class="button_introduction">編集</button>
                </p>
                <p class="introduction_note">
                  自己紹介文を充実させると、
                  <em>マッチング率10倍UP!</em>
                </p>
                <p class="introduction_text" data-content_div_id="introduction">

                </p>`
    return html;
  }
  $(document).on('click', ".button_introduction" ,function(json) {
    var introduction = $(".introduction_text").text();
    console.log(introduction)
    var html = buildHTML(json);
    $(".mypage_introduction").html(html);
    $('textarea[class="user_introduction_edit__text"]').val(introduction);
  });
  $(document).on('click', ".button_save" ,function(json) {
    var referense_column = $('.user_introduction_edit__text').attr('id');
    console.log(referense_column)

    var user_id = $('.title_a').data('user-id');
    console.log(user_id)

    var profvalue = $('.user_introduction_edit__text').val();
    console.log(profvalue);

    var elem = $('[data-content_div_id='+ referense_column +']')

    var html = returnHTML(json);

    $(".mypage_introduction").html(html);
    $.ajax({
      url: '/users/' + user_id + '/user_edit',
      type: 'POST',
      data: {referense_column: referense_column, profvalue: profvalue},
      dataType: 'json',
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        console.log("ajax通信に失敗しました");
      },
      //ajax通信成功
      success : function(response) {
        console.log("ajax通信に成功しました");
      }
    })
    .done(function(json){
    $('[data-content_div_id='+ referense_column +']').text(json.referense_column);
    })
  })
});

// ajax通信無し

$(document).on('turbolinks:load', function(){
  function returnHTML(json){

    var html = `<p class="introduction_title">
                  <span class="title_b">自己紹介文</span>
                  <button class="button_introduction">編集</button>
                </p>
                <p class="introduction_note">
                  自己紹介文を充実させると、
                  <em>マッチング率10倍UP!</em>
                </p>
                <p class="introduction_text" data-content_div_id="introduction">

                </p>`
    return html;
  }
  $(document).on('click', ".button_introdution_cancel" ,function(json) {
    var html = returnHTML(json);
    $(".mypage_introduction").html(html);
  });
});
