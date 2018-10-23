// ajax通信

$(document).on('turbolinks:load', function(){
  function buildHTML(json){

    var html = `<div class="user_tweet__title">
                  <p class="tweet">つぶやき</p>
                  <a class="btn-modal" data-toggle= "modal" data-target= "#rule_modal" style="display:inline-block;text-decoration:underline;color:#00abb3;font-size:8px;" href="#">ルール</a>
                  <a class="button_cancel" style="margin-top:8px;margin-right:8px;" href="#" onclick="reload_this()">キャンセル</a>
                </div>
                <div class="user_tweet__inner">
                  <div class="user_tweet_edit__texterea">
                    <textarea class="user_tweet_edit__tweet" placeholder="今の気持ちをつぶやく" style="height:50px;" id="tweet"></textarea>
                    <div class="user_tweet_alertbox">
                    </div>
                  <div class="user_tweet_buttonbox">
                    <button class="button_update">更新</button>
                    <button class="button_delete" style="outline:none;">削除</button>
                  </div>
                </div>`
    return html;
  }

  function returnHTML(json){

    var html = `<div class="user_tweet__title">
                  <p class="tweet">つぶやき</p>
                  <a class="btn-modal" data-toggle= "modal" data-target= "#rule_modal" style="display:inline-block;text-decoration:underline;color:#00abb3;font-size:8px;" href="#">ルール</a>
                  <button class="button_tweet">編集</button>
                </div>
                <div class="user_tweet__inner">
                  <div class="user_tweet_texterea">
                    <p class="user_tweet_text" data-content_div_id="tweet"></p>
                  </div>
                </div>`
    return html;
  }



  $(document).on('click', ".button_tweet" ,function(json) {
    var tweet = $(".user_tweet_text").text();
    console.log(tweet)
    var html = buildHTML(json);
    $(".user_tweet").html(html);
    $('textarea[class="user_tweet_edit__tweet"]').val(tweet);

  });
  $(document).on('click', ".button_update" ,function(json) {
    var referense_column = $('.user_tweet_edit__tweet').attr('id');
    console.log(referense_column)

    var user_id = $('.title_a').data('user-id');
    console.log(user_id)

    var profvalue = $('.user_tweet_edit__tweet').val();

    var elem = $('[data-content_div_id='+ referense_column +']')

    var html = returnHTML(json);
    $(".user_tweet").html(html);
    $.ajax({
      url: '/users/' + user_id + '/user_edit',
      type: 'POST',
      data: {referense_column: referense_column, profvalue: profvalue},
      dataType: 'json',
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        console.error("ajax通信に失敗しました");
      },
      //ajax通信成功
      success : function(response) {
        console.warn("ajax通信に成功しました");
      }
    })
    .done(function(json){
    $('[data-content_div_id='+ referense_column +']').text(json.referense_column);
    })
  });
});

// ajax通信無し

$(document).on('turbolinks:load', function(){
  function returnHTML(json){

    var html = `<div class="user_tweet__title">
                  <p class="tweet">つぶやき</p>
                  <a class="btn-modal" data-toggle= "modal" data-target= "#rule_modal" style="display:inline-block;text-decoration:underline;color:#00abb3;font-size:8px;" href="#">ルール</a>
                  <button class="button_tweet">編集</button>
                </div>
                <div class="user_tweet__inner">
                  <div class="user_tweet_texterea">
                    <p class="user_tweet_text" data-content_div_id="tweet"></p>
                  </div>
                </div>`
    return html;
  }
  $(document).on('click', '.button_delete' ,function(e) {
    $('textarea.user_tweet_edit__tweet').val('');
    e.preventDefault();
  });
});

function reload_this(){
  location.reload();
}
