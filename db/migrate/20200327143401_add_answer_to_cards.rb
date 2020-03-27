class AddAnswerToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :answer, :text
  end
end
