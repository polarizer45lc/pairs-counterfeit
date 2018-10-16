class Group < ApplicationRecord

  has_many :users, through: :group_users
  has_many :group_users
  # accepts_nested_attributes_for :group_users, allow_destroy: true
  has_many :messages

  def show_last_message
    if (last_message = messages.last).present?
      last_message.text? ? last_message.text : '画像が投稿されています'
    else
      'メッセージ交換をしていません。'
    end
  end

end
