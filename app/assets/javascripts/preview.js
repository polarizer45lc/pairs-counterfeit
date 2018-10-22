$(document).on('turbolinks:load', function(){
  $('#main_avatar_uploader').change(function(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }
    reader.onload = (function(file){
      $(".hidden").css('background-image', 'none');
      return function(e){
        $("#preview_avatar").attr("src", e.target.result);
        $("#preview_avatar").attr("title", file.name);
        $('img').removeClass('none');
      };
    })(file);
    reader.readAsDataURL(file);
  });
});

$(document).on('turbolinks:load', function(){
  $('#main_photo').change(function(e){
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.modal_image_edit_photo').attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  });
});

$(document).on('turbolinks:load', function(){
  $('#sub_image1').change(function(e){
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#modal_sub_image1').attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  });
});

$(document).on('turbolinks:load', function(){
  $('#sub_image2').change(function(e){
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#modal_sub_image2').attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  });
});

$(document).on('turbolinks:load', function(){
  $('#sub_image3').change(function(e){
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#modal_sub_image3').attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  });
});

$(document).on('turbolinks:load', function(){
  $('#sub_image4').change(function(e){
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#modal_sub_image4').attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  });
});



