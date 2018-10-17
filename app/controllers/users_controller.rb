class UsersController < ApplicationController

  def index   #自分の性別以外を取得する状態です。条件弄ったらこのコメントアウト消してください。

    if current_user.sex == "male"
      @users = User.where(sex: 'female').page(params[:page]).per(16).order("created_at DESC")
    elsif current_user.sex == 'female'
      @users = User.where(sex: 'male').page(params[:page]).per(16).order("created_at DESC")
    end
    @user = current_user.id
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

  def matches
    @groups = current_user.groups
  end


  private
  def user_params
    params.require(:user).permit(:avatar, :nickname)
  end
end
