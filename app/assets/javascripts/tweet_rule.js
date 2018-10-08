$(function(){

  var html = `
  <div class="tweet_rule" style="width:100%;height:900px;position:absolute;left:0;top:50px;z-index:1000;">
    <div class="tweet_rule_inner" style="width:600px;height:900px;background-color:#FFFFFF;position:relative;top:20px;margin: 0 auto;">
      <div class="model_window_inner" style="width:100%;heigt:100%;padding:15px;">
        <p class="model_sub_title">hello</p>
      </div>
    </div>
  </div>`

  $('#tweet_rule').on('click', function(e){
    $("body").append(html).hide().fadeIn(200);
    // $("tweet_rule").fadeIn(9000);
    // e.preventDefault();
    // console.log("ok")

    // $('body').append(html);
    // console.log(html)


    $('.tweet_rule').click(function(){
      $('.tweet_rule, #filter').fadeOut(500);
      console.log("ok11")
    });
  });
});
