$(document).on('turbolinks:load', function(){
  function scroll() {
    //メッセージの一番下にスクロールする
    $('.box_message_exchange').animate({
      scrollTop: $('.box_message_exchange')[0].scrollHeight
    }, 'fast');
  }

  function buildHTML(message) {
    //画像アップロードを判断する
    var image_src = message.image ? message.image : "";
    var hukidashi = message.text ? `
                    <div class="mycomment">
                      <p>
                        ${message.text}
                      </p>
                    </div>` : "";
    var html = `
                <div class="message" data-message-id="${message.id}">
                  <div class="right">
                    ${hukidashi}
                    <img class="image" src= ${ image_src }>
                    <div class="sendtime">
                      <p>${message.created_at}</p>
                    </div>
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function (data) {
      var html = buildHTML(data);
      $('.box_message_exchange').append(html);
      // 送信データ初期化
      $('.messege_textarea').val('');
      $('#message_image').val('');
      scroll();
    })
    .fail(function () {
      alert('メッセージの送信が失敗しました。');
    })
    return false;
  });
});
