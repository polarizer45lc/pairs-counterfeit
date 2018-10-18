$(document).on('turbolinks:load', function(){
  function buildHTML(){

    var html = `<p class="introduction_title">
                  <span class="title_b">自己紹介文</span>
                  <a class="button_cancel">キャンセル</a>
                </p>
                <p class="introduction_note">
                  自己紹介文を充実させると、
                  <em>マッチング率10倍UP!</em>
                </p>
                <p class="introduction_note" style="background:#FFFFFF;">
                  <textarea class="user_tweet_edit__tweet" placeholder="自己紹介" style="width:100%;height:100px;"></textarea>
                </p>
                <div class="introduction_text" style="height:30px;margin:0;">
                  <a class="button_save" href="#">保存</a>
                </div>`
    return html;
  }

  function returnHTML(){

    var html = `<p class="introduction_title">
                  <span class="title_b">自己紹介文</span>
                  <a class="button_introduction" href="#">編集</a>
                </p>
                <p class="introduction_note">
                  自己紹介文を充実させると、
                  <em>マッチング率10倍UP!</em>
                </p>
                <p class="introduction_text">
                  自己紹介文はまだ入力されておりません。
                </p>`
    return html;
  }
  $(document).on('click', ".button_introduction" ,function(e) {
    var html = buildHTML(e);
    $(".mypage_introduction").html(html);
    e.preventDefault();
  });
  $(document).on('click', ".button_cancel" ,function(e) {
    var html = returnHTML();
    $(".mypage_introduction").html(html);
    e.preventDefault();
  });
});

