class Right < ApplicationRecord
	has_many :link_role_rights
	has_many :roles, :through => :link_role_rights
end
