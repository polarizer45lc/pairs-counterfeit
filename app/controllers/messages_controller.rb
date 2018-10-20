class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    @user = User.find(params[:user_id])
    @flug = true
    respond_to do |format|
      format.html
      # まだ画面上に更新されてないメッセージがあれば取得
      # where句の?は隣のparams[:id]のこと。jsonから画面上のメッセージIdを取得して比較する。
      format.json { @new_messages = @messages.where('id > ?', params[:id]) }
    end
  end

  def create
    @message = @group.messages.new(message_params)
    if @message.save
      respond_to do |format|
        format.html { redirect_to user_group_messages_path(user, group) }
        format.json
      end
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = "メッセージを入力してください"
      render :index
    end
  end

  private
  def message_params
    params.require(:message).permit(:text, :image).merge(user_id: current_user.id)
  end

  def set_group
    @groups = current_user.groups
    @group = Group.find(params[:group_id])
    @users = @group.users.where("user_id != ?", current_user.id)
  end

end
