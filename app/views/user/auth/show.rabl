# frozen_string_literal: true

object user

attributes :id, :first_name, :last_name, :email

node :jwt, if: locals[:jwt].present? do
  locals[:jwt]
end
