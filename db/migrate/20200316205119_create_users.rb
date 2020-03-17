class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :firstName
      t.string :lastName
      t.references :role, foreign_key: true
      t.references :credential, foreign_key: true

      t.timestamps
    end
  end
end
