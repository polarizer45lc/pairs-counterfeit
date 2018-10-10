class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.references :user, foreign_key: true
      t.integer :kindness, null: false, default: 0
      t.integer :honest, null: false, default: 0
      t.integer :determination, null: false, default: 0
      t.integer :gentle, null: false, default: 0
      t.integer :familiar, null: false, default: 0
      t.integer :cheerful, null: false, default: 0
      t.integer :indoor, null: false, default: 0
      t.integer :outdoor, null: false, default: 0
      t.integer :earnest, null: false, default: 0
      t.integer :intellectual, null: false, default: 0
      t.integer :sincere, null: false, default: 0
      t.integer :punctual, null: false, default: 0
      t.integer :optimistic, null: false, default: 0
      t.integer :shy, null: false, default: 0
      t.integer :smily, null: false, default: 0
      t.integer :elegance, null: false, default: 0
      t.integer :clamness, null: false, default: 0
      t.integer :humility, null: false, default: 0
      t.integer :strict, null: false, default: 0
      t.integer :considerate, null: false, default: 0
      t.integer :lonely, null: false, default: 0
      t.integer :sociable, null: false, default: 0
      t.integer :cool, null: false, default: 0
      t.integer :curiosity, null: false, default: 0
      t.integer :homely, null: false, default: 0
      t.integer :workerholic, null: false, default: 0
      t.integer :responsibility, null: false, default: 0
      t.integer :intercourse, null: false, default: 0
      t.integer :speaker, null: false, default: 0
      t.integer :listner, null: false, default: 0
      t.integer :refreshing, null: false, default: 0
      t.integer :active, null: false, default: 0
      t.integer :ratioanl, null: false, default: 0
      t.integer :defeated, null: false, default: 0
      t.integer :funny, null: false, default: 0
      t.integer :hot, null: false, default: 0
      t.integer :comfortable, null: false, default: 0
      t.integer :devoted, null: false, default: 0
      t.integer :boldness, null: false, default: 0
      t.integer :tolerance, null: false, default: 0
      t.integer :generosity, null: false, default: 0
      t.integer :naturally, null: false, default: 0
      t.integer :bcklashless, null: false, default: 0
      t.integer :mypace, null: false, default: 0
      t.integer :latecrop, null: false, default: 0
      t.integer :moody, null: false, default: 0
      t.timestamps
    end
  end
end
