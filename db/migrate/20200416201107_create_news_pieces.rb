class CreateNewsPieces < ActiveRecord::Migration[5.2]
  def change
    create_table :news_pieces do |t|
      t.text :title
      t.text :description
      t.timestamp :time

      t.timestamps
    end
  end
end
