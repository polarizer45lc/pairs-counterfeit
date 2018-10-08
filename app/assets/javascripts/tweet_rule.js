$(function(){

  var html = `<body>
                <div class="tweet_rule" style="width:100%;height:900px;position:absolute;left:0;top:50px;z-index:1000;">
                  <div class="tweet_rule_inner" style="width:600px;height:900px;background-color:yellow;position:relative;top:20px;margin: 0 auto;">
                  </div>
                </div>
              </body>`

  $('#tweet_rule').on('click', function(e){
    e.preventDefault();
    console.log("ok")

    $('body').append(html);
    console.log(html)


    $('.tweet_rule').click(function(){
      $('.tweet_rule, #filter').remove();
      console.log("ok11")
    });
  });
});
