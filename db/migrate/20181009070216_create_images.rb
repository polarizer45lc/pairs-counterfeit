class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string :content
      t.integer :status
      t.references :user, index: true, foreign_key: true
      t.timestamps
    end
  end
end
