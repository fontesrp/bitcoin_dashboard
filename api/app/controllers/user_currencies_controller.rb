class UserCurrenciesController < ApplicationController

  before_action :authenticate_user!
  before_action :find_user, :authorize_user!, except: :destroy

  def index

    user_currencies = @user.user_currencies.map { |uc|
      {
        id: uc.id,
        currency: uc.currency.attributes.extract!('id', 'symbol', 'currency_type')
      }
    }

    render json: user_currencies
  end

  def create

    currency = Currency.find_by id: params[:currency][:id]

    user_currency = UserCurrency.new user: @user, currency: currency

    if user_currency.save
      res = { id: user_currency.id }
    else
      res = { error: user_currency.errors.full_messages }
    end

    render json: res
  end

  def destroy

    user_currency = UserCurrency.find_by id: params[:id]

    if user_currency.present?
      user_currency.destroy
      res = { success: true }
    else
      res = { error: 'not found' }
    end

    render json: res
  end

  private

  def find_user
    @user = User.find_by id: params[:user_id]
  end

  def authorize_user!
    head :unauthorized unless current_user == @user
  end
end
