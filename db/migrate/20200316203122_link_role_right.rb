class LinkRoleRight < ActiveRecord::Migration[5.2]
  def change
  	create_table :link_role_rights do |t|
  		t.references :role, foreign_key: true
  		t.references :right, foreign_key: true
  	end
  end
end
