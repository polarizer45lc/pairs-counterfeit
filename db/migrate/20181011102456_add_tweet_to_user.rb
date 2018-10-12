class AddTweetToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :tweet, :string
  end
end
