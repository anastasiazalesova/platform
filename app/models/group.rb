class Group < ApplicationRecord
  has_many :link_user_group
  has_many :user, :through => :link_user_group
end
