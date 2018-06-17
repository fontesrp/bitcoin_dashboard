class ExchangeRate < ApplicationRecord
  belongs_to :buying_currency, class_name: 'Currency'
  belongs_to :selling_currency, class_name: 'Currency'
end
