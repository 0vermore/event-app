class Api::V1::ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authenticate_user

  private

  def authenticate_user
    @jwt = cookies.signed[:jwt]
    @jwt.present? ? current_user : unauthorized
  end

  def current_user
    @current_user ||= fetch_current_user
  end

  def fetch_current_user
    decoded_jwt = decode_authorization
    User.find_by(id: decoded_jwt[:user_id])
  end

  def decode_authorization
    JsonWebToken.decode(@jwt)
  end

  def unauthorized
    render json: { errors: 'Unauthorized' }, status: :unauthorized
  end
end
