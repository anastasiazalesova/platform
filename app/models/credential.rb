class Credential < ApplicationRecord
  validates :login, presence: true
  validates :login, uniqueness: true
  validates :login, length: { minimum: 4 }
end
