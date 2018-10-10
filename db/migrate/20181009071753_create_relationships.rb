class CreateRelationships < ActiveRecord::Migration[5.0]
  def change
    create_table :relationships do |t|
      t.integer :followed_id
      t.integer :following_id
      t.timestamps null: false
    end
    add_index :relationships, :following_id
    add_index :relationships, :followed_id
    add_index :relationships, [:following_id, :followed_id], unique: true
  end
end
