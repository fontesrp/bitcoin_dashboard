class RatesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "rates_user_#{current_user.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
