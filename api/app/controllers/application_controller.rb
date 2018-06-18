class ApplicationController < ActionController::API

  private

  def authenticate_user!
    head :unauthorized unless current_user.present?
  end

  def current_user

    token = request.headers['AUTHORIZATION']

    begin

      payload = JWT.decode(
        token,
        Rails.application.credentials.secret_key_base
      )&.first

      User.find_by_id payload['id']

    rescue JWT::DecodeError => error
      nil
    end
  end
end
