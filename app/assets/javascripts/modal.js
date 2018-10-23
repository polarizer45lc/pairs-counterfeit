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
  // $("[data-toggle=popover]").click(function(e) {
  //   e.stopPropagation();
  //   $(this).popover('show');
  // });
  // $('.popover').on('click', function(e) {
  //   e.stopPropagation();
  // });
  // $('html').on('click', function() {
  //   $("[data-toggle=popover]").popover('hide');
  // });
  // $("[data-toggle=popover]").click(function(evt) {
  // evt.stopPropagation();
  // $(this).popover('show');
  // });
  // $('.popover').on('click', function(evt) {
  // evt.stopPropagation();
  // });
  // $('html').on('click', function() {
  // $("[data-toggle=popover]").popover('hide');
  // });
});

// クリックイベントの親要素を取ってきてる。使えそうで使えない。
// $(document).on('click', function(e) {
//   if (!$(e.target).closest('.elm').length){
//     $('.elm').hide();
//   }
// });


$(document).on('change', '.hasCustomSelect',function(e){
  var val = $(this).find('option:selected').text()
  $(this).next().text(val)
})

// 更新ボタンでpopover消すやつ
$(document).on('click','.button_profile',function(){
  $('.popover').popover('hide')
})

$(document).on('click','.button_profile2',function(){
  $('.popover').popover('hide')
})

$(document).on('click','.button_profile3',function(){
  $('.popover').popover('hide')
})

$(document).on('click','.button_profile_region',function(){
  $('.popover').popover('hide')
})

$(document).on('click','.button_profile_character',function(){
  $('.popover').popover('hide')
})

$(document).on('click','.button_remove',function(){
  $('.popover').popover('hide')
})


//ポップオーバーが開いた時、既に表示されているものをセレクトに適用するやつ。これに連動させてselectを下のtextに適用しないとダメっぽい。
//ポップオーバーはidが勝手につく、かつその画面においてはidが共通

$(document).on('shown.bs.popover','.detail_item_value',function(){
  // var now_popover = $('.popover').attr('id')
  // console.log(now_popover)
  // console.log($('.popover').length)
  // var other_popover = $('.popover:eq(1)').attr('id')
  // console.log(other_popover)
  if ($('.popover').length == 2){
    $('.popover:eq(0)').popover('hide')
  }
  var objective_pop_id = $(this).data('content_div_id')
  console.log(objective_pop_id)
  var pre_selected_str = $(this).text()
  var selected_str = pre_selected_str.replace(/\s+/g, "")
  console.log(selected_str)
  var objected_selects = $('.popup_title[id='+ objective_pop_id +']').siblings('table').find('select')
  console.log(objected_selects)
  $(function() {
    $('[name='+ objective_pop_id +'] option[value='+ selected_str +']').prop('selected',true);
    return false;
  });
})



