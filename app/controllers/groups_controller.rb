class GroupsController < ApplicationController
  def index
    @groups = current_user.groups
    # @chat_use マッチング一覧ではチャットを使わせないためのフラグ
    @chat_use = false
  end
end
