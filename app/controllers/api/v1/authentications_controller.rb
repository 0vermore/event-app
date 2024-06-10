# frozen_string_literal: true

class Api::V1::AuthenticationsController < Api::V1::ApplicationController
  skip_before_action :authenticate_user, only: :create
  expose :matched_user, -> { User.find_by(email: params[:email]) }
  expose :user, -> { current_user }

  def show
    render 'user/auth/show', status: :ok
  end

  def create
    if matched_user&.authenticate(params[:password])
      cookies.signed[:jwt] = {
        value: generate_token,
        httponly: true,
        expires: 14.days.from_now
      }

      render 'user/auth/create', status: :created
    else
      render json: { errors: 'Invalid credentials' }, status: :not_found
    end
  end

  def destroy
    cookies.delete(:jwt)
    render json: {}, status: :no_content
  end

  private

  def generate_token
    JsonWebToken.encode(user_id: matched_user.id)
  end
end
