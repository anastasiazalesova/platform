class CreateMarks < ActiveRecord::Migration[5.2]
  def change
    create_table :marks do |t|
      t.integer :value
      t.references :teacher, foreign_key: { to_table: 'users' }
      t.references :student, foreign_key: { to_table: 'users' }
      t.references :discipline, foreign_key: true
      t.timestamp :date

      t.timestamps
    end
  end
end
