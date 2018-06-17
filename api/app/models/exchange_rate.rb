class ExchangeRate < ApplicationRecord
  belongs_to :buying_currency, class_name: :currency
  belongs_to :selling_currency, class_name: :currency
end
