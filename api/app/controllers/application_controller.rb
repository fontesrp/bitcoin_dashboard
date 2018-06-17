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
        Rails.application.secrets.secret_key_base
      )&.first

      if Time.at(payload['exp']) >= Time.now
        @user ||= User.find_by_id payload['id']
      else
        nil
      end

    rescue JWT::DecodeError => error
      nil
    end
  end
end
