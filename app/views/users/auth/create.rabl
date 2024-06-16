# frozen_string_literal: true

object matched_user

attributes :id, :full_name, :email

node :jwt, if: locals[:jwt].present? do
  locals[:jwt]
end
