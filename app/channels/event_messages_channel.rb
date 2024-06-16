# frozen_string_literal: true

class EventMessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "event_channel_#{params[:event_id]}"
  end

  def unsubscribed; end
end
