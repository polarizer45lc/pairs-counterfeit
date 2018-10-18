class UsersController < ApplicationController

  def index
    @q = User.ransack(params[:q])
    @users = @q.result(distinct: true).opposite_gender(current_user).page(params[:page]).per(16)
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

  def continuous_user_edit
    @user = current_user
    respond_to do |format|
      format.html
      format.json{
          if params[:referense_column3].present?
            referense_column3 = params[:referense_column3]
            referense_column2 = params[:referense_column2]
            referense_column1 = params[:referense_column1]
            @user[referense_column3] = params[:profvalue3]
            @user[referense_column2] = params[:profvalue2]
            @user[referense_column1] = params[:profvalue1]
          elsif params[:referense_column2].present?
            referense_column2 = params[:referense_column2]
            referense_column1 = params[:referense_column1]
            @user[referense_column2] = params[:profvalue2]
            @user[referense_column1] = params[:profvalue1]
          else
            referense_column1 = params[:referense_column1]
            @user[referense_column1] = params[:profvalue1]
          end
        @user.save
      }
    end
  end

  def matches
    @groups = current_user.groups
  end


  private


end
