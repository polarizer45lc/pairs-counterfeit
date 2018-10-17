class UsersController < ApplicationController

   #自分の性別以外を取得する状態です。条件弄ったらこのコメントアウト消してください。
  def index
    @q = User.ransack(params[:q])
    @users = @q.result(distinct: true).opposite_gender(current_user).page(params[:page]).per(16)

    if current_user.sex == "male" && current_user.avatar.file.nil?
       @image = "no-image__man.png"
    elsif current_user.sex == "female" && current_user.avatar.file.nil?
       @image = "no-image__woman.png"
    else
       @image = current_user.avatar
    end

  end

  def show
    @user = User.find(params[:id])

    if current_user.sex == "male" && current_user.avatar.file.nil?
       @image = "no-image__man.png"
    elsif current_user.sex == "female" && current_user.avatar.file.nil?
       @image = "no-image__woman.png"
    else
       @image = current_user.avatar
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

  def matches
    @groups = current_user.groups
  end

end
