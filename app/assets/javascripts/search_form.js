// Selectのvalue反映
$(document).on("change", '.hasCustomSelect',function(e){
  var value = $(this).find('option:selected').text()
  $(this).next().children().text(value)
})
