class User < ApplicationRecord
  has_secure_password

  has_and_belongs_to_many :events
  has_many :messages

  validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }

  def full_name
    "#{first_name} #{last_name}"
  end
end
