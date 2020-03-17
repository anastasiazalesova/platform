class Right < ApplicationRecord
	has_many :link_role_right
	has_many :role, :through => :link_role_right
end
