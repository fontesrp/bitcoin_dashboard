class ExchangeRate < ApplicationRecord

  belongs_to :buying_currency, class_name: 'Currency'
  belongs_to :selling_currency, class_name: 'Currency'

  validates :rate, presence: true, numericality: { greater_than: 0.0 }

  RATE_EXISTS_MSG = 'Rate already exists'

  validates :buying_currency_id, uniqueness: { scope: :selling_currency_id, message: RATE_EXISTS_MSG }
  validates :selling_currency_id, uniqueness: { scope: :buying_currency_id, message: RATE_EXISTS_MSG }

  def watching_users

    arr = buying_currency.users&.map { |u| u }

    arr&.concat(selling_currency.users.map { |u| u })
  end

  def shown_props

    props = attributes.extract! 'id', 'buying_currency_id', 'selling_currency_id', 'rate'

    props.merge({
      'buying_currency_symbol' => buying_currency.symbol,
      'selling_currency_symbol' => selling_currency.symbol
    })
  end

  def self.user_rates

    users = {}

    self.all.each do |exc|

      props = exc.shown_props

      exc.watching_users&.each { |user|
        users[user.id] ||= []
        users[user.id] << props
      }
    end

    users
  end
end
