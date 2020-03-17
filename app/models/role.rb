class Role < ApplicationRecord
	has_many :link_role_right
	has_many :right, :through => :link_role_right
end
