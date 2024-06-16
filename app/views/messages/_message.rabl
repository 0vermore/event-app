# frozen_string_literal: true

attributes :id, :user_id, :content

node :sender do |object|
  object.user.full_name
end
