class Mod < ApplicationRecord
  has_many :disciplines
  belongs_to :course
end
