class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :subject
      t.string :detail

      t.timestamps
    end
  end
end
