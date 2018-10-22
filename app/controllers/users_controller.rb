class UsersController < ApplicationController

   #自分の性別以外を取得する状態です。条件弄ったらこのコメントアウト消してください。
  def index
    @q = User.ransack(params[:q])
    @users = @q.result(distinct: true).opposite_gender(current_user).page(params[:page]).per(16)
  end

  def show
    @user = User.find(params[:id])
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

  def edit
    @images_sub = current_user.images
  end

  def update

    if current_user.update(user_params)
      redirect_to edit_user_path
      # binding.pry
    else
      render :edit
    end
  end


  def matches
    @groups = current_user.groups
  end

  private

  def user_params
    params.permit(
      :avatar,
      :sub_image1,
      :sub_image2,
      :sub_image3,
      :sub_image4,
    )
  end
end
