class AddSubImage2ToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :sub_image2, :string
  end
end
