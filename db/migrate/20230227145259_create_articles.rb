class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :name
      t.text :detail
      t.integer :quantity
      t.float :price

      t.timestamps
    end
  end
end
