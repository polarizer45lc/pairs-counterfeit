class CreateFootprints < ActiveRecord::Migration[5.0]
  def change
    create_table :footprints do |t|
      t.integer :visitor_id, null: false
      t.integer :host_id, null: false
      t.timestamps null: false
    end
    add_index :footprints, :visitor_id
    add_index :footprints, :host_id
    add_index :footprints, [:visitor_id, :host_id], unique: true
  end
end
