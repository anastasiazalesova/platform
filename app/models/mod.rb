class Mod < ApplicationRecord
  has_many :mods
  belongs_to :course
end
