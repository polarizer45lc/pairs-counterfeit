$(document).on('turbolinks:load', function(){
  function buildHTML(message){

    var html = `<p class="introduction_title">
                  <span class="title_b">自己紹介文</span>
                  <a class="button_cancel">キャンセル</a>
                </p>
                <p class="introduction_note" style="background:#FFFFFF;">
                  <textarea class="user_tweet_edit__tweet" placeholder="自己紹介" style="width:100%;height:100px;"></textarea>
                </p>
                <div class="introduction_text" style="height:30px;margin:0;">
                  <a class="button_update">更新</a>
                  <a class="button_delete">削除</a>
                </div>`
    return html;
  }
  $(document).on('click', ".button_introduction" ,function(e) {
    var html = buildHTML(e);
    $(".mypage_introduction").html(html);
    e.preventDefault();
  });

});

