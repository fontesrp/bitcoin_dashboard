class UsersController < ApplicationController

  VALID_PARAMS = [:first_name, :last_name, :email, :password, :password_confirmation]

  before_action :authenticate_user!, :find_user, :authorize!, only: [:show, :update]
  before_action :validate_fields!, only: :create

  def index

    user = User.find_by email: params[:email]

    if user.present?
      res = { full_name: user.full_name }
    else
      res = { error: 'not found' }
    end

    render json: res
  end

  def create

    user = User.new user_params

    if user.save
      res = { id: user.id }
    else
      res = { errors: user.errors.full_messages }
    end

    render json: res
  end

  def show
    render json: @user.attributes.except!('password_digest').merge!({ full_name: @user.full_name })
  end

  def update

    if @user.update user_params
      res = { id: @user.id }
    else
      res = { errors: @user.errors.full_messages }
    end

    render json: res
  end

  private

  def validate_fields!
    head :bad_request if VALID_PARAMS.any? { |prm| !params.key? prm }
  end

  def find_user
    @user = User.find_by id: params[:id]
  end

  def authorize!
    head :unauthorized unless current_user == @user
  end

  def user_params
    params.permit *VALID_PARAMS
  end
end
