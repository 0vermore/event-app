# frozen_string_literal: true

attributes :id, :name, :description, :location

node :start_at do |object|
  object.start_at&.strftime("%H:%M %d/%m/%Y")
end

child users: :members do
  attributes :id, :full_name
end
