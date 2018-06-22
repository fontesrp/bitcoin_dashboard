class ExchangeRatesController < ApplicationController

  before_action :set_user

  def index
    render json: {
      rates: @user.rates_watched,
      updated_at: DateTime.now.iso8601 + 'Z'
    }
  end

  private

  def set_user
    if current_user.present?
      @user = current_user
    else
      @user = User.find_by email: 'guest@whatever.com'
    end
  end
end
