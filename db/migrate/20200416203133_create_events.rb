class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.text :title
      t.text :description
      t.integer :tag
      t.string :imageUrl

      t.timestamps
    end
  end
end
