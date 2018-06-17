class User < ApplicationRecord

  has_secure_password

  has_many :user_currencies, dependent: :destroy
  has_many :currencies, through: :user_currencies
end
