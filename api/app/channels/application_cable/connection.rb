module ApplicationCable
  class Connection < ActionCable::Connection::Base

    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private

    def find_verified_user

      begin

        header_array = request.headers[:HTTP_SEC_WEBSOCKET_PROTOCOL].split(',')

        token = header_array[header_array.length - 1]

        payload = JWT.decode(
          token.strip,
          Rails.application.credentials.secret_key_base
        )&.first

        @user ||= User.find_by_id payload['id']
      rescue
        reject_unauthorized_connection
      end
    end
  end
end
