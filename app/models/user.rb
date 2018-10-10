class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  belongs_to :residence, class_name: "Region", optional: true, primary_key: "residence_id"
  belongs_to :birthplace, class_name: "Region", optional: true, primary_key: "birthplace_id"

  has_one :characters
  has_many :images

  has_many :passive_relationships,class_name:  "Relationship", foreign_key: "following_id", dependent: :destroy
  has_many :followedes, through: :passive_relationships
  has_many :active_relationships,class_name:  "Relationship", foreign_key: "followed_id", dependent: :destroy
  has_many :followings, through: :active_relationships

  has_many :passive_footprints, class_name: "Footprint", foreign_key: "visitor_id"
  has_many :hosts, through: :passive_relationships
  has_many :active_footprints, class_name: "Footprint", foreign_key: "host_id"
  has_many :visitors, through: :active_footprints

  has_many :group_users
  has_many :groups, through: :group_users
  has_many :masseges

  has_many :communities, through: :user_communities
  has_many :user_communities

  def matchers
    followedes & followings
  end

end
