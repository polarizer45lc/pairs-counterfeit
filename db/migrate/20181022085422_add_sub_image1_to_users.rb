class AddSubImage1ToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :sub_image1, :string
  end
end
