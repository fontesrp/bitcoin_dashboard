class UserCurrency < ApplicationRecord
  belongs_to :user
  belongs_to :currency
end
