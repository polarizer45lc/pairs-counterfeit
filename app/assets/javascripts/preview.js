$(function(){
  $(document).on('turbolinks:load', function(){
    $('#main_avatar_uploader').change(function(e){
      var file = e.target.files[0];
      var reader = new FileReader();
        $('img').removeClass('none');
      if(file.type.indexOf("image") < 0){
        alert("画像ファイルを指定して下さい。");
        return false;
      }
      reader.onload = (function(file){
        $(".hidden").remove();
        return function(e){
          $("#preview_avatar").attr("src", e.target.result);
          $("#preview_avatar").attr("title", file.name)
        };
      })(file);
      reader.readAsDataURL(file);
    });
  });
});
