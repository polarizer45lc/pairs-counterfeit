class Region < ApplicationRecord

  has_many :users
  enum region: %i(日本 海外)

end
