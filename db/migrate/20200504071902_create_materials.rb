class CreateMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :materials do |t|
      t.string :name
      t.string :url
      t.references :discipline, foreign_key: true

      t.timestamps
    end
  end
end
