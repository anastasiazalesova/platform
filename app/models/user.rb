class User < ApplicationRecord
  belongs_to :role
  belongs_to :credential
  has_many :link_user_group
  has_many :group, :through => :link_user_group
end
