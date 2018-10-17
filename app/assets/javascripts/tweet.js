$(document).on('turbolinks:load', function(){
  function buildHTML(){
    var html = `<div class="user_tweet__title">
                  <p class="tweet">つぶやき</p>
                  <a class="button_cancel" style="margin-top:8px;margin-right:8px;">キャンセル</a>
                </div>
                <div class="user_tweet__inner">
                  <div class="user_tweet_edit__texterea">
                    <textarea class="user_tweet_edit__tweet" placeholder="今の気持ちをつぶやく" style="height:50px;"></textarea>
                    <div class="user_tweet_alertbox">
                      <p class="user_tweet_note">あと全角24文字です</p>
                      <div class="user_tweet_buttonbox">
                        <a class="button_update">更新</a>
                        <a class="button_delete">削除</a>
                      </div>
                    </div>
                  </div>
                </div>`
    return html;
  }

  function returnHTML(){
    var html = `<div class="user_tweet__title">
                  <p class="tweet">つぶやき</p>
                  <a class="btn-modal" data-id="rule_modal" style="display:inline-block;text-decoration:underline;color:#00abb3;font-size:8px;" href="#">ルール</a>
                  <a class="button_tweet" href="#">編集</a>
                </div>
                <div class="user_tweet__inner">
                  <div class="user_tweet_texterea">
                    <p class="user_tweet_text"></p>
                    <p class="user_tweet_note">
                      あと３回まで変更できます。(１日３回まで)
                    </p>
                  </div>
                </div>`
    return html;
  }
  $(document).on('click', ".button_tweet" ,function(e) {
    var html = buildHTML();
    $(".user_tweet").html(html);
    e.preventDefault();
  });
  $(document).on('click', ".button_cancel" ,function(e) {
    var html = returnHTML();
    $(".user_tweet").html(html);
    e.preventDefault();
  });
});


// %p.user_tweet_alert
//         /     /   *つぶやきは全角4文字以上入力してください。
//         /     .user_tweet_buttonbox
//         /       =link_to "更新", "#" , class: "button_update"
//         /       =link_to "削除", "#" , class: "button_delete"
