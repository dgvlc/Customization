class Car < ApplicationRecord
  has_and_belongs_to_many :upgrades
  belongs_to :user
end
