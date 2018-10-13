class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  belongs_to :residence, class_name: "Region", optional: true, foreign_key: "residence_id"
  belongs_to :birthplace, class_name: "Region",optional: true, foreign_key: "birthplace_id"

  has_one :characters
  has_many :images

  # フォロー
  has_many :active_relationships,  class_name:  "Relationship",
                                   foreign_key: "followed_id",
                                   dependent:   :destroy
  has_many :passive_relationships, class_name:  "Relationship",
                                   foreign_key: "following_id",
                                   dependent:   :destroy
  has_many :followings, through: :active_relationships
  has_many :followerds, through: :passive_relationships

  # ユーザーをフォローする
  def follow(other_user)
    active_relationships.create(following_id: other_user.id)
  end

  # ユーザーをフォロー解除する
  def unfollow(other_user)
    active_relationships.find_by(following_id: other_user.id).destroy
  end

  # 現在のユーザーがフォローしてたらtrueを返す
  def following?(other_user)
    followings.include?(other_user)
  end

  # 足跡
  has_many :passive_footprints, class_name: "Footprint", foreign_key: "visitor_id"
  has_many :hosts, through: :passive_relationships
  has_many :active_footprints, class_name: "Footprint", foreign_key: "host_id"
  has_many :visitors, through: :active_footprints

  has_many :group_users
  has_many :groups, through: :group_users
  has_many :masseges

  has_many :communities, through: :user_communities
  has_many :user_communities

  mount_uploader :avatar, UserImageUploader

  def matchers
    User.where(id: passive_relationships.select(:following_id))
     .where(id: active_relationships.select(:followed_id))
  end

end
