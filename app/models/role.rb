class Role < ApplicationRecord
	has_many :link_role_rights
	has_many :rights, :through => :link_role_rights
end
