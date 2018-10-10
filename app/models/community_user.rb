class CommunityUser < ApplicationRecord
  belongs_to :community
  belongs_to :user

  mount_uploader :content  ##ここにアップローダーのファイル名を記述
  
end
