# frozen_string_literal: true

class Api::V1::UsersController < Api::V1::ApplicationController
  skip_before_action :authenticate_user
  expose :user, -> { User.new(create_params) }

  def create
    return render json: { errors: user.errors.full_messages }, status: :bad_request unless user.save

    cookies.signed[:jwt] = {
      value: generate_token,
      httponly: true,
      expires: 14.days.from_now
    }

    render 'user/auth/show', status: :created
  end

  private

  def generate_token
    JsonWebToken.encode(user_id: user.id)
  end

  def create_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
