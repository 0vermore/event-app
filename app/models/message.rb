class Message < ApplicationRecord
  belongs_to :user
  belongs_to :event

  after_create :broadcast_event_message

  validates_presence_of :content

  default_scope { order(created_at: :desc) }

  scope :by_event, ->(arg) { where(event_id: arg) if arg.present? }

  private

  def broadcast_event_message
    serialized = Rabl.render(self, 'messages/message', format: :hash)

    ActionCable.server.broadcast("event_channel_#{event_id}", serialized)
  end
end
