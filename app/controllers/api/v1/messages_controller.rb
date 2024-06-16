# frozen_string_literal: true

class Api::V1::MessagesController < Api::V1::ApplicationController
  expose :messages, -> { Message.includes(:user).by_event(params[:event_id]) }
  expose :user, -> { current_user }
  expose :message, -> { user.messages.build(message_params.merge!({event_id: params[:event_id]})) }

  def index
    render 'messages/index', status: :ok
  end

  def create
    if message.save
      add_user_to_event(user, message)
      render 'messages/show', status: :created
    else
      render json: { errors: message.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def add_user_to_event(user, message)
    user.events << message.event unless user.events.include?(message.event)
  end

  def message_params
    params.require(:message).permit(:content)
  end
end
