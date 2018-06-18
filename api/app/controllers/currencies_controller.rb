class CurrenciesController < ApplicationController

  before_action :authenticate_user!

  def index
    render json: Currency.select(:id, :symbol, :currency_type)
  end
end
