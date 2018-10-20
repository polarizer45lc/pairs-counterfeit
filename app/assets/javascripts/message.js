$(document).on('turbolinks:load', function(){
  function scroll() {
    //メッセージの一番下にスクロールする
    $('.box_message_exchange').animate({
      scrollTop: $('.box_message_exchange')[0].scrollHeight
    }, 'fast');
  }

 function buildHTML_Left(message) {
    //画像アップロードを判断する
    var image_src = message.image ? message.image : "";
    var avatar_src = message.avatar || ""
    if (avatar_src == "" && message.sex == "male") {
      avatar_src = "/assets/no-image__man-70d87b89e4e1f521760cd9d67ac3bcf0d8cde177fd73b304bf28aa8122b3d3ac.png";
    } else if(avatar_src == "" ){
      avatar_src = "/assets/no-image__woman-2537c1305a350dea3e0bc22c75e7a5b56831efd82e977062c2e96d4d46e09f9b.png";
    }
    var hukidashi = message.text ? `
                    <div class="says">
                      <p>
                        ${message.text}
                      </p>
                    </div>` : "";
    var html = `
                <div class="message" data-message-id="${message.id}">
                  <div class="left">
                    <div class="faceicon">
                      <img src=  ${ avatar_src } >
                    </div>
                    <div class="chatting">
                      ${hukidashi}
                      <img class="image" src= ${ image_src }>
                      <div class="sendtime">
                        <p>${message.created_at}</p>
                      </div>
                    </div>
                  </div>
                </div>`
    return html;
  }

  function buildHTML_Right(message) {
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
      var html = buildHTML_Right(data);
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

  setInterval(function(){
    var url = location.pathname;
    if (url.match(/\/groups\/\d+\/messages/)) {
      var message_id = $('.message').last().data('messageId');
      $.ajax({
        url: url,
        type: 'GET',
        data: {id: message_id},
        dataType: 'json',
      })
      .done(function (messages) {
        messages.forEach(function(message) {
          html = buildHTML_Left(message);
          $('.box_message_exchange').append(html);
          scroll();
        });
      })
      .fail(function(){
        alert('自動更新に失敗しました');
      });
    }
  },5000);

});
