class AddSubImage4ToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :sub_image4, :string
  end
end
