$(document).on('turbolinks:load', function(){

  var search = `
    <div id="modal_personal-view">
      <div class="box_personal-view">
        <a class="modal_close">
          <img src='/assets/button_close.png'>
        </a>
        <ul>
          <li class="search_title">
            あなたの希望条件
          </li>
        </ul>
        <form>
          <div class="search_inner">
            <p class="box_search-reset">
              <a id="resetSearchBtn" class="btn_f btn_white_a" href="#">
                検索条件をリセットする
              </a>
            </p>
            <table class="search_table">
              <tbody>
                <tr>
                  <th>年齢</th>
                  <td class="search_age">
                    すぎの
                  </td>
                </tr>
                <tr>
                  <th>居住地</th>
                  <td class="">
                    すぎの
                  </td>
                </tr>
                <tr>
                  <th>職業</th>
                  <td class="">
                    すぎの
                  </td>
                </tr>
                <tr>
                  <th>学歴</th>
                  <td class="">
                    すぎの
                  </td>
                </tr>
                <tr>
                  <th>身長</th>
                  <td class="">
                    すぎの
                  </td>
                </tr>
                <tr>
                  <th>タバコ</th>
                  <td class="">
                    すぎの
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>`

  $("#btn_search-form").on('click', function(){
    $("body").append(search).hide().fadeIn("slow");
    $("#filter, .modal_close").click(function(){
      $("#modal_personal-view, #filter").fadeOut("slow");
    });
  });
});
