class UsersController < ApplicationController
  before_action :set_visitors, only: [:show, :edit]
   #自分の性別以外を取得する状態です。条件弄ったらこのコメントアウト消してください。
  def index
    @q = User.ransack(params[:q])
    @users = @q.result(distinct: true).opposite_gender(current_user).page(params[:page]).per(16)
  end

  def show
    unless @user.id == current_user.id
      @footprint = Footprint.find_or_create_by(visitor_id: current_user.id, host_id: params[:id]) #足跡レコードをクリエイト。
      @footprint.touch
    end
  end

  def user_edit
    @user = current_user

    respond_to do |format|
      format.html
      format.json{
        referense_column = params[:referense_column]
        @user[referense_column] = params[:profvalue]
        @user.save
      }
    end
  end


  def update
    if current_user.update(user_params)
      redirect_to edit_user_path
    else
      render :edit
    end

  def follow
    @title = "あなたからのいいね！"
    @users = current_user.followings.page(params[:page]).per(10)
  end

  def follower
    @title = "お相手からのいいね！"
    @users = current_user.followerds.page(params[:page]).per(10)

  end

  def edit
  end

  def matches
    @groups = current_user.groups
  end


  private

  def user_params
    params.require(:user).permit(
      :avatar,
      :sub_image1,
      :sub_image2,
      :sub_image3,
      :sub_image4,
    )

  def set_visitors
    @user = User.find(params[:id])
    #自分に対する訪問者、つまり自分から見たvisitor側を取り出す
    @visitors = @user.visitors.order("created_at DESC").limit(3)

  end
end
