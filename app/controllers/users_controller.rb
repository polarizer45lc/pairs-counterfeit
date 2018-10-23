class UsersController < ApplicationController
  before_action :set_visitors, only: [:show, :edit]
   #自分の性別以外を取得する状態です。条件弄ったらこのコメントアウト消してください。
  def index
    @q = User.ransack(params[:q])
    @users = @q.result(distinct: true).opposite_gender(current_user).stranger(current_user).page(params[:page]).per(16)
  end

  def show
    unless @user.id == current_user.id
      @footprint = Footprint.find_or_create_by(visitor_id: current_user.id, host_id: params[:id]) #足跡レコードをクリエイト。
      @footprint.touch
    end
  end

  def edit
    character = Character.find_or_create_by(user_id: current_user.id)    #以下14行クソコード。触らないでください。
    chara_keys = character.attributes.keys
    chara_values = character.attributes.values
    pre_hash = Hash[*([chara_keys, chara_values].transpose.flatten)]
    pre_hash.delete('id')
    pre_hash.delete('user_id')
    user_character =  pre_hash.select{|k, v| v == 1 }
    mycharacters = user_character.keys
    @character_arry = []
    mycharacters.each do |mychara|
      pre_chara = Character::Type.select{|i| i[:id] == mychara }
      character_str = pre_chara[0][:name]
      @character_arry << character_str
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


  def continuous_user_edit
    @user = current_user
    respond_to do |format|
      format.html
      format.json{
          if params[:referense_column1] == 'language1'
            @user[:language1] = nil
            @user[:language2] = nil
            @user[:language3] = nil
          elsif params[:referense_column1] == 'hobby1'
            @user[:hobby1] = nil
            @user[:hobby2] = nil
            @user[:hobby3] = nil
          end

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

  def character_update
    user = current_user
    respond_to do |format|
      format.html
      format.json{
        user.character.destroy
        character = Character.find_or_create_by(user_id: current_user.id)
        checked_items = params[:checked_items]
        checked_items.each do |checked_item|
        column = checked_item
        character[column] = 1
        character.save
        end
       }
    end
  end

  def region_update
    user = current_user
    respond_to do |format|
      format.html
      format.json{
        referense_column = params[:referense_column]
        myregion = Region.find_by(name: params[:profvalue])
        user[referense_column] = myregion.id
        user.save
      }
    end
  end


  def update
    if current_user.update(user_params)
      redirect_to edit_user_path
    else
      render :edit
    end
  end

  def follow
    @title = "あなたからのいいね！"
    @users = current_user.followings.matching(current_user).page(params[:page]).per(10)
  end

  def follower
    @title = "お相手からのいいね！"
    @users = current_user.followerds.stranger(current_user).page(params[:page]).per(10)
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
  end

  def set_visitors
    @user = User.find(params[:id])
    #自分に対する訪問者、つまり自分から見たvisitor側を取り出す
    @visitors = @user.visitors.order("created_at DESC")

  end
end
