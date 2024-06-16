# frozen_string_literal: true

class Api::V1::EventsController < Api::V1::ApplicationController
  expose :events, -> { Event.includes(:users).by_start_date(params[:start_date]).by_user(params[:user_id]) }
  expose :user, -> { current_user }
  expose :event

  def index
    render 'events/index', status: :ok
  end

  def show
    return head :not_found if event.blank?

    render 'events/show', status: :ok
  end

  def create
    if event.save
      user.events << event
      render 'events/show', status: :created
    else
      render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    return head :not_found if event.blank?

    if event.update(event_params)
      render 'events/show', status: :ok
    else
      render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    return head :not_found if event.blank?

    head :ok if user.events.delete(event)
  end

  private

  def event_params
    params.require(:event).permit(:name, :description, :location, :start_at)
  end
end
