class UsersController < ApplicationController

  def index
    @search = User.ransack(params[:q])
    @users = @search.result(distinct: true).opposite_gender(current_user).page(params[:page]).per(16)
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

end
