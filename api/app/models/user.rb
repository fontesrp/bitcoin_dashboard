class User < ApplicationRecord

  has_secure_password

  has_many :user_currencies, dependent: :destroy
  has_many :currencies, through: :user_currencies

  validates :first_name, :last_name, presence: true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX

  def full_name
    "#{first_name} #{last_name}".strip.titleize
  end

  def rates_watched

    exc = currencies&.map { |curr| curr.buying_rates.map(&:shown_props) }

    exc&.concat(currencies&.map { |curr| curr.selling_rates.map(&:shown_props) })

    exc&.flatten
  end
end
