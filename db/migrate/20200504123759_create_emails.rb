class CreateEmails < ActiveRecord::Migration[5.2]
  def change
    create_table :emails do |t|
      t.string :title
      t.text :body
      t.references :supplier, foreign_key: { to_table: 'users' }
      t.references :consumer, foreign_key: { to_table: 'users' }
      t.boolean :new

      t.timestamps
    end
  end
end
