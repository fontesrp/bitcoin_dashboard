class ExchangeRate < ApplicationRecord

  belongs_to :buying_currency, class_name: 'Currency'
  belongs_to :selling_currency, class_name: 'Currency'

  validates :rate, presence: true, numericality: { greater_than: 0.0 }

  RATE_EXISTS_MSG = 'Rate already exists'

  validates :buying_currency_id, uniqueness: { scope: :selling_currency_id, message: RATE_EXISTS_MSG }
  validates :selling_currency_id, uniqueness: { scope: :buying_currency_id, message: RATE_EXISTS_MSG }
end
