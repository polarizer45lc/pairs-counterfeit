class RelationshipsController < ApplicationController

  def create    #relationのレコードを作るメソッド。「既にいいねされて」いればハートを消費せずに「いいねした」というレコードを作る。「まだいいねされていなければ」ハートを消費して「いいねした」というレコードを作る
    user = User.find(params[:followed_id])
    hearts = current_user.hearts     #自分のハートの数を取ってくる
    if user.following?(current_user)     #相手がすでにいいねしているか
      Group.create({user_ids: [user.id, current_user.id]})    #グループを作成する
      current_user.follow(user)    #rerationship追加、マッチング成立
    else
      if hearts == 0
        # redirect_to action: 'buy_hearts'
        return
      else
        current_user.follow(user)    #rerationship追加
        hearts -= 1  #heartsをマイナス１
        current_user.update_attribute(:hearts, hearts)    #heartsの数を更新
      end
    end
  end

end
