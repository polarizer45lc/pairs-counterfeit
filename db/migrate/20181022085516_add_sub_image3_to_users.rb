class AddSubImage3ToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :sub_image3, :string
  end
end
