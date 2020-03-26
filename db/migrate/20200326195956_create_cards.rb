class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :points
      t.boolean :flipped
      t.belongs_to :catergory, null: false, foreign_key: true

      t.timestamps
    end
  end
end
