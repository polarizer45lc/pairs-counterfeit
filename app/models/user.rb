class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include UsersHelper

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  belongs_to :residence, class_name: "Region", optional: true, foreign_key: "residence_id"
  belongs_to :birthplace, class_name: "Region",optional: true, foreign_key: "birthplace_id"

  has_one :character
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

  enum sex: %i(male female)
  #文字列で返すので、registration_controllerで整数として変換するメソッドを記入する。

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

# userの異性を表示する
  scope :opposite_gender, -> (user) { where.not(sex: user.sex) }

# 検索フォーム用配列
  Job = ["無職", "ニート", "ヒモ", "家事手伝い", "自宅警備員"]
  AcademicBackground = ["短大/専門学校卒", "高校卒", "大学卒", "大学院卒", "その他"]
  Tobacco = ["吸わない", "吸う", "吸う（電子タバコ）", "非喫煙者の前では吸わない", "相手が嫌なら吸わない", "ときどき吸う"]
  Drink = ["飲まない", "飲む", "ときどき飲む"]
  Weight = ["スリム", "やや細め", "普通", "グラマー", "筋肉質", "ややぽっちゃり", "ぽっちゃり"]
  Income = ["200万円": 1, "400万円": 2, "600万円": 3, "800万円": 4, "1000万円": 5, "1500万円": 6, "2000万円": 7, "3000万円": 8]
  Login = ["24時間以内", "3日以内", "1週間以内", "2週間以内", "1ヶ月以内", "3ヶ月以内", "3ヶ月以上"]
  Housemate = ["一人暮らし", "友達と一緒", "ペットと一緒", "実家暮らし", "その他"]
  Holiday = ["土日", "平日", "不定期", "その他"]

end
