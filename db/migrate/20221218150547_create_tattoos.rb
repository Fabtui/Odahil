class CreateTattoos < ActiveRecord::Migration[7.0]
  def change
    create_table :tattoos do |t|
      t.string :name
      t.text :description
      t.date :date
      t.string :customer
      t.boolean :on_home_slider

      t.timestamps
    end
  end
end
