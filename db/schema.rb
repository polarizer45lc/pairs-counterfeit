# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20181011124629) do

  create_table "characters", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.integer  "kindness",       default: 0, null: false
    t.integer  "honest",         default: 0, null: false
    t.integer  "determination",  default: 0, null: false
    t.integer  "gentle",         default: 0, null: false
    t.integer  "familiar",       default: 0, null: false
    t.integer  "cheerful",       default: 0, null: false
    t.integer  "indoor",         default: 0, null: false
    t.integer  "outdoor",        default: 0, null: false
    t.integer  "earnest",        default: 0, null: false
    t.integer  "intellectual",   default: 0, null: false
    t.integer  "sincere",        default: 0, null: false
    t.integer  "punctual",       default: 0, null: false
    t.integer  "optimistic",     default: 0, null: false
    t.integer  "shy",            default: 0, null: false
    t.integer  "smily",          default: 0, null: false
    t.integer  "elegance",       default: 0, null: false
    t.integer  "clamness",       default: 0, null: false
    t.integer  "humility",       default: 0, null: false
    t.integer  "strict",         default: 0, null: false
    t.integer  "considerate",    default: 0, null: false
    t.integer  "lonely",         default: 0, null: false
    t.integer  "sociable",       default: 0, null: false
    t.integer  "cool",           default: 0, null: false
    t.integer  "curiosity",      default: 0, null: false
    t.integer  "homely",         default: 0, null: false
    t.integer  "workerholic",    default: 0, null: false
    t.integer  "responsibility", default: 0, null: false
    t.integer  "intercourse",    default: 0, null: false
    t.integer  "speaker",        default: 0, null: false
    t.integer  "listner",        default: 0, null: false
    t.integer  "refreshing",     default: 0, null: false
    t.integer  "active",         default: 0, null: false
    t.integer  "ratioanl",       default: 0, null: false
    t.integer  "defeated",       default: 0, null: false
    t.integer  "funny",          default: 0, null: false
    t.integer  "hot",            default: 0, null: false
    t.integer  "comfortable",    default: 0, null: false
    t.integer  "devoted",        default: 0, null: false
    t.integer  "boldness",       default: 0, null: false
    t.integer  "tolerance",      default: 0, null: false
    t.integer  "generosity",     default: 0, null: false
    t.integer  "naturally",      default: 0, null: false
    t.integer  "bcklashless",    default: 0, null: false
    t.integer  "mypace",         default: 0, null: false
    t.integer  "latecrop",       default: 0, null: false
    t.integer  "moody",          default: 0, null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.index ["user_id"], name: "index_characters_on_user_id", using: :btree
  end

  create_table "communities", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name",                   null: false
    t.string   "image",                  null: false
    t.integer  "category",   default: 0, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "community_users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "community_id", null: false
    t.integer  "user_id",      null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["community_id"], name: "index_community_users_on_community_id", using: :btree
    t.index ["user_id"], name: "index_community_users_on_user_id", using: :btree
  end

  create_table "footprints", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "visitor_id", null: false
    t.integer  "host_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_footprints_on_host_id", using: :btree
    t.index ["visitor_id", "host_id"], name: "index_footprints_on_visitor_id_and_host_id", unique: true, using: :btree
    t.index ["visitor_id"], name: "index_footprints_on_visitor_id", using: :btree
  end

  create_table "group_users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.integer  "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_group_users_on_group_id", using: :btree
    t.index ["user_id"], name: "index_group_users_on_user_id", using: :btree
  end

  create_table "groups", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "content"
    t.integer  "status"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_images_on_user_id", using: :btree
  end

  create_table "messages", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "text",       null: false
    t.string   "image"
    t.integer  "user_id",    null: false
    t.integer  "group_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_messages_on_group_id", using: :btree
    t.index ["user_id"], name: "index_messages_on_user_id", using: :btree
  end

  create_table "regions", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name",       null: false
    t.integer  "overseas",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "overseas"], name: "index_regions_on_name_and_overseas", unique: true, using: :btree
  end

  create_table "relationships", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "followed_id"
    t.integer  "following_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["followed_id"], name: "index_relationships_on_followed_id", using: :btree
    t.index ["following_id", "followed_id"], name: "index_relationships_on_following_id_and_followed_id", unique: true, using: :btree
    t.index ["following_id"], name: "index_relationships_on_following_id", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "nickname",                            null: false
    t.string   "email",                  default: "", null: false
    t.integer  "tell"
    t.string   "encrypted_password",     default: "", null: false
    t.integer  "sex",                                 null: false
    t.datetime "birthday",                            null: false
    t.integer  "hearts",                 default: 30, null: false
    t.string   "introduction"
    t.string   "height"
    t.string   "weight"
    t.string   "blood_type"
    t.integer  "residence_id"
    t.integer  "birthplace_id"
    t.string   "job_category"
    t.string   "educational"
    t.string   "annual_income"
    t.string   "tobacco"
    t.string   "brother"
    t.string   "country"
    t.string   "marital"
    t.string   "child"
    t.string   "mdesire"
    t.string   "cdesire"
    t.string   "hkeeping"
    t.string   "encounter"
    t.string   "cost"
    t.string   "holiday"
    t.string   "sociability"
    t.string   "hobby1"
    t.string   "hobby2"
    t.string   "hobby3"
    t.string   "language1"
    t.string   "language2"
    t.string   "language3"
    t.string   "avatar"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "tweet"
    t.string   "housemate"
    t.string   "drink"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "characters", "users"
  add_foreign_key "community_users", "communities"
  add_foreign_key "community_users", "users"
  add_foreign_key "group_users", "groups"
  add_foreign_key "group_users", "users"
  add_foreign_key "images", "users"
  add_foreign_key "messages", "groups"
  add_foreign_key "messages", "users"
end
