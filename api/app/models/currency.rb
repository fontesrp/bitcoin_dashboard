class Currency < ApplicationRecord

  has_many :user_currencies, dependent: :destroy
  has_many :users, through: :user_currencies

  has_many :exchange_rates, as: :buying_rates, foreign_key: :buying_currency_id, dependent: :destroy
  has_many :exchange_rates, as: :selling_rates, foreign_key: :selling_currency_id, dependent: :destroy
end
