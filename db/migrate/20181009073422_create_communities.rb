class CreateCommunities < ActiveRecord::Migration[5.0]
  def change
    create_table :communities do |t|
      t.string :name, null: false
      t.string :image, null: false
      t.integer :category, null: false, default: 0
      t.timestamps
    end
  end
end
