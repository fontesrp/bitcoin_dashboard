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

ActiveRecord::Schema.define(version: 2018_06_17_183043) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "currencies", force: :cascade do |t|
    t.string "symbol"
    t.string "currency_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exchange_rates", force: :cascade do |t|
    t.integer "buying_currency_id"
    t.integer "selling_currency_id"
    t.float "rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["buying_currency_id"], name: "index_exchange_rates_on_buying_currency_id"
    t.index ["selling_currency_id"], name: "index_exchange_rates_on_selling_currency_id"
  end

  create_table "user_currencies", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "currency_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["currency_id"], name: "index_user_currencies_on_currency_id"
    t.index ["user_id"], name: "index_user_currencies_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
  end

  add_foreign_key "exchange_rates", "currencies", column: "buying_currency_id"
  add_foreign_key "exchange_rates", "currencies", column: "selling_currency_id"
  add_foreign_key "user_currencies", "currencies"
  add_foreign_key "user_currencies", "users"
end
