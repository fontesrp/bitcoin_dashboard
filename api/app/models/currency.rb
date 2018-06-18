class Currency < ApplicationRecord

  has_many :user_currencies, dependent: :destroy
  has_many :users, through: :user_currencies

  has_many :buying_rates, class_name: 'ExchangeRate', foreign_key: :buying_currency_id, dependent: :destroy
  has_many :selling_rates, class_name: 'ExchangeRate', foreign_key: :selling_currency_id, dependent: :destroy

  validates :symbol, presence: true, uniqueness: true
  validates :currency_type, presence: true
end
