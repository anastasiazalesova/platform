class CreateCredentials < ActiveRecord::Migration[5.2]
  def change
    create_table :credentials do |t|
      t.string :login
      t.string :password

      t.timestamps
    end
  end
end
