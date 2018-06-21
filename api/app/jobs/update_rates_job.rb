require 'open-uri'
require 'json'

class UpdateRatesJob < ApplicationJob

  queue_as :default

  after_perform :broadcast_updates, :re_enqueue

  API_PROTOCOL = 'https'
  API_DOMAIN = 'apiv2.bitcoinaverage.com'
  API_PATH = 'indices/global/ticker/short'

  def perform()

    puts "UpdateRatesJob perform"

    fiat_list = ExchangeRate.all.map { |exc| exc.selling_currency.symbol } .join(',')

    query = "crypto=BTC&fiat=#{fiat_list}"

    response = open("#{API_PROTOCOL}://#{API_DOMAIN}/#{API_PATH}?#{query}").read

    rates = JSON.parse(response)

    rates.each do |key, val|

      symbol = key.remove "BTC"
      rate = val['last']

      fiat = Currency.find_by symbol: symbol, currency_type: 'fiat'

      ExchangeRate.where(selling_currency: fiat).update rate: rate
    end
  end

  private

  def broadcast_updates

    ExchangeRate.user_rates.each do |user_id, rates|
      ActionCable.server.broadcast "rates_user_#{user_id}", rates
    end
  end

  def re_enqueue
    self.class.set(wait: 1.minute).perform_later
  end
end
