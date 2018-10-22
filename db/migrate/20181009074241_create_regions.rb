class CreateRegions < ActiveRecord::Migration[5.0]
  def change
    create_table :regions do |t|
      t.string :name, null: false
      t.integer :overseas, null: false
      t.timestamps
    end
    add_index  :regions, [:name, :overseas], unique: true
  end
end
