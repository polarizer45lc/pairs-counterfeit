class Message < ApplicationRecord
  
  belongs_to :group
  belongs_to :user

　mount_uploader :image #ここにアップローダーのファイル名を記述
end
