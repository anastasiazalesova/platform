class CreateMods < ActiveRecord::Migration[5.2]
  def change
    create_table :mods do |t|
      t.string :name
      t.references :course, foreign_key: true

      t.timestamps
    end
  end
end
