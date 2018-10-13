class UsersController < ApplicationController

  def index   #自分の性別以外を取得する状態です。条件弄ったらこのコメントアウト消してください。
  	current_user.sex == 1 ? @users = User.where(sex: 0).page(params[:page]).per(16).order("created_at DESC"): @users = User.where(sex: 1).page(params[:page]).per(16).order("created_at DESC")
  end

  def show
  	user = User.find(params[:id])
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

end
