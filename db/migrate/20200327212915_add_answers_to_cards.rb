class AddAnswersToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :answer_1, :string
    add_column :cards, :answer_2, :string
    add_column :cards, :answer_3, :string
    add_column :cards, :answer_4, :string
    add_column :cards, :correct_answer, :string
    remove_column :cards, :answer, :text
  end
end