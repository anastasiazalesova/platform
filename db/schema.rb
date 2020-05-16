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

ActiveRecord::Schema.define(version: 2020_05_04_123759) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "credentials", force: :cascade do |t|
    t.string "login"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "disciplines", force: :cascade do |t|
    t.string "name"
    t.bigint "mod_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mod_id"], name: "index_disciplines_on_mod_id"
  end

  create_table "emails", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.bigint "supplier_id"
    t.bigint "consumer_id"
    t.boolean "new"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["consumer_id"], name: "index_emails_on_consumer_id"
    t.index ["supplier_id"], name: "index_emails_on_supplier_id"
  end

  create_table "events", force: :cascade do |t|
    t.text "title"
    t.text "description"
    t.integer "tag"
    t.string "imageUrl"
    t.bigint "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_events_on_course_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "link_role_rights", force: :cascade do |t|
    t.bigint "role_id"
    t.bigint "right_id"
    t.index ["right_id"], name: "index_link_role_rights_on_right_id"
    t.index ["role_id"], name: "index_link_role_rights_on_role_id"
  end

  create_table "marks", force: :cascade do |t|
    t.integer "value"
    t.bigint "teacher_id"
    t.bigint "student_id"
    t.bigint "discipline_id"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discipline_id"], name: "index_marks_on_discipline_id"
    t.index ["student_id"], name: "index_marks_on_student_id"
    t.index ["teacher_id"], name: "index_marks_on_teacher_id"
  end

  create_table "materials", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.bigint "discipline_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discipline_id"], name: "index_materials_on_discipline_id"
  end

  create_table "mods", force: :cascade do |t|
    t.string "name"
    t.bigint "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_mods_on_course_id"
  end

  create_table "news_pieces", force: :cascade do |t|
    t.text "title"
    t.text "description"
    t.datetime "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rights", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.bigint "role_id"
    t.bigint "credential_id"
    t.bigint "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_users_on_course_id"
    t.index ["credential_id"], name: "index_users_on_credential_id"
    t.index ["role_id"], name: "index_users_on_role_id"
  end

  add_foreign_key "disciplines", "mods"
  add_foreign_key "emails", "users", column: "consumer_id"
  add_foreign_key "emails", "users", column: "supplier_id"
  add_foreign_key "events", "courses"
  add_foreign_key "link_role_rights", "rights"
  add_foreign_key "link_role_rights", "roles"
  add_foreign_key "marks", "disciplines"
  add_foreign_key "marks", "users", column: "student_id"
  add_foreign_key "marks", "users", column: "teacher_id"
  add_foreign_key "materials", "disciplines"
  add_foreign_key "mods", "courses"
  add_foreign_key "users", "courses"
  add_foreign_key "users", "credentials"
  add_foreign_key "users", "roles"
end
