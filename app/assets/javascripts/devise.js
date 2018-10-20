$(document).on('turbolinks:load', function(){
  function buildHTML(){

    var html = `
                <img class="check_mark_on" src="/assets/mark-on.png" alt="mark-on">`

    return html;
  }

  function returnHTML(){

    var html = `
                <img class="check_mark_off" src="/assets/mark-off.png" alt="mark-off">`

    return html;
  }
  $(document).on('click', ".check_mark_off", function(e)
    {
      $(".check_mark_off").remove();
        var html = buildHTML(e);
        $(".mark_box").append(html)
        e.preventDefault();
    });
  $(document).on('click', ".check_mark_on", function(e)
    {
      $(".check_mark_on").remove();
        var html = returnHTML(e);
        $(".mark_box").append(html)
        e.preventDefault();
    });
});
