class Event < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :messages

  validates_presence_of :name, :location, :start_at

  default_scope { order(created_at: :desc) }

  scope :by_user, ->(arg) { joins(:users).where(users: { id: arg }) if arg.present? }

  scope :by_start_date, ->(arg) { Event.where(start_at: Date.parse(arg).all_day) if arg.present? }
end
