// Selectの反映
$(document).on("change", '.hasCustomSelect',function(e){
  var value = $(this).find('option:selected').text()
  $(this).next().children().text(value)
})

// CheckBoxの反映
$(document).on("click", '.for_items', function(e){
  var status = $(this).siblings().prop('checked');
  $(this).parent().siblings(".do_not_care").children().prop('checked',false);
  if (status == true) {
    $(this).siblings().prop('checked',false);
  } else {
    $(this).siblings().prop('checked',true);
  }
})

$(document).on("click", '.do_not_care', function(e){
  $(this).parent().siblings().children().prop('checked',false);
})

// 追加・削除ボタン
$(document).on("click", '.add_form_btn', function(e){
  e.preventDefault();
  var add_form = $(this).siblings(":first").clone(true)
  $(this).before(add_form)
  $(this).prev().append(remove_btn)
})

var remove_btn = `<span><a class="remove_form_btn">×</a></span>`

$(document).on("click", '.remove_form_btn', function(e){
  $(this).parent().parent().remove()
  $(this).prev().parent().prev().append(remove_btn)
})
