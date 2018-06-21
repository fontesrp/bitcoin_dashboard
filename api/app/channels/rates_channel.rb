class RatesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "rates_user_#{current_user.id}"
  end

  def receive(params)

    if params['message'] == 'get_user_rates'

      ActionCable.server.broadcast(
        "rates_user_#{current_user.id}",
        current_user.rates_watched
      )

    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
