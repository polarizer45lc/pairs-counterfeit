$(document).on('turbolinks:load', function(){

  $('.btn-modal').on('click', function(e){
    $('#overlay').fadeIn();
    var id = $(this).data('id');
    $('.js-modal[data-id='+ id +']').fadeIn();
    e.preventDefault();
  });

  $('.close, #overlay').on('click', function(){
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
  });
});






$(document).on('turbolinks:load', function(){

  $("[data-toggle=popover]").popover({
    html: true,
    container: 'body',
    content: function () {
        var contentDivId = '#' + $(this).data('content_div_id');
        return $(contentDivId).html();
    },
    trigger: 'click'
  });
});








function clickBtn1(){

  const color1 = document.form1.color1;

  // 値(数値)を取得
  const num = color1.selectedIndex;
  //const num = document.form1.color1.selectedIndex;

  // 値(数値)から値(value値)を取得
  const str = color1.options[num].value;
  //const str = document.form1.color1.options[num].value;

  document.getElementById("span1").textContent = str;
}
