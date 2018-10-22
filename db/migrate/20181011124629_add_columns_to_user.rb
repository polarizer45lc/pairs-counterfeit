class AddColumnsToUser < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :housemate, :string
  	add_column :users, :drink, :string
  end
end
